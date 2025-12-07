import type { Task } from '@/types/types'
import { Car, FolderKanban, User } from 'lucide-react'
import { NavLink } from 'react-router'

const TasksType = ({tasks}:{tasks:Task[]}) => {

    const personalTasks = tasks.filter(task => task.type === 'Personal').length;
    const workTasks = tasks.filter(task => task.type === 'Work').length;
    const hobbyTasks = tasks.filter(task => task.type === 'Hobby').length;

  return (
    <>
    <p className='font-bold'>TYPE</p>

            <li className={`text-md nav-links-menu`}>
              <NavLink className='flex flex-row items-center p-2' to={''}>
                <User className="h-5 w-5 text-red-600"/>
                <span className='ps-1 pt-0.5 text-md'>Personal</span>
                <span className='total-tasks'>{personalTasks}</span>
              </NavLink>
            </li>

            <li className={`text-md nav-links-menu`}>
              <NavLink className='flex flex-row items-center p-2' to={''}>
                <FolderKanban className="h-5 w-5 text-orange-600"/>
                <span className='ps-1 pt-0.5 text-md'>Work</span>
                <span className='total-tasks'>{workTasks}</span>
              </NavLink>
            </li>

            <li className={`text-md nav-links-menu`}>
              <NavLink className='flex flex-row items-center p-2' to={''}>
                <Car className="h-5 w-5 text-yellow-600"/>
                <span className='ps-1 pt-0.5 text-md'>Hobby</span>
                <span className='total-tasks'>{hobbyTasks}</span>
              </NavLink>
            </li>
    </>
  )
}

export default TasksType