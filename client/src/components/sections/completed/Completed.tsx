import TaskListItem from '@/components/tasks/task-list-item/TaskListItem';
import { useTasks } from '@/hooks/useTasks';

const Completed = () => {

   const {tasks,loading} = useTasks();
   const completedTasks = tasks.filter(tasks => tasks.isCompleted === true);

  return (
    <>
    <div className='grid md:grid-cols-4 gap-4 p-5'>
      {loading && completedTasks.length <= 0 ? (<p>No completed tasks!</p>) : (loading && completedTasks.map(task=><TaskListItem key={task._id} task={task}/>))}
    </div>
    </>
  )
}

export default Completed