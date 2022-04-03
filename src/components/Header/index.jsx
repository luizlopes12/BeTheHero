import React from "react";
import { AdminHeader, UserHeader } from "./styled";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import logo from "../../img/Logo.svg";
import arrow from "../../img/voltar-arrow.svg";
import Button from "../../components/Button";
import logout from "../../img/logout.svg";
import { useSelector } from "react-redux";
const Header = ({ quantity }) => {
  const loggedIn = useSelector((state) => state.userData);
  const caseData = useSelector((state) => state.caseData);
  const navigate = useNavigate();
  const location = useLocation().pathname;
  const name = loggedIn ? loggedIn[1].ongName : "";
  return (
    <>
      {loggedIn ? (
        <AdminHeader>
          <div>
            <img src={logo} alt="Be The Hero" />
            <p>Bem vinda, {name}</p>
          </div>
          <nav>
            <Button color="#FFF" bgColor="#E02041" width="210px" height="50px">
              <Link to="/newcase">Cadastrar novo caso</Link>
            </Button>
            <Button
              color="#E02041"
              bgColor="transparent"
              width="50px"
              height="50px"
              outlined
            >
              <img src={logout} alt="Sair" />
            </Button>
          </nav>
        </AdminHeader>
      ) : (
        <UserHeader>
          {caseData && location !== "/" ? (
            <>
              <div>
                <div>
                  <Link to="/">
                    <img src={logo} alt="Be The Hero" />
                  </Link>
                </div>
                <span>
                  <img src={arrow} alt="Voltar" onClick={() => navigate(-1)} />
                </span>
              </div>
            </>
          ) : (
            <>
              <div>
                <div>
                  <Link to="/">
                    <img src={logo} alt="Be The Hero" />
                  </Link>
                </div>
                <p>
                <Link to='/login'>
                  <Button width='120px' height='40px' color='#FFF' bgColor='#E02041'>Login</Button>
                </Link>
                  {quantity > 0 && `Total de ${quantity} casos`}
                </p>
              </div>
              <aside>
                <h1>Bem-vindo!</h1>
                <span>Escolha um dos casos abaixo e salve o dia.</span>
              </aside>
            </>
          )}
        </UserHeader>
      )}
    </>
  );
};

export default Header;
