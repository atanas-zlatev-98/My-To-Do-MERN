import TaskListItem from '@/components/tasks/task-list-item/TaskListItem';
import { useTasks, useTaskType } from '@/hooks/useTasks';
import { useParams } from 'react-router'

const SectionType = () => {

    const {tasks,loading} = useTasks();
    const {sectionType} = useParams();

    const {tasksType} = useTaskType({sectionType:sectionType!,tasks:tasks})

  return (
    <div className='grid md:grid-cols-4 gap-4 p-5'>
          {loading ? tasksType.map(task => <TaskListItem key={task._id} task={task}></TaskListItem>) : null}  
    </div>
  )
}

export default SectionType