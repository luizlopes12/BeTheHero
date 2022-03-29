import React from 'react'
import { ListStyle } from './styled'
import loading from '../../img/loadingRed.svg'
const CasesList = ({children}) => {
  return (
    <ListStyle>
        {children.length !== 0 ? (children):(<img src={loading} alt="Loading" />)}
    </ListStyle>
  )
}

export default CasesList