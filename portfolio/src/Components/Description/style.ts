import styled from "styled-components";

export const DescriptionStyle = styled.section`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  position: relative;

  background-color: ${({ theme }) => theme.colors.third.main};

  p {
    font: ${({ theme }) => theme.fonts.text.two};
    text-align: justify;
  }

  @media (min-width: 768px) {
    p {
      width: 60%;
    }
  }
`;
