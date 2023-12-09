"use client";
import React, { useState } from "react";

interface CustomSelectProps {
  placeholder?: string;
  options: string[];
  method?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string;
  enabled?: boolean;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  placeholder,
  options,
  method,
  value,
  enabled,
}) => {
  return (
    <div className="flex border-2 border-purple rounded-lg focus:outline-purple">
      <select
        id="input"
        className="px-4 py-2 h-14 w-[90%] placeholder:text-purple-hover  rounded-lg font-normal focus:outline-none appearance-none"
        placeholder={placeholder}
        value={value}
        onChange={method}
        disabled={!enabled}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <p className="my-auto">V</p>
    </div>
  );
};

export default CustomSelect;
