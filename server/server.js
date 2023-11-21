import express from 'express'
import bodyParser from 'body-parser'

import {addTodo, getTodo, updateTodo} from './services.js'

const app = express()
app.use(bodyParser.json())

app.get(['/','/login'], (req,res)=> res.status(200).send('Welcome to the App!!'))

app.get('/gettodo', getTodo)
app.post('/addtodo', addTodo)
app.put('/updatetodo', updateTodo)

app.listen(3000, ()=> console.log('TodoApp is running...'))