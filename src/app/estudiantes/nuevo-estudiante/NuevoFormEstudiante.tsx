"use client";
import React, { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomInputEstudiante from "../../components/inputEstudiante";
import Button from "../../components/button";
import { areInputsNotEmpty } from "../../../functions/input/formUtils";
import { studentSchemaNew } from "../../validations/profesores/nuevo/studentSchemaNew";

export type Inputs = {
  nombre: string;
  apellido: string;
  identificacion: string;
  fechaNacimiento: string;
  email: string;
  curso: string;
};
interface Course {
  id: number;
  level: string;
  number: number;
  letter: string;
  active: boolean;
  createdAt: string;
  updatedAt: string;
}

interface ApiResponse {
  result: boolean;
  message: string;
  data: Course[];
}
//cambiar con los datos que se obtengan del endpoint
const cursosFromApi: ApiResponse = {
  result: true,
  message: "Courses found",
  data: [
    {
      id: 1,
      level: "F",
      number: 2,
      letter: "G",
      active: false,
      createdAt: "2023-10-09T21:59:30.498Z",
      updatedAt: "2023-10-10T01:52:43.634Z",
    },
    {
      id: 2,
      level: "Primer ciclo",
      number: 1,
      letter: "A",
      active: true,
      createdAt: "2023-10-11T13:38:03.571Z",
      updatedAt: "2023-10-11T13:38:03.571Z",
    },
    {
      id: 3,
      level: "Primer ciclo",
      number: 1,
      letter: "C",
      active: true,
      createdAt: "2023-10-11T13:38:51.452Z",
      updatedAt: "2023-10-11T13:38:51.452Z",
    },
  ],
};

const NuevoFormEstudiante: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<Inputs>({
    resolver: zodResolver(studentSchemaNew),
  });

  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleInputChange = useCallback(() => {
    const inputsNotEmpty = areInputsNotEmpty(
      watch,
      "nombre",
      "apellido",
      "identificacion",
      "fechaNacimiento",
      "email",
      "curso"
    );
    setIsButtonDisabled(inputsNotEmpty);
  }, [watch, setIsButtonDisabled]);

  const handleSubmitForm = (data: Inputs) => {
    // Guardar los datos en el store
    console.log(data);
  };
  return (
    <>
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <div className="flex flex-col gap-6 py-[20px] min-h-[381px] h-auto">
          <a>Ingresa datos del estudiante</a>
          <CustomInputEstudiante
            id="nombre"
            label="Nombre"
            placeholder="Ingresa un nombre"
            type="text"
            textStyle="text-left"
            register={register}
            onChange={handleInputChange}
          />
          {errors.nombre?.message && (
            <p className="w-[320px] mt-[5px] text-[#DE1111]">
              {errors.nombre.message}
            </p>
          )}
          <CustomInputEstudiante
            id="apellido"
            placeholder="Ingresa un apellido"
            label="Apellido"
            type="text"
            textStyle="text-left"
            register={register}
            onChange={handleInputChange}
          />
          {errors.apellido?.message && (
            <p className="w-[320px] mt-[5px] text-[#DE1111]">
              {errors.apellido.message}
            </p>
          )}
          <CustomInputEstudiante
            id="identificacion"
            placeholder="Ingresa número de identificación"
            label="DNI / RUT"
            type="text"
            textStyle="text-left"
            register={register}
            onChange={handleInputChange}
          />
          {errors.identificacion?.message && (
            <p className="w-[320px] mt-[5px] text-[#DE1111] text-sm">
              {errors.identificacion.message}
            </p>
          )}
          <CustomInputEstudiante
            id="fechaNacimiento"
            placeholder="22 | Abril | 2014"
            label="Fecha de nacimiento"
            type="date"
            register={register}
            onChange={handleInputChange}
          />
          {errors.fechaNacimiento?.message && (
            <p className="w-[320px] mt-[5px] text-[#DE1111]">
              {errors.fechaNacimiento.message}
            </p>
          )}
          <CustomInputEstudiante
            id="email"
            placeholder="Ingresa dirección de e-mail"
            label="Correo electrónico"
            type="text"
            textStyle="text-left"
            register={register}
            onChange={handleInputChange}
          />
          {errors.email?.message && (
            <p className="w-[320px] mt-[5px] text-[#DE1111]">
              {errors.email.message}
            </p>
          )}
          <select
            {...register("curso")}
            className="border h-[50px] px-6 rounded-lg border-purple-800 "
            onChange={handleInputChange}
          >
            {cursosFromApi.data.map((curso) => (
              <option
                key={curso.id}
                className="font-normal"
                value={curso.id.toString()}
              >
                {curso.number}º {curso.letter}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col py-6">
          <Button
            text="Agregar nuevo estudiante"
            isCompleted={isButtonDisabled}
          />
        </div>
      </form>
    </>
  );
};
export default NuevoFormEstudiante;
