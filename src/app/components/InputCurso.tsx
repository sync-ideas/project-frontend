"use client";
import React, { useEffect, useState } from "react";

import { FieldError } from "react-hook-form";

interface InputCursoProps {
  id: string;
  placeholder: string;
  field: {
    onChange: (value: React.ChangeEvent<HTMLSelectElement>) => void;
    value: string;
  };
  options: string[];
  error: FieldError | undefined;
}

const InputCurso: React.FC<InputCursoProps> = ({
  id,
  placeholder,
  field,
  options,
  error,
}) => {
  const [enableSelect, setEnableSelect] = useState({
    niveleducativo: false,
    grado: false,
  });
  const getChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value !== "0") {
      setEnableSelect({ ...enableSelect, [e.target.name]: true });
    } else {
      setEnableSelect({ ...enableSelect, [e.target.name]: false });
    }
  };

  useEffect(() => {
    console.log(enableSelect);
  }, [enableSelect]);

  return (
    <div className="flex flex-col">
      <div className="w-full text-center text-[#362B3E] hover:text-purple-950 placeholder:text-purple-hover border-[1px] border-purple rounded-lg font-normal group-focus:outline-purple flex relative">
        <select
          {...field}
          id={id}
          className="p2 h-14 w-full text-center text-[#362B3E] hover:text-purple-950 placeholder:text-purple-hover border-[1px] border-purple rounded-lg font-normal focus:outline-purple"
          placeholder={placeholder}
          onChange={getChange}
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
