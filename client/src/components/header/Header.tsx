import { useTasks } from '@/hooks/useTasks';
import CreateTaskForm from '../tasks/create-task/CreateTaskForm';
import './Header.style.css';

const Header = () => {

  const {tasks,loading} = useTasks();

  return (
        <nav>
            <header className='flex gap-2 items-center'>
                <h1 className='text-2xl font-bold'>Total Tasks: {loading ? tasks.length : '0'}</h1>
                <CreateTaskForm/>   
            </header>
        </nav>
  )
}

export default Header