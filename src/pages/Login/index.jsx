import React from 'react'
import Button from '../../components/Button'
import { TextField } from '@mui/material'
import PasswordField from 'material-ui-password-field'
import logo from '../../img/Logo.svg'
import { LoginStyle } from './styled'
const Login = () => {
  return (
    <LoginStyle>
      <aside>
        <div>
          <img src={logo} alt="Be The Hero" />
        </div>
        <div>
          <h2>Faça seu login</h2>
          
          <Button color='#FFF' bgColor='#E02041'>Entrar</Button>
        </div>



      </aside>
    </LoginStyle>
  )
}

export default Login