import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import AdminHeader from '../../components/AdminHeader'
import { AdminStyle } from './styled'
const Admin = () => {
    const ongData = useSelector(state=> state.userData)
    const name = ongData[1].ongName
  return (
      <AdminStyle>
        <AdminHeader/>
      </AdminStyle>
  )
}

export default Admin