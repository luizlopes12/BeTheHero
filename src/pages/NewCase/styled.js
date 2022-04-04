import styled from "styled-components";

export const NewCaseStyle = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 100vh;
  max-width: 1000px;
  border-radius: 8px;
  padding: 80px;
  margin: 90px auto;
  box-shadow: 0px 0px 40px 20px rgba(0, 0, 0, 0.1);
  aside {
    display: flex;
    flex: 1;
    flex-direction: column;
    div img {
      margin-bottom: 60px;
      width: 200px;
    }
    h2 {
      font-size: 2em;
      font-weight: 500;
      margin-bottom: 10px;
    }
    p {
      font-size: 1em;
      color: #737380;
      font-weight: 400;
      line-height: 1.5em;
    }
    span {
      display: flex;
      align-items: center;
      width: fit-content;
      gap: 5px;
      margin-top: 50px;
      font-weight: 500;
      font-size: 0.9em;
      padding-bottom: 2px;
      border-bottom: 2px solid transparent;
      transition: all 0.2s ease-in-out;
      &:hover {
        border-bottom: 2px solid #000;
      }
    }
    span img {
      width: 18px;
    }
    span a {
      text-decoration: none;
      color: #000;
    }
  }
  form {
    display: flex;
    align-items: end;
    flex: 1;
    flex-direction: column;
    gap: 5px;
    div {
      display: flex;
      gap: 5px;
    }
  }

  @media screen and (max-width: 940px) {
    display: block;
    max-height: fit-content;
    max-width: 100%;
    width: 100%;
    padding: 20px 0 50px;
    margin: auto;
    box-shadow: none;
    aside {
      padding: 20px 0 0;
      width: 90%;
      margin: 0 auto 20px;
      div img {
        margin-bottom: 20px;
        width: 180px;
      }
      h2 {
        font-size: 1.5em;
        font-weight: 500;
        margin-bottom: 5px;
      }
      span {
        margin-top: 20px;
      }
    }
    form {
      display: flex;
      align-items: center;
      width: 100%;
      flex: 1;
      flex-direction: column;
      gap: 5px;
      div {
        display: flex;
        width: 90%;
      }
      input,
      textarea {
        width: 90%;
      }
      button {
        width: 90%;
      }
    }
  }
`;
