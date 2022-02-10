import React, { useState } from "react";

const useContador = () => {
  const [contador, setContador] = useState(0);
  const Sumar = () => {
    setContador(contador + 1);
  };
  const Restar = () => {
    setContador(contador - 1);
  };
  const Resetear = () => {
    setContador(0);
  };
  return { contador, Sumar, Restar, Resetear };
};

export default useContador;
