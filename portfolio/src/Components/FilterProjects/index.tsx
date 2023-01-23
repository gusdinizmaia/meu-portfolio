import { techs } from "../../Constants/techs";
import { FilterProjectsStyle } from "./style";

export const FilterProjects = () => {
  return (
    <FilterProjectsStyle>
      {techs.map((elem) => (
        <li>{elem}</li>
      ))}
    </FilterProjectsStyle>
  );
};
