import { NavLink } from 'react-router';
import './Sections.style.css';
import { BadgeAlert, Car, CheckCheck, ChevronsRight, FolderKanban, List, User } from 'lucide-react';
import { Input } from '../ui/input';

const Sections = () => {
  return (
    <div className='main-sections'>
        <div className="sections-group p-3 pt-0">

          <div className='search-field mb-2'>
            <Input type="text" placeholder="Search" />
          </div>

           <ul className="flex flex-col gap-2">
            
            <p className='font-bold'>TASKS</p>
            
            <li className={`text-md nav-links-menu`}>
              <NavLink className='flex flex-row items-center p-2' to={''}>
                <ChevronsRight className="h-5 w-5"/>
                <span className='ps-1 pt-0.5 text-md'>Upcoming</span>
              </NavLink>
            </li>

            <li className={`text-md nav-links-menu`}>
              <NavLink className='flex flex-row items-center p-2' to={''}>
                <List className="h-5 w-5"/>
                <span className='ps-1 pt-0.5 text-md'>Today</span>
              </NavLink>
            </li>

            <li className={`text-md nav-links-menu`}>
              <NavLink className='flex flex-row items-center p-2' to={''}>
                <CheckCheck className="h-5 w-5"/>
                <span className='ps-1 pt-0.5 text-md'>Completed</span>
              </NavLink>
            </li>

            <p className='font-bold'>TYPE</p>

            <li className={`text-md nav-links-menu`}>
              <NavLink className='flex flex-row items-center p-2' to={''}>
                <User className="h-5 w-5 text-red-600"/>
                <span className='ps-1 pt-0.5 text-md'>Personal</span>
              </NavLink>
            </li>

            <li className={`text-md nav-links-menu`}>
              <NavLink className='flex flex-row items-center p-2' to={''}>
                <FolderKanban className="h-5 w-5 text-orange-600"/>
                <span className='ps-1 pt-0.5 text-md'>Work</span>
              </NavLink>
            </li>

            <li className={`text-md nav-links-menu`}>
              <NavLink className='flex flex-row items-center p-2' to={''}>
                <Car className="h-5 w-5 text-yellow-600"/>
                <span className='ps-1 pt-0.5 text-md'>Hobby</span>
              </NavLink>
            </li>

            <p className='font-bold'>PRIORITY</p>

            <li className={`text-md nav-links-menu`} >
              <NavLink className='flex flex-row items-center p-2' to={''}>
                <BadgeAlert className="h-5 w-5 text-red-600"/>
                <span className='ps-1 pt-0.5 text-md'>Critical</span>
                
              </NavLink>
            </li>

            <li className={`text-md nav-links-menu`}>
              <NavLink className='flex flex-row items-center p-2' to={''}>
                <BadgeAlert className="h-5 w-5 text-orange-600"/>
                <span className='ps-1 pt-0.5 text-md'>High</span>
              </NavLink>
            </li>

            <li className={`text-md nav-links-menu`}>
              <NavLink className='flex flex-row items-center p-2' to={''}>
                <BadgeAlert className="h-5 w-5 text-yellow-600"/>
                <span className='ps-1 pt-0.5 text-md'>Medium</span>
              </NavLink>
            </li>

             <li className={`text-md nav-links-menu`}>
              <NavLink className='flex flex-row items-center p-2' to={''}>
               <BadgeAlert className="h-5 w-5 text-green-600"/>
               <span className='ps-1 pt-0.5 text-md'>Low</span>
              </NavLink>
            </li>


           </ul>
           
        </div>
    </div>
  )
}

export default Sections