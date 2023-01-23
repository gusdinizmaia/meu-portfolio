import styled from "styled-components";

interface iTechStyle {
  colorTech: boolean;
}

export const FilterProjectsStyle = styled.ul`
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;

  padding: 10px 20px;
  border-radius: ${({ theme }) => theme.border.radius.one};
  background-color: ${({ theme }) => theme.colors.fifth.main};
`;

export const TechStyle = styled.li<iTechStyle>`
  background-color: ${({ theme, colorTech }) =>
    colorTech ? theme.colors.second.main : theme.colors.fourth.main};
`;
