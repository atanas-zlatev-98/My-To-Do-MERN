import TaskListItem from "@/components/tasks/task-list-item/TaskListItem";
import { useTasks, useTaskSection } from "@/hooks/useTasks";
import { useParams } from "react-router";

const SectionTasks = () => {

    const {tasks,loading} = useTasks();
    const {sectionTasks} = useParams();

    const {sections} = useTaskSection({sectionTasks:sectionTasks!,tasks:tasks})

  return (
    <div className='grid md:grid-cols-4 gap-4 p-5'>
          {loading ? sections?.map(task => <TaskListItem key={task._id} task={task}></TaskListItem>) : null}  
    </div>
  )
}

export default SectionTasks