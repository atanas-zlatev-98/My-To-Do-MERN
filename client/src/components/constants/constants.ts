export const initialTaskValues = {
    title:'',
    description:'',
    priorityLevel:'Low',
    isCompleted:false,
    type:'Work',
    finishBefore: undefined
}

const today = new Date();
const getYear = today.getFullYear();
const getMonth = String(today.getMonth() + 1).padStart(2, "0");
const getDay = String(today.getDate()).padStart(2,'0');

export const currentDate = `${getYear}-${getMonth}-${getDay}`;