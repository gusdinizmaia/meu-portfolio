import styled from "styled-components";

export const ListProjectsStyle = styled.ul`
  display: grid;

  grid-auto-flow: column;
  gap: 20px;

  padding: 20px;
  overflow-x: scroll;

  li {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;

    height: 200px;
    width: 160px;

    figure,
    img {
      height: 80px;
      width: 100%;
      img {
        object-fit: cover;
      }
    }
    h3 {
    }
    p {
    }
  }
`;
