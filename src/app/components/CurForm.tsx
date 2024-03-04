"use client";
import React, { useState } from "react";
import Button from "./button";
import { useForm, Controller } from "react-hook-form";
import InputCurso from "./InputCurso";
import InputFile from "./InputFile";

interface FormData {
  level: string;
  number: number;
  letter: string;
  lista: string;
}
interface Option {
  id: string;
  value: string;
  label: string;
}
const optionsNivelEducativo = [
  { id: "level", value: "0", label: "Nivel Educativo" },
  { id: "level", value: "1", label: "Primaria" },
  { id: "level", value: "2", label: "Secundaria" },
];
const optionsGrado = [
  { id: "number", value: "0", label: "Grado" },
  { id: "number", value: "1", label: "1ª" },
  { id: "number", value: "2", label: "2º" },
  { id: "number", value: "3", label: "3º" },
  { id: "number", value: "4", label: "4º" },
  { id: "number", value: "5", label: "5º" },
];
const optionsLetra = [
  { id: "letter", value: "0", label: "Letra" },
  { id: "letter", value: "1", label: "A" },
  { id: "letter", value: "2", label: "B" },
  { id: "letter", value: "3", label: "C" },
];
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
  const getChange = (option: Option) => {
    if (option.id === "level") {
      if (option.value !== "0") {
        setEnableSelect({ ...enableSelect, grado: false });
      } else {
        setEnableSelect({ letra: true, grado: true });
        setValue("number", 0);
        setValue("letter", "0");
      }
    } else if (option.label === "number") {
      if (option.value !== "0") {
        setEnableSelect({ ...enableSelect, letra: false });
      } else {
        setEnableSelect({ ...enableSelect, letra: true });
        setValue("letter", "0");
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
          name="level"
          control={control}
          render={({ field }) => (
            <InputCurso
              field={field}
              options={optionsNivelEducativo}
              id="nivelEducativo"
              error={errors.level}
              onChange={getChange}
            />
          )}
        />
        <Controller
          name="number"
          control={control}
          render={({ field }) => (
            <InputCurso
              field={field}
              options={optionsGrado}
              id="grado"
              error={errors.number}
              onChange={getChange}
              disabled={enableSelect.grado}
            />
          )}
        />

        <Controller
          name="letter"
          control={control}
          render={({ field }) => (
            <InputCurso
              field={field}
              options={optionsLetra}
              id="letra"
              error={errors.letter}
              onChange={getChange}
              disabled={enableSelect.letra}
            />
          )}
        />
        <Controller
          name="lista"
          control={control}
          render={({ field }) => (
            <InputFile field={field} error={errors.lista} id="lista" />
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
