import { techs } from "../../Constants/techs";
import { FilterProjectsStyle, TechStyle } from "./style";
import { useContext } from "react";
import { ContextUser } from "../../Contexts/ContextUser";

export const FilterProjects = () => {
  const { tech, setTech } = useContext(ContextUser);

  function techSelected(elemSelected: string) {
    setTech((techs) => {
      return techs.includes(elemSelected)
        ? techs.filter((elem) => elem !== elemSelected)
        : [...techs, elemSelected];
    });
  }

  function colorTechSelected(elem: string) {
    return tech.includes(elem);
  }

  return (
    <FilterProjectsStyle>
      {techs.map((elem) => (
        <TechStyle
          colorTech={colorTechSelected(elem)}
          onClick={() => techSelected(elem)}
          key={elem}
        >
          {elem}
        </TechStyle>
      ))}
    </FilterProjectsStyle>
  );
};
