import React from "react";
import Footer from "../components/Footer";
import { Open_Sans } from "next/font/google";
import Breadcrumb from "../components/Breadcrumb";
import Link from "next/link";
import ProfForm from "../components/ProfForm";

const open_sans = Open_Sans({ subsets: ["latin"] });

const NewProfessor = () => {
  return (
    <div
      className={`mx-auto w-[90%]  h-screen ${open_sans.className} text-base`}
    >
      NAVBAR
      <div className="flex justify-between">
        <Breadcrumb
          links={[
            { hiper: "/", text: "Profesores" },
            { hiper: "", text: "Nuevo Perfil" },
          ]}
        />
        <Link href="/"> &lt; Volver </Link>
      </div>
      <ProfForm />
      <Footer />
    </div>
  );
};

export default NewProfessor;
