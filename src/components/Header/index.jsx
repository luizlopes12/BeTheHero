import React from 'react'
import { HeaderStyle } from './styled'
import logo from '../../img/Logo.svg'
const Header = ({quantity}) => {
  return (
    <HeaderStyle>
        <>
        <div>
        <div>
            <img src={logo} alt="Be The Hero" />
        </div>
          <span>Total de {quantity > 1 ? `${quantity} casos`: `${quantity} casos`}</span>
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