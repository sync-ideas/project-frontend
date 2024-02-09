import Breadcrumb from "@/app/components/Breadcrumb";
import CurForm from "@/app/components/CurForm";
import Footer from "@/app/components/Footer";
import NavBar from "@/app/components/navbar";
import React from "react";

const Page = () => {
  const BreadLinks = [
    { hiper: "/estudiantes", text: "Estudiantes" },
    { hiper: "/estudiantes/cursos", text: "Cursos" },
    { hiper: "", text: "Nuevo curso" },
  ];
  return (
    <div className={`mx-auto h-screen text-base flex flex-col items-center`}>
      <div className="w-full flex flex-col items-center">
        <NavBar />
        <div className="flex justify-between w-[85%] md:w-[95%] xl:w-[82%]">
          <Breadcrumb links={BreadLinks} />
        </div>
        <CurForm />
      </div>
      <Footer />
    </div>
  );
};

export default Page;
