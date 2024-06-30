"use client";
import React from "react";
import NavBar from "../../components/navbar";
import Breadcrumb from "../../components/Breadcrumb";
import Footer from "../../components/Footer";
import EditarForm from "./EditarForm";

interface PruebaProps {}

const EditPerfil: React.FC<PruebaProps> = (props) => {

  return (
    <div>
      <NavBar />
      <div className="px-6 pb-[10px] md:px-[32px] xl:px-[120px]">
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
