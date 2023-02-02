import styled, { css, keyframes } from "styled-components";

const randomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
};

const randomPixels = () => {
  const width = Math.floor(Math.random() * (100 - 30) + 6);
  const margin = Math.floor(Math.random() * (30 - 8) + 2);

  return css`
    background-color: ${randomColor()};
    width: ${width}px;
    margin-left: ${margin}px;
  `;
};

const numberR = (n: number) => {
  const newArray = [];

  for (let i = 1; i <= n; i++) {
    newArray.push(i);
  }

  return newArray.map(
    (elem, index) => css`
      :nth-child(${index}) {
        ${randomPixels()}
      }
    `
  );
};

const IdaMonitor = keyframes`
    
    0% {
        transform: translateY(0);
      }
    
      50% {
        transform: translateY(180px);
      }
      100%{
        transform: translateY(0);
      }
    `;

export const IllustrationStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 180px;

  position: absolute;
  top: -80px;
  right: 7%;

  @media (max-width: 768px) {
    display: none;
  }

  .monitor {
    height: 135px;
    width: 100%;
    padding: 8px;
    background-color: ${({ theme }) => theme.colors.grey.two};
    border-radius: 4px;

    display: flex;
    align-items: center;
    justify-content: center;
    .tela {
      background-color: ${({ theme }) => theme.colors.fixed.black};
      height: 100%;
      width: 100%;
      padding: 6px 3px;
      overflow: hidden;

      position: relative;

      .conteudo {
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        row-gap: 8px;
        column-gap: 2px;

        position: absolute;
        bottom: 0;

        animation: ${IdaMonitor} 7s ease-in-out infinite;
        > div {
          height: 6px;
          background-color: brown;
          position: relative;

          ${numberR(80)}
        }
      }
    }
  }
  .base {
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .base1 {
      width: 81.5%;
      height: 10px;
      background-color: ${({ theme }) => theme.colors.grey.one};
    }
    .base2 {
      width: 100%;
      display: flex;
      align-items: center;
      padding: 0 5px;

      position: relative;
      > div {
        width: 50%;
        height: 10px;
        background-color: ${({ theme }) => theme.colors.grey.two};
      }

      .diagonal1 {
        transform: skew(-45deg);
      }
      .diagonal2 {
        transform: skew(45deg);
      }
      .diagonal3 {
        width: 40px;
        position: absolute;
        right: 40px;
      }
    }
    .base3 {
      height: 7.5px;
      width: 100%;
      background-color: ${({ theme }) => theme.colors.grey.one};
    }
  }
`;
