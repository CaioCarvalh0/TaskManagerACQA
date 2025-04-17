import { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

const Task = ({ task }) => {
  const { dispatch } = useContext(TaskContext);

  const handleToggle = () => {
    dispatch({ type: 'TOGGLE_TASK', payload: task.id });
  };

  const handleDelete = () => {
    dispatch({ type: 'DELETE_TASK', payload: task.id });
  };

  return (
    <div className="task" onClick={handleToggle}>
      <input type="checkbox" onClick={handleToggle} checked={task.completed} />
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.text}
      </span>
      <button className="delete-button" onClick={handleDelete}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" 
          fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" 
          strokeLinejoin="round">
          <path d="M3 6h18"></path>
          <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
          <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
        </svg>
      </button>
    </div>
  );
};

export default Task; 