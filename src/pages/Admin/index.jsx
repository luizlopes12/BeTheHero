import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import AdminHeader from '../../components/AdminHeader'
import { AdminStyle } from './styled'
const Admin = () => {
  
  return (
      <AdminStyle>
        <AdminHeader/>
      </AdminStyle>
  )
}

export default Admin