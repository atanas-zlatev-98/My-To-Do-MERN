import { Badge } from '@/components/ui/badge'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import type { Task } from '@/types/types'
import { NavLink } from 'react-router'

const TaskListItem = ({task}:{task:Task}) => {
  return (
     <NavLink to={''}>
        <Card className="max-w-md pt-5">
      <CardHeader>
        <CardTitle className="truncate">{task.title}</CardTitle>
        <CardDescription className="truncate">{task.description}</CardDescription>
      </CardHeader>
      <CardFooter className="gap-3 max-sm:flex-col max-sm:items-stretch justify-start">
        <div className="flex gap-2 justify-between w-full">
          <div className="flex gap-2">
        <Badge>{task.type}</Badge>
        {task.priorityLevel === 'Low' && (<Badge variant='secondary' className="bg-green-800 text-white">{task.priorityLevel}</Badge>)}
        {task.priorityLevel === 'Medium' && (<Badge variant='secondary' className="bg-blue-500 text-white dark:bg-blue-600">{task.priorityLevel}</Badge>)}
        {task.priorityLevel === 'High' && (<Badge variant='destructive' className="bg-orange-800">{task.priorityLevel}</Badge>)}
        {task.priorityLevel === 'Critical' && (<Badge variant='destructive'>{task.priorityLevel}</Badge>)}
        </div>
        <Badge variant="destructive" className="bg-red-500">Date: {task.finishBefore.split('T')[0]}</Badge>
        </div>
      </CardFooter>
    </Card>
    </NavLink>
  )
}

export default TaskListItem