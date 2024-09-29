"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import courses from "@images/courses.svg";

interface CardCoursesProps {}

const CardCourses: React.FC<CardCoursesProps> = () => {
  return (
    <div>
      <Link href="/estudiantes/cursos/nuevo-curso">
        <div className="bg-purple bg-opacity-20 flex items-center justify-center flex-col rounded-[5px] w-full opacity-70 hover:opacity-100 mt-[10px] md:mt-[24px] mb-[10px] px-20 h-[422px] md:h-[938px] xl:h-[456px]">
          <Image
            src={courses}
            alt="add course icon"
            width={68}
            height={67}
            className="mb-6"
          />
          <p className="text-center text-purple-text font-semibold text-base">
            Crea el primer <br />
            curso de tu <br />
            establecimiento
          </p>
        </div>
      </Link>
    </div>
  );
};

export default CardCourses;
