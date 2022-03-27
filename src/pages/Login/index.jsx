import React from 'react'
import Button from '../../components/Button'
import PasswordField from '../../components/PasswordField'
import TextField from '../../components/TextField'
import logo from '../../img/Logo.svg'
import arrow from '../../img/entrar-arrow.svg'
import people from '../../img/People.svg'
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
          <Button color='#464646' bgColor='#fff' width='280px' height='40px'>Login com Google</Button>
          <TextField placeHolder='Email' width='280px' height='50px'/>
          <PasswordField placeHolder='Senha' width='280px' height='50px'/>
          <Button color='#FFF' bgColor='#E02041' width='280px' height='50px'>Entrar</Button>
          <p>
            <img src={arrow} alt="Não tenho cadastro" />
            Não tenho cadastro
          </p>
        </div>
      </aside>
      <section>
        <img src={people} alt="Ilustração com pessoas" />
      </section>
    </LoginStyle>
  )
}

export default Login