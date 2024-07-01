"use client";
import React, { useCallback, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchemaNew } from "../../validations";
import CustomInput from "../../components/input";
import Button from "../../components/button";
import ButtonCancel from "../../components/profesores/ButtonCancel";
import { areInputsNotEmpty } from "../../../functions/input/formUtils";
import { useProfesoresStore } from "../../../store";

export type Inputs = {
  fullname: string;
  username: string;
  email: string;
  password: string;
};

const NuevoForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<Inputs>({
    resolver: zodResolver(userSchemaNew),
  });

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const { setNewUser, showSuccessModalNew,setShowSuccessModalNew } = useProfesoresStore();

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


  const handleSubmitForm = (data: Inputs) => {
    // Guardar los datos en el store
    setNewUser([data]);
    // Mostrar el modal de confirmación
    setTimeout(() => {
      // Asegurar que los estilos de transición se carguen correctamente
      setShowSuccessModalNew(true);
    }, 300); // Ajusta el tiempo según sea necesario para permitir la carga de estilos
  };
  return (
    <>
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <div className="flex flex-col gap-[10px] pt-[20px] min-h-[381px] h-auto">
          <a>Ingresa datos del profesor</a>
          <CustomInput
            id="fullname"
            placeholder="Nombre"
            type="text"
            textStyle="text-center"
            register={register}
            onChange={handleInputChange}
          />
          {errors.fullname?.message && (
            <p className="w-[320px] mt-[5px] text-[#DE1111]">
              {errors.fullname.message}
            </p>
          )}
          <CustomInput
            id="email"
            placeholder="Correo"
            type="text"
            textStyle="text-center"
            register={register}
            onChange={handleInputChange}
          />
          {errors.email?.message && (
            <p className="w-[320px] mt-[5px] text-[#DE1111]">
              {errors.email.message}
            </p>
          )}
          <CustomInput
            id="username"
            placeholder="Nombre de usuario"
            type="text"
            textStyle="text-center"
            register={register}
            onChange={handleInputChange}
          />
          {errors.username?.message && (
            <p className="w-[320px] mt-[5px] text-[#DE1111]">
              {errors.username.message}
            </p>
          )}
          <CustomInput
            id="password"
            placeholder="Contraseña"
            pass={true}
            type="password"
            textStylePlaceholder="placeholder:text-center"
            register={register}
            onChange={handleInputChange}
          />
          {errors.password?.message && (
            <p className="w-[320px] mt-[5px] text-[#DE1111]">
              {errors.password.message}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-3">
          <ButtonCancel route="/profesores" text="Volver a profesores" />
          <Button text="Crear perfil" isCompleted={!isButtonDisabled} />
        </div>
      </form>
    </>
  );
};
export default NuevoForm;