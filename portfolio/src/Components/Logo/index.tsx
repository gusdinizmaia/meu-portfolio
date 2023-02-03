import { BrainStyle, LogoStyle, ReactStyle } from "./style";

export const Logo = () => {
  return (
    <LogoStyle>
      <div className="logo">
        <BrainStyle />
        <ReactStyle />
      </div>
      <div>
        Gustavo
        <p>Diniz</p>
      </div>
    </LogoStyle>
  );
};
