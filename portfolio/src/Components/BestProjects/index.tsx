import { projects } from "../../Constants/projects";
import { ListProjects } from "../ListProjects";
import { BestProjectsStyle } from "./style";

export const BestProjects = () => {
  return (
    <BestProjectsStyle>
      <ListProjects array={projects} />
    </BestProjectsStyle>
  );
};
