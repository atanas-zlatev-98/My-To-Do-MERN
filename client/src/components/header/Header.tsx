import CreateTaskForm from '../tasks/create-task/CreateTaskForm';
import './Header.style.css';

const Header = () => {
  return (
        <nav>
            <header className='flex gap-2 items-center'>
                <h1 className='text-2xl font-bold'>Total Tasks: 0</h1>
                <CreateTaskForm/>   
            </header>
        </nav>
  )
}

export default Header