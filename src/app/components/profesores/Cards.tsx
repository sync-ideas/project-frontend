"use client";
import React from "react";
import Button from "./ButtonEdit";
import { useRouter } from "next/navigation";
import { useMediaQuery } from "react-responsive";
import { useProfesorStore } from "@/app/profesores/profesoresSubmit";
interface CardProfessorProps {}

const Cards: React.FC<CardProfessorProps> = () => {
  const { profesores } = useProfesorStore();
  const router = useRouter();
  const isSmallScreen = useMediaQuery({ maxWidth: 779 });

  const handleClick = () => {
    if (isSmallScreen) {
      router.push("");
    }
  };
  return (
    <div className="pt-[20px] mb-[10px]">
      <div className="mb-[16px]">
        <a>Selecciona un profesor para editar</a>
      </div>
      {profesores.map((profesor, index) => (
        <div
          key={profesor.id}
          onClick={handleClick}
          className={`bg-purple bg-opacity-20 hover:bg-opacity-40 border-[2px] border-[purple] border-opacity-20 h-[54px] md:h-[74px] py-[16px] px-[10px] cursor-pointer md:cursor-default ${
            index === 0
              ? "rounded-t-lg" // Estilos para el primer elemento
              : index === profesores.length - 1
              ? "rounded-b-lg" // Estilos para el último elemento
              : "" // Estilos para los elementos intermedios
          }`}
        >
          <div className="flex items-center justify-center md:justify-between px-[24px]">
            <a className="">{profesor.fullname}</a>
            <Button />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
