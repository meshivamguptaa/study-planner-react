
import { useState } from "react"

function TaskForm(){
    const [forms, setForms] = useState({
        id : Date.now(),
        title : "",
        description : "",
        category : "",
        priority : "",
        dueDate : ""
    })

    function handleClick(){
        alert("button clicked")  //temporary for now, will change after implementing form creation
    }

    function handleChange(event){
        setForms({...forms, 
            [event.target.name]: event.target.value
        })
        }
    return(
        <>
            <label>Title: </label>
            <input name="title" value = {forms.title} onChange={handleChange} placeholder="Enter Title"></input>
            <label>Description</label>
            <textarea name="description" value = {forms.description} onChange={handleChange}placeholder="Add description"></textarea>
            <label>Category</label>
            <select id="category" name="category" value={forms.category} onChange={handleChange}>
                <option value="dsa">DSA</option>
                <option value="assignment">Assignment</option>
                <option value="development">Development</option>
                <option value="project">Project</option>
                <option value="interviewPrep">InterviewPrep</option>
                <option value="personal">Personal</option>
                <option value="other">Other</option>
            </select>
            <label>Priority</label>
            <select name="priority" id="priority" value={forms.priority} onChange={handleChange}>
                <option value="none">None</option>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
            </select>
            <label>Due Date</label>
            <input name="dueDate" type="date" id="dueDate"
             value={forms.dueDate} onChange={handleChange}></input>
            <button onClick={handleClick}>Add Task</button>
            <p>{JSON.stringify(forms)}</p>
        </>
    )
}
export default TaskForm