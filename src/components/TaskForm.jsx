import { title } from "framer-motion/client"
import { Task } from "twilio/lib/twiml/VoiceResponse"


function TaskForm(){
    const [forms, setForms] = useState({
        id : Date.now(),
        title : "",
        description : "",
        category : "",
        priority : "",
        dueDate : ""
    })
    return(
        <>
            <label>Title: </label>
            <input value = {title} placeholder="Enter Title"></input>
        </>
    )
}
export default TaskForm