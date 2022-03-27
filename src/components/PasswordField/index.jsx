import React from 'react'
import { FieldStyle } from './styled'
const PasswordField = ({placeHolder, width, height}) => {
  return (
    <FieldStyle type='password' placeholder={placeHolder} width={width} height={height}></FieldStyle>
  )
}

export default PasswordField