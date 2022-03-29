import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
const Admin = () => {
    const ongData = useSelector(state=> state.userData)

  return (
      <>
      <div>Admin</div>
      </>
  )
}

export default Admin