"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../../public/assets/images/icon.svg";
import CustomInput from "../components/input";
import Button from "../components/button";
import LinkComponent from "../components/LinkComponent/LinkComponentCustom";
import { SetNewPassword } from "./utils";

interface GetPasswordProps {
  params: {
    token: string;
  };
}

const GetPassword: React.FC<GetPasswordProps> = (props) => {
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setPassword(value);
    setIsButtonDisabled(
      value === "" ||
        passwordConfirmation === "" ||
        value !== passwordConfirmation
    );
  };

  const handlePasswordConfirmationChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;
    setPasswordConfirmation(value);
    setIsButtonDisabled(value === "" || password === "" || value !== password);
  };

  const handleSubmit = () => {
    //TODO: Agregar código de envio de información a la bd
    SetNewPassword(props.params.token, password);
  };

  return (
    <div className="h-screen sm:py-10 sm:flex sm:justify-center">
      <div className="flex items-center flex-col pt-[60px] px-6 sm:min-w-[360px] sm:m-auto sm:border-0 sm:shadow-md sm:max-h-full sm:min-h-[640px] sm:rounded-[20px]">
        <Image src={logo} width={106} height={106} alt="logo" />
        <form action="" className="w-full my-2">
          <div className="pt-5 w-full">
            <CustomInput
              placeholder="Ingresa tu nueva contraseña"
              pass={false}
              type="text"
              label="Nueva contraseña"
              value={password}
              method={handlePasswordChange}
            />
          </div>
          <div className=" my-2 w-full">
            <CustomInput
              placeholder="Ingresa otra vez tu nueva contraseña"
              pass={false}
              type="text"
              label="Confirmar nueva contraseña"
              value={passwordConfirmation}
              method={handlePasswordConfirmationChange}
            />
          </div>
          <div className="w-full">
            <Button
              text="Cambiar contraseña"
              isCompleted={!isButtonDisabled}
              onClick={handleSubmit}
            />
          </div>
          <div className="w-full text-right mt-4">
            <LinkComponent
              link="/login"
              text="< Volver a Iniciar Sesión"
              decorationColor="green"
              textColor="purple-disabled"
              textColorHover="purple"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default GetPassword;
