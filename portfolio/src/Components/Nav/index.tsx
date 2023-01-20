import { useState } from "react";
import { CloseStyled, MenuStyled, NavStyled } from "./style";

export const Nav = () => {
  const [showNav, setShowNav] = useState<boolean>(false);

  return (
    <NavStyled showNav={showNav}>
      <nav>
        <a href="">Projetos</a>
        <a href="">Sobre</a>
        <a href="">blabla</a>
        <a href="">Contato</a>
      </nav>
      <MenuStyled onClick={(e) => setShowNav(true)} showNav={showNav} />
      <CloseStyled showNav={showNav} onClick={(e) => setShowNav(false)} />
    </NavStyled>
  );
};
