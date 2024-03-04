"use client";
import React, { useState } from "react";
import Select from "./Select";
import { FieldError } from "react-hook-form";

interface Option {
  id: string;
  value: string;
  label: string;
}
interface InputCursoProps {
  id: string;
  field: {
    onChange: (value: string) => void;
    value: string | number;
    name: string;
  };
  options: Option[];
  error: FieldError | undefined;
  disabled?: boolean;
  onChange: (option: Option) => void;
}

const InputCurso: React.FC<InputCursoProps> = ({
  id,
  field,
  options,
  error,
  onChange,
}) => {
  return (
    <div className="flex flex-col">
      <div className="w-full text-[#362B3E] hover:text-purple-950 placeholder:text-purple-hover rounded-lg font-normal group-focus:outline-purple flex relative">
        <Select id={id} field={field} options={options} onChange={onChange} />
      </div>
      {error && <p className="text-red-500">{error.message}</p>}
    </div>
  );
};

export default InputCurso;
