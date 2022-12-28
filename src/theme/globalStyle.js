import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

// Réinitialisation
html, body {
    margin:0;
    padding:0;
}

body {
    margin:auto;
    width:90%;
    max-width:900px;
    font-family: 'Josefin Sans', cursive;
}

`;

export default GlobalStyle;
