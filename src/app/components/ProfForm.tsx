import React from "react";
import CustomInput from "./input";
import Button from "./button";

const ProfForm = () => {
  return (
    <form className="my-5 flex relative flex-col gap-4 h-[75%] w-full items-center md:mx-auto xl:w-[312px]">
      <h3 className="text-left w-[85%] md:text-center xl:text-left xl:w-[100%]">
        Ingresa datos del profesor
      </h3>
      <div className="flex flex-col gap-4 w-[85%] md:w-[50%] md:mx-auto xl:w-full">
        <CustomInput type="text" value="" placeholder="Nombre" />
        <CustomInput type="text" value="" placeholder="Correo" />
        <CustomInput type="text" value="" placeholder="Nombre de Usuario" />
        <CustomInput type="text" value="" placeholder="Contraseña" />
      </div>
      <div className="absolute bottom-0 w-[85%] xl:self-center">
        <Button text="Crear Perfil" isCompleted />
      </div>
    </form>
  );
};

export default ProfForm;
