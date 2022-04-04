import styled from "styled-components";

export const UserItem = styled.li`
  background-color: #fff;
  width: 48%;
  margin: 10px 0;
  border-radius: 8px;
  height: 280px;
  padding: 20px;
  div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  .desc {
    word-wrap: break-word;
    p {
      width: 100%;
    }
  }
  p {
    font-weight: 500;
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 48%;
    span {
      font-size: 0.9em;
      font-weight: 500;
      color: #737380;
    }
  }
  hr {
    border: 0.5px solid #ccc;
    margin-top: 10px;
    margin-bottom: 5px;
  }
  a {
    color: #e02041;
    text-decoration: none;
    font-weight: 500;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 0.2s ease-in-out;
    img {
      width: 25px;
      margin: 0;
    }
  }
  a:hover {
    filter: brightness(0.8);
  }
  @media screen and (max-width: 800px) {
    margin: 10px 0;
    width: 100%;
    height: max-content;
    .desc {
      display: none;
    }
  }
`;

export const AdminItem = styled.li`
  background-color: #fff;
  width: 48%;
  margin: 10px 0;
  border-radius: 8px;
  padding: 15px 20px;
  div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    img {
      margin: 0;
      width: 25px;
      cursor: pointer;
    }
  }
  .desc {
    word-wrap: break-word;
    p {
      width: 100%;
    }
  }
  p {
    font-weight: 500;
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 48%;
    span {
      font-size: 0.9em;
      font-weight: 500;
      color: #737380;
    }
  }

  hr {
    border: 0.5px solid #ccc;
    margin-top: 10px;
    margin-bottom: 5px;
  }
  a {
    color: #e02041;
    text-decoration: none;
    font-weight: 500;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 0.2s ease-in-out;
    img {
      width: 25px;
      margin: 0;
    }
  }
  a:hover {
    filter: brightness(0.8);
  }
  @media screen and (max-width: 800px) {
    margin: 10px 0;
    width: 100%;
    height: max-content;
  }
`;
