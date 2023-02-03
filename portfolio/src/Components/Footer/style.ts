import styled from "styled-components";

export const FooterStyle = styled.section`
  display: flex;
  flex-direction: column;
  gap: 25px;

  background-color: ${({ theme }) => theme.colors.fifth.main};

  p {
    font: ${({ theme }) => theme.fonts.text.one};
    text-align: justify;
  }
  ul {
    align-self: center;
    flex-direction: row;
    position: static;
  }

  @media (min-width: 768px) {
    p {
      width: 80%;
    }
  }
`;
