# Graphql service for Musicify microservices
Task: https://github.com/AlreadyBored/nodejs-assignments/blob/main/assignments/graphql-service/assignment.md

## Preparing

1. Run MongoDB and create user:  
```
login: mongoadmin
password: secret
```  
  
For example, you can use Docker. Create docker-compose.yml and paste this code:  
```
version: "3.7"

services:
  mongodb:
    image: mongo:4.0-xenial
    ports:
      - 27888:27017
    environment:
      MONGO_INITDB_ROOT_USERNAME: mongoadmin
      MONGO_INITDB_ROOT_PASSWORD: secret
```  
And run `docker-compose up`.  

2. Clone repo (microservices): https://github.com/rolling-scopes-school/node-graphql-service  
Install it by Readme.md inside and run:
```
# all services watch
npm run run:all

# all services prod mode
npm run run:all:prod
```

# Installation

```
npm i
```
  
Copy `.env.example` to `.env` and setup PORT or use default.

## Run QraphQL service
  
#### Watch mode
```
npm run start:dev
```
   
#### Prod mode
```
npm run start:prod
```

## Create Queries
Open http://localhost:4000 and chose **Query your server**.  
After that you can send operations like this:  
```
mutation UserRegister {
  register(
    firstName: "first name",
    lastName: "last name",
    password: "118649qwe",
    email: "met9129@gmail.com",
    favouriteArtistIds: ["62aef8e2cbabce5a0bdc0a26"]
  ) {
    firstName
    lastName
    email
    password
    _id
  }
}
```
