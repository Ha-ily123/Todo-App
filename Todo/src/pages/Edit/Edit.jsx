import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

const Edit = () => {
    const [editTask, setEditTask] = useState({
        taskName: "",
        taskPriority: "top",
        taskDeadline: ""

    })

    const { id } = useParams()

    const getTask = async () => {
        try {
            let response = await axios.get(`http://localhost:3000/getOneTask/${id}`)
            console.log(response);
            setEditTask(response.data.data)


        } catch (error) {
            console.log(error);

        }
    }

    useEffect(() => {
        getTask()
    }, [])

    function changeTask(e) {
        e.preventDefault()
        setEditTask((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    async function updateTasks(e) {
        e.preventDefault()

         try {
             let response1 = await axios.put(`http://Localhost:3000/editTask/${id}`, editTask)
            console.log(response1);
            setEditTask(response1.data.data)


        } catch (error) {
            console.log(error);

        }
    }
    


    return (
        <div>
            <form>
                <input type='text'
                    name="taskName"
                    value={editTask.taskName}
                    onChange={changeTask} />
                <input type='date'
                    name="taskDeadline"
                    value={editTask.taskDeadline}
                    onChange={changeTask} />
                <select  name="taskPriority"onChange={changeTask}>
                    <option value="Top">Top</option>
                    <option value="Mid">Mid</option>
                    <option value="Last">Last</option>
                </select>
                <button onClick={updateTasks}>Save</button>
            </form>
        </div>
    )
}

export default Edit