import styled from "styled-components";
import { ButtonStyle } from "../../styles/theme";

export const ListProjectsStyle = styled.ul`
  display: grid;
  grid-auto-flow: column;
  justify-content: flex-start;
  gap: 60px;

  padding: 20px 20px 20px 0;
  margin-top: 10px;
  overflow-x: scroll;
  min-height: 294px;

  ::-webkit-scrollbar-track {
    border-radius: ${({ theme }) => theme.border.radius.one};
  }
`;

export const CardStyle = styled.li`
  color: ${({ theme }) => theme.colors.grey.one};
  background-color: ${({ theme }) => theme.colors.grey.four};
  border-radius: ${({ theme }) => theme.border.radius.two};
  height: 260px;
  width: 240px;

  figure {
    height: 100px;
    > img {
      height: 100%;
      width: 100%;
      border-radius: ${({ theme }) =>
        `${theme.border.radius.two} ${theme.border.radius.two} 0 0`};
      object-fit: fill;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 15px 20px;
    height: 140px;
    gap: 5px;
    h3 {
      font: ${({ theme }) => theme.fonts.text.two};
    }
    p {
      font: ${({ theme }) => theme.fonts.text.three};
    }
    > button {
      width: 100%;
      :nth-of-type(1) {
        ${ButtonStyle("first")}
      }
      :nth-of-type(2) {
        ${ButtonStyle("second")}
      }
    }
  }
`;
