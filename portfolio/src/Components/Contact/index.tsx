import { ContactStyle, GithubStyle, LinkedInStyle } from "./style";

export const Contact = () => {
  return (
    <ContactStyle id="contact">
      <h3>
        Desenvolvedor Front-End com experiência em
        <strong> Javascript, React e Typescript </strong>com foco em soluções
        eficientes e inovadoras para melhor qualidade da aplicação.
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
