import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import style from './Edit.module.css'


const Edit = () => {
    const [editTask, setEditTask] = useState({
        taskName: "",
        taskPriority: "top",
        taskDeadline: ""

    })
    const navigate = useNavigate()

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
            alert(response1.data.message)


        } catch (error) {
            console.log(error);

        }
    }



    return (
        <div className={style.e1}>
            <form className={style.e2}>
                <label >TaskName</label>
                <input className={style.e3} type='text'
                    name="taskName"
                    value={editTask.taskName}
                    onChange={changeTask} />
                    <label>DeadLine</label>
                <input className={style.e4} type='date'
                    name="taskDeadline"
                    value={editTask.taskDeadline}
                    onChange={changeTask} />
                    <label for="html">Priority</label>
                <select className={style.e5} name="taskPriority" onChange={changeTask}>
                    <option value="Top">Top</option>
                    <option value="Mid">Mid</option>
                    <option value="Last">Last</option>
                </select>
                <button className={style.e6} onClick={updateTasks}>Save</button>
                <button className={style.e7} onClick={() => {
                    navigate(-1)
                }}>back</button>
            </form>

        </div>
    )
}

export default Edit