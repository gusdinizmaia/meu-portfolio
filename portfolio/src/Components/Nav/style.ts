import styled from "styled-components";
import { MdMenu } from "react-icons/md";
import { MdClose } from "react-icons/md";

interface iIconStyled {
  navstyle: string;
}

export const NavStyled = styled.div<iIconStyled>`
  display: flex;
  align-items: center;
  gap: 30px;

  nav {
    display: ${({ navstyle }) => navstyle};

    @media (min-width: 768px) {
      display: flex;
    }
  }
`;

export const MenuStyled = styled(MdMenu)<iIconStyled>`
  display: ${({ navstyle }) => navstyle};

  color: ${({ theme }) => theme.colors.fixed.white};

  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const CloseStyled = styled(MdClose)<iIconStyled>`
  display: ${({ navstyle }) => navstyle};

  color: ${({ theme }) => theme.colors.grey.five};

  cursor: pointer;
`;
