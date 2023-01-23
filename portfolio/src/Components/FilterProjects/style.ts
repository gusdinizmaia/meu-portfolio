import styled from "styled-components";

export const FilterProjectsStyle = styled.ul`
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;

  padding: 10px 20px;
  border-radius: ${({ theme }) => theme.border.radius.one};

  background-color: ${({ theme }) => theme.colors.fifth.main};
`;
