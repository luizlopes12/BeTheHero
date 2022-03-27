import React from 'react'
import {ButtonStyle} from './styled'


const Button = ({color, bgColor, children, width, height}) => {
  return (
    <ButtonStyle color={color} bgColor={bgColor} width={width} height={height}> {children} </ButtonStyle>
  )
}

export default Button