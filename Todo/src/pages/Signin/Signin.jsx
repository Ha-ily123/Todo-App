import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import style from './Signin.module.css'

const Signin = () => {
  const [work, setWork] = useState({
    email: "",
    password: ""
  })
  const navigate = useNavigate()
  function changeWork(e) {
    setWork((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }
  async function handleWork(e) {
    e.preventDefault()
    try {
      let response1 = await axios.post('http://Localhost:3000/signin', work)
      console.log(response1);
      if (response1.data.success == true) {
        navigate('/Homepage')


      } else {
        alert("invaild")
      }

    } catch (error) {
      console.log(error);

    }

  }
  return (

    <div className={style.i1}>
      <div className={style.i2}>
        <form onSubmit={handleWork}>
          <div className={style.i3}>
            <input type="email"
              placeholder="Enter the email"
              onChange={changeWork}
              value={work.email}
              name='email'></input>
          </div>
          <br></br>
          <div className={style.i4}>
            <input type='password'
              placeholder='Enter the passwrd'
              onChange={changeWork}
              value={work.password}
              name='password'></input>
          </div>
          <br></br>
           <div className={style.i5}>
          <button type='submit'>Signin</button>
     </div>
    </form>
 </div>

    </div >
  )
}

export default Signin