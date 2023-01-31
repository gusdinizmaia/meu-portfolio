import { CardStyle, ListProjectsStyle } from "./style";
import { iProjects } from "../../Constants/projects";

const img = require("../../Assents/img/perfil.jpg");

interface iListProjects {
  array: iProjects;
}

export const ListProjects = ({ array }: iListProjects) => {
  return (
    <ListProjectsStyle>
      {array.map((elem) => (
        <CardStyle key={elem.name}>
          <figure>
            <img src={img} alt={elem.name} />
          </figure>
          <div>
            <h3>{elem.name}</h3>
            <p>{elem.description}</p>
          </div>
        </CardStyle>
      ))}
    </ListProjectsStyle>
  );
};
