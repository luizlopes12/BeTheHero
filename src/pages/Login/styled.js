import styled from "styled-components";

export const LoginStyle = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 80%;
  min-height: 100vh;
  margin: auto;
  aside {
    display: flex;
    flex-direction: column;
    justify-content: center;
    h2 {
      margin-bottom: 10px;
    }
    div img{
      width: 200px;
      margin-bottom: 60px;
    }
    form {
      display: flex;
      flex-direction: column;
      gap: 10px;
      form img {
        margin-bottom: 80px;
        width: 200px;
      }
      p {
        display: flex;
        align-items: center;
        margin-top: 20px;
        gap: 5px;
        font-size: 0.9em;
        font-weight: 500;
        width: fit-content;
        padding-bottom: 2px;
        border-bottom: 2px solid transparent;
        transition: all .2s ease-in-out;
        &:hover{
          border-bottom: 2px solid #000;
        }
        img {
          width: 16px;
          margin: 0;
        }
        a{
          text-decoration: none;
          color: #000;
        }
      }
    }
  }

  section {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 650px;
    }
  }

  @media screen and (max-width: 940px) {
    aside {
      div {
        img {
          margin: 20px 0 15px;
        }
        p {
          justify-content: center;
        }
      }
    }
    section {
      display: none;
    }
  }
`;
