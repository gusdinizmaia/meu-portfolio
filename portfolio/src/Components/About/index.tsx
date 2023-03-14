import { AboutStyled } from "./style";

const imgPerfil = require("../../Assents/img/perfil_png.png");

export const About = () => {
  return (
    <AboutStyled id="about">
      <figure>
        <img src={imgPerfil} alt="" />
      </figure>
      <div>
        <h2>Gustavo Diniz</h2>
        <p>
          Sou Gustavo Diniz, um jovem
          <strong> Desenvolvedor Front-end </strong>
          certificado pela Kenzie Academy. Busco minha primeira experiência
          profissional e{" "}
          <b>
            estou ansioso para compartilhar meus conhecimentos e habilidades com
            vocês
          </b>{" "}
          .
        </p>
      </div>
    </AboutStyled>
  );
};
