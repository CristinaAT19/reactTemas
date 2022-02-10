import React from "react";
import useFoco from "../../hooks/useFoco";
import Button from "../button/Button";
import Circle from "../circle/Circle";
import CircleVacio from "../circle/CircleVacio";

const Focos = () => {
  const {
    red,
    blue,
    green,
    violet,
    black,
    UpdateRed,
    UpdateBlue,
    UpdateGreen,
    UpdateViolet,
    UpdateBlack,
  } = useFoco();
  return (
    <>
      <section
        className="[min-height:calc(100vh-76px)] w-full bg-slate-100 flex
       flex-col justify-between items-center p-3"
      >
        <div className="w-full flex flex-col justify-center items-center px-2 py-36 bg-gray-300">
          <div className="max-w-2xl w-full flex justify-around items-center gap-5 flex-wrap">
            {/* {hola?<div className="bg-red-600 w-24 h-24 object-cover rounded-full"></div> : <div className="bg-white w-24 h-24 object-cover rounded-full"></div>} */}
            {red ? <Circle color="red-600" /> : <CircleVacio />}
            {green ? <Circle color="green-600" /> : <CircleVacio />}
            {blue ? <Circle color="blue-600" /> : <CircleVacio />}
            {violet ? <Circle color="violet-600" /> : <CircleVacio />}
            {black ? <Circle color="black" /> : <CircleVacio />}
          </div>
        </div>
        <div className="w-full flex justify-center items-center bg-gray-300 py-10 gap-5 px-2">
          <div className="max-w-2xl w-full flex justify-around items-center gap-5 flex-wrap">
            <Button color="red-600" text="Rojo" opcion={UpdateRed} />
            <Button color="blue-600" text="Azul" opcion={UpdateBlue} />
            <Button color="green-600" text="Verde" opcion={UpdateGreen} />
            <Button color="violet-600" text="Morado" opcion={UpdateViolet} />
            <Button color="black" text="Negro" opcion={UpdateBlack} />
          </div>
        </div>
      </section>
    </>
  );
};
export default Focos;
