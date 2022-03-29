import React from "react";
import { ItemStyle } from "./styled";
import entrar from "../../img/entrar.svg";
import { Link } from "react-router-dom";
const CaseItem = ({ value }) => {
  return (
    <ItemStyle>
      <div>
        <p>
          Caso: <span>{value.title}</span>
        </p>
        <p>
          ONG: <span>{value.ongName}</span>
        </p>
      </div>
      <div className="desc">
        <p>
          Descrição:
          <span>
            {value.description.length > 110
              ? value.description.substring(0, 110) + "..."
              : value.description}
          </span>
        </p>
      </div>
      <p>
        Valor: <span>R$ {value.price}</span>
      </p>
      <hr />
      <Link to="/">
        Ver mais detalhes
        <img src={entrar} alt="Mais detalhes" />
      </Link>
    </ItemStyle>
  );
};

export default CaseItem;
