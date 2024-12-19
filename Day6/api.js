// Day 6: Building APIs with Express.js

// Introduction to Express.js:
What is Express.js, and why use it?
    Setting up an Express.js project.
    Handling HTTP methods: GET, POST, PUT, and DELETE.
Creating routes in Express.js.

Practical Task:

1) Set Up Express.js:

Install Express.js:

Create a file named apiServer.js and set up a basic Express.js server.


const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json()); 

app.listen(PORT, () => {
    console.log(Server running on http://localhost:${PORT});
});

2) Create REST API Endpoints:

    GET /users - Fetch a list of users.
    POST /users - Add a new user.
    PUT /users/:id - Update user details.
    DELETE /users/:id - Delete a user.

const users = [];

app.get('/users', (req, res) => {
    res.status(200).json(users);
});

app.post('/users', (req, res) => {
    const user = req.body;
    users.push(user);
    res.status(201).json({ message: 'User added', user });
});

app.put('/users/:id', (req, res) => {
    const { id } = req.params;
    const updatedUser = req.body;
    users[id] = updatedUser;
    res.status(200).json({ message: 'User updated', updatedUser });
});

app.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    users.splice(id, 1);
    res.status(200).json({ message: 'User deleted' });
});
3)Test the API:

Use Postman or cURL to test all the endpoints:
    GET - Fetch users.
    POST - Add a user by sending JSON data in the request body.
    PUT - Update user details by ID.
    DELETE - Remove a user by ID.


1.What is middleware in Express.js, and how is it used?
2.How do you handle route parameters in Express.js?
3.Modify the API to validate incoming data in the POST /users route (e.g., check that name and email fields are present).