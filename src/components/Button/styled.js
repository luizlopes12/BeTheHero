import styled from "styled-components";

export const ButtonStyle = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: ${(props) => (props.outlined ? "1px solid #ccc" : "none")};
  font-size: 0.9em;
  font-weight: 500;
  border-radius: 8px;
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  transition: filter 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    filter: brightness(0.85);
  }
`;
