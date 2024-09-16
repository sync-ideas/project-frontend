"use client";
import React from "react";
import Footer from "@components/Footer";
import Breadcrumb from "@components/Breadcrumb";
import NavBar from "@components/navbar";
import NuevoForm from "./NuevoForm";
import ModalConfirm from "@components/profesores/Modals/ModalConfirm";
import { useCreateProfesor } from "@components/profesores/Modals/ModalAPI";
import { useProfesoresStore, useModalStore } from "@store/index";

const NewProfessor = () => {
  const { newUser } = useProfesoresStore(); // Obtienes el estado newUser
  const { showModalNew, setModalNew } = useModalStore(); // Obtienes el estado newUser

  const data = newUser[0]; // Asegúrate de que sea un objeto con los datos necesarios
  const {createProfesor} = useCreateProfesor()
  const handleCreateProfesor = async () => {
    try {
      if (data) {
        await createProfesor(data);
      } else {
        console.error("No hay datos de usuario para crear el perfil.");
      }
    } catch (error) {
      console.error("Error al crear el profesor:", error);
    }
  };
  const handleCloseModal = () => {
    setModalNew(false); // Cierra el modal cambiando el estado
  };
  return (
    <div>
      {showModalNew && (
        <ModalConfirm
          onConfirm={handleCreateProfesor}
          data={data}
          text="Confirma los datos del nuevo perfil de profesor"
          onClose={handleCloseModal}
        />
      )}
      <NavBar />
      <div className="px-6 pb-[10px] md:px-[32px] xl:px-[120px]">
        <div className="w-full xl:w-[312px]">
          <Breadcrumb
            links={[
              { hiper: "/profesores", text: "Profesores" },
              { hiper: "", text: "Nuevo perfil" },
            ]}
          />
        </div>
        <div className="flex flex-col items-center w-full">
          <div className="w-full xl:w-[312px]">
            <NuevoForm />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default NewProfessor;
