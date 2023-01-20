import { Logo } from "../Logo";
import { Nav } from "../Nav";
import { HeaderStyle } from "./style";

export const Header = () => {
  return (
    <HeaderStyle>
      <Logo />
      <Nav />
    </HeaderStyle>
  );
};
