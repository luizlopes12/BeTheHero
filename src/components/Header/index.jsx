import React from 'react'
import { HeaderStyle } from './styled'
import loading from '../../img/loadingWhite.svg'
import logo from '../../img/Logo.svg'
const Header = ({quantity}) => {
  return (
    <HeaderStyle>
        <>
        <div>
        <div>
            <img src={logo} alt="Be The Hero" />
        </div>
          <span>{quantity > 0 ? `Total de ${quantity} casos` : (<img src={loading}/>)}</span>
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