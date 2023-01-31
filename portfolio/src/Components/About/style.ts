import styled from "styled-components";

export const AboutStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  background-color: ${({ theme }) => theme.colors.first.main};

  figure,
  figure > img {
    height: 250px;
    width: 220px;

    img {
      object-fit: cover;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 20px;

    font: ${({ theme }) => theme.fonts.title.two};
    color: ${({ theme }) => theme.colors.fixed.white};
    h2 {
      text-align: center;
    }
    p {
      font: ${({ theme }) => theme.fonts.text.two};
      color: ${({ theme }) => theme.colors.grey.five};
      text-align: justify;
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    gap: 80px;

    div {
      h2 {
        text-align: start;
      }
    }
  }
`;
