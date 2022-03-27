import React from "react";
import { ButtonStyle } from "./styled";

const Button = ({ color, bgColor, children, width, height, type }) => {
  return (
    <ButtonStyle
      color={color}
      bgColor={bgColor}
      width={width}
      height={height}
      type={type}
    >
      {children}
    </ButtonStyle>
  );
};

export default Button;
