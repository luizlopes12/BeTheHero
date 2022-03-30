import React from 'react'
import { HeaderStyle } from './styled'
import { Link } from 'react-router-dom'
import logo from '../../img/Logo.svg'
const Header = ({quantity}) => {
  return (
    <HeaderStyle>
        <>
        <div>
        <div>
            <Link to='/'><img src={logo} alt="Be The Hero" /></Link>
        </div>
          <span>{quantity > 0 && `Total de ${quantity} casos`}</span>
        </div>
          <aside>
              <h1>Bem-vindo!</h1>
              <span>Escolha um dos casos abaixo e salve o dia.</span>
          </aside>
        </>
  </HeaderStyle>
  )
}

export default Header