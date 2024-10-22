"use client";
import Breadcrumb from "@components/Breadcrumb";
import Footer from "@components/Footer";
import NavBar from "@components/navbar";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import getStudentsByCourse from "./studentsByCourse";
import { useCourseStore } from "@store/estudiantes/course-store";
import InputCurso from "@components/InputCurso";
import CurEditForm from "@components/estudiantes/CurEditForm";

interface Estudiante {
  id: number;
  name: string;
  surname: string;
  contact_phone: string | null;
  contact_email: string;
  birthdate: string;
  personal_id: string;
  active: boolean;
  course_id: number;
}

const EditCourse: React.FC = () => {
  const BreadLinks = [
    { hiper: "/estudiantes", text: "Estudiantes" },
    { hiper: "/estudiantes/cursos", text: "Cursos" },
    { hiper: "", text: "Editar Curso" },
  ];
  const [estudiantes, setEstudiantes] = useState<Estudiante[]>([]);
  const { userId, level, number, letter } = useCourseStore.getState();
  console.log(level, number, letter);

  return (
    <div>
      <NavBar />
      <div className="px-6 pb-[10px] md:px-[32px] xl:px-[120px]">
        <div className="w-full xl:w-[512px]">
          <Breadcrumb links={BreadLinks} />
        </div>
        <div className="flex flex-col items-center w-full md:mt-[24px] xl:h-[530px]">
          <CurEditForm
            level={level}
            number={parseInt(number)}
            letter={letter}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EditCourse;
