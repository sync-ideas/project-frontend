"use client";
import React, { useState } from "react";
import Button from "./button";
import { useForm, Controller } from "react-hook-form";
import InputCurso from "./InputCurso";

interface FormData {
  niveleducativo: string;
  grado: string;
  letra: string;
}

const CurForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const submitForm = (formData: FormData) => {
    console.log(formData);
  };

  return (
    <form
      onSubmit={handleSubmit(submitForm)}
      className="my-5 flex relative flex-col gap-4 w-full items-center md:mx-auto xl:w-[312px] h-full lg:h-auto"
    >
      <h3 className="text-left w-[85%] md:text-center xl:text-left xl:w-[100%]">
        Ingresa datos del curso
      </h3>
      <div className="flex flex-col gap-4 w-[85%] h-full md:w-[50%] md:mx-auto xl:w-full">
        <Controller
          name="niveleducativo"
          control={control}
          render={({ field }) => (
            <InputCurso
              field={field}
              placeholder="Nombre"
              options={["Nivel educativo", "Primaria", "Secundaria"]}
              id="name"
              error={errors.niveleducativo}
            />
          )}
        />
        <Controller
          name="grado"
          control={control}
          render={({ field }) => (
            <InputCurso
              field={field}
              placeholder="E-mail"
              options={["Grado", "1º", "2º", "3º", "4º", "5º"]}
              id="email"
              error={errors.grado}
            />
          )}
        />

        <Controller
          name="letra"
          control={control}
          render={({ field }) => (
            <InputCurso
              field={field}
              placeholder="Nombre de Usuario"
              options={["Letra", "A", "B", "C"]}
              id="username"
              error={errors.letra}
            />
          )}
        />
      </div>
      <div className="w-[85%] md:w-[50%] xl:w-full xl:self-center">
        <Button text="Crear Perfil" isCompleted />
      </div>
    </form>
  );
};

export default CurForm;
