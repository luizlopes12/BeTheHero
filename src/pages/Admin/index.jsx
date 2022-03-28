import React, {useState} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
const Admin = () => {
    const ongState = useSelector(state=> state.userData)
    const navigate = useNavigate()
    const [ongData, setOngData] = useState(ongState.length > 0 ? ongState: false)
    !ongData && navigate('/')
    console.log(ongData)
  return (
      <>
      <div>Admin</div>
      <p>{ongData[0]}</p>
      <p>{ongData[1].email}</p>
      </>
  )
}

export default Admin