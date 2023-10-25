import React from "react";
import CustomInput from "./input";
import Button from "./button";

const ProfForm = () => {
  return (
    <form className="my-5 flex relative flex-col gap-4 h-[75%] md:mx-auto xl:w-[50%]">
      <h3 className="md:text-center xl:text-left">
        Ingresa datos del profesor
      </h3>
      <div className="flex flex-col gap-4 md:w-[50%] md:mx-auto xl:w-full">
        <CustomInput type="text" value="" placeholder="Nombre" />
        <CustomInput type="text" value="" placeholder="Correo" />
        <CustomInput type="text" value="" placeholder="Nombre de Usuario" />
        <CustomInput type="text" value="" placeholder="Contraseña" />
      </div>
      <div className="absolute bottom-0 w-full xl:self-center">
        <Button text="Crear Perfil" isCompleted />
      </div>
    </form>
  );
};

export default ProfForm;
