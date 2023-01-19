import { createGlobalStyle } from "styled-components";

export const reset = createGlobalStyle`

*{
    box-sizing: border-box;
    text-decoration: none;
    list-style: 0;
    border: 0;
    padding: 0;
    margin: 0;
}

textarea:focus, input:focus, select:focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
} 

`;
