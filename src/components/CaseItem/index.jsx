import React from "react";
import { UserItem, AdminItem } from "./styled";
import entrar from "../../img/entrar.svg";
import { firebase } from '../../services/firebase'
import deleteIcon from '../../img/apagar.svg'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import setCaseData from "../../store/actions/setCaseData";
const CaseItem = ({ value }) => {
  const loggedIn = useSelector(state => state.userData)
  const ongRef = loggedIn[0]
  const casesCode = value[0]
  const casesData = value[1]
  const dispatch = useDispatch()
  const caseDelete = (casesCode) =>{
    const caseLocation = firebase.database().ref(`ONGs/${ongRef}/cases/${casesCode}`)
    console.log(caseLocation.remove());
  }
  const getCaseDataToDetails = () =>{
    dispatch(setCaseData(casesData))
  }
  return (
    <>
    {loggedIn ? (
    <AdminItem>
      <div>
        <p>
          Caso: <span>{casesData.title}</span>
        </p>
          <img src={deleteIcon} alt="Excluir caso" onClick={()=>caseDelete(casesCode)}/>
      </div>
      <div className="desc">
        <p>
          Descrição:
          <span>
            {casesData.description.length > 110
              ? casesData.description.substring(0, 110) + "..."
              : casesData.description}
          </span>
        </p>
      </div>
      <p>
        Valor: <span>R$ {casesData.price}</span>
      </p>
    </AdminItem>
    ):(
      <UserItem>
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
      <Link to="/details" onClick={getCaseDataToDetails}>
        Ver mais detalhes
        <img src={entrar} alt="Mais detalhes" />
      </Link>
    </UserItem>
    )}

    </>

  );
};

export default CaseItem;
