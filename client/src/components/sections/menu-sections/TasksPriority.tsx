import type { Task } from "@/types/types";
import { BadgeAlert } from "lucide-react";
import { NavLink } from "react-router";

const TasksPriority = ({tasks}:{tasks:Task[]}) => {

    const criticalTasks = tasks.filter(task => task.priorityLevel === 'Critical').length;
    const highTasks = tasks.filter(task => task.priorityLevel === 'High').length;
    const mediumTasks = tasks.filter(task => task.priorityLevel === 'Medium').length;
    const lowTasks = tasks.filter(task => task.priorityLevel === 'Low').length;

  return (
    <>
      <p className="font-bold">PRIORITY</p>

      <li className={`text-md nav-links-menu`}>
        <NavLink className="flex flex-row items-center p-2" to={"/tasks/priority/Critical"}>
          <BadgeAlert className="h-5 w-5 text-red-600" />
          <span className="ps-1 pt-0.5 text-md">Critical</span>
          <span className='total-tasks'>{criticalTasks}</span>
        </NavLink>
      </li>

      <li className={`text-md nav-links-menu`}>
        <NavLink className="flex flex-row items-center p-2" to={"/tasks/priority/High"}>
          <BadgeAlert className="h-5 w-5 text-orange-600" />
          <span className="ps-1 pt-0.5 text-md">High</span>
          <span className='total-tasks'>{highTasks}</span>
        </NavLink>
      </li>

      <li className={`text-md nav-links-menu`}>
        <NavLink className="flex flex-row items-center p-2" to={"/tasks/priority/Medium"}>
          <BadgeAlert className="h-5 w-5 text-yellow-600" />
          <span className="ps-1 pt-0.5 text-md">Medium</span>
          <span className='total-tasks'>{mediumTasks}</span>
        </NavLink>
      </li>

      <li className={`text-md nav-links-menu`}>
        <NavLink className="flex flex-row items-center p-2" to={"/tasks/priority/Low"}>
          <BadgeAlert className="h-5 w-5 text-green-600" />
          <span className="ps-1 pt-0.5 text-md">Low</span>
          <span className='total-tasks'>{lowTasks}</span>
        </NavLink>
      </li>
    </>
  );
};

export default TasksPriority;
