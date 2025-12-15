import type {Task} from "@/types/types";
import { post,get, patch, del, update } from "./requester";

const baseUrl = 'http://localhost:3000';

export const createTask = async (task:Task) => {
    const result = await post(`${baseUrl}/tasks/add-task`,task);
    return result
}

export const getTasks = async()=>{
    const result = await get(`${baseUrl}/tasks`);
    return result
}

export const getSingleTask = async (taskId:string) =>{
    const result = await get(`${baseUrl}/task/${taskId}`);
    return result
}

export const completeTask = async (taskId:string) =>{
    const result = await patch(`${baseUrl}/task/${taskId}`);
    return result;
}

export const removeTask = async(taskId:string) =>{
    const result = await del(`${baseUrl}/task/${taskId}`);
    return result;
}

export const updateTask = async(taskId:string,task:Task) =>{
    const result = await update(`${baseUrl}/task/${taskId}`,task);
    return result;
}