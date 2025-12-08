import { useSingleTask } from '@/hooks/useSingleTask';
import { useParams } from 'react-router'
import './TaskSinglePage.style.css';
import { Button } from '@/components/ui/button';

const TaskSinglePage = () => {
    const {taskId} = useParams();
    const {singleTask,loaded} = useSingleTask(taskId!);
    
  return (
    <>
    {loaded ? ( <div className='single-task flex flex-row justify-between'>
        <div className='task-content'>
            <h1 className='p-3 m-3 bg-gray-200 rounded-lg font-bold'>{singleTask?.title}</h1>
            <div className='p-3 m-3 bg-gray-200 rounded-lg'>
            <p className='font-bold underline'>To-Do:</p>
            <p>{singleTask?.description}</p>
            </div>
            <div className='p-3 m-3 rounded-lg flex justify-end'>
            {singleTask?.isCompleted !== true && <Button className='cursor-pointer'>Mark as Completed</Button>}</div>
        </div>
        <div className='task-options m-3 rounded-lg justify-start flex flex-col bg-gray-200'>
            <h2 className='p-3 text-center font-bold'>Options</h2>
            <div className='ps-3'>
                <p><span className='font-bold'>Completed: </span>{singleTask?.isCompleted === true ? 'True' : 'False'}</p>
                <p><span className='font-bold' >Finish Before:</span> {singleTask?.finishBefore.split('T')[0]}</p>
                <p><span className='font-bold'>Type:</span> {singleTask?.type}</p>
                <p><span className='font-bold'>Priority:</span> {singleTask?.priorityLevel}</p>
            </div>
             <div className='flex gap-2 p-3 justify-center'>
                <Button variant='secondary' className='bg-green-500 cursor-pointer'>Edit</Button>
                <Button variant='destructive' className='cursor-pointer bg-red-500'>Remove</Button>
            </div>
        </div>
    </div>): <h1>Post Not Found!</h1>}
   
    </>
  )
}

export default TaskSinglePage