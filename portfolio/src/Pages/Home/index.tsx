import { BestProjects } from "../../Components/BestProjects";
import { Projects } from "../../Components/Projects";
import { HomeStyle } from "./style";

export const Home = () => {
  return (
    <HomeStyle>
      <Projects />
      <BestProjects />
    </HomeStyle>
  );
};
