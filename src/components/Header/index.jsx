import React from 'react'
import { HeaderStyle } from './styled'
import logo from '../../img/Logo.svg'
const Header = () => {
  return (
    <HeaderStyle>
        <>
        <div>
        <div>
            <img src={logo} alt="Be The Hero" />
        </div>
          <span>Total de 0 casos</span>
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