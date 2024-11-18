"use client";

import Breadcrumb from "@components/Breadcrumb";
import Footer from "@components/Footer";
import NavBar from "@components/navbar";
import { useEffect, useState } from "react";
import NuevoFormEstudiante from "src/app/estudiantes/nuevo-estudiante/components/NuevoFormEstudiante";
import { getStudent } from "../fetchStudent";
import { Student } from "@components/estudiantes/CardsStudents";


const EditarEstudiante = ({ params }: { params: { id: string } }) => {
  const [editarEstudiante, setEditarEstudiante] = useState<Student>()
  const Links =
    window?.innerWidth >= 750
      ? [
          { hiper: "/home", text: "Inicio" },
          { hiper: "/estudiantes", text: "Estudiantes" },
          { hiper: "/editar-estudiante", text: "Editar Estudiante" },
        ]
      : [
          { hiper: "/estudiantes", text: "Estudiantes" },
          { hiper: "/editar-estudiante", text: "Editar Estudiante" },
        ];
  useEffect(()=>{
    getStudent(params.id).then(response => setEditarEstudiante(response))
    
  },[params.id])
  return (
    <div>
      <NavBar />
      <div className="px-[24px] md:px-[32px] xl:px-[120px] flex flex-col">
        <Breadcrumb links={Links} />
        <div className="flex flex-col items-center w-full">
          <div className="w-full xl:w-[312px]">
            <NuevoFormEstudiante estudiante={editarEstudiante}/>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default EditarEstudiante;