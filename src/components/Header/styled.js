import styled from 'styled-components'

export const HeaderStyle = styled.header`

        max-width: 1100px;
        margin: 20px auto;
        div{
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 10px;
            img{
                width: 150px;
            }
        }
        aside{
            margin-top: 10px;
        }
        span{
                font-size: 1em;
                font-weight: 500;
                color: #737380;
                img{
                    width: 25px;
                    height: 25px;
                    margin: auto;
                }
        }
        nav{
            display: flex;
            align-items: center;
            gap: 5px
        }
        
        @media screen and (max-width: 1024px){
            margin: 20px 10px;
            div{
                img{
                    width: 100px;
                }
            }
            aside{
                margin-top: 20px;
                max-width: 65%;
            }
            span{
                font-size: .9em;
                font-weight: 500;
                color: #737380;
            }
            nav{
                display: none;
            }
        }

`;