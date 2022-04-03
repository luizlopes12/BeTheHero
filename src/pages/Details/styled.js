import styled from 'styled-components'

export const DetailsStyle = styled.section`
section{
    background-color: #fff;
    width: 60%;
    margin: 10px auto;
    border-radius: 8px;
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
        width: 48%;
        span{
            font-size: .9em;
            font-weight: 500;
            color: #737380;
        }
    }
    hr{
        border: .5px solid #ccc;
        margin-top: 10px;
        margin-bottom: 5px;
    }
    a{
        color: #E02041;
        text-decoration: none;
        font-weight: 500;
        display: flex;
        justify-content: space-between;
        align-items: center;
        transition: all .2s ease-in-out;
        img{
            width: 25px;
            margin: 0;
        }
    }
    h2{
        font-size: 1.2em;
        margin: auto;
    }
    .contact{
        display: flex;
        justify-content: center;
        gap: 10px;
    }
    a:hover{
        filter: brightness(.8);
    }
    @media screen and (max-width: 800px){
        margin: 10px auto;
        width: 95%;
        height: max-content;
        h2{
        font-size: 1em;
        }
        .contact{
        button{
            width: 90%;
        }
    }
    }
}

`;