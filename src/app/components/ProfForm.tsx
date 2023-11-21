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
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const submitForm = (formData: FormData) => {
    console.log(formData);
  };
  const passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*d).{6,7}$/;

  return (
    <form
      onSubmit={handleSubmit(submitForm)}
      className="my-5 flex relative flex-col gap-4 w-full items-center md:mx-auto xl:w-[312px] h-full lg:h-auto"
    >
      <h3 className="text-left w-[85%] md:text-center xl:text-left xl:w-[100%]">
        Ingresa datos del profesor
      </h3>
      <div className="flex flex-col gap-4 w-[85%] h-full md:w-[50%] md:mx-auto xl:w-full">
        <Controller
          name="name"
          control={control}
          rules={{
            required: true,
            minLength: {
              value: 4,
              message: "Nombre debe contener más de 3 caracteres",
            },
          }}
          render={({ field }) => (
            <InputProfesor
              field={field}
              placeholder="Nombre"
              type="text"
              id="name"
              error={errors.name}
            />
          )}
        />
        <Controller
          name="mail"
          control={control}
          rules={{ required: "Este campo es obligatorio" }}
          render={({ field }) => (
            <InputProfesor
              field={field}
              placeholder="E-mail"
              type="email"
              id="email"
              error={errors.mail}
            />
          )}
        />
        <Controller
          name="username"
          control={control}
          rules={{
            required: true,
            minLength: {
              value: 5,
              message: "Nombre de usuario debe contener más de 5 caracteres",
            },
          }}
          render={({ field }) => (
            <InputProfesor
              field={field}
              placeholder="Nombre de Usuario"
              type="text"
              id="username"
              error={errors.username}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          rules={{
            required: true,
            pattern: {
              value: passPattern,
              message:
                "La contraseña debe tener entre 5 y 8 caractereres e incluir mayusculas y minusculas.",
            },
          }}
          render={({ field }) => (
            <InputProfesor
              field={field}
              placeholder="Contraseña"
              type="password"
              id="pass"
              error={errors.password}
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

export default ProfForm;
