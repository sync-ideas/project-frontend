"use client";

import React from "react";
import { useRouter } from "next/navigation";
interface CardsProps {}

const Cards: React.FC<CardsProps> = (props) => {
  const router = useRouter();

  return (
    <div className=" text-white flex justify-center items-center flex-col space-y-4 px-[24px] pb-[24px] md:px-[32px] xl:items-stretch xl:flex-row xl:space-y-0 xl:space-x-4 xl:px-[120px]">
      <div
        className="w-full h-[120.5px] md:h-[248.75px] xl:w-1/4 xl:h-[569px] bg-purple-card rounded-lg flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out hover:text-xl hover:scale-100 hover:opacity-75 px-[20px] py-[10px]"
        onClick={() => router.push("/institucion")}
      >
        <div className="text-center">
          <a>Institución</a>
        </div>
      </div>
      <div
        className="w-full h-[120.5px] md:h-[248.75px] xl:w-1/4 xl:h-[569px] bg-green-card rounded-lg flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out hover:text-xl hover:scale-100 hover:opacity-75 px-[20px] py-[10px]"
        onClick={() => router.push("/profesores")}
      >
        <div className="text-center">
          <a>Profesores</a>
        </div>
      </div>
      <div
        className="w-full h-[120.5px] md:h-[248.75px] xl:w-1/4 xl:h-[569px] bg-orange-card rounded-lg flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out hover:text-xl hover:scale-100 hover:opacity-75 px-[20px] py-[10px]"
        onClick={() => router.push("/estudiantes")}
      >
        <div className="text-center">
          <a>Estudiantes</a>
        </div>
      </div>
      <div
        className="w-full h-[120.5px] md:h-[248.75px] xl:w-1/4 xl:h-[569px] bg-blue-card rounded-lg flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out hover:text-xl hover:scale-100 hover:opacity-75 px-[20px] py-[10px]"
        onClick={() => router.push("/estadisticas")}
      >
        <div className="text-center">
          <a>Estadísticas</a>
        </div>
      </div>
    </div>
  );
};

export default Cards;
