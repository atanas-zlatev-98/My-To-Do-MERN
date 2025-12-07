import TaskListItem from '@/components/tasks/task-list-item/TaskListItem';
import { useTaskPriority, useTasks } from '@/hooks/useTasks';
import { useParams } from 'react-router';

const SectionPriority = () => {
  
    const {tasks,loading} = useTasks();
    const {sectionPriority} = useParams();

    const {tasksPriority} = useTaskPriority({sectionPriority:sectionPriority!,tasks:tasks})

  return (
    <div className='grid md:grid-cols-4 gap-4 p-5'>
          {loading ? tasksPriority.map(task => <TaskListItem key={task._id} task={task}></TaskListItem>) : null}  
    </div>
  )
}

export default SectionPriority