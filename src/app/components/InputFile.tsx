import React from "react";
import { FieldError } from "react-hook-form";

interface InputFileProps {
  id: string;
  field: {
    value: string;
  };
  error: FieldError | undefined;
}

const InputFile: React.FC<InputFileProps> = ({ id, field, error }) => {
  return (
    <div className="flex flex-col">
      <div className="w-full text-center text-[#362B3E] hover:text-purple-950 placeholder:text-purple-hover border-[1px] border-purple rounded-lg font-normal group-focus:outline-purple flex relative">
        <label
          htmlFor="lista"
          className="py-4 px-4 text-left h-14 w-full text-[#362B3E] hover:text-purple-950 placeholder:text-purple-hover border-[1px] border-purple rounded-lg font-normal focus:outline-purple my-auto"
        >
          Adjuntar lista de estudiantes
        </label>
        {error && <p className="text-red-500">{error.message}</p>}
        <input
          {...field}
          type="file"
          id="lista"
          accept=".xls"
          className="hidden"
        />
      </div>
    </div>
  );
};

export default InputFile;
