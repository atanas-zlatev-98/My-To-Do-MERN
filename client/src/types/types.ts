export type TaskFormValues = {
    _id?:string,
    title:string,
    description:string,
    priorityLevel:string,
    isCompleted:boolean,
    type:string,
    finishBefore:Date | undefined
}

export type Requester = {
    method?:string,
    headers?: Record<string,string>,
    body?:string
}