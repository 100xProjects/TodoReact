import mongoose from 'mongoose'

const connection = mongoose.createConnection('mongodb+srv://101xp:27tk7FrojC9bPdBu@todo-app.v1knjmf.mongodb.net/')

const mock_todo = {
    "title": "Test",
    "description": "String",
    "completed": "Boolean",
    "deadline": "Date",
    "priority": "String",
    "category": "String",
    "order": "Number",
    "createdAt": "Date"
    }

export {mock_todo,connection}