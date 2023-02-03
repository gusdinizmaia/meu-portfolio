import { createContext, useState } from "react";
import { iProjects } from "../Constants/projects";
import { getLinkPreview, getPreviewFromContent } from "link-preview-js";
import { api } from "../Services";

// pass the link directly

interface iContextUser {
  children: React.ReactNode;
}

interface iContextUserProps {
  tech: Object[];
  setTech: React.Dispatch<React.SetStateAction<Object[]>>;
  filterProjects: (array: iProjects) => iProjects;
}

export const ContextUser = createContext({} as iContextUserProps);

export const ProviderUser = ({ children }: iContextUser) => {
  const [tech, setTech] = useState<Object[]>([]);

  function filterProjects(array: iProjects) {
    const filterProjects = array.filter((elem) => {
      const findElem = tech.map((tech) =>
        elem.techs.find((elem) => elem === tech)
      );

      return !findElem.includes(undefined);
    });

    return filterProjects;
  }

  return (
    <ContextUser.Provider value={{ tech, setTech, filterProjects }}>
      {children}
    </ContextUser.Provider>
  );
};
