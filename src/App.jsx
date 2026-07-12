import { useState } from 'react'
import './App.css'
import './components/TaskForm.jsx'
import TaskForm from './components/TaskForm.jsx'

function App(){
  const [tasks, setTasks] = useState([])
  return(
    <>
    <h>Study Planner</h>
    <p>{TaskForm}</p>
    </>
  )
}
export default App