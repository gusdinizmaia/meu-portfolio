import styled from "styled-components";
import { ProjectsStyle } from "../Projects/style";

export const BestProjectsStyle = styled(ProjectsStyle)`
  ul {
    justify-content: flex-start;
    @media (min-width: 1000px) {
      justify-content: center;
      overflow-x: hidden;
    }
  }
`;
