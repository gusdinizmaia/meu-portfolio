import { FilterProjects } from "../FilterProjects";
import { ListProjects } from "../ListProjects";
import { ProjectsStyle } from "./style";
import { projects } from "../../Constants/projects";
import { ContextUser } from "../../Contexts/ContextUser";
import { useContext } from "react";

export const Projects = () => {
  const { filterProjects } = useContext(ContextUser);

  return (
    <ProjectsStyle>
      <h2>Projetos</h2>
      <FilterProjects />
      <ListProjects array={filterProjects(projects)} />
    </ProjectsStyle>
  );
};
