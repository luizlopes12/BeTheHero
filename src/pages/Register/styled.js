import styled from 'styled-components'

export const RegisterStyle = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    max-height: 100vh;
    max-width: 70%;
    border-radius: 8px;
    padding: 80px;
    margin: 90px auto;
    box-shadow: 0px 0px 40px 20px rgba(0,0,0,0.1);
    aside{
        display: flex;
        flex: 1;
        flex-direction: column;
        div img{
            margin-bottom: 60px;
            width: 200px;
        }
        h2{
            font-size: 2em;
            font-weight: 500;
            margin-bottom: 10px;
        }
        p{
            font-size: 1em;
            color: #737380;
            font-weight: 400;
            line-height: 1.5em;
        }
        span{
            display: flex;
            align-items: center;
            width: fit-content;
            gap: 5px;
            margin-top: 50px;
            font-weight: 500;
            font-size: .9em;
            padding-bottom: 2px;
            border-bottom: 2px solid transparent;
            transition: all .2s ease-in-out;
            &:hover{
                border-bottom: 2px solid #000;
            }
        }
        span img{
            width: 18px;
        }
        span a{
            text-decoration: none;
            color: #000;
        }
    }
    form{
        display: flex;
        align-items: end;
        flex: 1;
        flex-direction: column;
        gap: 5px;
    }
`;