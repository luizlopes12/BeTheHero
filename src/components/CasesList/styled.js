import styled from 'styled-components'

export const ListStyle = styled.ul`
    max-width: 1100px;
    margin: auto;
    list-style: none;
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 800px){
        flex-direction: column;
        align-items: center;
    }
`;