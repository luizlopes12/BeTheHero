import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import CasesList from "../../components/CasesList";
import CaseItem from "../../components/CaseItem";
import { firebase } from "../../services/firebase";
const Home = () => {
  const [cases, setCases] = useState([]);
  // Buscando dados no banco, fazendo um filtro para pegar todos os casos registrados em todas as ONGs
  useEffect(() => {
    const getData = () => {
      const ref = firebase.database().ref("ONGs/");
      ref.on(
        "value",
         (snapshot) => {
          const registeredONGs = Object.entries(snapshot.val())
            .map((item) => item[1])
            .map((opa) => opa.cases);
          setCases(
            registeredONGs.map((ongCases) =>
              Object.entries(ongCases !== undefined && ongCases)
                .map((casesArray) => casesArray[1])
                .map((caseItem) => caseItem)
            )
          );
        },
        (errorObject) => {
          console.log("The read failed: " + errorObject.name);
        }
      );
    };
    getData();
  }, []);

  // Contando o numero total de casos para mostrar no header
  let casesCountByOng = cases.map((item) => item.length);
  let totalCasesCount;
  if (casesCountByOng.length > 0) {
    totalCasesCount = casesCountByOng.reduce((count, i) => {
      return count + i;
    });
  }

  return (
    <>
      <Header quantity={totalCasesCount} />
      <CasesList>
        {cases.map((item) =>
          item.map((value) => <CaseItem key={value.id} value={value} />)
        )}
      </CasesList>
    </>
  );
};

export default Home;
