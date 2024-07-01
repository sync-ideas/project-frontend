/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Footer from "../components/Footer";
import NavBar from "../components/navbar";
import Button from "../components/button";
import Breadcrumb from "../components/Breadcrumb";
import CardProfessorAdd from "../components/profesores/CardAdd";
import Cards from "../components/profesores/Cards";
import { useProfesorStore } from "../profesores/profesoresSubmit";

interface ProfessorProps {}
const Professor: React.FC<ProfessorProps> = () => {
  const router = useRouter();
  const obtenerProfesores = useProfesorStore(
    (state) => state.obtenerProfesores
  );
  const profesores = useProfesorStore((state) => state.profesores);
  //   console.log('Lista de profesores:', profesores);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    obtenerProfesores();
  }, []);

  useEffect(() => {
    // Set loading to false once profesores are fetched
    if (profesores.length > 0) {
      setLoading(false);
    }
  }, [profesores]);

  const handleClik = () => {
    router.push("/nuevo-profesor");
  };
  return (
    <div>
      <NavBar />
      <div className="px-[24px] md:px-[32px] xl:px-[120px] flex flex-col">
        <Breadcrumb links={[{ hiper: "/", text: "Profesores" }]} />
        {loading ? (
          <p>Cargando...</p>
        ) : profesores.length === 0 ? (
          <CardProfessorAdd />
        ) : (
          <Cards />
        )}
        <div className="md:mt-[16px] w-full xl:w-[312px] self-end ">
          <Button text="Nuevo perfil" onClick={handleClik} isCompleted={true} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Professor;
