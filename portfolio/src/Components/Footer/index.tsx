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
        <h3>Minhas redes</h3>
        <ul>
          <LinkedinIcon
            onClick={(e) =>
              window.open("https://www.linkedin.com/in/gustavodinizm/")
            }
          />
          <InstagramIcon
            onClick={(e) => window.open("https://www.instagram.com/guga_dm24/")}
          />
          <GithubIcon
            onClick={(e) => window.open("https://github.com/gusdinizmaia")}
          />
        </ul>
      </UlSocial>
      <ButtonsNav />
    </FooterStyle>
  );
};
