import React from 'react'
import { firebase } from '../../services/firebase'
import Button from '../../components/Button'
import PasswordField from '../../components/PasswordField'
import TextField from '../../components/TextField'
import logo from '../../img/Logo.svg'
import arrow from '../../img/entrar-arrow.svg'
import people from '../../img/People.svg'
import { LoginStyle } from './styled'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'



const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [ongId, setOngId] = useState('')
  const handleEmail = (e) =>{
    setEmail(e.target.value)
    console.log(email)
  }
  const handlePass = (e) =>{
    setPassword(e.target.value)
    console.log(password)
  }
  const handleSubmit = async(e) =>{
    e.preventDefault()
    await firebase.auth().signInWithEmailAndPassword(email, password)
    .then(async(response) => {
      // Arrumar depois
      // Preciso fazer um filtro nesse obj para pegar o id da collection q tem o email igual ao email de login
      console.log(await firebase.database().ref('ONGs').get().then(snapshot => snapshot.val()))
    })
    .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode)
    console.log(errorMessage)
    });
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
            <PasswordField onChange={handlePass} value={password}  placeHolder='Senha' width='280px' height='50px'/>
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