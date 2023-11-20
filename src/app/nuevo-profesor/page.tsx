import React from "react";
import Footer from "../components/Footer";
import { Open_Sans } from "next/font/google";
import Breadcrumb from "../components/Breadcrumb";
import Link from "next/link";
import ProfForm from "../components/ProfForm";
import NavBar from "../components/navbar";
import LinkComponent from "../components/LinkComponent/LinkComponentCustom";

const open_sans = Open_Sans({ subsets: ["latin"] });

const NewProfessor = () => {
  return (
    <div
      className={`mx-auto h-screen ${open_sans.className} text-base flex flex-col items-center`}
    >
      <div className="w-full flex flex-col items-center">
        <NavBar />
        <div className="flex justify-between w-[85%] md:w-[95%] xl:w-[82%]">
          <Breadcrumb
            links={[
              { hiper: "/", text: "Profesores" },
              { hiper: "", text: "Nuevo Perfil" },
            ]}
          />
          <LinkComponent
            link="/"
            text="< Volver"
            decorationColor="green"
            textColor="purple-disabled"
            textColorHover="purple"
          />
        </div>
      </div>
      <ProfForm />
      <Footer />
    </div>
  );
};

export default NewProfessor;
