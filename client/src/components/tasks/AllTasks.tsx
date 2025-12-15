import { useTasks } from '@/hooks/useTasks';
import TaskListItem from './task-list-item/TaskListItem';

const AllTasks = () => {
    const {tasks,loading} = useTasks();

  return (
    <div className='grid md:grid-cols-4 gap-4 p-5'>
          {loading ? tasks.map(task => <TaskListItem key={task._id} task={task}></TaskListItem>) : null}  
    </div>
  )
}

export default AllTasks