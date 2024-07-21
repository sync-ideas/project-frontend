"use client";
import Subir from "../../../public/assets/images/subir.svg";
import Basurero from "../../../public/assets/images/Basurero.svg";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FieldError } from "react-hook-form";

interface InputFileProps {
  id: string;
  field: {
    value: File | null;
  };
  error: FieldError | undefined;
  onChange?: (file: File | null) => void;
  disabled?: boolean;
}

const InputFile: React.FC<InputFileProps> = ({
  id,
  field,
  error,
  onChange,
  disabled = false,
}) => {
  const [file, setFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState<string>("");

  const onChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] ?? null;
    if (file) {
      setFile(file);
      setFileName(file.name);
      if (onChange) {
        onChange(file);
      }
    } else {
      if (onChange) {
        onChange(file);
        console.log("onchange");
      }
      setFile(null);
      setFileName("");
    }
  };

  return (
    <div className="flex flex-col w-full">
      <div
        className={`w-full   ${
          file
            ? "placeholder:text-green text-[#1F8B58] border-[#1F8B58]"
            : "placeholder:text-purple-hover text-[#362B3E] border-[#8347B2]"
        } rounded-md font-normal min-h-[50px] flex relative py-1 group border  ${
          disabled
            ? "hover:cursor-not-allowed"
            : "hover:cursor-pointer hover:text-purple-950 hover:opacity-100"
        }  opacity-70`}
      >
        <label
          htmlFor="lista"
          className={`py-1 align-middle px-3 text-left w-[90%] ${
            file
              ? "placeholder:text-green text-[#1F8B58] group-focus:outline-[#1f8b58]"
              : "placeholder:text-purple-hover text-[#362B3E] group-focus:outline-purple"
          } rounded-md font-normal  my-auto ${
            disabled
              ? "group-hover:cursor-not-allowed"
              : "group-hover:cursor-pointer hover:text-purple-950"
          }`}
        >
          <span className={`${fileName ? "font-bold" : ""}`}>
            {fileName ? `Adjuntado: ` : "Adjuntar lista de estudiantes"}
          </span>
          <span>{fileName ? fileName : ""}</span>
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
          disabled={disabled}
        />
        <button
          className="z-50"
          onClick={(e) => {
            e.preventDefault();
            setFile(null);
            if (onChange) {
              onChange(null);
            }
            setFileName("");
          }}
        >
          <Image
            src={file ? Basurero : Subir}
            alt="subir"
            width={22}
            height={22}
            className="pr-1 group-hover:cursor-pointer"
          />
        </button>
      </div>
    </div>
  );
};

export default InputFile;
