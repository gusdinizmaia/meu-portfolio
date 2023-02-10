import { AnimationFooter } from "../../Components/AnimationFooter";
import { Projects } from "../../Components/Projects";
import { HomeStyle } from "./style";

export const Home = () => {
  return (
    <HomeStyle>
      <Projects />
      <AnimationFooter />
    </HomeStyle>
  );
};
