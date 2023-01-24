import styled from "styled-components";

interface iTechStyle {
  colorTech: boolean;
}

export const FilterProjectsStyle = styled.ul`
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  gap: 20px;
  overflow-x: scroll;

  padding: 10px 20px;
  border-radius: ${({ theme }) => theme.border.radius.one};
  background-color: ${({ theme }) => theme.colors.fifth.main};

  @media (min-width: 1024px) {
    overflow-x: hidden;
  }
`;

export const TechStyle = styled.li<iTechStyle>`
  background-color: ${({ theme, colorTech }) =>
    colorTech ? theme.colors.second.main : theme.colors.fourth.main};
`;
