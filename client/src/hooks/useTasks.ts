import { useContext } from "react";
import {TaskContext} from '../context/TaskContext';

export const useTasks = () =>{
    const context = useContext(TaskContext);
    if(context === undefined){
        throw new Error('useTasks must be within a taskProvider')
    }
    return context
}