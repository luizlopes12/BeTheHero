import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import { firebase } from '../../services/firebase'
const Home = () => {
    // Buscando dados no banco, fazendo um filtro para pegar todos os casos registrados em todas as ONGs

    const [cases, setCases] = useState([])
    const ref = firebase.database().ref('ONGs/')
    useEffect(()=>{
      ref.on('value', async(snapshot) => {
        const registeredONGs = Object.entries(snapshot.val()).map(item=>item[1]).map(opa=>opa.cases)
        setCases(registeredONGs.map(item=> Object.entries(item!== undefined && item).map(seila=>seila[1]).map(opa=>opa)))
      }, (errorObject) => {
        console.log('The read failed: ' + errorObject.name);
      });
    },[])
    
  return (
    <>
    <Header/>
    <ul>
      {cases.map(item=>item.map(value=>{
        return <li key={value.id}>{value.title}</li>
      }))}
    </ul>
    </>
  )
}

export default Home