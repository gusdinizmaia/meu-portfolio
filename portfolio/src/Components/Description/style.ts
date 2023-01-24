import styled from "styled-components";

export const DescriptionStyle = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.third.main};

  p {
    font: ${({ theme }) => theme.fonts.text.two};
    text-align: justify;
  }
`;
