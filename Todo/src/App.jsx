import React from 'react'
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom'


import Signup from './pages/Signup/Signup'
import Signin from './pages/Signin/Signin'
import Home from './pages/Home/Home'
import ViewTask from './pages/view/ViewTask'
import Edit from './pages/Edit/Edit'



const App = () => {
  return (

    <BrowserRouter>
      <Routes>
        <Route element={<Signup />} path='/' />
        <Route element={<Signin />} path='/Signinpage' />
        <Route element={<Home />} path='/Homepage' />
        <Route element={<ViewTask />} path='/ViewTaskpage' />
        <Route element={<Edit />} path='/EditPage/:id' />

      </Routes>
    </BrowserRouter>
  )
}

export default App