import React from "react";
import { FieldStyle } from "./styled";
const TextField = ({ placeHolder, width, height, onChange, value }) => {
  return (
    <FieldStyle
      placeholder={placeHolder}
      width={width}
      height={height}
      onChange={onChange}
      value={value}
    ></FieldStyle>
  );
};

export default TextField;
