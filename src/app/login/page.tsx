"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm, Controller } from "react-hook-form";

import Image from "next/image";
import logo from "../../../public/assets/images/icon.svg";
import Button from "../components/button";
import CustomInput from "../components/input";
import LinkComponent from "../components/LinkComponent/LinkComponentCustom";
import { Checkbox } from "../components/Checkbox";

interface LoginProps {}
const Login: React.FC<LoginProps> = (props) => {
  const router = useRouter();
  const [isChecked, setIsChecked] = useState(false);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleUser = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setUser(value);
    setIsButtonDisabled(value === "" || password === "");
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setPassword(value);
    setIsButtonDisabled(value === "" || user === "");
  };

  const handleClick = (e: any) => {
    // Logica al dar click en el button
    router.push("/home");
    console.log("Clicked!", e);
  };
  const onClickHandler: () => void = () => {
    handleClick(undefined);
  };

  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    // Realizar acciones con los datos del formulario, conexion a backend
    console.log(data);
  };
  return (
    <div className="h-screen sm:py-10 sm:flex sm:justify-center">
      <div className="flex items-center flex-col pt-[60px] px-6 sm:min-w-[360px] sm:m-auto sm:border-0 sm:shadow-md sm:max-h-full sm:min-h-[640px] sm:rounded-[20px]">
        <Image src={logo} width={106} height={106} alt="logo" />
        <form onSubmit={handleSubmit(onSubmit)} className="w-full my-2">
          <div className="pt-5 w-full">
            <CustomInput
              placeholder="Ingresa tu nombre de usuario"
              pass={false}
              type="text"
              label="Usuario"
              value={user}
              method={handleUser}
            />
          </div>
          <div className=" my-2 w-full">
            <CustomInput
              placeholder="Ingresa tu contraseña"
              pass={true}
              type="password"
              label="Contraseña"
              value={password}
              method={handlePassword}
            />
          </div>
          <div className="w-full text-left mt-2 flex items-center mb-4">
            <Checkbox isChecked={isChecked} setIsChecked={setIsChecked} />
            <a className="ml-2">Recordarme</a>
          </div>
          <div className="w-full">
            <Button
              text="Iniciar sesión"
              isCompleted={!isButtonDisabled}
              onClick={!isButtonDisabled ? onClickHandler : undefined}
            />
          </div>
          <div className="w-full text-center mt-4">
            <LinkComponent
              link="/restablecer-contrasena"
              text="He olvidado mi contraseña"
              decorationColor="orange"
              textColor="purple-disabled"
              textColorHover="purple"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
