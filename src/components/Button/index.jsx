import React from "react";
import { ButtonStyle } from "./styled";

const Button = ({
  color,
  bgColor,
  children,
  width,
  height,
  type,
  outlined,
  onClick,
}) => {
  return (
    <ButtonStyle
      color={color}
      bgColor={bgColor}
      width={width}
      height={height}
      type={type}
      onClick={onClick}
      outlined={outlined}
    >
      {children}
    </ButtonStyle>
  );
};

export default Button;
