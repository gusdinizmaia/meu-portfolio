import { createGlobalStyle } from "styled-components";

export const ResetStyle = createGlobalStyle`

*{
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    border: 0;
    padding: 0;
    margin: 0;
}

textarea:focus, input:focus, select:focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
} 

body{
    min-width: 100vw;
    min-height: 100vh;
    max-width: 100%;
}

`;
