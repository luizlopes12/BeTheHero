import React from 'react'
import {ButtonStyle} from './styled'


const Button = ({color, bgColor, children}) => {
  return (
    <ButtonStyle color={color} bgColor={bgColor}> {children} </ButtonStyle>
  )
}

export default Button