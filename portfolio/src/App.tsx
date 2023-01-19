import { BrowserRouter } from "react-router-dom";
import { MainRoutes } from "./Routes";

export function App() {
  return (
    <BrowserRouter>
      <MainRoutes />
    </BrowserRouter>
  );
}
