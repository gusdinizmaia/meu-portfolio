import { useState } from "react";
import { ButtonsNav } from "../ButtonsNav";
import { CloseStyled, MenuStyled, NavStyled } from "./style";

export const Nav = () => {
  const [showNav, setShowNav] = useState<boolean>(false);

  return (
    <NavStyled navstyle={showNav ? "flex" : "none"}>
      <ButtonsNav />
      <MenuStyled
        onClick={(e) => setShowNav(true)}
        navstyle={showNav ? "none" : "block"}
      />
      <CloseStyled
        navstyle={showNav ? "block" : "none"}
        onClick={() => setShowNav(false)}
      />
    </NavStyled>
  );
};
