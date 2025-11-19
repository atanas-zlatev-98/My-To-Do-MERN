const {Router} = require('express');

const taskController = Router();

taskController.post('/tasks/add-task', async(req,res)=>{
    // TO-DO
})


module.exports = {
    taskController
}