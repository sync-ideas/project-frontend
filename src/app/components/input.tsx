"use client";
import React, { useState } from "react";
import eyeOpen from "../../../public/assets/images/eyeOpen.svg";
import eyeClose from "../../../public/assets/images/eyeClose.svg";
import Image from "next/image";

interface CustomInputProps {
  id: string;
  placeholder?: string;
  pass?: boolean;
  type: string;
  label?: string;
  textStyle?: string;
  textStylePlaceholder?: string;
  method?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  register: any;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
  onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
}

const CustomInput: React.FC<CustomInputProps> = ({
  id,
  placeholder,
  pass = false,
  type,
  label,
  textStyle,
  textStylePlaceholder,
  method,
  register,
  onChange,
  error,
  onClick,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const isError = error;
  return !pass ? (
    <div className="flex flex-col">
      <label htmlFor="input">{label}</label>
      <input
        id={id}
        className={`px-2 py-2 h-[50px] w-full placeholder:text-purple-hover border-2 rounded-lg font-normal ${textStyle}  ${
          isError
            ? "border-[#DE1111] focus:outline-[#DE1111]"
            : "border-purple focus:outline-purple"
        }`}
        type={type}
        placeholder={placeholder}
        {...register(id, {
          onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
            if (method) {
              method(e);
            }
            if (onChange) {
              onChange(e);
            }
          },
        })}
        onClick={onClick}
      />
    </div>
  ) : (
    <div>
      <label htmlFor="input">{label}</label>
      <div className="relative flex flex-col">
        <input
          id={id}
          className={`px-2 py-2 h-[50px] w-full placeholder:text-purple-hover border-2 rounded-lg font-normal focus:outline-purple ${textStyle} ${textStylePlaceholder}  ${
            isError
              ? "border-[#DE1111] focus:outline-[#DE1111]"
              : "border-purple focus:outline-purple"
          }`}
          placeholder={placeholder}
          type={showPassword ? "text" : "password"}
          {...register(id, {
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
              if (method) {
                method(e);
              }
              if (onChange) {
                onChange(e);
              }
            },
          })}
          onClick={onClick}
        />
        <div
          className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer z-10"
          onClick={handleTogglePassword}
        >
          {showPassword ? (
            <Image src={eyeOpen} alt="algo" className="w-6 h-6" priority />
          ) : (
            <Image src={eyeClose} alt="algo" className="w-6 h-6" priority />
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomInput;
