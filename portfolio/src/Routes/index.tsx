import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../Pages/Home";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="home" element={<Home />} />
      <Route path="*" element={<Navigate to={"/home"} />} />
    </Routes>
  );
};
