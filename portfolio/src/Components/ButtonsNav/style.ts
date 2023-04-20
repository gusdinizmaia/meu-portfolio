import styled from "styled-components";
import { ButtonStyle } from "../../styles/theme";

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
    ${ButtonStyle("fourth")}
    width: fit-content;
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    position: static;
    width: auto;
    height: auto;
  }
`;
