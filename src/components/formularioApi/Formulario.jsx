import React from "react";
import { MdBorderColor, MdOutlineDeleteSweep } from "react-icons/md";
import useNote from "../../hooks/useNote";

const Formulario = ({ name, date, description, editar, id }) => {
  const {eliminarNota} = useNote()
  return (
    <>
      <div
        key={id}
        className="max-w-[340px] w-full min-h-[200px] flex flex-col justify-center
         bg-indigo-500/80 p-5 gap-3 rounded "
      >
        <h1 className="text-center text-2xl font-medium text-white">{name}</h1>
        <h2 className="text-right text-white">{date}</h2>
        <textarea
          cols="20"
          rows="4"
          className="outline-none p-3 bg-transparent"
          defaultValue={description}
        ></textarea>
        <div className="flex justify-center items-center pt-5 pb-4 gap-5">
          <MdBorderColor
            size="30px"
            className="hover:text-purple-800 cursor-pointer"
            onClick={editar}
          />
          <MdOutlineDeleteSweep
            size="30px"
            className="hover:text-purple-800 cursor-pointer"
            onClick={() => eliminarNota(id)}
          />
        </div>
      </div>
    </>
  );
};

export default Formulario;
