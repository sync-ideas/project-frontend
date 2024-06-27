import React, { useState } from "react";
import Button from "./button";
import { useRouter } from "next/navigation";

interface FormData {
  level: string;
  number: number;
  letter: string;
  lista: File | null;
}

const ModalCurso: React.FC<{
  formData: FormData | undefined;
  envioPlanilla: (formData: FormData) => Promise<unknown>;
  confirmar: boolean;
  setConfirmar: React.Dispatch<React.SetStateAction<boolean>>;
  done: boolean;
  setDone: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ formData, envioPlanilla, confirmar, setConfirmar, done, setDone }) => {
  const router = useRouter();
  const handleConfirm = () => {
    if (formData) {
      envioPlanilla(formData).then((response) => {
        if (response !== undefined) {
          setDone(true);
          setTimeout(() => {
            setDone(false);
            router.push("/estudiantes/cursos/nuevo-curso");
          }, 3000);
          setConfirmar(false);
        } else {
          console.log("error");
        }
      });
    }
  };
  const letras = ["A", "B", "C", "D", "E", "F"];
  return (
    <>
      {confirmar && !done && (
        <div>
          <div className="flex flex-col  bg-white border-[#362B3E] rounded-lg">
            <div className="flex justify-center w-full bg-green-600 rounded-tl-lg rounded-tr-lg items-center my-auto">
              <h2 className="text-lg py-4 px-6 font-bold text-white text-center">
                Confirma los datos del nuevo curso
              </h2>
            </div>
            <div className="text-center mt-6">
              <p className="font-bold text-base">Nivel: </p>
              <p>{formData?.level === "1" ? "Primaria" : "Secundaria"}</p>
              <p className="font-bold text-base">Grado: </p>
              <p>{formData?.number}º</p>
              <p className="font-bold text-base">Letra: </p>
              <p>
                {letras && formData
                  ? letras[parseInt(formData?.letter) - 1]
                  : ""}
              </p>
              <p className="font-bold text-base">Lista: </p>
              <p>{formData?.lista?.name}s</p>
            </div>
            <div className="px-6 flex flex-col gap-3 pb-7 pt-6">
              <Button
                onClick={() => setConfirmar(false)}
                text="Cancelar"
                isCompleted
              />
              <Button onClick={handleConfirm} text="Confirmar" isCompleted />
            </div>
          </div>
        </div>
      )}
      {done && (
        <div className="flex flex-col  bg-white border-[#362B3E] rounded-lg">
          <div className="flex justify-center w-full bg-green-600 rounded-tl-lg rounded-tr-lg items-center my-auto">
            <h2 className="text-lg py-4 px-6 font-bold text-white text-center">
              ¡Curso creado con éxito!
            </h2>
          </div>
          <div className="text-center m-20 flex justify-center items-center">
            <svg
              width="140"
              height="140"
              viewBox="0 0 140 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M47.875 75.5312L64.4688 92.125L92.125 53.4062M136.375 70C136.375 78.7165 134.658 87.3476 131.323 95.4006C127.987 103.454 123.098 110.771 116.934 116.934C110.771 123.098 103.454 127.987 95.4006 131.323C87.3476 134.658 78.7165 136.375 70 136.375C61.2835 136.375 52.6524 134.658 44.5994 131.323C36.5464 127.987 29.2293 123.098 23.0658 116.934C16.9023 110.771 12.0132 103.454 8.6775 95.4006C5.34184 87.3476 3.625 78.7165 3.625 70C3.625 52.3963 10.6181 35.5135 23.0658 23.0658C35.5135 10.6181 52.3963 3.625 70 3.625C87.6037 3.625 104.486 10.6181 116.934 23.0658C129.382 35.5135 136.375 52.3963 136.375 70Z"
                stroke="#31AE72"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalCurso;
