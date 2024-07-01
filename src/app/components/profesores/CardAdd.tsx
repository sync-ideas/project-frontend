"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import addProfessor from "../../../../public/assets/images/add-professor.svg";


interface CardProfessorProps {}

const CardProfessor: React.FC<CardProfessorProps> = () => {
    return (
        <div>
          <Link href="/profesores/nuevo-perfil">
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
        
      </div>
    );
  };
  
  export default CardProfessor;