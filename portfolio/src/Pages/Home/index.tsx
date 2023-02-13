import { About } from "../../Components/About";
import { BestProjects } from "../../Components/BestProjects";
import { Contact } from "../../Components/Contact";
import { Description } from "../../Components/Description";
import { Footer } from "../../Components/Footer";
import { Projects } from "../../Components/Projects";
import { HomeStyle } from "./style";

export const Home = () => {
  return (
    <HomeStyle>
      <About />
      <Description />
      <Projects />
      <Contact />
      <BestProjects />
      <Footer />
    </HomeStyle>
  );
};
