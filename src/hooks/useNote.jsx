import axios from "axios";
import React, { useState } from "react";

const useNote = () => {
  const [respuesta, setRespuesta] = useState([]);
//   const [nombre, setNombre] = useState("");
//   const [descripcion, setDescripcion] = useState("");
  const listarNotas = async () => {
    await axios
      .get("https://node-crud-notes.vercel.app/api/notes")
      .then((response) => {
        // console.log(response.data);
        setRespuesta(response.data);
      });
  };

  const agregarNota = async (nombre, descripcion) => {
    await axios
      .post("https://node-crud-notes.vercel.app/api/notes", {
        nombre: nombre,
        descripcion: descripcion,
      })
      .then(() => {
        
      });
  };
  const eliminarNota = async (idNotes) => {
    await axios
      .delete("https://node-crud-notes.vercel.app/api/notes/" + idNotes)
      .then((response) => {
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return { listarNotas, respuesta, agregarNota, eliminarNota};
};

export default useNote;
