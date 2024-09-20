"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Footer from "@components/Footer";
import NavBar from "@components/navbar";
import Button from "@components/button";
import Breadcrumb from "@components/Breadcrumb";
import CardAddCourses from "@components/estudiantes/CardAddCourses";
import Cards from "@components/estudiantes/Cards";
import { useEstudiantesStore } from "@store/index";
import { getCourses } from "./coursesSubmit";

interface CourseRegistrationProps {}

const CourseRegistration: React.FC<CourseRegistrationProps> = (props) => {
  //Creacion de router
  const router = useRouter();
  // Estado para manejar la lista de profesores y su carga
  const [loading, setLoading] = useState(true);
  // Obtener funciones y estado del store de Zustand
  // const { resetUser } = useUserStore();
  const { courses, setCourses } = useEstudiantesStore();
  // Llama a la función para obtener la lista de profesores al montar el componente
  // y establece loading a false cuando se han cargado los profesores
  useEffect(() => {
    const fetchProfesores = async () => {
      try {
        const courses = await getCourses();
        setCourses(courses);
      } catch (error) {
        console.error("Error al obtener los cursos:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfesores();
  }, [setCourses]);

  const handleClik = () => {
    router.push("/estudiantes/cursos/nuevo-curso");
  };
  
  return (
    <div>
      <NavBar />
      <div className="px-[24px] md:px-[32px] xl:px-[120px] flex flex-col">
        <Breadcrumb
          links={[
            { hiper: "/estudiantes", text: "Estudiantes" },
            { hiper: "/curso", text: "Cursos" },
          ]}
        />
        {loading ? (
          <p>Cargando...</p>
        ) : courses.length === 0 ? (
          <CardAddCourses />
        ) : (
          <Cards />
        )}
        <div className="md:mt-[16px] w-full xl:w-[312px] self-end ">
          <Button text="Nuevo curso" onClick={handleClik} isCompleted={true} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CourseRegistration;
