import { useContext } from "react";
import {TaskContext} from '../context/TaskContext';
import type { Task } from "@/types/types";

export const useTasks = () =>{
    const context = useContext(TaskContext);
    if(context === undefined){
        throw new Error('useTasks must be within a taskProvider')
    }
    return context
}

export const useTaskType = ({sectionType,tasks}:{sectionType:string,tasks:Task[]}) =>{
    const tasksType = tasks.filter(task => task.type === sectionType);
    return {tasksType}
}

export const useTaskPriority = ({sectionPriority,tasks}:{sectionPriority:string,tasks:Task[]}) =>{
    const tasksPriority = tasks.filter(task => task.priorityLevel === sectionPriority);
    return {tasksPriority}
}