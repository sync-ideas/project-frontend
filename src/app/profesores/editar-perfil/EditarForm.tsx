"use client";
import React, { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchemaEdit } from "../../validations";
import InputProfesores from "../../components/input";
import Button from "../../components/button";
import ButtonCancel from "../../components/profesores/ButtonCancel";
import { areInputsNotEmpty, handleDeleteClick } from "../../../functions";
import { editSubmit } from "./editSubmit"; // Importa la función editSubmit
import { useUserStore } from "../../../store";
import ModalConfirmDelete from "../../components/profesores/ModalConfirmDelete";
import ModalConfirmNewSuccess from "../../components/profesores/ModalConfirmNewSuccess";

export type Inputs = {
  fullname: string;
  username: string;
  email: string;
  password: string;
};

const EditarForm: React.FC = () => {
  const [pressed, setpressed] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [success, setSuccess] = useState(false);
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
  const [UserState, setUserState] = useState(null);
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
      setUserState(userStorage);
      handleInputChange();
    }
  }, [setValue, handleInputChange]);

  const showDelete = () => {
    setShowModal(!showModal);
  };
  useEffect(() => {
    if (success) {
      setTimeout(() => {
        setSuccess(false);
        router.push("/profesores");
      }, 3000);
    }
  }, [success]);

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
    <form className="relative" onSubmit={handleSubmit(handleSubmitForm)}>
      {showModal &&
        ModalConfirmDelete({ onClose: showDelete, UserState, setSuccess })}
      {success && (
        <ModalConfirmNewSuccess
          onClose={() => {}}
          text="Profesor eliminado con éxito"
        />
      )}
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
        <div
          onMouseDown={() => {
            setpressed(true);
            showDelete();
          }}
          onMouseUp={() => setpressed(false)}
          className={`self-end cursor-pointer hover:scale-105 ${
            pressed ? "hue-rotate-30" : ""
          }`}
        >
          <svg
            width="42"
            height="42"
            viewBox="0 0 42 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="1.5"
              y="1.5"
              width="39"
              height="39"
              rx="6.5"
              stroke="#D22626"
              strokeWidth="3"
            />
            <path
              d="M14.5 10.6C14.5 9.91044 14.7739 9.24912 15.2615 8.76152C15.7491 8.27393 16.4104 8 17.1 8H24.9C25.5896 8 26.2509 8.27393 26.7385 8.76152C27.2261 9.24912 27.5 9.91044 27.5 10.6V13.2H32.7C33.0448 13.2 33.3754 13.337 33.6192 13.5808C33.863 13.8246 34 14.1552 34 14.5C34 14.8448 33.863 15.1754 33.6192 15.4192C33.3754 15.663 33.0448 15.8 32.7 15.8H31.3103L30.1832 31.5846C30.1365 32.2406 29.843 32.8545 29.3617 33.3026C28.8805 33.7508 28.2473 34 27.5897 34H14.409C13.7514 34 13.1182 33.7508 12.637 33.3026C12.1557 32.8545 11.8622 32.2406 11.8155 31.5846L10.691 15.8H9.3C8.95522 15.8 8.62456 15.663 8.38076 15.4192C8.13696 15.1754 8 14.8448 8 14.5C8 14.1552 8.13696 13.8246 8.38076 13.5808C8.62456 13.337 8.95522 13.2 9.3 13.2H14.5V10.6ZM17.1 13.2H24.9V10.6H17.1V13.2ZM13.2962 15.8L14.4103 31.4H27.591L28.7051 15.8H13.2962ZM18.4 18.4C18.7448 18.4 19.0754 18.537 19.3192 18.7808C19.563 19.0246 19.7 19.3552 19.7 19.7V27.5C19.7 27.8448 19.563 28.1754 19.3192 28.4192C19.0754 28.663 18.7448 28.8 18.4 28.8C18.0552 28.8 17.7246 28.663 17.4808 28.4192C17.237 28.1754 17.1 27.8448 17.1 27.5V19.7C17.1 19.3552 17.237 19.0246 17.4808 18.7808C17.7246 18.537 18.0552 18.4 18.4 18.4ZM23.6 18.4C23.9448 18.4 24.2754 18.537 24.5192 18.7808C24.763 19.0246 24.9 19.3552 24.9 19.7V27.5C24.9 27.8448 24.763 28.1754 24.5192 28.4192C24.2754 28.663 23.9448 28.8 23.6 28.8C23.2552 28.8 22.9246 28.663 22.6808 28.4192C22.437 28.1754 22.3 27.8448 22.3 27.5V19.7C22.3 19.3552 22.437 19.0246 22.6808 18.7808C22.9246 18.537 23.2552 18.4 23.6 18.4Z"
              fill="#D22626"
            />
          </svg>
        </div>
        <ButtonCancel route="/profesores" text="Cancelar edición" />
        <Button text="Guardar cambios" isCompleted={!isButtonDisabled} />
      </div>
    </form>
  );
};

export default EditarForm;
