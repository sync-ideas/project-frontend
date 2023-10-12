"use client";
import React, { useState } from "react";
import eyeOpen from "../../../public/assets/images/eyeOpen.svg";
import eyeClose from "../../../public/assets/images/eyeClose.svg";
import Image from "next/image";

interface CustomInputProps {
  placeholder?: string;
  pass?: boolean;
  type: string;
  label?: string;
  method?: (event: React.ChangeEvent<HTMLInputElement>) => void
  value: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
  placeholder,
  pass = false,
  type,
  label,
  method,
  value,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return !pass ? (
    <div className="flex flex-col">
      <label htmlFor="input">{label}</label>
      <input
        id="input"
        className="px-2 py-2 h-14 w-full placeholder:text-purple-hover border-2 border-purple rounded-lg font-normal focus:outline-purple"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={method}
      />
    </div>
  ) : (
    <div className="relative">
      <div className="flex flex-col">
        <label htmlFor="input">{label}</label>
        <input
          id="input"
          className="px-2 py-2 h-14 w-full placeholder:text-purple-hover border-2 border-purple rounded-lg font-normal focus:outline-purple"
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          value={value}
          onChange={method}
        />
        <div className="absolute top-1/2 right-3 cursor-pointer z-10" onClick={handleTogglePassword}>
          {showPassword ? (
            <Image src={eyeOpen} alt="algo" className="w-6 h-6 text-purple"/>
          ) : (
            <Image src={eyeClose} alt="algo" className="w-6 h-6 text-purple"/>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomInput;
