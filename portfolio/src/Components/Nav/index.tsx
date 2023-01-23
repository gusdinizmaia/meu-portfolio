import { useState } from "react";
import { ButtonsNav } from "../ButtonsNav";
import { CloseStyled, MenuStyled, NavStyled } from "./style";

export const Nav = () => {
  const [showNav, setShowNav] = useState<boolean>(false);

  return (
    <NavStyled showNavStyle={showNav}>
      <ButtonsNav />
      <MenuStyled onClick={(e) => setShowNav(true)} showNavStyle={showNav} />
      <CloseStyled showNavStyle={showNav} onClick={() => setShowNav(false)} />
    </NavStyled>
  );
};
