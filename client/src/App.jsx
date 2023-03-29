import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "@/routes/Routes";
import Navbar from "@/components/layout/Navbar";

const App = () => {
  const routesComponent = routes.map(({ path, element }) => (
    <Route path={path} element={element} />
  ));
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>{routesComponent}</Routes>
    </BrowserRouter>
  );
};

export default App;
