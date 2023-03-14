import styled from "styled-components";

export const DescriptionStyle = styled.section`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  position: relative;

  background-color: ${({ theme }) => theme.colors.third.main};

  p {
    color: ${({ theme }) => theme.colors.grey.one};
    font: ${({ theme }) => theme.fonts.text.two};
    text-align: justify;

    *:not(strong) {
      color: ${({ theme }) => theme.colors.first.main};
    }
    strong {
      color: ${({ theme }) => theme.colors.fixed.black};
    }
  }

  @media (min-width: 768px) {
    p {
      width: 60%;
    }
  }
`;
