import React from "react";
import { Link } from "react-router-dom";
import Links from "../components/home/Links";

const Home = () => {
  return (
    <>
      <section className="w-full bg-slate-100 flex flex-col justify-center items-center p-3 [min-height:calc(100vh-76px)]">
        <div className="w-full flex justify-center items-center p-4 gap-10 flex-wrap">
          <Links url="/focos" name="Focos"/>
          <Links url="/estados" name="Estados"/>
          <Links url="/aumentar" name="Aumentar"/>
          <Links url="/onchange" name="OnChange"/>
          <Links url="/mayorEdad" name="Mayor de Edad"/>
          <Links url="/fotos" name="Fotos"/>
          <Links url="/api" name="Api"/>
          <Links url="/apiJesus" name="Api Jesus"/>          
        </div>
      </section>
    </>
  );
};

export default Home;
