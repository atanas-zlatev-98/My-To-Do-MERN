const {Router} = require('express');
const { createTask, getTasks, getSingleTask, completeTask, removeTask } = require('../services/taskService');

const taskController = Router();

taskController.post('/tasks/add-task', async(req,res)=>{
    const {title,description,priorityLevel,type,finishBefore} = req.body;

    const newTask = {
        title,
        description,
        priorityLevel,
        type,
        finishBefore
    }

    try{
        const response = await createTask(newTask);

        if(response){
            res.status(201).json(response);
        }

    }catch(err){
        res.status(400).json({message:err.message})
    }
    
})

taskController.get(`/tasks`,async(req,res)=>{

    try{
        const response = await getTasks();

        if(response) {
            res.status(200).json(response);
        }

    }catch(err){
        res.status(400).json({message:err.message})
    }
})

taskController.get(`/task/:taskId`,async (req,res)=>{
    const taskId = req.params.taskId;

    try{
        const response = await getSingleTask(taskId);
        if(response){
            res.status(200).json(response)
        }
    }catch(err){
        res.status(400).json({message:err.message})
    }
})
taskController.patch(`/task/:taskId`, async(req,res)=>{
    const taskId = req.params.taskId;

    try{
        const response = await completeTask(taskId);
        if(response){
            res.status(200).json(response);
        }
    }catch(err){
        res.status(400).json({message:err.message});
    }
})

taskController.delete(`/task/:taskId`,async(req,res)=>{
    const taskId = req.params.taskId;

    try{
        const response = await removeTask(taskId);
        if(response){
            res.status(200).json(response)
        }
    }catch(err){
        res.status(400).json({message:err.message})
    }
})
module.exports = {
    taskController
}