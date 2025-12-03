import React, { useEffect, useState } from 'react'
import axios from 'axios'
import style from './ViewTask.module.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const ViewTask = () => {
  const [browser, setBrowser] = useState([])
  // const [taskList,setTaskList]=useState()

  const navigate = useNavigate()
  async function printApi() {
    try {
      let a = await axios.get("http://Localhost:3000/getTasks")
      console.log(a);
      setBrowser(a.data.data)
    }

    catch (error) {
      console.log(error);

    }
  }

  useEffect(() => { printApi() }, [])


  async function deleteTask(id) {
    try {
      const response = await axios.delete(`http://localhost:3000/deleteTask/${id}`);
      console.log(response);
      printApi()
    } catch (error) {
      console.log(error);
    }
  }
  function convertDate(d) {

    let rawDate = d.split("T")
    // console.log(rawDate[0]);
    let date = rawDate[0].split("-")
    // console.log(date);

    return `${date[2]}-${date[1]}-${date[0]}`

  }
  function search(e) {
    let a = browser.filter((s) => {
      if (s.taskName.toLowerCase().includes(e.target.value.toLowerCase())) {
        return true


      }
      else {
        return false
      }

    })
     setBrowser(a)
  }
 
  function searchDate(e) {
    let b = browser.filter((s) => {
      if (s.taskPriority.toLowerCase().includes(e.target.value.toLowerCase())) {
        return true


      }
      else {
        return false
      }

    })
    setBrowser(b)
  }

  return (
    <div>

      <div className={style.he}>

        <button className={style.r1} onClick={() => {
          navigate(-1)
        }}>back</button>

        <Link to={'/'}><button className={style.r4}>Logout</button></Link>
        <input  className={style.r7} type='text' placeholder='Search the task' onChange={search} />
        <select  className={style.r8}name='taskPriority' onChange={searchDate}>
          <option value='top'>top</option>
          <option value='mid'>mid</option>
          <option value='last'>last</option>

        </select>

      </div>

      <div className={style.r5}>
        {browser.map((v, i) => {
          return (
            <div className={style.s1} key={i}>

              <h1>{v.taskName}</h1>


              <h1>Priority:{v.taskPriority}</h1>

              <h1>Deadline:{convertDate(v.taskDeadline)}</h1>


              <Link to={`/EditPage/${v._id}`}>
                <button className={style.r3}>Edit</button>
              </Link>


              <button className={style.r2} onClick={() => deleteTask(v._id)}>Delete</button>



            </div>
          )




        })}

      </div>
    </div>

  )
}

export default ViewTask