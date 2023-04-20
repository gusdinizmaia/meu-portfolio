import styled from "styled-components";

export const AboutStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  background-color: ${({ theme }) => theme.colors.first.main};

  figure {
    display: flex;
    align-items: center;
    img {
      border-radius: 30px;
      height: 320px;
      width: 260px;
      object-fit: cover;
      margin: 0 auto;

      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      background-color: ${({ theme }) => theme.colors.fifth.main};
    }

    padding-bottom: 30px;
  }

  font: ${({ theme }) => theme.fonts.title.two};

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;

    padding-top: 20px;

    h2 {
      width: 100%;
      text-align: center;
      background-color: ${({ theme }) => theme.colors.second.main};
      color: ${({ theme }) => theme.colors.first.main};
      font: ${({ theme }) => theme.fonts.title.one};
      padding: 10px 0;

      position: relative;

      ::after {
        display: block;
        content: "Front End Developer";
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
      img {
        z-index: 1;
      }
    }

    div {
      align-items: flex-start;
      justify-content: flex-end;

      position: relative;

      ::before {
        content: "";
        display: block;
        background-color: ${({ theme }) => theme.colors.fourth.main};
        position: absolute;
        right: calc(-0.069 * 100vw);
        top: 20px;
        width: 100vw;
        height: 95px;
      }

      h2 {
        background-color: transparent;
        color: ${({ theme }) => theme.colors.grey.five};
        text-align: start;
        padding: 0;
      }
      p {
        padding: 0;
      }
    }
  }
`;
