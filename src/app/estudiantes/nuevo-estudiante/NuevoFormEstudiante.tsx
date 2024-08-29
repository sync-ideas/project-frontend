"use client";
import React, { useCallback, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchemaNew } from "../../validations";
import CustomInputEstudiante from "../../components/inputEstudiante";
import Button from "../../components/button";
import ButtonCancel from "../../components/profesores/ButtonCancel";
import { areInputsNotEmpty } from "../../../functions/input/formUtils";
import { useProfesoresStore } from "../../../store";
import InputCurso from "../../components/InputCurso";

export type Inputs = {
  fullname: string;
  username: string;
  email: string;
  password: string;
};

const NuevoFormEstudiante: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<Inputs>({
    resolver: zodResolver(userSchemaNew),
  });

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const { setNewUser, showSuccessModalNew, setShowSuccessModalNew } =
    useProfesoresStore();

  const handleInputChange = useCallback(() => {
    const inputsNotEmpty = areInputsNotEmpty(
      watch,
      "fullname",
      "username",
      "email",
      "password"
    );
    setIsButtonDisabled(!inputsNotEmpty);
  }, [watch, setIsButtonDisabled]);

  const handleSubmitForm = (data: Inputs) => {
    // Guardar los datos en el store
    setNewUser([data]);
    // Mostrar el modal de confirmación
    setTimeout(() => {
      // Asegurar que los estilos de transición se carguen correctamente
      setShowSuccessModalNew(true);
    }, 300); // Ajusta el tiempo según sea necesario para permitir la carga de estilos
  };
  return (
    <>
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <div className="flex flex-col gap-6 py-[20px] min-h-[381px] h-auto">
          <a>Ingresa datos del estudiante</a>
          <CustomInputEstudiante
            id="fullname"
            label="Nombre"
            placeholder="Ingresa un nombre"
            type="text"
            textStyle="text-left"
            register={register}
            onChange={handleInputChange}
          />
          {errors.fullname?.message && (
            <p className="w-[320px] mt-[5px] text-[#DE1111]">
              {errors.fullname.message}
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
          {errors.email?.message && (
            <p className="w-[320px] mt-[5px] text-[#DE1111]">
              {errors.email.message}
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
          {errors.username?.message && (
            <p className="w-[320px] mt-[5px] text-[#DE1111]">
              {errors.username.message}
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
          {errors.password?.message && (
            <p className="w-[320px] mt-[5px] text-[#DE1111]">
              {errors.password.message}
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
          {errors.username?.message && (
            <p className="w-[320px] mt-[5px] text-[#DE1111]">
              {errors.username.message}
            </p>
          )}
          <select className="border h-[50px] px-6 rounded-lg border-purple-800 ">
            <option className="font-normal">
              <span className="font-semibold">Curso: </span>
              <span className="font-normal text-lg">2ºA</span>
            </option>
          </select>
        </div>
        <div className="flex flex-col py-6">
          <Button text="Agregar nuevo estudiante" isCompleted={false} />
        </div>
      </form>
    </>
  );
};
export default NuevoFormEstudiante;
