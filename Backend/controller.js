const Task = require('./Schema/taskSchema')
const Signup = require('./Schema/signupSchema')
const bcrypt = require('bcrypt')
const { get } = require('mongoose')

const signUp = async (req, res) => {
    const { userName, email, password } = req.body
    try {
        let emailExist = await Signup.findOne({ email })

        if (emailExist) {
            return res.json({
                message: "An user with the same email already exist"
            })

        }
        const hashedPassword = await bcrypt.hash(password, 10)
        const newSignup = new Signup({
            userName,
            email,
            password: hashedPassword,
        })
        await newSignup.save()
        res.status(201).json({
            message: "Signed up successfully",
            data: newSignup
        })
    } catch (error) {
        res.json({
            message: "Error in signing up",
            error: error.message
        })
    }
}

const signin = async (req, res) => {
    const { email, password } = req.body
    try {
        let user = await Signup.findOne({ email })
        if (!user) {
            return res.json({
                message: "Their is no use exist with this emailID"
            })
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.json({
                message: "Incorrect password"
            })
        }

        return res.json({
            message: "Signed in successfully",
            success: true
        })


    } catch (error) {
        res.json({
            message: "Error in signin",
            error: error.message
        })
    }
}

const addTask = async (req, res) => {
    const { taskName, taskPriority, taskDeadline } = req.body
    try {
        const newTask = new Task({
            taskName,
            taskPriority,
            taskDeadline
        })
        await newTask.save()
        res.status(200).json({
            message: "Task saved successfully",
            data: newTask
        })

    } catch (error) {
        res.json({
            message: "Error in adding task",
            error: error.message
        })
    }
}

const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find()
        res.status(200).json({
            message: "Task details fetched successfully",
            data: tasks
        })
    } catch (error) {
        res.json({
            message: "Error in getting tasks",
            error: error.message
        })
    }
}


const editTask = async (req, res) => {
    const { taskName, taskDeadline, taskPriority } = req.body
    try {
        const updatedTask = await Task.findByIdAndUpdate(req.params.id, { taskName, taskDeadline, taskPriority }, { new: true })
        if (!updatedTask) {
            return res.json({
                message: "Task not found"
            })
        }
        res.status(200).json({
            message: "Task updated successfully",
            data: updatedTask
        })


    } catch (error) {
        res.json({
            message: "Error while updating task",
            error: error.message,
        })
    }
}

const deleteTask = async (req, res) => {
    try {
        const isDeleted = await Task.findByIdAndDelete(req.params.id)
        if (!isDeleted) {
            return res.json({
                message: "Task not found"
            })
        }
        res.status(200).json({
            message: "Task deleted successfully",
            data: isDeleted
        })
    } catch (error) {
        res.json({
            message: 'Error in deleting task',
            error: error.message
        })
    }
}
const getOneTask = async (req, res) => {
    try {
        const taskData = await Task.findById(req.params.id)

        res.json({
            message: "Data fetched successfully",
            data: taskData
        })
    } catch (error) {
        res.json({
            message: "Error in fetching detals",
            error: error.messagef
        })
    }
}





module.exports = {
    addTask,
    signUp,
    signin,
    getTasks,
    editTask,
    deleteTask,
    getOneTask
}