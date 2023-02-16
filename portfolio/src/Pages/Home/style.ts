import styled from "styled-components";

export const HomeStyle = styled.main`
  display: flex;
  flex-direction: column;

  section {
    width: 100%;
    padding: 60px 7%;

    :nth-child(1) {
      padding: 40px 0;

      @media (min-width: 768px) {
        padding: 40px 7%;
      }
    }
  }
`;
