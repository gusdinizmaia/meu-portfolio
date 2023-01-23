import styled from "styled-components";

export const AboutStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;

  figure,
  figure > img {
    height: 250px;
    width: 100%;

    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }

  h2 {
  }
  p {
  }
`;
