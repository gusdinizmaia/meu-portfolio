import { ContactStyle, GithubStyle, LinkedInStyle } from "./style";

export const Contact = () => {
  return (
    <ContactStyle id="contact">
      <h3>
        Desenvolvedor Front-End com experiência em JavaScript, React e
        Typescript tenho como foco soluções eficientes e inovadoras para
        melhorar a experiência do usuário. Conheça meu trabalho.
      </h3>
      <nav>
        <button
          onClick={(e) =>
            window.open("https://www.linkedin.com/in/gustavodinizm/")
          }
        >
          Linked
          <LinkedInStyle />
        </button>
        <button onClick={(e) => window.open("https://github.com/gusdinizmaia")}>
          <GithubStyle />
          Github
        </button>
      </nav>
    </ContactStyle>
  );
};
