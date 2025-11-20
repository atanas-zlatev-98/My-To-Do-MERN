const {TaskModel} = require('../models/taskModel');

async function createTask(task) {
   
    const newTask = new TaskModel({
        title:task.title,
        description:task.description,
        priorityLevel:task.priorityLevel,
        type:task.type,
        finishBefore:task.finishBefore
    })

    await newTask.save();

    return newTask
}

module.exports = {
    createTask
}