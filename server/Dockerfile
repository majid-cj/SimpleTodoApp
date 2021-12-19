FROM golang:alpine

RUN apk add --no-cache bash

RUN mkdir -p /app

WORKDIR /app

ADD . /app

EXPOSE 8080

RUN go mod tidy

RUN go get github.com/codegangsta/gin
