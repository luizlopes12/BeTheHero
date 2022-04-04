import styled from "styled-components";

export const FieldStyle = styled.input`
  background: #fff;
  border: 1px solid #dcdce5;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  font-size: 0.9em;
  padding: 5px;
  border-radius: 8px;
  &::placeholder {
    color: #a8a8b3;
  }
`;
