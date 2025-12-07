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

async function getTasks() {
    const tasks = await TaskModel.find();

    if(!tasks || tasks.lenght <=0){
        throw new Error('No Tasks Found!')
    }

    return tasks
}

module.exports = {
    createTask,getTasks
}
