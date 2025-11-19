const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required: true,
    },
    level:{
        type:String,
        enum: ['Critical','High','Medium','Low'],
        default: 'Medium',
        required:true,
    },
    isCompleted: {
        type:Boolean,
        default: false,
        required:true
    },
    type:{
        type:String,
        enum:['Personal','Work','Hobby'],
        default:'Work',
        required:true
    },
    finishBefore: {
        type:Date,
        required:true
    }

},{
    timestamps:true
})

const TaskModel = new mongoose.model('Tasks',taskSchema);

module.exports = {
    TaskModel
}