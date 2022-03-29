import React from 'react'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Home from '../pages/Home'
import Admin from '../pages/Admin'
import NewCase from '../pages/NewCase'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
const RoutesManager = () => {
    const loggedIn = useSelector(state => state.userData)
  return (
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/admin' element={loggedIn ? <Admin/> : <Navigate to="/"/>}/>
      <Route path='/newcase' element={loggedIn ? <NewCase/>: <Navigate to="/"/>}/>
      <Route path='/' element={<Home/>}/>
    </Routes>
  )
}

export default RoutesManager