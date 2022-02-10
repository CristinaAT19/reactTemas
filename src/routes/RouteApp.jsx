import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Focos from "../components/focos/Focos";
import NavBar from "../components/navbar/NavBar";
import Api from "../layouts/Api";
import ApiJesus from "../components/apiJesus/ApiJesus";
import Aumentar from "../components/contador/Aumentar";
import Estados from "../layouts/Estados";
import Fotos from "../layouts/Fotos";
import Home from "../layouts/Home";
import MayorEdad from "../components/mayorEdad/MayorEdad";
import Onchange from "../components/bienvenido/Onchange";

const RouteApp = () => {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/focos" element={<Focos />} />

        <Route path="/estados" element={<Estados />} />

        <Route path="/aumentar" element={<Aumentar />} />

        <Route path="/onchange" element={<Onchange />} />

        <Route path="/mayorEdad" element={<MayorEdad />} />

        <Route path="/fotos" element={<Fotos />} />

        <Route path="/api" element={<Api />} />

        <Route path="/apiJesus" element={<ApiJesus />} />

        <Route path="/*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteApp;
