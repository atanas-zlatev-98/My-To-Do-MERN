import {  updateTask } from '@/api/task-api';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useTasks } from '@/hooks/useTasks';
import type {EditTaskFormValues, Task } from '@/types/types';
import { ChevronDownIcon } from 'lucide-react';
import React, { useState } from 'react'

const EditTaskForm = ({task,setSingleTask}:EditTaskFormValues) => {
  

  const [open,setOpen] = useState(false);
  const [date,setDate] = useState<Date | undefined>(task.finishBefore ? new Date(task.finishBefore) : undefined);
  const [formValues,setFormValues] = useState<Task>(task);
  const {fetchTasks} = useTasks();
  
  const taskId = task._id ? task._id : '';

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try{ 
          
          const response = await updateTask(taskId,formValues);
          if(response){
            setFormValues(prev => ({ ...prev, ...response }));
            setSingleTask(response);
            setDate(response.finishBefore);
            fetchTasks();
          }

        }catch(err){
          console.log(err);
        }
  };

  const handleChange = (name: keyof Task,value:string | Date | undefined) =>{

    let formattedValue: Date | string | undefined;

    if(value instanceof Date){
      const localDate = new Date(Date.UTC(value.getFullYear(),value.getMonth(),value.getDate()));
      formattedValue = localDate.toISOString().split('T')[0];
    }else {
      formattedValue = value;
    }

    setFormValues(oldState =>({
      ...oldState,
      [name]:formattedValue
    }))
  }

  const changeHandler = (e:React.ChangeEvent<HTMLInputElement>)=>{
    handleChange(e.target.name as keyof Task,e.target.value);
  }

 const isFormEmpty = !formValues.title || !formValues.description || !formValues.finishBefore || !formValues.type || !formValues.priorityLevel;

 return (
    <Dialog>

        <DialogTrigger asChild>
          <Button className="cursor-pointer">Edit Task</Button>
        </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">

        <form onSubmit={submitHandler}>

          <DialogHeader className="gap-0 mb-3">
            <DialogTitle>Edit Task.</DialogTitle>
            <DialogDescription>
              Make sure you filled out all the fields.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4">

            <div className="grid">
              <Label htmlFor="title" className="mb-2">Title.</Label>
              <Input id="title" name="title" placeholder="Task Title..." value={formValues.title} onChange={changeHandler}></Input>
            </div>

            <div className="grid">
              <Label htmlFor="description" className="mb-2">Description.</Label>
              <Input name="description" id="description" placeholder="Task Description" value={formValues.description} onChange={changeHandler}></Input>
            </div>

            <div className="flex justify-between">

              <div>
                <Label htmlFor="priotity" className="mb-2">Priority</Label>
                <Select defaultValue={`${task.priorityLevel}`} onValueChange={(value)=>handleChange('priorityLevel',value)}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Critical">Critical</SelectItem>
                    <SelectItem value="High">High</SelectItem>
                    <SelectItem value="Medium">Medium</SelectItem>
                    <SelectItem value="Low">Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="taskType" className="mb-2">Task Type</Label>
                <Select defaultValue={`${task.type}`} onValueChange={(value)=>handleChange('type',value)}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Personal">Personal</SelectItem>
                    <SelectItem value="Hobby">Hobby</SelectItem>
                    <SelectItem value="Work">Work</SelectItem>
                  </SelectContent>
                </Select>
              </div>

            </div>

            <div className="grid">
                
              <Label htmlFor="date" className="mb-2">Finish Before</Label>

              <Popover open={open} onOpenChange={setOpen}>

                <PopoverTrigger asChild>
                  <Button variant="outline" id="date" className="w-48 justify-between font-normal">
                     {date ? new Date(date).toLocaleDateString() : "Select date"}
                    <ChevronDownIcon />
                  </Button>
                </PopoverTrigger>

                <PopoverContent className="w-auto overflow-hidden p-0" align="start">
                  <Calendar mode="single" selected={formValues.finishBefore} onSelect={(date)=> {handleChange('finishBefore',date);setOpen(false);setDate(date)}} required={true} captionLayout="dropdown"/>
                </PopoverContent>

              </Popover>

            </div>

          </div>
            <div className="flex justify-end">
          <DialogClose asChild>
            <Button type="submit" disabled={isFormEmpty}>Edit Task</Button>
          </DialogClose>
          </div>
            </form>

        </DialogContent>

    </Dialog>
  );
}

export default EditTaskForm