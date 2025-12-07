import { currentDate } from '@/components/constants/constants';
import TaskListItem from '@/components/tasks/task-list-item/TaskListItem';
import { useTasks } from '@/hooks/useTasks';

const Upcoming = () => {

 const {tasks,loading} = useTasks();
 const upcomingTasks = tasks.filter(tasks => tasks.finishBefore.split('T')[0] > currentDate && tasks.isCompleted !== true);

  return (
    <>
    <div className='grid md:grid-cols-4 gap-4 p-5'>
      {loading && upcomingTasks.length <= 0 ? (<p>No upcoming tasks!</p>) : (loading && upcomingTasks.map(task=><TaskListItem key={task._id} task={task}/>))}
    </div>
    </>
  )
}

export default Upcoming