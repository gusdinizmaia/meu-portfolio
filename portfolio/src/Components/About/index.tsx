import { AboutStyled, DiagonalImg } from "./style";

const imgPerfil = require("../../Assents/img/perfil.webp");

export const About = () => {
  return (
    <AboutStyled id="about">
      <figure>
        <img src={imgPerfil} alt="" />
      </figure>
      <div>
        <DiagonalImg className="diagonalImg">
          <h2>Gustavo Diniz</h2>
        </DiagonalImg>
        <p>
          Sou Gustavo Diniz , um jovem
          <strong> Desenvolvedor Front-end </strong>
          certificado pela Kenzie Academy. Busco minha primeira experiência
          profissional e{" "}
          <b>
            estou sansioso para compartilhar meus conhecimentos e habilidades
            com vocês
          </b>{" "}
          .
        </p>
      </div>
    </AboutStyled>
  );
};
