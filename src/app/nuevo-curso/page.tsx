"use client";
import React, { useState } from "react";
import NavBar from "../components/navbar";
import CustomSelect from "../components/Select";

const NewCourse = () => {
  const [grado, setGrado] = useState("Grado");
  return (
    <>
      <NavBar />
      <div className="w-[90%] xl:w-[80%] mx-auto xl:pr-10 flex flex-col gap-2">
        <p>Breadcramb</p>
        <p>Ingresa datos del curso</p>
        <CustomSelect
          value={"Nivel Educativo"}
          options={["Nivel Educativo", "Primaria", "Secundaria"]}
          placeholder="Nivel Educativo"
        />
        <CustomSelect
          value={grado}
          options={["Grado", "1º", "2º", "3º", "4º", "5º"]}
        />
        <CustomSelect
          enabled={grado !== "Grado"}
          value={"Letra"}
          options={["Letra", "A", "B", "C"]}
        />
      </div>
    </>
  );
};

export default NewCourse;
