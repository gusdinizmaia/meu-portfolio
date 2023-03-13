import styled from "styled-components";

export const AboutStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  background-color: ${({ theme }) => theme.colors.first.main};

  position: relative;

  figure {
    display: flex;
    align-items: center;
    img {
      border-radius: 30px;
      height: 340px;
      width: 280px;
      object-fit: cover;
      margin: 0 auto;

      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      background-color: ${({ theme }) => theme.colors.fourth.main};
    }

    padding-bottom: 30px;
  }

  font: ${({ theme }) => theme.fonts.title.two};

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;

    h2 {
      width: 100%;
      text-align: center;
      background-color: ${({ theme }) => theme.colors.second.main};
      color: ${({ theme }) => theme.colors.first.main};
      font: ${({ theme }) => theme.fonts.title.one};
      padding: 10px 0;
      ::after {
        display: block;
        content: "Front-end Developer";
        font: ${({ theme }) => theme.fonts.title.three};
        margin-top: 10px;
      }
    }
    p {
      font: ${({ theme }) => theme.fonts.text.two};
      color: ${({ theme }) => theme.colors.grey.five};
      text-align: justify;
      padding: 0 7%;
      > strong {
        color: ${({ theme }) => theme.colors.second.main};
      }
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;

    > div,
    > figure {
      width: 50%;
    }

    figure {
      display: flex;
      align-items: center;
      justify-content: center;
      padding-bottom: 0;
      /* ::after {
        content: "";
        display: block;
        background-color: ${({ theme }) => theme.colors.fourth.main};
        position: absolute;
        z-index: 0;
        height: 360px;
        width: 360px;
        border-radius: 100%;
      } */
      img {
        z-index: 1;
      }
    }

    div {
      align-items: flex-start;
      justify-content: flex-end;

      h2 {
        background-color: transparent;
        color: ${({ theme }) => theme.colors.second.main};
        text-align: start;
        padding: 0;
      }
      p {
        padding: 0;
      }
    }
  }
`;
