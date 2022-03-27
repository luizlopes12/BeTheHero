import React from 'react'
import { FieldStyle } from './styled'
const TextField = ({placeHolder, width, height}) => {
  return (
    <FieldStyle placeholder={placeHolder} width={width} height={height}></FieldStyle>
  )
}

export default TextField