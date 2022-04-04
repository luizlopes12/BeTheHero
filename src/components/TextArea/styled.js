import styled from "styled-components";

export const FieldStyle = styled.textarea`
  background: #fff;
  border: 1px solid #dcdce5;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  font-size: 0.9em;
  padding: 5px;
  border-radius: 8px;
  resize: none;
  &::placeholder {
    color: #a8a8b3;
  }
`;
