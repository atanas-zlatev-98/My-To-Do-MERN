import { getTasks } from "@/api/task-api";
import type { Task } from "@/types/types";
import { useEffect, useState } from "react";
import { TaskContext } from "./TaskContext";

export const TasksProvider = ({children}:{children:React.ReactNode}) =>{

    const [tasks,setTasks] = useState<Task[]>([]);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState<string | null>(null);


    const fetchTasks = async()=>{
        setError(null);
        
        try{
            const response = await getTasks();
            if(!response) {
                throw new Error('Failed to fetch tasks!')
            }else {
                setTasks(response)
                setLoading(true)
            }
        }catch(err){
            if(err instanceof Error){
                setError(err.message)
            }else {
                console.log(err);
            }
        }
    }

    useEffect(()=>{
        fetchTasks();
    },[])

    return(
        <TaskContext.Provider value={{tasks,loading,error,fetchTasks}}>
            {children}
        </TaskContext.Provider>
    )

}