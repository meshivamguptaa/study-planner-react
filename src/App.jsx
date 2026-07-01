import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const name = "Shivam"
  const course = "CSE"
  const semester = "5th"

  return (
    <>
      <h1>Study Planner React</h1>
      <p>My first react application</p>
    <p>Name: {name} <br />
    Course: {course} <br />
      Semester: {semester}</p>
      <Header />
      </>
      
  )
}

function Header(){
  return(
    <p>Study PLanner React</p>
  )
}

export default App
