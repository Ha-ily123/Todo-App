const express = require('express')
const controllers = require('./controller')

const routes = express.Router()

routes.post('/signup', controllers.signUp)
routes.post('/signin', controllers.signin)
routes.post('/addTask', controllers.addTask)
routes.get('/getTasks', controllers.getTasks)
routes.put("/editTask/:id", controllers.editTask)
routes.delete("/deleteTask/:id", controllers.deleteTask)
routes.get("/getOneTask/:id", controllers.getOneTask)


module.exports = routes