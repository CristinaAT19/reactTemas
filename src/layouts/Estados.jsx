import React from "react";
import Button from "../components/button/Button";
import Circle from "../components/circle/Circle";
import useFoco from "../hooks/useFoco";

const Estados = () => {
  const {
    foco,
    Cambiar_Rojo,
    Cambiar_Blue,
    Cambiar_Green,
    Cambiar_Violet,
    Cambiar_Black,
  } = useFoco();

  return (
    <>
      <section
        className="w-full [min-height:calc(100vh-76px)] flex flex-col
       justify-center items-center bg-slate-100"
      >
        <Circle color={foco} />
        <div className="flex justify-evenly items-center gap-9 py-8">
          <Button color="red-600" text="Red" opcion={Cambiar_Rojo} />
          <Button color="blue-600" text="Blue" opcion={Cambiar_Blue} />
          <Button color="green-600" text="Green" opcion={Cambiar_Green} />
          <Button color="violet-600" text="Violet" opcion={Cambiar_Violet} />
          <Button color="black" text="Black" opcion={Cambiar_Black} />
        </div>
      </section>
    </>
  );
};
export default Estados;
