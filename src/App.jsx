import { useState, useContext } from 'react'
import { TaskContext } from './context/TaskContext'
import { TaskProvider } from './context/TaskProvider'
import TaskList from './components/TaskList'
import './App.css'

function TaskInput() {
  const [taskText, setTaskText] = useState('')
  const { dispatch } = useContext(TaskContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (taskText.trim()) {
      dispatch({ type: 'ADD_TASK', payload: taskText })
      setTaskText('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="task-input">
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Adicionar nova tarefa"
      />
      <button type="submit">Adicionar</button>
    </form>
  )
}

function App() {
  return (
    <TaskProvider>
      <div className="app">
        <div className="left-column">
          <h1>Gerenciador de Tarefas</h1>
          <TaskInput />
        </div>
        <div className="right-column">
          <TaskList />
        </div>
      </div>
    </TaskProvider>
  )
}

export default App
