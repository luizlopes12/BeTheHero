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
    h2{
      margin-bottom: 10px;
    }
    div {
      display: flex;
      flex-direction: column;
      gap: 10px;
      img {
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
        img {
          width: 16px;
          margin: 0;
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
`;
