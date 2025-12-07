import { currentDate } from '@/components/constants/constants';
import TaskListItem from '@/components/tasks/task-list-item/TaskListItem';
import { useTasks } from '@/hooks/useTasks';

const Forgotten = () => {
    
 const {tasks,loading} = useTasks();
 const forgottenTasks = tasks.filter(tasks => tasks.finishBefore.split('T')[0] < currentDate && tasks.isCompleted !== true);

  return (
    <>
    <div className='grid md:grid-cols-4 gap-4 p-5'>
      {loading && forgottenTasks.length <= 0 ? (<p>No upcoming tasks!</p>) : (loading && forgottenTasks.map(task=><TaskListItem key={task._id} task={task}/>))}
    </div>
    </>
  )
}

export default Forgotten