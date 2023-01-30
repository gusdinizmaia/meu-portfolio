import styled from "styled-components";
import { ButtonStyle } from "../../styles/theme";

export const ButtonsNavStyle = styled.nav`
  display: flex;
  gap: 20px;
  width: fit-content;

  a {
    ${({ theme }) =>
      ButtonStyle(theme.colors.fourth.main, theme.colors.fixed.white)}
  }
`;
