"use client";
import React from "react";
import Button from "./button";
import { useForm, Controller } from "react-hook-form";
import InputProfesor from "./InputProfesor";

interface FormData {
  name: string;
  mail: string;
  username: string;
  password: string;
}

const ProfForm = () => {
  const { control, handleSubmit } = useForm<FormData>();

  const submitForm = (formData: FormData) => {
    console.log(formData);
  };

  return (
    <form
      onSubmit={handleSubmit(submitForm)}
      className="my-5 flex relative flex-col gap-4 h-[75%] w-full items-center md:mx-auto xl:w-[312px]"
    >
      <h3 className="text-left w-[85%] md:text-center xl:text-left xl:w-[100%]">
        Ingresa datos del profesor
      </h3>
      <div className="flex flex-col gap-4 w-[85%] md:w-[50%] md:mx-auto xl:w-full">
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <InputProfesor
              field={field}
              placeholder="Nombre"
              type="text"
              id="name"
            />
          )}
        />
        <Controller
          name="mail"
          control={control}
          render={({ field }) => (
            <InputProfesor
              field={field}
              placeholder="E-mail"
              type="email"
              id="email"
            />
          )}
        />
        <Controller
          name="username"
          control={control}
          render={({ field }) => (
            <InputProfesor
              field={field}
              placeholder="Nombre de Usuario"
              type="text"
              id="username"
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <InputProfesor
              field={field}
              placeholder="Contraseña"
              type="password"
              id="pass"
            />
          )}
        />
      </div>
      <div className="absolute bottom-0 w-[85%] xl:self-center">
        <Button text="Crear Perfil" isCompleted />
      </div>
    </form>
  );
};

export default ProfForm;
