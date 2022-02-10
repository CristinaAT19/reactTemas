import React, { useState } from "react";

const useFoco = () => {
  const [foco, setFoco] = useState("");

  const [red, setRed] = useState(false);
  const [blue, setBlue] = useState(false);
  const [green, setGreen] = useState(false);
  const [violet, setViolet] = useState(false);
  const [black, setBlack] = useState(false);

  const Cambiar_Rojo = () => {
    setFoco("red-600");
  };
  const Cambiar_Blue = () => {
    setFoco("blue-600");
  };
  const Cambiar_Green = () => {
    setFoco("green-600");
  };
  const Cambiar_Violet = () => {
    setFoco("violet-600");
  };
  const Cambiar_Black = () => {
    setFoco("black");
  };
  
  const UpdateRed = () => {
    setRed(!red);
  };
  const UpdateBlue = () => {
    setBlue(!blue);
  };
  const UpdateGreen = () => {
    setGreen(!green);
  };
  const UpdateViolet = () => {
    setViolet(!violet);
  };
  const UpdateBlack = () => {
    setBlack(!black);
  };

  return {
    foco,
    Cambiar_Rojo,
    Cambiar_Blue,
    Cambiar_Green,
    Cambiar_Violet,
    Cambiar_Black,
    red,
    blue,
    green,
    violet,
    black,
    UpdateRed,
    UpdateBlue,
    UpdateGreen,
    UpdateViolet,
    UpdateBlack
  };
};

export default useFoco;
