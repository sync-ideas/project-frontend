"use client";
import React, { useState } from "react";
import eyeOpen from "../../../public/assets/images/eyeOpen.svg";
import eyeClose from "../../../public/assets/images/eyeClose.svg";
import Image from "next/image";
import { FieldError } from "react-hook-form";
import { error } from "console";

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
  return (
    <div className="flex flex-col">
      <input
        {...field}
        id={id}
        className="px-2 py-2 h-14 w-full text-center text-[#362B3E] hover:text-purple-950 placeholder:text-purple-hover border-[1px] border-purple rounded-lg font-normal focus:outline-purple"
        placeholder={placeholder}
        type={type}
      />
      {error && <p className="text-red-500">{error.message}</p>}
    </div>
  );
};

export default InputProfesor;
