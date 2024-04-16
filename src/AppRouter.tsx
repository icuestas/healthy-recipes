import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { AddRecipe } from "./pages/AddRecipe";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Home />} path={"/"} />
        <Route element={<AddRecipe />} path={"/add-recipe"} />
      </Routes>
    </Router>
  );
};
