import React, { useState } from "react";
import { firebase } from "../../services/firebase";
import { NewCaseStyle } from "./styled";
import { useSelector } from "react-redux";
import TextArea from "../../components/TextArea";
import TextField from "../../components/TextField";
import Button from "../../components/Button";
import logo from "../../img/Logo.svg";
import arrow from "../../img/voltar-arrow.svg";
import { Link } from "react-router-dom";
const NewCase = () => {
  const ongData = useSelector(state => state.userData)
  const ongRef = ongData && ongData[0]
  const ongContact = ongData && ongData[1]
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')

  const handleTitle = (e) =>{
    setTitle(e.target.value)
  }
  const handleDescription = (e) =>{
    setDescription(e.target.value)
  }
  const handlePrice = (e) =>{
    setPrice(e.target.value)
  }
  const formSubmit = (e) =>{
    e.preventDefault()
    firebase.database().ref(`/ONGs/${ongRef}/cases`).push({
        id: Math.floor(Math.random() * 10000),
        title: title,
        description: description,
        price: price,
        email: ongContact.email,
        phone: ongContact.phone,
        ongName: ongContact.ongName
    }).then(()=> {
    setTitle('')
    setDescription('')
    setPrice('')

    })
  }

  console.log(ongRef)

  return (
    <NewCaseStyle>
      <aside>
        <div>
          <img src={logo} alt="Be The Hero" />
        </div>
        <div>
          <h2>Cadastrar novo caso</h2>
          <p>
          Descreva o caso detalhadamente para encontrar um herói para resolver isso.
          </p>
        </div>
        <span>
          <img src={arrow} alt="Voltar para o login" />
          <Link to="/admin">Voltar para a home</Link>
        </span>
      </aside>
      <form onSubmit={formSubmit}>
        <TextField
          onChange={handleTitle}
          value={title}
          placeHolder="Titulo do caso"
          width="350px"
          height="50px"
        />
        <TextArea
          onChange={handleDescription}
          value={description}
          placeHolder="Descrição"
          width="350px"
          height="180px"
        />
        <TextField
            onChange={handlePrice}
            value={price}
            placeHolder="Valor em reais"
            width="350px"
            height="50px"
        />
        <div>
        <Button
          color="#000"
          width="125px"
          height="50px"
          outlined
        >
          Cancelar
        </Button>
        <Button
          type="submit"
          color="#FFF"
          bgColor="#E02041"
          width="220px"
          height="50px"
        >
          Cadastrar
        </Button>
        </div>
      </form>
    </NewCaseStyle>
  );
};

export default NewCase;
