import React from 'react'
import { ListStyle } from './styled'
const CasesList = ({children}) => {
  return (
    <ListStyle>
        {children}
    </ListStyle>
  )
}

export default CasesList