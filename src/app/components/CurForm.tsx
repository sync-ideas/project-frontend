"use client";
import React, { useState } from "react";
import Button from "./button";
import { useForm, Controller } from "react-hook-form";
import InputCurso from "./InputCurso";
import InputFile from "./InputFile";
import envioPlanilla from "../estudiantes/cursos/nuevo-curso/envioPlanilla";
import ModalCurso from "./ModalCurso";
import { set } from "zod";

interface FormData {
  level: string;
  number: number;
  letter: string;
  lista: File | null;
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
  const [confirmar, setConfirmar] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState(false);
  const [formData, setFormData] = useState<FormData>();
  const [fileLoaded, setFileLoaded] = useState(false);
  const [enableFile, setEnableFile] = useState(true);

  const submitForm = (data: FormData) => {
    if (data.lista !== undefined) {
      setFormData(data);
      setConfirmar(true);
    } else {
      console.log("error");
    }
  };
  const [enableSelect, setEnableSelect] = useState({
    grado: true,
    letra: true,
  });
  const getChange = (option: Option) => {
    if (option.id === "level") {
      if (option.value === "0") {
        setEnableSelect({
          grado: true,
          letra: true,
        });
        setEnableFile(true);
      } else {
        setEnableSelect({
          ...enableSelect,
          grado: false,
        });
      }
    } else if (option.id === "number") {
      if (option.value === "0") {
        setEnableSelect({
          ...enableSelect,
          letra: true,
        });
      } else {
        setEnableSelect({
          ...enableSelect,
          letra: false,
        });
      }
    } else if (option.id === "letter") {
      if (option.value !== "0") {
        setEnableFile(false);
      } else {
        setEnableFile(true);
      }
    }
  };

  return (
    <>
      {(confirmar || done) && (
        <div className="fixed top-0 left-0 w-full h-full overflow-hidden bg-gray-500 bg-opacity-75 flex items-center justify-center z-10">
          <div className="bg-white rounded-lg shadow-lg w-360 h-428">
            <ModalCurso
              error={error}
              setError={setError}
              done={done}
              setDone={setDone}
              confirmar={confirmar}
              setConfirmar={setConfirmar}
              formData={formData}
              envioPlanilla={envioPlanilla}
            />
          </div>
        </div>
      )}
      <form
        onSubmit={handleSubmit(submitForm)}
        className="my-6 flex relative flex-col gap-4 w-full items-center md:mx-auto md:w-[704px] xl:w-[312px] h-[439px] md:h-[962px] lg:h-[530px] xl:mb-44"
      >
        <h3 className="text-left w-[85%] md:text-center xl:text-left xl:w-[100%]">
          Ingresa datos del curso
        </h3>
        <div className="flex flex-col gap-[10px] w-[85%] h-full xl:h-[240px] md:w-[50%] md:mx-auto xl:w-full">
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
              <>
                <InputFile
                  field={field}
                  error={errors.lista}
                  id="lista"
                  onChange={(file) => {
                    field.onChange(file);
                    if (file === null) {
                      setFileLoaded(false);
                      console.log("hola");
                    } else {
                      setFileLoaded(!!file); // Update fileLoaded state
                    }
                  }}
                  disabled={enableFile}
                />
              </>
            )}
          />
        </div>
        <div className="w-[85%] md:w-[704px] xl:w-full xl:self-center">
          <Button text="Crear curso" isCompleted={fileLoaded} />
        </div>
      </form>
    </>
  );
};

export default CurForm;
