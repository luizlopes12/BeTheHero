import React, { useState } from "react";
import { firebase } from "../../services/firebase";
import { RegisterStyle } from "./styled";
import setUserData from "../../store/actions/setUserData";
import { useDispatch } from 'react-redux'
import TextField from "../../components/TextField";
import Button from "../../components/Button";
import PasswordField from "../../components/PasswordField";
import logo from "../../img/Logo.svg";
import arrow from "../../img/voltar-arrow.svg";
import { Link, useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [ongName, setOngName] = useState("");
  const [whatsApp, setWhatsApp] = useState("");
  const [city, setCity] = useState("");
  const [uf, setUf] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState('')
  const handleOngName = (e) => {
    setOngName(e.target.value);
  };
  const handleOngWhatsApp = (e) => {
    setWhatsApp(e.target.value);
  };
  const handleOngCity = (e) => {
    setCity(e.target.value);
  };
  const handleOngUF = (e) => {
    setUf(e.target.value);
  };
  const handleOngEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleOngPass = (e) => {
    setPassword(e.target.value);
  };

  const formSubmit = async(e) => {
    e.preventDefault();
    // Cadastrando ong no banco
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async() => {
        // Inserindo dados da ong no banco, utilizando o id dela
        await firebase
            .database()
            .ref(`ONGs`)
            .push(
              {
                ongName: ongName,
                email: email,
                phone: whatsApp,
                city: city,
                uf: uf,
              }
            );
            const documents = await firebase.database().ref('ONGs').get().then(snapshot => (snapshot.val()))
            const documentsArray = Object.entries(await documents)
            const ongData = documentsArray.find(([key, value])=> value.email === email && value)
            dispatch(setUserData(ongData))
            navigate(`/admin`)
      })
      .catch((error) => {
        setErrorMessage('Campos preenchidos incorretamente');
      });
  };
  return (
    <RegisterStyle>
      <aside>
        <div>
          <img src={logo} alt="Be The Hero" />
        </div>
        <div>
          <h2>Cadastro</h2>
          <p>
            Fa??a seu cadastro, entre na plataforma e ajude pessoas a encontrarem
            os casos da sua ONG.
          </p>
        </div>
        <span>
          <img src={arrow} alt="Voltar para o login" />
          <Link to="/login">Voltar para o login</Link>
        </span>
      </aside>
      <form onSubmit={formSubmit}>
        <TextField
          onChange={handleOngName}
          value={ongName}
          placeHolder="Nome da ONG"
          width="350px"
          height="50px"
        />
        <TextField
          onChange={handleOngWhatsApp}
          value={whatsApp}
          placeHolder="WhatsApp"
          width="350px"
          height="50px"
        />
        <div>
          <TextField
            onChange={handleOngCity}
            value={city}
            placeHolder="Cidade"
            width="300px"
            height="50px"
          />
          <TextField
            onChange={handleOngUF}
            value={uf}
            placeHolder="UF"
            width="50px"
            height="50px"
          />
        </div>
        <TextField
          onChange={handleOngEmail}
          value={email}
          placeHolder="Email"
          width="350px"
          height="50px"
        />
        <PasswordField
          onChange={handleOngPass}
          value={password}
          placeHolder="Senha"
          width="350px"
          height="50px"
        />
        {<p className="error">{errorMessage}</p>}
        <Button
          type="submit"
          color="#FFF"
          bgColor="#E02041"
          width="350px"
          height="50px"
        >
          Cadastrar
        </Button>
      </form>
    </RegisterStyle>
  );
};

export default Register;
