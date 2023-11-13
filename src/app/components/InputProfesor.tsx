"use client";
import React, { useState } from "react";
import eyeOpen from "../../../public/assets/images/eyeOpen.svg";
import eyeClose from "../../../public/assets/images/eyeClose.svg";
import Image from "next/image";

interface InputProfesorProps {
  id: string;

  placeholder: string;
  field: {
    onChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
  };
  type?: string;
}

const InputProfesor: React.FC<InputProfesorProps> = ({
  id,
  placeholder,
  field,
  type,
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
    </div>
  );
};

export default InputProfesor;
