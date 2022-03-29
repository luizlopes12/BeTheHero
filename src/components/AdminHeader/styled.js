import styled from 'styled-components'

export const HeaderStyle = styled.header`
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 1200px;
        margin: 20px auto;
        div{
            display: flex;
            align-items: center;
            gap: 10px;
            img{
                width: 150px;
            }
            p{
                font-size: 1.1em;
                font-weight: 500;
            }
        }
        nav{
            display: flex;
            align-items: center;
            gap: 5px
        }
        
        @media screen and (max-width: 800px){
            header{
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 20px 10px;
            div{
                display: flex;
                align-items: center;
                gap: 10px;
                img{
                    width: 100px;
                }
                p{
                    display: none;
                }
            }
            span{
                font-size: .8em;
                font-weight: 500;
                color: #737380;
            }
            nav{
                display: none;
            }
        }
    }
`;