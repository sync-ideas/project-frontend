"use client";
import Button from "@components/button";
import InputCurso from "@components/InputCurso";
import InputFile from "@components/InputFile";
import ModalCurso from "@components/ModalCurso";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import envioPlanilla from "src/app/estudiantes/cursos/nuevo-curso/envioPlanilla";

import { set } from "zod";

interface CurEditFormProps {
  level: string;
  number: number;
  letter: string;
}
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
  { id: "level", value: "0", label: "Nivel educativo" },
  { id: "level", value: "Primaria", label: "Primaria" },
  { id: "level", value: "Secundaria", label: "Secundaria" },
];
const optionsGrado = [
  { id: "number", value: "0", label: "Grado" },
  { id: "number", value: 1, label: "1ª" },
  { id: "number", value: 2, label: "2º" },
  { id: "number", value: 3, label: "3º" },
  { id: "number", value: 4, label: "4º" },
  { id: "number", value: 5, label: "5º" },
];
const optionsLetra = [
  { id: "letter", value: "0", label: "Letra" },
  { id: "letter", value: "a", label: "A" },
  { id: "letter", value: "b", label: "B" },
  { id: "letter", value: "c", label: "C" },
];
const CurEditForm = ({ level, number, letter }: CurEditFormProps) => {
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
    if (data.lista === undefined) {
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
  console.log(level);

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
      <div className="w-full md:w-[312px] relative z-0">
        <form
          onSubmit={handleSubmit(submitForm)}
          className="flex flex-col xl:gap-6"
        >
          <div className="flex flex-col gap-[10px] pt-[20px] min-h-[439px] md:min-h-[962px] xl:min-h-[282px]">
            <h3 className="text-left w-full h-[22px]">
              Ingresa datos del curso
            </h3>
            <Controller
              name="level"
              defaultValue={level}
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
              defaultValue={number}
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
              defaultValue={letter}
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
          <div>
            <Button text="Crear curso" isCompleted={!fileLoaded} />
          </div>
        </form>
      </div>
    </>
  );
};

export default CurEditForm;
