import styled, { keyframes } from "styled-components";
import { ButtonStyle } from "../../styles/theme";

const buttonsAnimation = keyframes`

 to{
    opacity:0;
  }
  from{
    opacity: 1;
  }
`;

export const ButtonsNavStyle = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  position: relative;
  top: -25px;
  right: -25px;

  a {
    ${({ theme }) => ButtonStyle("fourth")}
    width: fit-content;
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    position: static;
    width: auto;
    height: auto;
    position: static;
  }
`;
