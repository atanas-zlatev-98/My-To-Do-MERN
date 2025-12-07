import { useContext } from "react";
import {TaskContext} from '../context/TaskContext';
import type { Task } from "@/types/types";
import { currentDate } from "@/components/constants/constants";

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

export const useTaskSection = ({sectionTasks,tasks}:{sectionTasks:string,tasks:Task[]}) =>{

    let sections;

    if(sectionTasks === 'Upcoming'){
        sections = tasks.filter(tasks => tasks.finishBefore.split('T')[0] > currentDate && tasks.isCompleted !== true);
    }

    if(sectionTasks === 'Today'){
         sections = tasks.filter(tasks => tasks.finishBefore.split('T')[0] === currentDate && tasks.isCompleted !== true);
    }

    if(sectionTasks === 'Forgotten'){
         sections = tasks.filter(tasks => tasks.finishBefore.split('T')[0] < currentDate && tasks.isCompleted !== true);
    }

    if(sectionTasks === 'Completed'){
        sections = tasks.filter(tasks => tasks.isCompleted === true);
    }

    return {sections}
}