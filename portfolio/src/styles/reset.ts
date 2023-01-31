import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const ResetStyle = createGlobalStyle`

*{
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    border: 0;
    padding: 0;
    margin: 0;
}

ul{

    ::-webkit-scrollbar {
    width: auto;
    height: 14px;
  }
  ::-webkit-scrollbar-track {
    background: ${theme.colors.fourth.main};

  }
  ::-webkit-scrollbar-thumb {
    background-color: ${theme.colors.grey.four};
    border-radius: 20px;
    border: 3px solid ${theme.colors.fourth.main};
  }
}

*{
    scrollbar-width: thin;
    scrollbar-color: black transparent;

    ::-webkit-scrollbar {
    width: 8px;
  }

}

body{
    ::-webkit-scrollbar-track {
    background: ${theme.colors.grey.five};

  }
  ::-webkit-scrollbar-thumb {
    background-color: ${theme.colors.grey.three};
  }
}

textarea:focus, input:focus, select:focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
} 

#root,body{
    width: 100%;
    min-height: 100vh;
    max-width: 100%;
}

`;
