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
        alert("signIn success")
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

        <form  className={style.i2}onSubmit={handleWork}>
          
            <input className={style.i3} type="email"
              placeholder="Enter the email"
              onChange={changeWork}
              value={work.email}
              name='email'></input>
      
          <br></br>
       
            <input  className={style.i4} type='password'
              placeholder='Enter the passwrd'
              onChange={changeWork}
              value={work.password}
              name='password'></input>
         
          <br></br>
           
          <button className={style.i5}type='submit'>Signin</button>
   
    </form>
 </div>

   
  )
}

export default Signin