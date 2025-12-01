const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/Tasks");
        console.log("database connected");

    } catch (error) {
        console.log("error in connecting to database:", error.message);

    }

}

module.exports = connectDB