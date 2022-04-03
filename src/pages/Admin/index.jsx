import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Header from '../../components/Header'
import { AdminStyle } from './styled'
const Admin = () => {
  return (
      <AdminStyle>
        <Header/>
      </AdminStyle>
  )
}

export default Admin