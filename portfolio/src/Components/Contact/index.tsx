import { ContactStyle, GithubStyle, LinkedInStyle } from "./style";

export const Contact = () => {
  return (
    <ContactStyle id="contact">
      <h3>
        Sou uma pessoa bastante comunicativa, valorizo muito um trabalho
        colaborativo onde todos que participam conseguem dar ideias e dialogar
        sobre o projeto como um todo, acredito que essa troca de ideias ajuda
        todos a interagirem com outras tecnologias e se tornarem devs mais
        completos.
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
