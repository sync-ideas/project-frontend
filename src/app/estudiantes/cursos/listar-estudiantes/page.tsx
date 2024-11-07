"use client";
import Breadcrumb from "@components/Breadcrumb";
import Footer from "@components/Footer";
import NavBar from "@components/navbar";
import { useEffect, useState } from "react";
import CardAddCourses from "@components/estudiantes/CardAddCourses";
import CourseCards from "@components/estudiantes/CardsCourses";
import { useEstudiantesStore } from "@store/index";
import getStudentsByCourse from "./studentsByCourse";
import { useCourseStore } from "@store/estudiantes/course-store";
import StudentsCards from "@components/estudiantes/CardsStudents";
import { getCourseData } from "../coursesSubmit";
import { Course } from "../../nuevo-estudiante/components/NuevoFormEstudiante";
import CardStudent from "@components/estudiantes/CardAddStudent";

const ListaEstudiantes = () => {
  const { userId } = useCourseStore();
  const [datosCurso, setDatosCurso] = useState<Course>()
  const [loading, setLoading] = useState(true);
  const [students, setStudents] = useState([]);
  useEffect(() => {
    setLoading(true);
    getStudentsByCourse(userId)
      .then((response) => {console.log(response);setStudents(response.data)})
      .then(() => setLoading(false));
    getCourseData(userId).then(response => setDatosCurso(response[0]))
  }, [userId]);
  return (
    <div>
      <NavBar />
      <div className="px-[24px] md:px-[32px] xl:px-[120px] flex flex-col">
        <Breadcrumb
          links={[
            { hiper: "/estudiantes", text: "Estudiantes" },
            { hiper: "/estudiantes/cursos", text: "Cursos" },
            { hiper: "/estudiantes/cursos/editar-curso", text: `${datosCurso?.number}º - ${datosCurso?.letter}` },
            { hiper: "/listar-estudiantes", text: "Lista de estudiantes" },
          ]}
        />
        {loading ? (
          <p>Cargando...</p>
        ) : students && students?.length === 0 ? (
          <CardStudent />
        ) : (
          <StudentsCards students={students} />
        )}
      </div>
      <Footer />
    </div>
  );
};
export default ListaEstudiantes;
