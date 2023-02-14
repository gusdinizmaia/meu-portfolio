import { CardStyle, ListProjectsStyle } from "./style";
import { iProjects } from "../../Constants/projects";

interface iListProjects {
  array: iProjects;
}

export const ListProjects = ({ array }: iListProjects) => {
  return (
    <ListProjectsStyle>
      {array.map((elem) => (
        <CardStyle key={elem.name}>
          <figure>
            <img
              src={
                elem.image !== ""
                  ? elem.image
                  : "https://portfolio-gusdinizmaia.vercel.app/projects/em-breve.webp"
              }
              alt={elem.name}
            />
          </figure>
          <div>
            <h3>{elem.name}</h3>
            <p>{elem.description}</p>
            <button
              onClick={(e) =>
                elem.link !== "" ? window.open(elem.repository) : ""
              }
            >
              Repositório
            </button>
            <button
              onClick={(e) => (elem.link !== "" ? window.open(elem.link) : "")}
            >
              Visitar
            </button>
          </div>
        </CardStyle>
      ))}
    </ListProjectsStyle>
  );
};
