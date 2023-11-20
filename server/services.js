import { mock_todo } from "./repository.js"

const getTodo = (req,res) => {
    res.status(200).send(`Received Todo!\n
    Title: ${mock_todo.title}
    Description: ${mock_todo.description}
    Completed: ${mock_todo.completed}
    Deadline: ${mock_todo.deadline}
    Priority: ${mock_todo.priority}
    Category: ${mock_todo.category}
    Order: ${mock_todo.order}
    Created At: ${mock_todo.createdAt}`)
}

const addTodo = (req,res) => {
    res.status(200).send(`Todo Added!\n
    Title: ${req.body.title}
    Description: ${req.body.description}
    Completed: ${req.body.completed}
    Deadline: ${req.body.deadline}
    Priority: ${req.body.priority}
    Category: ${req.body.category}
    Order: ${req.body.order}
    Created At: ${req.body.createdAt}`)
}

const updateTodo = (req,res) => {
    var keys = Object.keys(req.body)
    keys.map(k=>{mock_todo[k]=req.body[k]})

    res.status(200).send(`Todo Added!\n
    Title: ${mock_todo.title}
    Description: ${mock_todo.description}
    Completed: ${mock_todo.completed}
    Deadline: ${mock_todo.deadline}
    Priority: ${mock_todo.priority}
    Category: ${mock_todo.category}
    Order: ${mock_todo.order}
    Created At: ${mock_todo.createdAt}`)
}

export {getTodo, addTodo, updateTodo}