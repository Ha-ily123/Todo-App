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
        if (task.taskDeadline == "") {
            alert("Please fill the date");
            return;
        }
        try {
            let response2 = await axios.post('http://Localhost:3000/AddTask', task)
            console.log(response2);
            alert(response2.data.message)

        }
        catch (error) {
            console.log(error);

        }
    }
    return (
        <div className={style.container}>
            {/* <div className={style.k1}>
                <h1>Add Task</h1>
            </div> */}
            <br></br>
            <form className={style.table} onSubmit={handletask}>
                

                    <input className={style.h2} type='text'
                        placeholder='Enter the taskname'
                        onChange={changeTask}
                        value={task.taskName}
                        name='taskName' />
                    <br></br>


                    <select className={style.h3} name='taskPriority' onChange={changeTask}>
                        <option value='top'>top</option>
                        <option value='mid'>mid</option>
                        <option value='last'>last</option>

                    </select>


                    <input className={style.h4} type='date'
                        placeholder='yy-mm-dd'
                        onChange={changeTask}
                        value={task.taskDeadline}
                        name='taskDeadline' />


                  
                        <button  className={style.h5} type='submit'>addTask</button>
                    
               
                <div className={style.button}>
                    <Link to={'/ViewTaskpage'}><button className={style.h6} >View all tasks</button></Link>
                    <Link to={'/'}><button className={style.h7}>Logout</button></Link>
                </div>
            </form>

        </div>
    )

}

export default Home