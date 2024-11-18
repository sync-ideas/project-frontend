"use client";
import React, { use, useEffect, useState } from "react";
import Button from "../ButtonEdit";
import { useMediaQuery } from "react-responsive";
import { useRouter } from "next/navigation";
import { useEstudiantesStore } from "@store/index";
import handleEditClick from "@functions/estudiantes/handleEditClick";
import { useCourseStore } from "@store/estudiantes/course-store";

export type Student = {
  
    "id": number,
    "name": string,
    "surname": string
    "contact_phone": string | null,
    "contact_email": string | null,
    "birthdate": string | null,
    "personal_id": string,
    "active": boolean,
    "course_id": number,
}

interface StudentCardProps {
  students: Student[];
}

const StudentsCards: React.FC<StudentCardProps> = ({students}) => {
  
  const { courses } = useEstudiantesStore();
  const isSmallScreen = useMediaQuery({ maxWidth: 767 });
  const router = useRouter();
  const { userId, setUserId, setLevel, setNumber, setLetter } = useCourseStore.getState();
  const handleClick = (userId: number) => {

      router.push(`/estudiantes/cursos/editar-estudiante/${userId}`);
    
  };
  
  

  return (
    <div className="pt-[20px] mb-[10px]">
      <div className="mb-[16px]">
        <a>Selecciona un estudiante para editarlo</a>
      </div>
      <div className="h-[55vh] md:h-[75vh] xl:h-[60vh] overflow-y-auto">
        {students.length > 0 && students.map((student, index) => (
          <div
            key={student.id}
            onClick={() => handleClick(student.id)}
            className={`bg-purple bg-opacity-20 hover:bg-opacity-40 border-[2px] border-[purple] border-opacity-20 h-[54px] md:h-[74px] py-[16px] px-[10px] cursor-pointer md:cursor-default ${
              index === 0
                ? "rounded-t-lg" // Estilos para el primer elemento
                : index === students.length - 1
                ? "rounded-b-lg" // Estilos para el último elemento
                : "" // Estilos para los elementos intermedios
            }`}
          >
            <div className="flex items-center justify-center md:justify-between px-[24px]">
              <a className="">
                {student.name}
                {" "}
                {student.surname}
              </a>
              <a className=""></a>
              <Button
                text="Editar"
                userId={student.id}
                onClick={(id) => handleClick(id)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentsCards;
