import Task from "../models/Task.mjs"

const getTasks = async(req, res) => {
    const tasks = await Task.find({})
    res.send(tasks)
 }

const createTask = async (req, res) => { 
    try{
        const data = req.body
        const task = new Task(data)
        await task.save()
        res.send(task)
    }
    catch(e){
        res.status(400).send(e)
    }
}

const updateTask = async (req, res) => {
    try { 
        await Task.findByIdAndUpdate(req.params.id, req.body)
        res.send('Updated')
    }
    catch(e){
        res.status(400).send(e)
    }

 }

const deleteTask = async (req, res) => {
    try { 
        await Task.findByIdAndDelete(req.params.id)
        res.send('Deleted')
    }
    catch(e){
        res.status(400).send(e)
    }

 }

export { getTasks, createTask, updateTask, deleteTask }