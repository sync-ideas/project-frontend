import Breadcrumb from "../../../components/Breadcrumb";
import CurForm from "../../../components/CurForm";
import Footer from "../../../components/Footer";
import NavBar from "../../../components/navbar";
import React from "react";

const Page = () => {
  const BreadLinks = [
    { hiper: "/estudiantes", text: "Estudiantes" },
    { hiper: "/estudiantes/cursos", text: "Cursos" },
    { hiper: "", text: "Nuevo curso" },
  ];
  return (
    <div className={`mx-auto h-screen text-base flex flex-col items-center`}>
      <div className="w-full flex flex-col items-center h-screen md:h-auto">
        <NavBar />
        <div className="flex justify-between w-[85%] md:w-[95%] xl:w-[82%]">
          <Breadcrumb links={BreadLinks} />
        </div>
        <CurForm />
        <Footer />
      </div>
    </div>
  );
};

export default Page;
