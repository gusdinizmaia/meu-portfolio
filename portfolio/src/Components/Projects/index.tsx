import { FilterProjects } from "../FilterProjects";
import { ListProjects } from "../ListProjects";
import { ProjectsStyle } from "./style";
import { projects } from "../../Constants/projects";

export const Projects = () => {
  console.log(projects);
  return (
    <ProjectsStyle>
      <h2>Projetos</h2>
      <FilterProjects />
      <ListProjects array={projects} />
    </ProjectsStyle>
  );
};
