import styled from "styled-components";
import { ProjectsStyle } from "../Projects/style";

export const BestProjectsStyle = styled(ProjectsStyle)`
  ul {
    @media (min-width: 768px) {
      justify-items: center;
      overflow-x: hidden;
    }
  }
`;
