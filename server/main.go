package main

import (
	"context"
	"fmt"
	"log"
	"math/rand"
	"os"
	"strings"
	"time"

	"github.com/joho/godotenv"
	"github.com/kataras/iris/v12"
	"github.com/kataras/iris/v12/middleware/logger"
	"github.com/kataras/iris/v12/middleware/recover"
	"github.com/twinj/uuid"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

type Task struct {
	ID    string `bson:"id" json:"id"`
	Title string `bson:"title" json:"title"`
	Date  string `bson:"date" json:"date"`
}

type Todo struct {
	ID          string `bson:"id" json:"id"`
	Task        string `bson:"task" json:"task"`
	Description string `bson:"description" json:"description"`
	Done        bool   `bson:"done" json:"done"`
}

const (
	TASK = "TASK"
	TODO = "TODO"
)

func UUID() string {
	return strings.Split(uuid.NewV4().String(), "-")[rand.Intn(5)]
}

func Response(c iris.Context, status int, data interface{}) {
	c.StatusCode(status)
	c.JSON(iris.Map{"data": data})
}

func init() {
	if err := godotenv.Load(); err != nil {
		log.Fatal(err.Error())
	}
}

func main() {
	URL := fmt.Sprintf("%s://%s:%s/?connect=direct", os.Getenv("DB_DRIVER"), os.Getenv("DB_HOST"), os.Getenv("DB_PORT"))
	ctx, cancel := context.WithTimeout(context.Background(), time.Second*30)
	client, _ := mongo.Connect(ctx, options.Client().ApplyURI(URL))
	db := client.Database(os.Getenv("DB_NAME"))
	taskCollection := db.Collection(TASK)
	todoCollection := db.Collection(TODO)
	defer cancel()
	defer db.Client().Disconnect(ctx)

	db_context := context.Background()

	app := iris.New()
	app.Logger().SetLevel("debug")
	app.Use(logger.New())
	app.Use(recover.New())

	app.Get("/task", func(c iris.Context) {
		var allTasks []Task
		filter := bson.M{}
		cursor, err := taskCollection.Find(db_context, filter, nil)
		if err != nil {
			Response(c, iris.StatusNotFound, nil)
		}
		defer cursor.Close(db_context)
		err = cursor.All(db_context, &allTasks)
		if err != nil {
			Response(c, iris.StatusNotFound, nil)
		}
		Response(c, iris.StatusOK, allTasks)
	})
	app.Post("/task", func(c iris.Context) {
		var task Task
		c.ReadJSON(&task)
		task.ID = UUID()
		_, err := taskCollection.InsertOne(db_context, &task)
		if err != nil {
			Response(c, iris.StatusBadRequest, nil)
		}
		Response(c, iris.StatusCreated, task)
	})

	app.Get("/task/todo/{task:string}", func(c iris.Context) {
		var allTodo []Todo
		task := c.Params().GetString("task")
		filter := bson.M{
			"task": task,
		}
		cursor, err := todoCollection.Find(db_context, filter, nil)
		if err != nil {
			Response(c, iris.StatusNotFound, nil)
		}
		defer cursor.Close(db_context)
		err = cursor.All(db_context, &allTodo)
		if err != nil {
			Response(c, iris.StatusNotFound, nil)
		}
		Response(c, iris.StatusOK, allTodo)
	})
	app.Post("/task/todo", func(c iris.Context) {
		var todo Todo
		c.ReadJSON(&todo)
		todo.ID = UUID()
		_, err := todoCollection.InsertOne(db_context, &todo)
		if err != nil {
			Response(c, iris.StatusBadRequest, nil)
		}
		Response(c, iris.StatusOK, todo)
	})
	app.Put("/task/todo", func(c iris.Context) {
		var todo Todo
		c.ReadJSON(&todo)
		filter := bson.M{"id": todo.ID}
		update := bson.M{"$set": todo}
		_, err := todoCollection.UpdateOne(db_context, filter, update)
		if err != nil {
			Response(c, iris.StatusBadRequest, nil)
		}
		Response(c, iris.StatusOK, todo)
	})

	app.Listen(":8080", iris.WithOptimizations)
}
