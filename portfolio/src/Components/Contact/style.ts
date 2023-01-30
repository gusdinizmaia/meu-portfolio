import styled from "styled-components";
import { ButtonStyle } from "../../styles/theme";
import { GoMarkGithub } from "react-icons/go";
import { AiFillLinkedin } from "react-icons/ai";

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
  nav {
    display: flex;
    gap: 25px;
    button {
      display: flex;
      align-items: center;
      gap: 7px;
      ${({ theme }) =>
        ButtonStyle(theme.colors.second.main, theme.colors.grey.five)}
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;

    h3 {
      width: 70%;
    }

    nav {
      flex-direction: column;
    }

    gap: 80px;
  }
`;

export const GithubStyle = styled(GoMarkGithub)``;
export const LinkedInStyle = styled(AiFillLinkedin)``;
