# Task Manager REST API

A backend Task Manager API built with Node.js, Express.js, MongoDB, and Mongoose. Supports full CRUD operations with pagination.

## Features

- Create Task
- Get All Tasks
- Get Single Task by ID
- Update Task
- Delete Task
- Pagination
- MongoDB Integration
- RESTful API Structure

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose

## Installation

1. Clone repository

git clone (https://github.com/taimourkhokhar/web-development-projects.git)

2. Install dependencies

npm install

3. Create .env file

db_link=your_mongodb_connection_string

4. Run server

node server.js

## API Endpoints

### Create Task
POST /tasks

### Get All Tasks
GET /tasks?page=1&limit=5

### Get Task By ID
GET /tasks/:id

### Update Task
PATCH /tasks/:id

### Delete Task
DELETE /tasks/:id

## Author

Taimour Iftikhar