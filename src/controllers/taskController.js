const {Router} = require('express');
const { createTask } = require('../services/taskService');

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


module.exports = {
    taskController
}