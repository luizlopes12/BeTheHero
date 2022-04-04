import React, { useEffect, useState } from 'react'
import { firebase } from '../../services/firebase'
import CasesList from '../../components/CasesList'
import CaseItem from '../../components/CaseItem'
import { useSelector } from 'react-redux'
import Header from '../../components/Header'
const Admin = () => {
  const ongRef = useSelector(state => state.userData[0])
  const [cases, setCases] = useState([]);
  // Buscando dados no banco, fazendo um filtro para pegar todos os casos registrados em todas as ONGs
  useEffect(() => {
    const getData = () => {
      const ref = firebase.database().ref(`ONGs/${ongRef}`);
      ref.on(
        "value",
         (snapshot) => {
          setCases(Object.entries(snapshot.val().cases))
        },
        (errorObject) => {
          console.log("The read failed: " + errorObject.name);
        }
      );
    };
    getData();
  }, []);
  return (
      <>
        <Header/>
        <CasesList>
        {cases.map((casesData) => (
          <CaseItem value={casesData}/>

        ))}
        </CasesList>
      </>
  )
}

export default Admin