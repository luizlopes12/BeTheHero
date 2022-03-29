import styled from 'styled-components'

export const ListStyle = styled.ul`
    max-width: 1100px;
    margin: auto;
    list-style: none;
    display: flex;
    justify-content: space-between;
    img{
        width: 60px;
        height: 60px;
        margin: 20px auto;
    }
    @media screen and (max-width: 1000px){
        margin: 0 10px;
    }
    @media screen and (max-width: 800px){
        flex-direction: column;
        align-items: center;
    }
`;