import styled from "styled-components";
import { ButtonStyle } from "../../styles/theme";

export const ListProjectsStyle = styled.ul`
  display: grid;
  grid-auto-flow: column;
  justify-content: flex-start;
  gap: 60px;

  padding: 20px 20px 20px 0;
  overflow-x: scroll;
  min-height: 294px;

  ::-webkit-scrollbar-track {
    border-radius: ${({ theme }) => theme.border.radius.one};
  }

  @media (min-width: 768px) {
  }
`;

export const CardStyle = styled.li`
  color: ${({ theme }) => theme.colors.grey.one};
  background-color: ${({ theme }) => theme.colors.grey.four};
  cursor: pointer;

  border-radius: ${({ theme }) => theme.border.radius.two};
  height: 240px;
  width: 240px;

  figure,
  img {
    height: 100px;
    width: 100%;
    img {
      border-radius: ${({ theme }) =>
        `${theme.border.radius.two} ${theme.border.radius.two} 0 0`};
      object-fit: cover;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 15px 20px;
    height: 140px;
    h3 {
      font: ${({ theme }) => theme.fonts.text.one};
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
