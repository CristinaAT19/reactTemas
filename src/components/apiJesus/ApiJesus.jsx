import React, { useEffect, useState } from "react";
import Formulario from "../formularioApi/Formulario";
import { MdNoteAdd, MdOutlineSearch } from "react-icons/md";
import Modal from "react-modal";
import useModal from "../../hooks/useModal";
import useNote from "../../hooks/useNote";

// Modal.setAppElement("#root");

const ApiJesus = () => {
  const {
    modal,
    modalEditar,
    modalEliminar,
    AbrirModal,
    CerrarModal,
    AbrirModalEditar,
    CerrarModalEditar,
    CerrarModalEliminar,
  } = useModal();
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const { listarNotas, respuesta, agregarNota } = useNote();

  useEffect(() => {
    listarNotas();
  }, [respuesta]);

  return (
    <>
      <section className=" w-full [min-height:calc(100vh-76px)] flex flex-col justify-around bg-gray-200 flex-wrap">
        <header className="pt-16 pl-10 flex justify-start items-center gap-12">
          <div className="flex justify-center items-center gap-3">
            <input
              type="text"
              className="outline-none bg-transparent border-b-4 border-purple-600 focus:border-blue-500 px-2"
            />
            <MdOutlineSearch
              size="30px"
              className="hover:text-purple-600 cursor-pointer"
            />
          </div>
        </header>
        <article className="flex justify-center items-center py-6">
          <MdNoteAdd
            size="35px"
            className="hover:text-purple-600 cursor-pointer"
            onClick={AbrirModal}
          />
        </article>
        {/* ***************************MODAL AGREGAR******************** */}
        <Modal
          isOpen={modal}
          onRequestClose={CerrarModal}
          style={{
            overlay: {
              background: "hsla(213, 16%, 90%, .80)",
              // position: "fixed",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            },
            content: {
              position: "block",
              width: "100%",
              maxWidth: "500px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "0px",
            },
          }}
        >
          <div className="max-w-xl w-full flex flex-col justify-center items-center flex-wrap px-9 py-6 bg-indigo-500/80 rounded">
            <div className="w-full flex flex-col justify-center items-baseline gap-6">
              <div className="flex flex-col justify-center items-center gap-3 w-full">
                <h1 className="text-4xl text-white font-medium text-center">
                  Add Note
                </h1>
                <hr className="w-full h-1 bg-black no-underline" />
              </div>
              <div className="flex flex-col justify-center gap-4 ">
                <div className="max-w-2xl flex-wrap flex justify-start gap-4">
                  <h1 className="text-lg text-white">Ingrese su nombre: </h1>
                  <input
                    type="text"
                    onChange={(e) => {
                      setNombre(e.target.value);
                    }}
                    className="w-44 text-white outline-none bg-transparent border-b-2
                     border-b-black focus:border-b-blue-800 px-2"
                  />
                </div>
                <div className="max-w-2xl flex-wrap flex justify-start gap-4">
                  <h1 className="text-lg text-white">
                    Ingrese su descripción:
                  </h1>
                  <textarea
                    cols="20"
                    rows="5"
                    className="outline-none p-3 bg-gray-200"
                    onChange={(e) => {
                      setDescripcion(e.target.value);
                    }}
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="max-w-2xl flex-wrap flex justify-center items-center pt-5 gap-5 ">
              <button
                onClick={() => {
                  agregarNota(nombre, descripcion);
                  CerrarModal();
                }}
                className="border-2 border-black hover:bg-blue-800 hover:border-blue-800
                 rounded-md w-28 px-4 py-1 text-center text-white text-lg"
              >
                Save
              </button>
              <button
                onClick={CerrarModal}
                className="border-2 border-black hover:bg-red-600 hover:border-red-600
                 rounded-md w-28 px-4 py-1 text-center text-white text-lg"
              >
                Cancel
              </button>
            </div>
          </div>
        </Modal>
        {/* **************************MODAL AGREGAR******************** */}
        <article className="max-w-7xl w-full flex flex-row justify-center items-center
         flex-wrap gap-6 px-3 py-4">
          {respuesta.map((n) => {
            return (
              <>
                <Formulario
                  name={n.nombre}
                  description={n.descripcion}
                  date={n.fecha}
                  editar={AbrirModalEditar}
                  // eliminar={AbrirModalEliminar}
                  id={n.idNotes}
                />
              </>
            );
          })}

          {/* *************************** MODAL EDITAR ******************** */}
          <Modal
            isOpen={modalEditar}
            onRequestClose={CerrarModalEditar}
            style={{
              overlay: {
                background: "hsla(213, 16%, 90%, .80)",
                // position: "fixed",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              },
              content: {
                position: "block",
                width: "100%",
                maxWidth: "500px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "0px",
              },
            }}
          >
            <div className="max-w-xl w-full flex flex-col justify-center items-center flex-wrap px-9 py-6 bg-indigo-500/80 rounded">
              <div className="w-full flex flex-col justify-center items-baseline gap-6">
                <div className="flex flex-col justify-center items-center gap-3 w-full">
                  <h1 className="text-4xl text-white font-medium text-center">
                    Edit Note
                  </h1>
                  <hr className="w-full h-1 bg-black no-underline" />
                </div>
                <div className="flex flex-col justify-center gap-4 ">
                  <input
                    type="text"
                    name=""
                    id=""
                    className="text-white outline-none bg-transparent border-b-2 border-b-black focus:border-b-blue-800 px-2"
                  />
                  <textarea
                    cols="20"
                    rows="5"
                    className="outline-none p-3 bg-gray-200"
                  ></textarea>
                </div>
              </div>
              <div className="w-full flex justify-center items-center pt-5 gap-8 flex-wrap">
                <button className="border-2 border-black hover:bg-blue-600 hover:border-none rounded-md w-28 px-4 py-1 text-center text-white text-lg">
                  Guardar
                </button>
                <button
                  onClick={CerrarModalEditar}
                  className="border-2 border-black hover:bg-red-600 hover:border-none rounded-md w-28 px-4 py-1 text-center text-white text-lg"
                >
                  Cancel
                </button>
              </div>
            </div>
          </Modal>
          {/* ************************** MODAL EDITAR ******************** */}

          {/* *************************** MODAL ELIMINAR ******************** */}
          <Modal
            isOpen={modalEliminar}
            onRequestClose={CerrarModalEliminar}
            style={{
              overlay: {
                background: "hsla(213, 16%, 90%, .80)",
                // position: "fixed",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              },
              content: {
                position: "block",
                width: "100%",
                maxWidth: "500px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "0px",
              },
            }}
          >
            <div className="max-w-xl w-full flex flex-col justify-center items-center flex-wrap gap-6 px-12 py-6 bg-indigo-500/80 rounded">
              <div className="flex flex-col justify-center items-center gap-3 w-full">
                <h1 className="text-4xl text-white font-medium text-center">
                  Delete Note
                </h1>
                <hr className="w-full h-1 bg-black no-underline" />
              </div>
              <h1 className="text-center text-2xl font-medium text-white">
                ¿ Esta seguro que desea eliminar la nota 1 ?
              </h1>
              <div className="w-full flex justify-center items-center gap-8 flex-wrap">
                <button className="border-2 border-black hover:bg-red-600 hover:border-none rounded-md w-28 px-3 py-1 text-center text-white text-lg">
                  Yes
                </button>
                <button
                  onClick={CerrarModalEliminar}
                  className="border-2 border-black hover:bg-blue-600 hover:border-none rounded-md w-28 px-3 py-1 text-center text-white text-lg"
                >
                  No
                </button>
              </div>
            </div>
          </Modal>
          {/* ************************** MODAL ELIMINAR ******************** */}
        </article>
      </section>
    </>
  );
};

export default ApiJesus;
