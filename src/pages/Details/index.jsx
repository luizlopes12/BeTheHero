import React from "react";
import { DetailsStyle } from "./styled";
import { useSelector } from "react-redux";
import Header from "../../components/Header";
import Button from "../../components/Button";
const Details = () => {
  const caseInfo = useSelector((state) => state.caseData);
  const sendWhatsAppMessage = () => {
    let url = `https://web.whatsapp.com/send?phone=${
      caseInfo.phone
    }&text=${encodeURI(
      `Olá, gostaria de ajudar financeiramente no caso ${caseInfo.title}`
    )}`;
    window.open(url);
  };

  const handleCopyEmail = () =>{
    navigator.clipboard.writeText(caseInfo.email).then(()=>{
      alert("Email copiado!")
    })
  }
  return (
    <>
      <Header />
      <DetailsStyle>
        <section>
          <div>
            <p>
              Caso: <span>{caseInfo.title}</span>
            </p>
            <p>
              ONG: <span>{caseInfo.ongName}</span>
            </p>
          </div>
          <div className="desc">
            <p>
              Descrição:
              <span>{caseInfo.description}</span>
            </p>
          </div>
          <p>
            Valor: <span>R$ {caseInfo.price}</span>
          </p>
        </section>
        <section>
          <div>
            <h2>Salve o dia! Seja o herói desse caso.</h2>
          </div>
          <div className="contact">
            <Button
              color="#FFF"
              bgColor="#E02041"
              width="40%"
              height="50px"
              onClick={sendWhatsAppMessage}
            >
              Entre em contato via WhatsApp
            </Button>
            <Button
              color="#FFF"
              bgColor="#E02041"
              width="40%"
              height="50px"
              onClick={handleCopyEmail}
            >
              {caseInfo.email}
            </Button>
          </div>
        </section>
      </DetailsStyle>
    </>
  );
};

export default Details;
