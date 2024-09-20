import Breadcrumb from "@components/Breadcrumb";
import Footer from "@components/Footer";
import NavBar from "@components/navbar";
import React from "react";

const EditCourse: React.FC = () => {
  const BreadLinks = [
    { hiper: "/estudiantes", text: "Estudiantes" },
    { hiper: "/estudiantes/cursos", text: "Cursos" },
    { hiper: "", text: "Editar Curso" },
  ];
  return (
    <div>
      <NavBar />
      <div className="px-6 pb-[10px] md:px-[32px] xl:px-[120px]">
        <div className="w-full xl:w-[512px]">
          <Breadcrumb links={BreadLinks} />
        </div>
        <div className="flex flex-col items-center w-full md:mt-[24px] xl:h-[530px]">
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EditCourse;
