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
          Prazer, sou Gustavo Diniz um jovem desenvolvedor front-end certificado
          pela Kenzie Academy em busca da primeira experiência profissional , se
          você está aqui provavelmente ficou curioso do que eu sou capaz então
          agora vou te mostrar!
        </p>
      </div>
    </AboutStyled>
  );
};
