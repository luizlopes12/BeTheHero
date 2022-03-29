import React from 'react'
import { HeaderStyle } from './styled'
import { useSelector } from 'react-redux'
import Button from '../../components/Button'
import logo from '../../img/Logo.svg'
import logout from '../../img/logout.svg'
import { Link } from 'react-router-dom'
const AdminHeader = () => {
  const ongData = useSelector(state=> state.userData)
  const name = ongData[1].ongName
  return (
    <HeaderStyle>
        <>
        <div>
            <img src={logo} alt="Be The Hero" />
            <p>Bem vinda, {name}</p>
        </div>
          <nav>
              <Button color="#FFF" bgColor="#E02041" width="210px" height="50px"><Link to='/newcase'>Cadastrar novo caso</Link></Button>
              <Button color="#E02041" bgColor="transparent" width="50px" height="50px" outlined>
                <img src={logout} alt="Sair" />
              </Button>
          </nav>
        </>
  </HeaderStyle>
  )
}

export default AdminHeader