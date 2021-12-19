# server setting - Docker is required to run this server

1- first go to /server

2- then run "docker compose up --build"

3- his "ifconfig | grep inet" in your terminal then get your public id

# app setting 

1- go to src/constants/urls.ts

2- change the IP "const APP_URL = 'http://192.168.30.46:8080/';" to the IP you got from steps before

3- run "yarn install"

4- if you're in macos run "cd ios && pod install && cd .."

5- run "yarn start"

6- run "yarn run ios" or "yarn run android"
