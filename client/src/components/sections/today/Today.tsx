import { currentDate } from '@/components/constants/constants';
import TaskListItem from '@/components/tasks/task-list-item/TaskListItem';
import { useTasks } from '@/hooks/useTasks'

const Today = () => {

  const {tasks,loading} = useTasks();

   const tasksForToday = tasks.filter(tasks => tasks.finishBefore.split('T')[0] === currentDate);

  return (
    <>
    <div className='grid md:grid-cols-4 gap-4 p-5'>
      {loading && tasksForToday.length <= 0 ? (<p>No tasks for Today!</p>) : (loading && tasksForToday.map(task=><TaskListItem key={task._id} task={task}/>))}
    </div>
    </>
  )
}

export default Today