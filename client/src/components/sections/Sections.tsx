import './Sections.style.css';
// import { Input } from '../ui/input';
import { useTasks } from '@/hooks/useTasks';
import Tasks from './menu-sections/Tasks';
import TasksType from './menu-sections/TasksType';
import TasksPriority from './menu-sections/TasksPriority';

const Sections = () => {
  const {tasks,loading} = useTasks();
  return (
    <>
      {loading && ( <div className='main-sections'>
        <div className="sections-group p-3 pt-0">

          {/* <div className='search-field mb-2'>
            <Input type="text" placeholder="Search" />
          </div> */}

           <ul className="flex flex-col gap-2">
            
            <Tasks tasks={tasks}/>
            <TasksType tasks={tasks}/>
            <TasksPriority tasks={tasks}/>

           </ul>
           
        </div>
    </div>)}
    </>
  )
}

export default Sections