import { bestProjects } from "../../Constants/bestProjects";
import { ListProjects } from "../ListProjects";
import { BestProjectsStyle } from "./style";

export const BestProjects = () => {
  return (
    <BestProjectsStyle>
      <h2>Projetos Destaque</h2>
      <ListProjects array={bestProjects} />
    </BestProjectsStyle>
  );
};
