import React from 'react'
import { Link } from 'react-router-dom'
import style from './Landing.module.css'
import photo from '../../assets/image.png'

const Lading = () => {
  return (
    <div className={style.l5}>
    
      <div className={style.l3}>
        <Link to='/SignupPage'>
          <button className={style.l1}>SignUp</button>
        </Link>
        <Link to='/Signinpage'>
          <button className={style.l2}>SignIn</button>
        </Link>
        
       
      </div>
      <h1 className={style.l6}>TO-DO</h1>
      <h2 className={style.l7}>LANDING PAGE</h2>
      <div className={style.l4}>
        
      <img src={photo}/>
      </div>
      </div>
      

  )
}

export default Lading