import styled from "styled-components";

export const LogoStyle = styled.div`
  div {
    font: ${({ theme }) => theme.fonts.title.three};
    color: ${({ theme }) => theme.colors.grey.five};
    ::before {
      content: " < ";
    }
    ::after {
      content: " / >";
    }
  }
`;
