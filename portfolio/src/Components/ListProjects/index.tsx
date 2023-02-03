import { CardStyle, ListProjectsStyle } from "./style";
import { iProjects } from "../../Constants/projects";

interface iListProjects {
  array: iProjects;
}

export const ListProjects = ({ array }: iListProjects) => {
  return (
    <ListProjectsStyle>
      {array.map((elem) => (
        <CardStyle
          onClick={(e) => (elem.link !== "" ? window.open(elem.link) : "")}
          key={elem.name}
        >
          <figure>
            <img
              src={
                elem.image !== ""
                  ? elem.image
                  : "http://localhost:3000/projects/em-breve.png"
              }
              alt={elem.name}
            />
          </figure>
          <div>
            <h3>{elem.name}</h3>
            <p>{elem.description}</p>
            <button>Visitar</button>
          </div>
        </CardStyle>
      ))}
    </ListProjectsStyle>
  );
};
