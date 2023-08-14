# TypeScript CRUD using Express, JSON Server, and Axios

This project demonstrates a CRUD (Create, Read, Update, Delete) API built using Express.js with TypeScript. The data is persisted using JSON Server, and Axios is used for HTTP requests.

## Prerequisites

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) 

## Install the necessary dependencies:

```yarn install or npm install```

## API Endpoints

#### With postman you can make api calls for testing

### Create an Item:

#### Method: POST
- URL: http://localhost:3000/items
- Body: { "name": "Sample Item Name" }

#### Get All Items:

#### Method: GET
- URL: http://localhost:3000/items
- Update an Item:

#### Method: PUT
- URL: http://localhost:3000/items/<item-id>
- Body: { "name": "Updated Item Name" } 
- Delete an Item:

#### Method: DELETE
URL: http://localhost:3000/items/<item-id>


## Technologies Used
- Node
- Express.js
- TypeScript
- JSON Server
- Axios
- uuid
