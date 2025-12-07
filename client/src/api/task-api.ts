import type { TaskFormValues } from "@/types/types";
import { post,get } from "./requester";

const baseUrl = 'http://localhost:3000';

export const createTask = async (task:TaskFormValues) => {
    const result = await post(`${baseUrl}/tasks/add-task`,task);
    return result
}

export const getTasks = async()=>{
    const result = await get(`${baseUrl}/tasks`);
    return result
}