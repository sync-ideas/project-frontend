"use client";
import React from "react";
import Footer from "../../components/Footer";
import Breadcrumb from "../../components/Breadcrumb";
import NavBar from "../../components/navbar";
import NuevoForm from "./NuevoForm";
import ModalConfirmNew from "../../components/profesores/ModalConfirmNew";
import { useProfesoresStore } from "../../../store";

const NewProfessor = () => {
  const showSuccessModalNew = useProfesoresStore(
    (state) => state.showSuccessModalNew
  );
  return (
    <div>
      {showSuccessModalNew && <ModalConfirmNew />}
      <NavBar />
      <div className="px-6 pb-[10px] md:px-[32px] xl:px-[120px]">
        <div className="w-full xl:w-[312px]">
          <Breadcrumb
            links={[
              { hiper: "/home", text: "Inicio" },
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
