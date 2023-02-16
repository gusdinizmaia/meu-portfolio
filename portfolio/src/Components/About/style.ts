import styled from "styled-components";

export const AboutStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  background-color: ${({ theme }) => theme.colors.first.main};

  position: relative;

  * {
    z-index: 50;
  }

  figure {
    margin-top: 10px;
    &,
    figure > img {
      z-index: 100;
    }

    img {
      border-radius: 30px;
      height: 300px;
      width: 240px;
      object-fit: cover;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 30px;
    font: ${({ theme }) => theme.fonts.title.two};

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
    justify-content: space-between;
    align-items: flex-start;
    gap: 90px;

    div {
      p {
        padding: 0;
        position: relative;
        top: 110px;
      }
    }
  }
`;

export const DiagonalImg = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.second.contrast};
  color: ${({ theme }) => theme.colors.grey.one};
  height: 85px;
  h2 {
    text-align: center;
    color: ${({ theme }) => theme.colors.grey.one};
    font: ${({ theme }) => theme.fonts.title.one};
    color: ${({ theme }) => theme.colors.first.main};
    ::after {
      display: block;
      content: "Front-end Developer";
      font: ${({ theme }) => theme.fonts.title.three};
      color: ${({ theme }) => theme.colors.first.main};
      text-align: center;
    }
  }

  @media (min-width: 768px) {
    position: absolute;
    top: 40px;
    right: 0;
    z-index: 1;

    h2,
    h2::after {
      position: relative;
    }

    h2 {
      width: fit-content;
      left: calc(7% + 325px);
      ::after {
        left: 18px;
      }
    }
  }
`;
