import { getSingleTask } from "@/api/task-api";
import type { Task } from "@/types/types"
import { useEffect, useState } from "react"

export const useSingleTask = (taskId:string) =>{
    const [singleTask,setSingleTask] = useState<Task | null>(null);
    const [loaded,setLoaded] = useState(false);


    useEffect(()=>{
    
        const fetchTask = async () =>{

            try{
                const response = await getSingleTask(taskId);
                if(response){
                    setSingleTask(response);
                    setLoaded(true);
                }
            }catch(err){
                if(err instanceof Error){
                    throw new Error(err.message)
                }
            }
        }

        fetchTask();

    },[taskId])

    return {singleTask,loaded};
}