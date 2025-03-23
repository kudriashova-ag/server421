import express from 'express'
import dbConnection from './db/db.mjs'
import cors from 'cors'
import { createTask, deleteTask, getTasks, updateTask } from './controllers/taskController.mjs'
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



const app = express()
const port = 5000

dbConnection.on('connected', () => console.log('db connected'));
dbConnection.on('error', () => console.log('db connected error'));

app.use(express.json())
app.use(cors())
app.use(express.static('build'))


app.get('/api/tasks', getTasks)
app.post('/api/tasks', createTask)
app.put('/api/tasks/:id', updateTask)
app.delete('/api/tasks/:id', deleteTask)


app.get('*', (req, res) => {
    res.sendFile(__dirname + '/build/index.html')
})


app.listen(port, () => {
    console.log(`Example app listening http://127.0.0.1:5000/`)
})



