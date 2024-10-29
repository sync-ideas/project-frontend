"use client";
import Breadcrumb from "@components/Breadcrumb";
import Footer from "@components/Footer";
import NavBar from "@components/navbar";
import React, { useEffect, useState } from "react";
import CurEditForm from "@components/estudiantes/CurEditForm";
import { useCourseStore } from "@store/estudiantes/course-store";
import { getCourseData } from "../coursesSubmit";

interface Course {
  id: number;
  level: string;
  number: string;
  letter: string;
  createdAt: string;
}

const EditCourse: React.FC = () => {
  const { userId } = useCourseStore();
  const [editingCourse, setEditingCourse] = useState<Course>();
  useEffect(() => {
    const fetchdatos = async () => {
      const response = await getCourseData(userId);
      setEditingCourse(response[0]);
    };
    fetchdatos();
  }, [userId]);
  const BreadLinks = [
    { hiper: "/estudiantes", text: "Estudiantes" },
    { hiper: "/estudiantes/cursos", text: "Cursos" },
    {
      hiper: "",
      text: `Editar ${
        editingCourse?.number
      }º-${editingCourse?.letter.toUpperCase()}`,
    },
  ];

  return (
    <div>
      <NavBar />
      <div className="px-6 pb-[10px] md:px-[32px] xl:px-[120px]">
        <div className="w-full xl:w-[512px]">
          <Breadcrumb links={BreadLinks} />
        </div>
        <div className="flex flex-col items-center w-full md:mt-[24px] xl:h-[530px]">
          <CurEditForm />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EditCourse;
