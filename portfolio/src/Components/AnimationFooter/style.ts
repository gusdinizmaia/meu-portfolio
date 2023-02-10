import styled, { keyframes } from "styled-components";

interface iProps {
  x: number;
  y: number;
}

export const AnimationStyle = styled.div<iProps>`
  height: 200px;
  width: 200px;
  margin: 0 auto;

  div {
    height: 50%;
    background-color: antiquewhite;
    position: relative;

    border-bottom: solid 3px black;

    p {
      position: absolute;
      bottom: 0;
      left: 0;
    }

    div {
      height: 30px;
      border-radius: 100%;
      width: 20px;
      background-color: black;

      position: absolute;
      right: 0;
      bottom: 20px;
    }
  }

  .container_blue {
    p {
      transform: translate(${({ x, y }) => `${x}px ,${-y}px`});
      z-index: 500;
    }
    .portal_blue {
      border: solid orange 3px;
    }
  }

  .container_orange {
    p {
    }
    .portal_orange {
      border: solid blue 3px;
    }
  }
`;
