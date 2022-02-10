import axios from "axios";
import React, { useEffect, useState } from "react";

const Api = () => {
  //   const nombres = [
  //     {
  //       nombre: "cristina",
  //       apellido: "advincola",
  //     },
  //     {
  //       nombre: "jesus",
  //       apellido: "ayarza",
  //     },
  //   ];
  const [imprimir, setImprimir] = useState([]);

  const Disparador = async () => {
    await axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((nombres) => {
        console.log(nombres);
        setImprimir(nombres.data);
      });
  };
  //   console.log(imprimir);
  useEffect(() => {
    Disparador();
  }, []);
  return (
    <>
      {imprimir.map((n) => {
        return (
          <>
            <h1>{n.name}</h1>
            <h1>{n.email}</h1>
            <h1>{n.address.city}</h1>
            <br />
          </>
        );
      })}
      {/* <h1>{JSON.stringify(imprimir)}</h1> */}
    </>
  );
};

export default Api;
