"use client";
import { useState } from "react";
import Image from "next/image";
import logo from "../../../public/assets/images/icon.svg";
import Button from "../components/button";
import CustomInput from "../components/input";
import LinkComponent from "../components/LinkComponent/LinkComponentCustom";
import { Checkbox } from "../components/Checkbox";

interface LoginProps {}
const Login: React.FC<LoginProps> = (props) => {
  const [isChecked, setIsChecked] = useState(false);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleUser = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setUser(value);
    setIsButtonDisabled(value === "" || password === "" || value !== password);
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setPassword(value);
    setIsButtonDisabled(value === "" || user === "" || value !== user);
  };

  const handleSubmit = () => {
    //TODO: Agregar código de envio de información a la bd
  };
  return (
    <div className="h-screen sm:py-10 sm:flex sm:justify-center">
      <div className="flex items-center flex-col pt-[60px] px-6 sm:min-w-[360px] sm:m-auto sm:border-0 sm:shadow-md sm:max-h-full sm:min-h-[640px] sm:rounded-[20px]">
        <Image src={logo} width={106} height={106} alt="logo" />
        <form action="" className="w-full my-2">
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
              pass={false}
              type="text"
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
              onClick={handleSubmit}
            />
          </div>
          <div className="w-full text-center mt-4">
            <LinkComponent
              link="/restablecer-contrasena"
              text="He olvidado mi contraseña"
              decorationColor="orange"
              textColor="purple-disabled"
              textColorHover="orange"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
