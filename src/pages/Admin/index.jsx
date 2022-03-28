import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
const Admin = () => {
    const ongState = useSelector(state=> state.userData)
    const navigate = useNavigate()
    const [ongData, setOngData] = useState(ongState.length > 0 ? ongState: false)
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