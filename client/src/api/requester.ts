import type { Requester, Task } from "@/types/types";

export default async function requester(method:string,url:string,data?:Task) {
    const options:Requester = {};

    if(method !== 'GET'){
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
export const post = (url:string,data:Task)=>requester('POST',url,data);
export const del = (url:string) =>requester('DELETE',url);
export const update = (url:string,data:Task)=>requester('PUT',url,data);
export const patch = (url:string)=>requester('PATCH',url);