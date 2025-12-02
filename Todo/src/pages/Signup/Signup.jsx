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
      

        <form className={style.h1} onSubmit={handleSign}>
         
            <input className={style.h2} type='email'
              placeholder='Enter the email'
              onChange={changeHandle}
              value={sign.email}
              name='email'></input>
         
          <br></br>
          
            <input className={style.h3} type='text'
              placeholder='Enter the user name'
              onChange={changeHandle}
              value={sign.userName}
              name='userName'></input>
          
          <br></br>
          
            <input className={style.h4} type='password'
              placeholder='Enter the passwrd'
              onChange={changeHandle}
              value={sign.password}
              name='password'></input>
          
          <br></br>
          
          <button  className={style.h5} type='submit'>SignUp</button>
          <span>Do you have another account <Link to='/Signinpage'>Signin</Link></span>
        </form>
       
      </div>
    
  )
}


export default Signup