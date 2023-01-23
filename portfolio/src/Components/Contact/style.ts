import styled from "styled-components";

export const ContactStyle = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;

  background-color: ${({ theme }) => theme.colors.third.main};

  h3 {
    font: ${({ theme }) => theme.fonts.text.two};
    color: ${({ theme }) => theme.colors.grey.one};
    text-align: justify;
  }
  button {
    width: 100%;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;

    gap: 80px;
  }
`;
