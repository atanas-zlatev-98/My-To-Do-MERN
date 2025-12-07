import { currentDate } from '@/components/constants/constants';
import type { Task } from '@/types/types';
import { CheckCheck, ChevronsRight,ChevronsLeft, List } from 'lucide-react'
import { NavLink } from 'react-router'

const Tasks = ({tasks}:{tasks:Task[]}) => {

    const todayTasks = tasks.filter(tasks => tasks.finishBefore.split('T')[0] === currentDate && tasks.isCompleted !== true).length;
    const upcomingTasks = tasks.filter(tasks => tasks.finishBefore.split('T')[0] > currentDate && tasks.isCompleted !== true).length;
    const forgottenTasks = tasks.filter(tasks => tasks.finishBefore.split('T')[0] < currentDate && tasks.isCompleted !== true).length;
    const completedTasks = tasks.filter(tasks => tasks.isCompleted === true).length;

  return (
    <>
         <p className='font-bold'>TASKS</p>
            
            <li className={`text-md nav-links-menu`}>
              <NavLink className='flex flex-row items-center p-2' to={'/tasks/Upcoming'}>
                <ChevronsRight className="h-5 w-5"/>
                <span className='ps-1 pt-0.5 text-md'>Upcoming</span>
                <span className='total-tasks'>{upcomingTasks}</span>
              </NavLink>
            </li>

            <li className={`text-md nav-links-menu`}>
              <NavLink className='flex flex-row items-center p-2' to={'/tasks/Today'}>
                <List className="h-5 w-5"/>
                <span className='ps-1 pt-0.5 text-md'>Today</span>
                <span className='total-tasks'>{todayTasks}</span>
              </NavLink>
            </li>

            <li className={`text-md nav-links-menu`}>
              <NavLink className='flex flex-row items-center p-2' to={'/tasks/Forgotten'}>
                <ChevronsLeft className="h-5 w-5"/>
                <span className='ps-1 pt-0.5 text-md'>Forgotten</span>
                <span className='total-tasks'>{forgottenTasks}</span>
              </NavLink>
            </li>

            <li className={`text-md nav-links-menu`}>
              <NavLink className='flex flex-row items-center p-2' to={'/tasks/Completed'}>
                <CheckCheck className="h-5 w-5"/>
                <span className='ps-1 pt-0.5 text-md'>Completed</span>
                <span className='total-tasks'>{completedTasks}</span>
                
              </NavLink>
            </li>
    </>
  )
}

export default Tasks