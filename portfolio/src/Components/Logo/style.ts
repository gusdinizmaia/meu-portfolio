import styled from "styled-components";
import { FaReact } from "react-icons/fa";
import { GiBrain } from "react-icons/gi";

export const LogoStyle = styled.div`
  display: flex;
  color: ${({ theme }) => theme.colors.fixed.white};

  .logo {
    position: relative;
  }

  div {
    font: ${({ theme }) => theme.fonts.text.one};
  }
`;

export const ReactStyle = styled(FaReact)`
  color: ${({ theme }) => theme.colors.fourth.main};

  font-size: 16px;
  position: absolute;
  right: 6px;
  top: 3px;
`;

export const BrainStyle = styled(GiBrain)`
  color: ${({ theme }) => theme.colors.grey.four};
  opacity: 0.15;

  font-size: 30px;
`;
