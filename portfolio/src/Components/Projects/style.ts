import styled from "styled-components";

export const ProjectsStyle = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;

  h2 {
    font: ${({ theme }) => theme.fonts.title.two};
    color: ${({ theme }) => theme.colors.fixed.white};
    text-align: center;
    margin-bottom: 15px;
  }
  background-color: ${({ theme }) => theme.colors.first.main};
`;
