require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')

const app = express()

const connectDB = require('./db/connect')

app.use(express.json())

const PORT = process.env.PORT || 3000

const start = async () => {
    try {
        // connect to DB
        mongoose.set("strictQuery", false);
        await connectDB(process.env.MONGO_URI)
        app.listen(PORT, console.log(`server is listening on ${PORT}`))
    } catch (error) {
        console.log(error);
    }
}

start()