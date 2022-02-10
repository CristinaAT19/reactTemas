import React, { useState } from "react";

const MayorEdad = () => {
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState(0);
  // const [permiso, setPermiso] = useState(null);
  const [mensaje, setMensaje] = useState(null);
  const Nom = (e) => {
    setNombre(e.target.value);
  };
  const Age = (e) => {
    setEdad(e.target.value);
  };
  const Validate = () => {
    setMensaje(edad >= 18);
  };
  return (
    <>
      <div className="bg-gray-300 w-full [min-height:calc(100vh-76px)] flex flex-col justify-center items-center gap-6">
        <div className="w-8/12 flex flex-col justify-evenly items-center gap-11">
          {mensaje == true ? (
            <h1 className="text-3xl font-semibold">
              ¡ Bienvenid@
              <span className="text-blue-600"> {nombre} </span>
              🥳 puedes acceder al sistema !
            </h1>
          ) : mensaje == false ? (
            <h1 className="text-2xl font-semibold">
              Lo sentimos
              <span className="text-blue-600"> {nombre} </span>
              aun no eres mayor de edad para acceder al sistema 😣
            </h1>
          ) : null}

          <div className="flex flex-col justify-center items-center gap-7">
            <input
              type="text"
              onChange={Nom}
              placeholder="Ingrese su nombre"
              required
              className="outline-none bg-transparent border-b-4 border-black px-4 py-3 text-lg font-medium focus:border-violet-600"
            />
            <input
              type="number"
              onChange={Age}
              placeholder="Ingrese su edad"
              required
              className="outline-none bg-transparent border-b-4 border-black px-4 py-3 text-lg font-medium focus:border-violet-600"
            />
          </div>
          <button
            onClick={Validate}
            className="px-5 py-2 text-xl font-medium border-2 border-violet-600 rounded-md hover:bg-violet-600 hover:text-white"
          >
            Verificar
          </button>
        </div>
      </div>
    </>
  );
};

export default MayorEdad;
