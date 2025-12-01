import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import style from './Home.module.css'

const Home = () => {
    const [task, setTask] = useState({
        taskName: "",
        taskPriority: "top",
        taskDeadline: ""

    })
    function changeTask(e) {
        setTask((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }
    async function handletask(e) {
        e.preventDefault()
        try {
            let response2 = await axios.post('http://Localhost:3000/AddTask', task)
            console.log(response2);
        }
        catch (error) {
            console.log(error);

        }
    }
    return (
        <div className={style.t1}>
            <div className={style.k1}>
                <h1>Add Task</h1>
            </div>
            <form onSubmit={handletask}>
                <div className='he'>
                    <div className={style.t2}>
                        <input type='text'
                            placeholder='Enter the taskname'
                            onChange={changeTask}
                            value={task.taskName}
                            name='taskName' />
                    </div>
                    <div className={style.t3}>
                        <select name='taskPriority' onChange={changeTask}>
                            <option value='top'>top</option>
                            <option value='mid'>mid</option>
                            <option value='last'>last</option>

                        </select>
                    </div>
                    <div className={style.t4}>
                        <input type='date'
                            placeholder='yy-mm-dd'
                            onChange={changeTask}
                            value={task.taskDeadline}
                            name='taskDeadline' />
                    </div>
                    <div className={style.t5}>
                        <button type='submit'>addTask</button>
                    </div>
                </div>
            </form>
            <div className={style.t5}>
                <Link to={'/ViewTaskpage'}><button>View all tasks</button></Link>
            </div>
        </div>
    )

}

export default Home