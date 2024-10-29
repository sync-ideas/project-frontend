"use client";
import React from "react";
import Button from "../ButtonEdit";
import { useMediaQuery } from "react-responsive";
import { useRouter } from "next/navigation";
import { useEstudiantesStore } from "@store/index";
import handleEditClick from "@functions/estudiantes/handleEditClick";

interface CardProfessorProps {}

const CourseCards: React.FC<CardProfessorProps> = () => {
  const { courses } = useEstudiantesStore();
  const isSmallScreen = useMediaQuery({ maxWidth: 767 });
  const router = useRouter();

  const handleClick = (userId: number) => {
    if (isSmallScreen) {
      handleEditClick(userId, router);
    }
  };

  return (
    <div className="pt-[20px] mb-[10px]">
      <div className="mb-[16px]">
        <a>Selecciona un profesor para editar</a>
      </div>
      <div className="h-[55vh] md:h-[75vh] xl:h-[60vh] overflow-y-auto">
        {courses.map((course, index) => (
          <div
            key={course.id}
            onClick={() => handleClick(course.id)}
            className={`bg-purple bg-opacity-20 hover:bg-opacity-40 border-[2px] border-[purple] border-opacity-20 h-[54px] md:h-[74px] py-[16px] px-[10px] cursor-pointer md:cursor-default ${
              index === 0
                ? "rounded-t-lg" // Estilos para el primer elemento
                : index === courses.length - 1
                ? "rounded-b-lg" // Estilos para el último elemento
                : "" // Estilos para los elementos intermedios
            }`}
          >
            <div className="flex items-center justify-center md:justify-between px-[24px]">
              <a className="">
                {course.number}
                {"° "}
                {course.letter}
              </a>
              <a className=""></a>
              <Button
                text="Editar"
                userId={course.id}
                onClick={(id) => handleEditClick(id, router)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseCards;
