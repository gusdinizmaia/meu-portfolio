import styled from "styled-components";
import { MdMenu } from "react-icons/md";
import { MdClose } from "react-icons/md";

interface iIconStyled {
  showNav: boolean;
}

export const NavStyled = styled.div<iIconStyled>`
  display: flex;
  align-items: center;
  gap: 30px;

  nav {
    display: ${({ showNav }) => (showNav ? "block" : "none")};
  }
`;

export const MenuStyled = styled(MdMenu)<iIconStyled>`
  display: ${({ showNav }) => (showNav ? "none" : "block")};

  cursor: pointer;
`;

export const CloseStyled = styled(MdClose)<iIconStyled>`
  display: ${({ showNav }) => (showNav ? "block" : "none")};

  cursor: pointer;
`;
