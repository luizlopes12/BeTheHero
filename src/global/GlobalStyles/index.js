import { createGlobalStyle } from "styled-components";

const primary = "#F0F0F5";

const GlobalStyle = createGlobalStyle`
    *,body{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
        font-family: 'Roboto', sans-serif;
    }

    body{
        background: ${primary};
    }
`;

export default GlobalStyle;
