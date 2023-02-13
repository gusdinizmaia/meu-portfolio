import styled from "styled-components";

export const AboutStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  background-color: ${({ theme }) => theme.colors.first.main};

  position: relative;

  * {
    z-index: 5;
  }

  figure,
  figure > img {
    height: 250px;
    width: 220px;
    margin-top: 5px;
    border-radius: 30px 0 30px 0;
    img {
      object-fit: cover;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 20px;

    font: ${({ theme }) => theme.fonts.title.two};
    h2 {
      text-align: center;
      color: ${({ theme }) => theme.colors.grey.one};
      ::after {
        display: block;
        content: "Front-end Developer";
        font: ${({ theme }) => theme.fonts.text.one};
        text-align: center;
      }
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
    gap: 100px;

    div {
      h2 {
        text-align: start;
        ::after {
          position: relative;
          text-align: start;
          margin-left: 55px;
        }
      }
    }
  }
`;

export const DiagonalImg = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.fifth.main};
  color: ${({ theme }) => theme.colors.grey.one};
  height: 70px;

  position: absolute;
  right: 0;
  bottom: 170px;
  z-index: 0;

  @media (min-width: 437px) {
    bottom: 150px;
  }
  @media (min-width: 546px) {
    bottom: 130px;
  }
  @media (min-width: 692px) {
    bottom: 110px;
  }
  @media (min-width: 768px) {
    top: 40px;
  }
`;
