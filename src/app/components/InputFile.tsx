"use client";
import Subir from "../../../public/assets/images/subir.svg";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FieldError } from "react-hook-form";

interface InputFileProps {
  id: string;
  field: {
    value: File | null;
  };
  error: FieldError | undefined;
  onChange?: (file: File) => void;
}

const InputFile: React.FC<InputFileProps> = ({
  id,
  field,
  error,
  onChange,
}) => {
  const [file, setFile] = useState<File | null>(null);
  const onChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] ?? null;
    if (file) {
      setFile(file);
      if (onChange) {
        onChange(file);
      }
    }
  };
  useEffect(() => {
    console.log(file);
  }, [file]);
  return (
    <div className="flex flex-col w-full">
      <div className="w-full text-[#362B3E] hover:text-purple-950 placeholder:text-purple-hover rounded-md font-normal flex relative py-1 group border border-[#8347B2] hover:cursor-pointer hover:opacity-100 opacity-70">
        <label
          htmlFor="lista"
          className="py-1 align-middle px-3 text-left w-[90%] text-[#362B3E] hover:text-purple-950 placeholder:text-purple-hover rounded-md font-normal group-focus:outline-purple my-auto group-hover:cursor-pointer"
        >
          Adjuntar lista de estudiantes
        </label>
        {error && <p className="text-red-500">{error.message}</p>}
        <input
          {...field}
          value=""
          type="file"
          id="lista"
          accept=".xlsx"
          className="hidden"
          onChange={onChangeFile}
        />
        <Image
          src={Subir}
          alt="subir"
          width={22}
          height={22}
          className="pr-1 group-hover:cursor-pointer"
        />
      </div>
    </div>
  );
};

export default InputFile;
