import styled from 'styled-components'

export const ItemStyle = styled.li`
    background-color: #fff;
    width: 48%;
    margin: 10px 0;
    cursor: pointer;
    border-radius: 8px;
    height: 280px;
    padding: 20px;
    div{
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    }
    .desc{
        word-wrap: break-word;
        p{
        width: 100%;
        }
    }
    p{
        font-weight: 500;
        display: flex;
        flex-direction: column;
        gap: 5px;
        width: 40%;
        span{
            font-size: .9em;
            font-weight: 500;
            color: #737380;
        }
    }
    hr{
        border: .5px solid #ccc;
        margin-top: 10px;
    }

    @media screen and (max-width: 800px){
        margin: 10px 0;
        width: 90%;
        height: max-content;
    }
`;