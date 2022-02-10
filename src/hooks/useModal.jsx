import React, { useState } from "react";

const useModal = () => {
  const [modal, setModal] = useState(false);
  const [modalEditar, setModalEditar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);
  const AbrirModal = () => {
    setModal(true);
  };
  const CerrarModal = () => {
    setModal(false);
  };
  const AbrirModalEditar = () => {
    setModalEditar(true);
  };
  const CerrarModalEditar = () => {
    setModalEditar(false);
  };
  const AbrirModalEliminar = () => {
    setModalEliminar(true);
  };
  const CerrarModalEliminar = () => {
    setModalEliminar(false);
  };
  return {
    modal,
    modalEditar,
    modalEliminar,
    AbrirModal,
    CerrarModal,
    AbrirModalEditar,
    CerrarModalEditar,
    AbrirModalEliminar,
    CerrarModalEliminar,
  };
};

export default useModal;
