"use client";
import React, { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchemaEdit } from "../../validations";
import InputProfesores from "../../components/input";
import Button from "../../components/button";
import ButtonCancel from "../../components/profesores/ButtonCancel";
import { areInputsNotEmpty } from "../../../functions";
import { editSubmit } from "./editSubmit"; // Importa la función editSubmit
import { useUserStore } from "../../../store";

export type Inputs = {
  fullname: string;
  username: string;
  email: string;
  password: string;
};

const EditarForm: React.FC = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<Inputs>({
    resolver: zodResolver(userSchemaEdit),
  });

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [nameError, setNameError] = useState(false);
  const [userNameError, setUserNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(true);

  const handleInputChange = useCallback(() => {
    const inputsNotEmpty = areInputsNotEmpty(
      watch,
      "fullname",
      "username",
      "email",
      "password"
    );
    setIsButtonDisabled(!inputsNotEmpty);
  }, [watch, setIsButtonDisabled]);

  const handleInputClick = (inputId: string) => {
    if (
      inputId === "email" ||
      inputId === "username" ||
      inputId === "fullname" ||
      inputId === "password"
    ) {
      setNameError(false);
      setUserNameError(false);
      setEmailError(false);
      setPasswordError(false);
      setShowErrorMessage(false);
    }
  };

  useEffect(() => {
    const userStorage = useUserStore.getState();
    if (userStorage) {
      setValue("email", userStorage.email);
      setValue("username", userStorage.username);
      setValue("fullname", userStorage.fullname);
      handleInputChange();
    }
  }, [setValue, handleInputChange]);

  const handleSubmitForm = (data: Inputs) => {
    editSubmit({
      data,
      setErrorMessage,
      setNameError,
      setEmailError,
      setUserNameError,
      setShowErrorMessage,
      router,
    });
  };

  return (
    <form onSubmit={handleSubmit(handleSubmitForm)} >
        <div className="flex flex-col gap-[10px] pt-[20px] min-h-[381px] md:min-h-[924px] xl:min-h-[381px] h-auto">
          <a>Modifica los datos del profesor</a>
          <InputProfesores
            id="fullname"
            placeholder="Nombre"
            type="text"
            textStyle="text-center"
            register={register}
            onChange={handleInputChange}
            error={nameError}
            onClick={() => handleInputClick("fullname")}
          />
          {errors.fullname?.message && (
            <p className="w-[320px] mt-[5px] text-[#DE1111]">
              {errors.fullname.message}
            </p>
          )}
          <InputProfesores
            id="email"
            placeholder="Correo"
            type="text"
            textStyle="text-center"
            register={register}
            onChange={handleInputChange}
            error={emailError}
            onClick={() => handleInputClick("email")}
          />
          {errors.email?.message && (
            <p className="w-[320px] mt-[5px] text-[#DE1111]">
              {errors.email.message}
            </p>
          )}
          <InputProfesores
            id="username"
            placeholder="Nombre de usuario"
            type="text"
            textStyle="text-center"
            register={register}
            onChange={handleInputChange}
            error={userNameError}
            onClick={() => handleInputClick("username")}
          />
          {errors.username?.message && (
            <p className="w-[320px] mt-[5px] text-[#DE1111]">
              {errors.username.message}
            </p>
          )}
          <InputProfesores
            id="password"
            placeholder="Contraseña"
            pass={true}
            type="password"
            textStylePlaceholder="placeholder:text-center"
            register={register}
            onChange={handleInputChange}
            error={passwordError}
            onClick={() => handleInputClick("password")}
          />
          {errors.password?.message && (
            <p className="w-[320px] mt-[5px] text-[#DE1111]">
              {errors.password.message}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-3">
          <ButtonCancel route="/profesores" text="Cancelar edición" />
          <Button text="Guardar cambios" isCompleted={!isButtonDisabled} />
        </div>
    </form>
  );
};

export default EditarForm;
