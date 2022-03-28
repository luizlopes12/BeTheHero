import React from 'react'
import { FieldStyle } from './styled'
const TextArea = ({placeHolder, width, height, onChange, value}) => {
  return (
    <FieldStyle type='password' placeholder={placeHolder} width={width} height={height} onChange={onChange} value={value}></FieldStyle>
  )
}

export default TextArea