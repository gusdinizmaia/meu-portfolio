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
    color: ${({ theme }) => theme.colors.grey.two};
    text-align: justify;
  }
  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 25px;

    button {
      display: flex;
      align-items: center;
      width: 100px;
      gap: 7px;

      :nth-child(1) {
        ${ButtonStyle("grey5")};
        font: ${({ theme }) => theme.fonts.text.one};
        gap: 1px;
      }
      :nth-child(2) {
        ${ButtonStyle("grey2")};
        font: ${({ theme }) => theme.fonts.text.one};
      }
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

export const GithubStyle = styled(GoMarkGithub)`
  color: ${({ theme }) => theme.colors.grey.five};
  font: ${({ theme }) => theme.fonts.text.one};
`;
export const LinkedInStyle = styled(AiFillLinkedin)`
  color: ${({ theme }) => theme.colors.fourth.main};
  background-color: ${({ theme }) => theme.colors.grey.five};
  font: ${({ theme }) => theme.fonts.text.one};
`;
