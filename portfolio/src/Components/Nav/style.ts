import styled, { css } from "styled-components";
import { MdMenu } from "react-icons/md";
import { MdClose } from "react-icons/md";

interface iIconStyled {
  navstyle: string;
}

export const NavStyled = styled.nav<iIconStyled>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  position: relative;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    transition: width 0.8s ease-in-out, height 0.8s ease-in-out;
    transform-origin: 100% 0;
    height: 0px;
    width: 0px;
    overflow: hidden;
    background: blue;
    border-radius: 0 0 0 100%;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 10;
    background-color: ${({ theme }) => theme.colors.fifth.main};
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    ${({ navstyle }) =>
      navstyle === "active" &&
      css`
        height: 360px;
        width: 360px;
      `}
    svg {
      background-color: ${({ theme }) => theme.colors.fourth.main};
      color: ${({ theme }) => theme.colors.fixed.white};
      border-radius: ${({ theme }) => theme.border.radius.two};
      height: 30px;
      width: 30px;
      padding: 4px;
      position: fixed;
      top: 25px;
      right: 7%;
      z-index: 500;
    }
  }

  @media (min-width: 768px) {
    div {
      display: block;
      position: static;
      width: auto;
      height: auto;
      background: transparent;
      overflow: auto;
      border-radius: 0;
      box-shadow: none;
      svg {
        display: none;
      }
    }
  }
`;

export const MenuStyled = styled(MdMenu)<iIconStyled>`
  display: ${({ navstyle }) => navstyle};
  cursor: pointer;
`;

export const CloseStyled = styled(MdClose)<iIconStyled>`
  display: ${({ navstyle }) => navstyle};

  cursor: pointer;
`;
