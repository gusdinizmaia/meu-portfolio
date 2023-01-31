import styled from "styled-components";
import { ButtonStyle } from "../../styles/theme";

interface iTechStyle {
  colorTech: boolean;
}

export const FilterProjectsStyle = styled.ul`
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  gap: 20px;
  overflow-x: scroll;

  padding: 10px;
  border-radius: ${({ theme }) => theme.border.radius.one};
  background-color: ${({ theme }) => theme.colors.fifth.main};

  @media (min-width: 1024px) {
    overflow-x: hidden;
  }

  ::-webkit-scrollbar-track {
    border-radius: ${({ theme }) =>
      ` 0 0 ${theme.border.radius.one} ${theme.border.radius.one}`};
  }
`;

export const TechStyle = styled.li<iTechStyle>`
  ${({ theme, colorTech }) =>
    ButtonStyle(
      colorTech ? theme.colors.second.main : theme.colors.fourth.main,
      theme.colors.fixed.white
    )}
  width: max-content;

  :hover {
    color: ${({ theme }) => theme.colors.fixed.white};
  }
`;
