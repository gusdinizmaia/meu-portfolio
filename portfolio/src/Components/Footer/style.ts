import styled from "styled-components";
import {
  TiSocialGithub,
  TiSocialInstagram,
  TiSocialLinkedin,
} from "react-icons/ti";

export const FooterStyle = styled.section`
  display: flex;
  flex-direction: column;
  gap: 25px;

  background-color: ${({ theme }) => theme.colors.fifth.main};

  ul {
    align-self: center;
    flex-direction: row;
    position: static;
  }
`;

export const UlSocial = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const InstagramIcon = styled(TiSocialInstagram)``;

export const GithubIcon = styled(TiSocialGithub)``;

export const LinkedinIcon = styled(TiSocialLinkedin)``;
