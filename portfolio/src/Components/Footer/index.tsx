import { ButtonsNav } from "../ButtonsNav";
import {
  FooterStyle,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  UlSocial,
} from "./style";

export const Footer = () => {
  return (
    <FooterStyle>
      <UlSocial>
        <LinkedinIcon />
        <InstagramIcon />
        <GithubIcon />
      </UlSocial>
      <ButtonsNav />
    </FooterStyle>
  );
};
