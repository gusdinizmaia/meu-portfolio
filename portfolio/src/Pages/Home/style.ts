import styled from "styled-components";

export const HomeStyle = styled.main`
  display: flex;
  flex-direction: column;

  section {
    width: 100%;
    padding: 80px 7%;

    :nth-child(1) {
      padding: 90px 0;

      @media (min-width: 768px) {
        padding: 120px 7%;
      }
    }
    :nth-last-child(1) {
      padding: 40px 0;
    }
  }
`;
