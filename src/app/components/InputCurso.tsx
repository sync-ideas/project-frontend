"use client";
import React, { useEffect, useState } from "react";

import { FieldError } from "react-hook-form";

interface InputCursoProps {
  id: string;
  field: {
    onChange: (value: React.ChangeEvent<HTMLSelectElement>) => void;
    value: string;
  };
  options: string[];
  error: FieldError | undefined;
  onChange: (value: React.ChangeEvent<HTMLSelectElement>) => void;
  disabled?: boolean;
}

const InputCurso: React.FC<InputCursoProps> = ({
  id,
  field,
  options,
  error,
  onChange,
  disabled = false,
}) => {
  const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    field.onChange(e);
    onChange(e);
  };
  return (
    <div className="flex flex-col">
      <div className="w-full text-center text-[#362B3E] hover:text-purple-950 placeholder:text-purple-hover border-[1px] border-purple rounded-lg font-normal group-focus:outline-purple flex relative">
        <select
          {...field}
          id={id}
          className="p2 h-14 w-full text-center text-[#362B3E] hover:text-purple-950 placeholder:text-purple-hover border-[1px] border-purple rounded-lg font-normal focus:outline-purple"
          onChange={onSelectChange}
          disabled={disabled ? disabled : false}
          value={field.value}
        >
          {options.map((option) => (
            <option key={option} value={options.indexOf(option)}>
              {option}
            </option>
          ))}
        </select>
      </div>
      {error && <p className="text-red-500">{error.message}</p>}
    </div>
  );
};

export default InputCurso;
