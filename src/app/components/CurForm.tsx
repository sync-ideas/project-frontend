"use client";
import React, { useState } from "react";
import Button from "./button";
import { useForm, Controller } from "react-hook-form";
import InputCurso from "./InputCurso";

interface FormData {
  nivelEducativo: string;
  grado: string;
  letra: string;
}

const CurForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormData>();

  const submitForm = (formData: FormData) => {
    console.log(formData);
  };
  const [enableSelect, setEnableSelect] = useState({
    grado: true,
    letra: true,
  });
  const getChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.name === "nivelEducativo") {
      if (e.target.value !== "0") {
        setEnableSelect({ ...enableSelect, grado: false });
      } else {
        setEnableSelect({ letra: true, grado: true });
        setValue("grado", "0");
        setValue("letra", "0");
      }
    } else if (e.target.name === "grado") {
      if (e.target.value !== "0") {
        setEnableSelect({ ...enableSelect, letra: false });
      } else {
        setEnableSelect({ ...enableSelect, letra: true });
        setValue("letra", "0");
      }
    }
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
          name="nivelEducativo"
          control={control}
          render={({ field }) => (
            <InputCurso
              field={field}
              options={["Nivel educativo", "Primaria", "Secundaria"]}
              id="nivelEducativo"
              error={errors.nivelEducativo}
              onChange={getChange}
            />
          )}
        />
        <Controller
          name="grado"
          control={control}
          render={({ field }) => (
            <InputCurso
              field={field}
              options={["Grado", "1º", "2º", "3º", "4º", "5º"]}
              id="grado"
              error={errors.grado}
              onChange={getChange}
              disabled={enableSelect.grado}
            />
          )}
        />

        <Controller
          name="letra"
          control={control}
          render={({ field }) => (
            <InputCurso
              field={field}
              options={["Letra", "A", "B", "C"]}
              id="letra"
              error={errors.letra}
              onChange={getChange}
              disabled={enableSelect.letra}
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
