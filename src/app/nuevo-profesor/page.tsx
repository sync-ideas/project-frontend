import React from "react";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import Link from "next/link";
import ProfForm from "../components/ProfForm";
import NavBar from "../components/navbar";
import LinkComponent from "../components/LinkComponent/LinkComponentCustom";

const NewProfessor = () => {
  return (
    <div className={`mx-auto h-screen text-base flex flex-col items-center`}>
      <div className="w-full flex flex-col items-center">
        <NavBar />
        <div className="flex justify-between w-[85%] md:w-[95%] xl:w-full xl:px-[120px] md:px-2">
          <Breadcrumb
            links={[
              { hiper: "/", text: "Profesores" },
              { hiper: "", text: "Nuevo perfil" },
            ]}
          />
          <div className="xl:mr-10">
            <LinkComponent
              link="/"
              text="< Volver"
              decorationColor="green"
              textColor="purple-disabled"
              textColorHover="purple"
            />
          </div>
        </div>
      </div>
      <ProfForm />
      <Footer />
    </div>
  );
};

export default NewProfessor;
