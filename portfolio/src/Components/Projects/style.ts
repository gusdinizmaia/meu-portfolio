import styled from "styled-components";

export const ProjectsStyle = styled.section`
  h2 {
    color: ${({ theme }) => theme.color.fixed.white};
  }
  background-color: ${({ theme }) => theme.color.first.main};
`;
