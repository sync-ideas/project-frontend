"use client";
import React, { useState } from "react";
import {BsFillEyeSlashFill} from "react-icons/bs";
import { BsFillEyeFill } from "react-icons/bs";
interface CustomInputProps {
  placeholder?: string;
  pass?: boolean;
  type: string;
  label?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({ placeholder, pass=false, type, label }) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  return (
  !pass ? 
    (
      <div className="flex flex-col">
        <label htmlFor="input">{label}</label>
        <input
        id="input"
        className="px-2 py-2 h-14 w-full placeholder:text-purple-hover border-2 border-purple rounded-lg font-normal focus:outline-purple"
        type={type}
        placeholder={placeholder}
        />
      </div>
    ):(
      <div className="relative">
        <div className="flex flex-col">
          <label htmlFor="input">{label}</label>
          <input
          id="input"
          className="px-2 py-2 h-14 w-full placeholder:text-purple-hover border-2 border-purple rounded-lg font-normal focus:outline-purple"
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          />
          <div className="absolute top-1/2 right-3 cursor-pointer z-10" onClick={handleTogglePassword}>
            {showPassword ? (
              <BsFillEyeFill className="h-5 w-5 text-purple" />
              ) : (
                <BsFillEyeSlashFill className="h-5 w-5 text-purple" />
                )}
          </div>
        </div>
      </div>
    )
  );
};

export default CustomInput;