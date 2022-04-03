import styled from 'styled-components'

export const UserHeader = styled.header`
        max-width: 1100px;
        margin: 20px auto;
        div{
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 10px;
            img{
                width: 150px;
                cursor: pointer;
            }
        }

        p{
            font-weight: 500;
            color: #737380;
            display: flex;
            flex-direction: row-reverse;
            justify-content: center;
            align-items: center;
            gap: 10px;
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
            margin: 10px 10px;
            div{
                img{
                    width: 100px;
                }
            }
            p{
            font-size: .9em;
            padding: 15px 0 0;
            flex-direction: column;
            align-items: flex-end;
            gap: 10px;
            button{
                width: 100px;
                height: 35px;
            }
        }
            aside{
                margin-top: 5px;
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

export const AdminHeader = styled.header`
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
        a{
            text-decoration: none;
            color: #fff;       
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