import { createContext, useState } from "react";
import { projects } from "../Constants/projects";

interface iContextUser {
  children: React.ReactNode;
}

interface iContextUserProps {
  tech: Object[];
  setTech: React.Dispatch<React.SetStateAction<Object[]>>;
}

export const ContextUser = createContext({} as iContextUserProps);

export const ProviderUser = ({ children }: iContextUser) => {
  const [tech, setTech] = useState<Object[]>([]);

  function filterProjects() {
    return projects.filter;
  }

  return (
    <ContextUser.Provider value={{ tech, setTech }}>
      {children}
    </ContextUser.Provider>
  );
};
