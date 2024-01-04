const express = require("express")
const pool = require('./db')

const app = express()
app.use(express.json())

const {getUsers, getUserById, createUser, deleteUser, updateUser} = require('./queries')

app.get('/users', getUsers)

app.get('/users/:id', getUserById)

app.post('/users', createUser)

app.delete('/users/:id', deleteUser)

app.put('/users/:id', updateUser)

module.exports = app;