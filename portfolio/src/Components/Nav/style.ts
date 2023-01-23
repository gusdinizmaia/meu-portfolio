import styled from "styled-components";
import { MdMenu } from "react-icons/md";
import { MdClose } from "react-icons/md";

interface iIconStyled {
  showNavStyle: boolean;
}

export const NavStyled = styled.div<iIconStyled>`
  display: flex;
  align-items: center;
  gap: 30px;

  nav {
    display: ${({ showNavStyle }) => (showNavStyle ? "flex" : "none")};
  }
`;

export const MenuStyled = styled(MdMenu)<iIconStyled>`
  display: ${({ showNavStyle }) => (showNavStyle ? "none" : "block")};

  cursor: pointer;
`;

export const CloseStyled = styled(MdClose)<iIconStyled>`
  display: ${({ showNavStyle }) => (showNavStyle ? "block" : "none")};

  cursor: pointer;
`;
