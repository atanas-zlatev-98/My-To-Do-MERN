import type { Requester, TaskFormValues } from "@/types/types";

export default async function requester(method:string,url:string,data?:TaskFormValues) {
    const options:Requester = {};

    if(method === 'GET'){
        options.method = method
    }

    if(data){
        options.headers = {
            ...options.headers,
            'Content-Type':'application/json'
        }
        options.body = JSON.stringify(data);
    }

    const response = await fetch(url,options);

    if(response.status === 204){
        return
    }
    const result = await response.json();

    if(!response.ok){
        throw result
    }

    return result
}

export const get = (url:string)=>requester('GET',url);
export const post = (url:string,data:TaskFormValues)=>requester('POST',url,data);
export const del = (url:string) =>requester('DELETE',url);
export const update = (url:string,data:TaskFormValues)=>requester('PUT',url,data);