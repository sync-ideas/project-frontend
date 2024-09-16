"use client";
import React from "react";
import NavBar from "../../components/navbar";
import Breadcrumb from "../../components/Breadcrumb";
import Footer from "../../components/Footer";
import EditarForm from "./EditarForm";
import ModalConfirm from "@components/profesores/Modals/ModalConfirm";
import { useDeleteProfesor } from "@components/profesores/Modals/ModalAPI";
import { useModalStore, useUserStore } from "@store/index";
import ModalConfirmNewSuccess from "@components/profesores/Modals/ModalConfirmNewSuccess";

interface PruebaProps {}

const EditPerfil: React.FC<PruebaProps> = (props) => {
  const data = useUserStore.getState();
  const deleteProfesor = useDeleteProfesor();
  const { showModalNew, showModalNewSuccess, setModalNew, setModalNewSuccess } =
    useModalStore();
  const handleDeleteProfesor = async () => {
    try {
      if (data.userId) {
        await deleteProfesor(data.userId.toString());
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
  const handleCloseModalNewSuccess = () => {
    setModalNewSuccess(false);
  };
  return (
    <div>
      <NavBar />
      <div className="px-6 pb-[10px] md:px-[32px] xl:px-[120px]">
        {showModalNewSuccess && (
          <ModalConfirmNewSuccess
            onClose={handleCloseModalNewSuccess}
            text="Profesor eliminado con éxito"
          />
        )}
        {showModalNew && (
          <ModalConfirm
            onConfirm={handleDeleteProfesor}
            data={data}
            text="¿Quieres eliminar este profesor?"
            onClose={handleCloseModal}
            bgColor="red"
            buttonColor="red"
          />
        )}
        <div className="w-full xl:w-[312px]">
          <Breadcrumb
            links={[
              { hiper: "/profesores", text: "Profesores" },
              { hiper: "", text: "Editar perfil" },
            ]}
          />
        </div>
        <div className="flex flex-col items-center w-full">
          <div className="w-full xl:w-[312px]">
            <EditarForm />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EditPerfil;
