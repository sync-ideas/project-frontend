"use client";
import React,{ useEffect }from "react";
import { useRouter } from "next/navigation";

interface CardsProps {}

const Cards: React.FC<CardsProps> = (props) => {
  const router = useRouter();
  return (
    <div className=" text-white h-[81.35vh] md:h-[89.365vh] xl:h-[82.363vh] flex justify-center items-center flex-col space-y-[10px] md:space-y-[16px] px-[24px] pb-[16px] md:pb-[24px] md:px-[32px] xl:items-stretch xl:flex-row xl:space-y-0 xl:space-x-[16px] xl:px-[120px]">
      <div
        className="w-full h-1/4 md:h-full bg-purple-card rounded-lg flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out text-xl hover:text-[22px] hover:scale-100 hover:opacity-75"
        onClick={() => router.push("/institucion")}
      >
        <div className="text-center">
          <a>Institución</a>
        </div>
      </div>
      <div
        className="w-full h-1/4 md:h-full bg-green rounded-lg flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out text-xl hover:text-[22px] hover:scale-100 hover:opacity-75"
        onClick={() => router.push("/profesores")}
      >
        <div className="text-center">
          <a>Profesores</a>
        </div>
      </div>
      <div
        className="w-full h-1/4 md:h-full bg-orange-card rounded-lg flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out text-xl hover:text-[22px] hover:scale-100 hover:opacity-75"
        onClick={() => router.push("/estudiantes")}
      >
        <div className="text-center">
          <a>Estudiantes</a>
        </div>
      </div>
      <div
        className="w-full h-1/4 md:h-full bg-blue-card rounded-lg flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out text-xl hover:text-[22px] hover:scale-100 hover:opacity-75"
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
