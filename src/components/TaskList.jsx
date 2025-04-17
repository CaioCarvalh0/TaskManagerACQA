import { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import Task from './Task';

const TaskList = () => {
  const { state, dispatch } = useContext(TaskContext);
  const { tasks, filter } = state;

  const filteredTasks = tasks.filter(task => {
    if (filter === 'all') return true;
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    return true;
  });

  return (
    <div className="task-list">
      <h2>Lista de Tarefas</h2>
      <div className="filters">
        <button className={filter === 'all' ? 'active' : ''}
          onClick={() => dispatch({ type: 'SET_FILTER', payload: 'all' })}>
          Todas
        </button>
        <button className={filter === 'completed' ? 'active' : ''}
          onClick={() => dispatch({ type: 'SET_FILTER', payload: 'completed' })} >
          Concluídas
        </button>
        <button className={filter === 'pending' ? 'active' : ''}
          onClick={() => dispatch({ type: 'SET_FILTER', payload: 'pending' })}>
          Pendentes
        </button>
      </div>

      <div className="tasks">
        {filteredTasks.map(task => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default TaskList; 