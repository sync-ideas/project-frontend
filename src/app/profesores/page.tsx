"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Footer from "../components/Footer";
import NavBar from "../components/navbar";
import Button from "../components/button";
import addProfessor from "../../../public/assets/images/add-professor.svg";
import Breadcrumb from "../components/Breadcrumb";

interface ProfessorProps {}
const Professor: React.FC<ProfessorProps> = () => {
  const router = useRouter();
  const handleClik = () => {
    router.push("/nuevo-profesor");
  };
  return (
    <div>
      <NavBar />
      <div className="px-[24px] md:px-[32px] xl:px-[120px] flex flex-col">
        <Breadcrumb links={[{ hiper: "/", text: "Profesores" }]} />
        <Link href="/nuevo-profesor">
          <div className="bg-purple bg-opacity-20 flex items-center justify-center flex-col rounded-[5px] w-full opacity-70 hover:opacity-100 mt-[10px] md:mt-[24px] mb-[10px] px-20 h-[422px] md:h-[938px] xl:h-[456px]">
            <Image
              src={addProfessor}
              alt="add professor icon"
              width={63}
              height={62}
              className="w-16 h-16 mb-6"
            />
            <p className="text-center text-purple-text font-semibold text-base">
              Agrega al primer <br />
              profesor del <br />
              equipo docente
            </p>
          </div>
        </Link>
        <div className="md:mt-[16px] w-full xl:w-[312px] self-end ">
          <Button text="Nuevo perfil" onClick={handleClik} isCompleted={true} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Professor;
