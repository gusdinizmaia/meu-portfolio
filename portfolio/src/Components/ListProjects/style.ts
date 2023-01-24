import styled from "styled-components";

export const ListProjectsStyle = styled.ul`
  display: grid;
  grid-auto-flow: column;
  justify-content: flex-start;
  gap: 60px;

  height: 275px;
  padding: 20px 20px 20px 0;
  overflow-x: scroll;

  li {
    color: ${({ theme }) => theme.colors.grey.one};
    background-color: ${({ theme }) => theme.colors.grey.four};

    border-radius: ${({ theme }) => theme.border.radius.two};
    height: 220px;
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
      align-items: flex-start;
      padding: 15px 20px;

      h3 {
        font: ${({ theme }) => theme.fonts.text.two};
      }
      p {
        font: ${({ theme }) => theme.fonts.text.three};
      }
    }
  }

  @media (min-width: 768px) {
  }
`;
