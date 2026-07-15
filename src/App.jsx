import { useState } from 'react'
import './App.css'
import TaskForm from './components/TaskForm.jsx'

function App(){
  const [tasks, setTasks] = useState([])
  return(
    <>
    <h1>Study Planner</h1>
    <TaskForm/>
    </>
  )
}
export default App