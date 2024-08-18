/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Footer from "../components/Footer";
import NavBar from "../components/navbar";
import Button from "../components/button";
import Breadcrumb from "../components/Breadcrumb";
import CardProfessorAdd from "../components/profesores/CardAdd";
import Cards from "../components/profesores/Cards";
import { obtenerProfesores } from "../profesores/profesoresSubmit";
import ModalConfirmEdit from "../components/profesores/ModalConfirmEdit";
import { useUserStore, useProfesoresStore } from "../../store";
import ModalConfirmNewSuccess from "../components/profesores/ModalConfirmNewSuccess";

interface ProfessorProps {}
const Professor: React.FC<ProfessorProps> = () => {
  //Creacion de router
  const router = useRouter();
  // Estado para manejar la lista de profesores y su carga
  const [loading, setLoading] = useState(true);
  // Obtener funciones y estado del store de Zustand
  const { resetUser } = useUserStore();
  const {
    profesores,
    setProfesores,
    showSuccessModalEdit,
    showSuccessModalNewSuccess,
    setShowSuccessModalEdit,
    setShowSuccessModalNewSuccess,
  } = useProfesoresStore();

  // Llama a la función para obtener la lista de profesores al montar el componente
  // y establece loading a false cuando se han cargado los profesores
  useEffect(() => {
    const fetchProfesores = async () => {
      try {
        const profesores = await obtenerProfesores();
        setProfesores(profesores);
      } catch (error) {
        console.error("Error al obtener los profesores:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfesores();
  }, [setProfesores]);
  // Función para redirigir a la página de creación de nuevo profesor
  const handleClik = () => {
    router.push("/profesores/nuevo-perfil");
  };

  // Función para cerrar el modal
  const handleCloseModalEdit = () => {
    resetUser();
    setShowSuccessModalEdit(false);
  };
  const handleCloseModalNewSuccess = () => {
    setShowSuccessModalNewSuccess(false);
  };

  return (
    <div>
      {showSuccessModalNewSuccess && (
        <ModalConfirmNewSuccess onClose={handleCloseModalNewSuccess} />
      )}
      {showSuccessModalEdit && (
        <ModalConfirmEdit onClose={handleCloseModalEdit} />
      )}
      <NavBar />
      <div className="px-[24px] md:px-[32px] xl:px-[120px] flex flex-col">
        <Breadcrumb
          links={[
            { hiper: "/home", text: "Inicio" },
            { hiper: "/", text: "Profesores" },
          ]}
        />
        {loading ? (
          <p>Cargando...</p>
        ) : profesores.length === 0 ? (
          <CardProfessorAdd />
        ) : (
          <Cards />
        )}
        <div className="md:mt-[16px] w-full xl:w-[312px] self-end ">
          <Button text="Nuevo perfil" onClick={handleClik} isCompleted={true} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Professor;
