import styled from 'styled-components'

export const ButtonStyle = styled.button`
    width: 250px;
    height: 50px;
    border: none;
    font-size: .9em;
    font-weight: 500;
    border-radius: 8px;
    background-color: ${props=> props.bgColor};
    color: ${props=> props.color};
    transition: filter .2s ease-in-out;
    cursor: pointer;


    &:hover{
        filter: brightness(.85);
    }
`