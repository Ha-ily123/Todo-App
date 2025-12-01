const express = require('express')
const route = require('./routes')
const connectDB = require('./db')
const cors = require('cors')
connectDB()

const app = express()
app.use(cors())
app.use(express.json())
app.use("/", route)
app.listen(3000, () => {
    console.log("Server running of port 3000");
})
