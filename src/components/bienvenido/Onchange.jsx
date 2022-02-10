import React, { useState } from "react";

const Onchange = () => {
  //.................................
  // const [edad, setEdad] = useState("");
  // const promptEdad = (e) => {
  //   setEdad(e.target.value);
  // };

  // if (edad >= 18) {
  //   console.log("puedes ingresar");
  // }
  //............................
  // const nombre = prompt("ingresa tu edad");
  // console.log("Bienvenidoo" + nombre);

  //.........................

  const [nombre, setNombre] = useState("");
  const handleNombre = (e) => {
    setNombre(e.target.value);
  };
  // console.log("Bienvenido " + nombre);
  return (
    <div className="bg-gray-300 w-full [min-height:calc(100vh-76px)] flex flex-col justify-center items-center gap-10">
      {/* <input
        type="Number"
        onChange={promptEdad}
        placeholder="Intruduce tu eadad"
      /> */}
      <div className="flex justify-center items-center">
        <h1 className="text-3xl text-center">
          ¡Bienvenid@! 🥳 {" "}
          <span className="text-6xl font-medium text-violet-500">{nombre}</span>
        </h1>
      </div>
      <input
        type="text"
        onChange={handleNombre}
        className="border-b-8 border-black w-64 rounded-md px-4 py-3 focus:border-violet-400 outline-none text-xl bg-transparent"
      />
    </div>
  );
};

export default Onchange;
