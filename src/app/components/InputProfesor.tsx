"use client";
import React, { useState } from "react";
import eyeOpen from "../../../public/assets/images/eyeOpen.svg";
import eyeClose from "../../../public/assets/images/eyeClose.svg";
import Image from "next/image";
import { FieldError } from "react-hook-form";

interface InputProfesorProps {
  id: string;

  placeholder: string;
  field: {
    onChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
  };
  type?: string;
  error: FieldError | undefined;
}

const InputProfesor: React.FC<InputProfesorProps> = ({
  id,
  placeholder,
  field,
  type,
  error,
}) => {
  const [revealed, setRevealed] = useState(false);
  const revealPassword = () => {
    setRevealed(!revealed);
    type = "text";
  };

  return (
    <div className="flex flex-col">
      <div className="w-full text-center text-[#362B3E] hover:text-purple-950 placeholder:text-purple-hover border-[1px] border-purple rounded-lg font-normal group-focus:outline-purple flex relative">
        <input
          {...field}
          id={id}
          className="p2 h-14 w-full text-center text-[#362B3E] hover:text-purple-950 placeholder:text-purple-hover border-[1px] border-purple rounded-lg font-normal focus:outline-purple"
          placeholder={placeholder}
          type={type === "password" && revealed ? "text" : type}
        />
        {id === "pass" &&
        !revealed &&
        field.value !== undefined &&
        field.value !== "" ? (
          <Image
            className="absolute right-3 top-[25%] cursor-pointer"
            src={eyeClose}
            alt="ver contraseña"
            onClick={revealPassword}
          />
        ) : id === "pass" &&
          revealed &&
          field.value !== undefined &&
          field.value !== "" ? (
          <Image
            className="absolute right-3 top-[35%] cursor-pointer"
            src={eyeOpen}
            alt="ver contraseña"
            onClick={revealPassword}
          />
        ) : id === "pass" && field.value === undefined ? (
          ""
        ) : (
          ""
        )}
      </div>
      {error && <p className="text-red-500">{error.message}</p>}
    </div>
  );
};

export default InputProfesor;
