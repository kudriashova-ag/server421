import express from 'express'
import dbConnection from './db/db.mjs'
import { createTask, deleteTask, getTasks, updateTask } from './controllers/taskController.mjs'
const app = express()
const port = 5000

dbConnection.on('connected', () => console.log('db connected'));
dbConnection.on('error', () => console.log('db connected error'));

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.get('/api/tasks', getTasks)
app.post('/api/tasks', createTask)
app.put('/api/tasks/:id', updateTask)
app.delete('/api/tasks/:id', deleteTask)



app.listen(port, () => {
    console.log(`Example app listening http://127.0.0.1:5000/`)
})



