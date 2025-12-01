import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import style from './Signup.module.css'


const Signup = () => {
  const [sign, setSign] = useState({
    email: "",
    userName: "",
    password: ""
  })

  function changeHandle(e) {
    setSign((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }
  async function handleSign(e) {
    e.preventDefault()
    try {
      let response = await axios.post('http://Localhost:3000/signup', sign)
      console.log(response);
    }
    catch (error) {
      console.log(error);

    }


  }
  // setSign({
  //     Email:"",
  //     UserName:"",
  //     Password:""
  // })
  return (
    <div className={style.he}>
      <div className={style.h1}>

        <form onSubmit={handleSign}>
          <div className={style.h2}>
            <input type='email'
              placeholder='Enter the email'
              onChange={changeHandle}
              value={sign.email}
              name='email'></input>
          </div>
          <br></br>
          <div className={style.h3}>
            <input type='text'
              placeholder='Enter the user name'
              onChange={changeHandle}
              value={sign.userName}
              name='userName'></input>
          </div>
          <br></br>
          <div className={style.h4}>
            <input type='password'
              placeholder='Enter the passwrd'
              onChange={changeHandle}
              value={sign.password}
              name='password'></input>
          </div>
          <br></br>
          <div className={style.h5}>
          <button type='submit'>SignUp</button>
          </div>
        </form>
        <span>Do you have another account <Link to='/Signinpage'>Signin</Link></span>
      </div>
    </div>
  )
}


export default Signup