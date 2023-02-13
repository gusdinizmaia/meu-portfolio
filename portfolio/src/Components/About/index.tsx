import { AboutStyled, DiagonalImg } from "./style";

const imgPerfil = require("../../Assents/img/perfil.jpg");

export const About = () => {
  return (
    <AboutStyled id="about">
      <figure>
        <img src={imgPerfil} alt="" />
      </figure>
      <div>
        <h2>Gustavo Diniz</h2>
        <p>
          Sou Gustavo Diniz, jovem desenvolvedor front-end certificado pela
          Kenzie Academy. Busco minha primeira experiência profissional e estou
          ansioso para compartilhar meus conhecimentos e habilidades com vocês.
        </p>
      </div>
      <DiagonalImg className="diagonalImg"></DiagonalImg>
    </AboutStyled>
  );
};
