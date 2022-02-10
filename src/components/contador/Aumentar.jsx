import React from "react";
import useContador from "../../hooks/useContador";
import Button from "../button/Button";

const Aumentar = () => {
  const { contador, Sumar, Restar, Resetear } = useContador();
  return (
    <>
      <div className="w-full [min-height:calc(100vh-76px)] flex flex-col justify-center
       items-center gap-7 bg-gray-100">
        <h1 className="text-9xl">{contador}</h1>
        <div className="flex justify-center items-center gap-4">
          <Button color="violet-600" text="Sumar" opcion={Sumar} />
          <Button color="violet-600" text="Restar" opcion={Restar} />
          <Button color="violet-600" text="Reset" opcion={Resetear} />
        </div>
      </div>
    </>
  );
};
export default Aumentar;
