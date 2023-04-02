const express = require('express');
const app = express();
const bodyParser = require('body-parser')
var jsonParser = bodyParser.json()

let users = [
    {id: 1, name: 'John' },
    {id: 2, name: 'Jane' },
    {id: 3, name: 'Rikky' },
]

// Responds (gets) with all users as a json object in the browser
// http://localhost:3000/users
app.get('/users', (req, res) => {
    res.json(users);
    console.log('User is usering');
});

// Responds (gets) with a specific user
// http://localhost:3000/users/2
app.get('/users/:id', (req, res) => {
    var id = +req.params.id
    console.log(id);
    var user = users.find(u => u.id === id);
    console.log(user);
    res.send(user);
});

// Posts or adds a user
// In postman use select body, raw and set to json input
// http://localhost:3000/users/
// {"id": 4, "name": "Ned" }
app.post('/users', jsonParser, (req, res) => {
    const newUser = req.body;
    users.push(newUser);
    res.status(201).json(newUser);
});

// Puts different information in an entry
// In postman use select body, raw and set to json input
// http://localhost:3000/users/4
// {"id": 3, "name": "Nicole" }
app.put('/users/:id', jsonParser, (req, res) => {
    const userId = parseInt(req.params.id);
    const updatedUser = req.body;
    users = users.map(user => user.id === userId ? updatedUser : user);
    res.status(200).json(updatedUser);
})

// Deletes a record
// In postman use select body, raw and set to json input
// http://localhost:3000/users/4
app.delete('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    users = users.filter(user => user.id !== userId);
    res.status(204).send()
})

// Makes the app start
app.listen(3000, () => {
    console.log('Server is listening on port 3000')
}) 


