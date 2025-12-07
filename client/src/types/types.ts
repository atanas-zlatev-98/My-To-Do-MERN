export type TaskFormValues = {
    _id?:string,
    title:string,
    description:string,
    priorityLevel:string,
    isCompleted:boolean,
    type:string,
    finishBefore:Date | undefined
}
export type Task = {
     _id?:string,
    title:string,
    description:string,
    priorityLevel:string,
    isCompleted:boolean,
    type:string,
    finishBefore:string
}

export type TaskContextType = {
    tasks:Task[],
    loading:boolean,
    error: string | null,
    fetchTasks:()=>Promise<void>;
}
    
export type Requester = {
    method?:string,
    headers?: Record<string,string>,
    body?:string
}