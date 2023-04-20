import styled from "styled-components";
import {
  TiSocialGithub,
  TiSocialInstagram,
  TiSocialLinkedin,
} from "react-icons/ti";

export const FooterStyle = styled.section`
  display: flex;
  flex-direction: column;
  gap: 40px;

  background-color: ${({ theme }) => theme.colors.fifth.main};

  ul {
    align-self: center;
    flex-direction: row;
    position: static;
  }
`;

export const UlSocial = styled.div`
  width: fit-content;

  display: flex;
  flex-direction: column;
  gap: 20px;

  align-self: center;

  h3 {
    font: ${({ theme }) => theme.fonts.title.two};
    color: ${({ theme }) => theme.colors.grey.one};
  }

  ul {
    display: flex;
    gap: 20px;

    svg {
      font: ${({ theme }) => theme.fonts.title.two};
      border-radius: 4px;
      cursor: pointer;
    }
  }
`;

export const InstagramIcon = styled(TiSocialInstagram)`
  background-image: linear-gradient(135deg, #f58529 0%, #dd2a7b 100%);
`;

export const GithubIcon = styled(TiSocialGithub)`
  color: ${({ theme }) => theme.colors.grey.one};
  background-color: ${({ theme }) => theme.colors.grey.five};
`;

export const LinkedinIcon = styled(TiSocialLinkedin)`
  background-color: ${({ theme }) => theme.colors.grey.five};
  color: ${({ theme }) => theme.colors.fourth.main};
`;
