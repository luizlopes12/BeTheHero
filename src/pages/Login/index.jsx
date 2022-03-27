import React from 'react'
import Button from '../../components/Button'
import PasswordField from '../../components/PasswordField'
import TextField from '../../components/TextField'
import logo from '../../img/Logo.svg'
import arrow from '../../img/entrar-arrow.svg'
import people from '../../img/People.svg'
import { LoginStyle } from './styled'
import { useState } from 'react'
import { Link } from 'react-router-dom'



const Login = () => {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const handleEmail = (e) =>{
    setEmail(e.target.value)
    console.log(email)
  }
  const handlePass = (e) =>{
    setPass(e.target.value)
    console.log(pass)
  }
  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(`Email ${email}, Senha ${pass}`)
  }

  return (
    <LoginStyle>
      <aside>
        <div>
          <img src={logo} alt="Be The Hero" />
        </div>
        <form onSubmit={handleSubmit}>
          <h2>Faça seu login</h2>
            <TextField onChange={handleEmail} value={email} placeHolder='Email' width='280px' height='50px'/>
            <PasswordField onChange={handlePass} value={pass}  placeHolder='Senha' width='280px' height='50px'/>
            <Button type='submit' color='#FFF' bgColor='#E02041' width='280px' height='50px'>Entrar</Button>
          <p>
            <img src={arrow} alt="Não tenho cadastro" />
            <Link to='/register'>Não tenho cadastro</Link>
          </p>
        </form>
      </aside>
      <section>
        <img src={people} alt="Ilustração com pessoas" />
      </section>
    </LoginStyle>
  )
}

export default Login