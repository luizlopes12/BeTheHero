import React from 'react'
import { ItemStyle } from './styled'
const CaseItem = ({value}) => {
  return (
    <ItemStyle>
        <div>
            <p>Caso: <span>{value.title}</span></p>
            <p>ONG: <span>{value.ongName}</span></p>
        </div>
        <div className='desc'>
        <p>Descrição:
            <span>{value.description.substring(0, 110)+'...'}</span>
        </p>
        </div>
        <p>Valor: <span>R$ {value.price}</span></p>
        <hr/>
    </ItemStyle>
  )
}

export default CaseItem