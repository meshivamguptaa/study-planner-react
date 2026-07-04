import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("")
  function handleClick(){
    setCount(count+2);
    
  }
 function handleInput(event){
      setName(event.target.value)
    }
  const course = "CSE"
  const semester = "5th"

  function buttonClick(){
    console.log("Button Clicked")
  }

  return (
    <>
      <h1>Study Planner React</h1>
      <p>My first react application</p>
    <p>Name: {name} <br />
    Course: {course} <br />
      Semester: {semester}</p>
      <Header title = "Study Planner React"/>
      <button onClick={handleClick}>Click me</button>
      <p>{count}</p>
      <input value = {name} placeholder='Enter Name' onChange={handleInput}></input>
      <p>Hello {name}</p>
      <Footer author = "Created by Shivam" />
      </>
      
  )
}

function Header(props){
  return(
    <p>{props.title}</p>

  )
}
function Footer(props){
  return(
    <p>{props.author}</p>
  )
  
}

export default App
