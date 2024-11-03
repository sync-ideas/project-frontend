"use client";
import React from "react";
import Select from "./Select";
import { FieldError } from "react-hook-form";

interface Option {
  id: string;
  value: string | number;
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
  disabled,
}) => {
  return (
    <div className="flex flex-col active:hover:outline-none">
      <div className="w-full text-[#362b3e] hover:text-purple-950 placeholder:text-purple-hover rounded-lg font-normal group-focus:outline-purple-hover flex relative group-hover:opacity-100">
        <Select
          id={id}
          field={field}
          options={options}
          onChange={onChange}
          disabled={disabled}
        />
      </div>
      {error && <p className="text-red-500">{error.message}</p>}
    </div>
  );
};

export default InputCurso;
