import React, {useState} from 'react'
import { RegisterStyle } from './styled'
import TextField from '../../components/TextField'
import Button from '../../components/Button'
import PasswordField from '../../components/PasswordField'
import logo from '../../img/Logo.svg'
import arrow from '../../img/voltar-arrow.svg'
import { Link } from 'react-router-dom'
const Register = () => {
  const [ongName, setOngName] = useState('')
  const [whatsApp, setWhatsApp] = useState('')
  const [city, setCity] = useState('')
  const [uf, setUf] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleOngName = (e) =>{
    setOngName(e.target.value)
  }
  const handleOngWhatsApp = (e) =>{
    setWhatsApp(e.target.value)
  }
  const handleOngCity = (e) =>{
    setCity(e.target.value)
  }
  const handleOngUF = (e) =>{
    setUf(e.target.value)
  }
  const handleOngEmail = (e) =>{
    setEmail(e.target.value)
  }
  const handleOngPass = (e) =>{
    setPassword(e.target.value)
  }

  const formSubmit = (e) =>{
    e.preventDefault()
    // console.log({
    //   ongName: ongName.trim(),
    //   whatsApp: whatsApp.trim(),
    //   city: city.trim(),
    //   uf: uf.trim(),
    //   email: email.trim(),
    //   password: password.trim()
    // })
  }
  return (
    <RegisterStyle>
      <aside>
        <div>
          <img src={logo} alt="Be The Hero" />
        </div>
        <div>
          <h2>Cadastro</h2>
          <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
        </div>
        <span>
          <img src={arrow} alt="Voltar para o login" />
          <Link to='/login'>Voltar para o login</Link>
        </span>
      </aside>
      <form onSubmit={formSubmit}>
        <TextField onChange={handleOngName} value={ongName} placeHolder='Nome da ONG' width='350px' height='50px'/>
        <TextField onChange={handleOngWhatsApp} value={whatsApp} placeHolder='WhatsApp' width='350px' height='50px'/>
        <div>
        <TextField onChange={handleOngCity} value={city} placeHolder='Cidade' width='300px' height='50px'/>
        <TextField onChange={handleOngUF} value={uf} placeHolder='UF' width='50px' height='50px'/>
        </div>
        <TextField onChange={handleOngEmail} value={email} placeHolder='Email' width='350px' height='50px'/>
        <PasswordField onChange={handleOngPass} value={password} placeHolder='Senha' width='350px' height='50px'/>
        <Button type='submit' color='#FFF' bgColor='#E02041' width='350px' height='50px'>Cadastrar</Button>
      </form>
    </RegisterStyle>
  )
}

export default Register