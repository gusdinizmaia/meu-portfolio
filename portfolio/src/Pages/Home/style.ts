import styled from "styled-components";

export const HomeStyle = styled.main`
  display: flex;
  flex-direction: column;

  section {
    width: 100%;
    padding: 60px 7% 80px 7%;

    :nth-child(1) {
      padding: 90px 7%;
    }
    :nth-last-child(1) {
      padding: 40px 0;
    }
  }

  @media (min-width: 768px) {
    section {
      :nth-child(1) {
        padding: 60px 7% 80px 7%;
      }
    }
  }

  @media (min-width: 1280px) {
    section {
      :nth-child(1) {
        padding: 60px 7% 120px 7%;
      }
    }
  }
`;
