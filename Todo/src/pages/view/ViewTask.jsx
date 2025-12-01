import React, { useEffect, useState } from 'react'
import axios from 'axios'
import style from './ViewTask.module.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const ViewTask = () => {
  const [browser, setBrowser] = useState([])
  const navigate = useNavigate()
  async function printApi() {
    let a = await axios.get("http://Localhost:3000/getTasks")
    console.log(a);

    setBrowser(a.data.data)

  }


  useEffect(() => { printApi() }, [])


  async function deleteTask(id) {
    try {
      const response = await axios.delete(`http://localhost:3000/deleteTask/${id}`);
      console.log(response);
      printApi()
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className={style.he}>
      {browser.map((v, i) => {
        return (
          <div className={style.s1} key={i}>

            <h1>{v.taskName}</h1>


            <h1>Priority:{v.taskPriority}</h1>

            <h1>Deadline:{v.taskDeadline}</h1>


            <Link to={`/EditPage/${v._id}`}>
              <button>Edit</button>
            </Link>


            <button onClick={() => deleteTask(v._id)}>Delete</button>



          </div>
        )



      })}
      <button className={style.r1} onClick={() => {
        navigate(-1)
      }}>back</button>

    </div>
  )
}

export default ViewTask