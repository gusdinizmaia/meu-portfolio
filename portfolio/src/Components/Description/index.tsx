import { IllustrationHeader } from "../IllustrationHeader";
import { DescriptionStyle } from "./style";

export const Description = () => {
  return (
    <DescriptionStyle>
      <p>
        Minha primeira experiência com programação veio com <b>c++</b> para
        operação de <em>arduino</em>. No último ano vim estudando
        desenvolvimento web com utilização de tecnologias como
        <strong> Javascript, CSS, React, Typescript </strong>e outras
        tecnologias. Minha principal paixão hoje em dia é o
        <b> Desenvolvimento Front-end focado na experiência do usuário</b>.
      </p>
      <IllustrationHeader />
    </DescriptionStyle>
  );
};
