import { AboutStyled } from "./style";

const imgPerfil = require("../../Assents/img/perfil.jpg");

export const About = () => {
  return (
    <AboutStyled id="about">
      <figure>
        <img src={imgPerfil} alt="" />
      </figure>
      <div>
        <h2>Gustavo Diniz Maia</h2>
        <p>
          Sou Gustavo Diniz, jovem desenvolvedor front-end certificado pela
          Kenzie Academy. busco minha primeira experiência profissional e estou
          ansioso para compartilhar meus conhecimentos e habilidades com vocês.
        </p>
      </div>
    </AboutStyled>
  );
};
