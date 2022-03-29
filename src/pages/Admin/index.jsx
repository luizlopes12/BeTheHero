import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
const Admin = () => {
    const ongData = useSelector(state=> state.userData)
    const navigate = useNavigate()
    useEffect(()=>{
      !ongData && navigate('/')
    },[])
    console.log(ongData)
  return (
      <>
      <div>Admin</div>
      </>
  )
}

export default Admin