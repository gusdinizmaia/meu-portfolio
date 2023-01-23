import { BrowserRouter } from "react-router-dom";
import { Header } from "./Components/Header";
import { MainRoutes } from "./Routes";

export function App() {
  return (
    <BrowserRouter>
      <Header />
      <MainRoutes />
    </BrowserRouter>
  );
}
