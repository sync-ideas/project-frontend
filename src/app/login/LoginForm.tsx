"use client"
import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchemaLogin } from "../validations";
import CustomInput from "@components/input";
import Button from "@components/button";
import LinkComponent from "@components/LinkComponent/LinkComponentCustom";
import { Checkbox } from "@components/Checkbox";
import { areInputsNotEmpty } from "@functions/index";
import { useLoginStore } from "@store/index";
import { onSubmit } from '../login/loginSubmit'; // Importar la función onSubmit

export type Inputs = {
  email: string;
  password: string;
};

const LoginForm: React.FC = () => {
  const loggedIn = useLoginStore((state) => state.loggedIn);
  const router = useRouter(); // Usa useRouter para obtener el router

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<Inputs>({
    resolver: zodResolver(userSchemaLogin),
  });

  const [isChecked, setIsChecked] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [remainingAttempts, setRemainingAttempts] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(true);

  const handleInputChange = useCallback(() => {
    const inputsNotEmpty = areInputsNotEmpty(watch, "email", "password");
    setIsButtonDisabled(!inputsNotEmpty);
  }, [watch, setIsButtonDisabled]);

  const handleInputClick = (inputId: string) => {
    if (inputId === "email" || inputId === "password") {
      setEmailError(false);
      setPasswordError(false);
      setShowErrorMessage(false);
    }
  };

  useEffect(() => {
    const savedUserData = localStorage.getItem("savedUserData");
    if (savedUserData) {
      const parsedData = JSON.parse(savedUserData);
      setValue("email", parsedData.email);
      setValue("password", parsedData.password);
      handleInputChange();
    }
  }, [setValue, handleInputChange]);

  const handleSubmitForm = (data: Inputs) => {
    onSubmit({
      data,
      setErrorMessage,
      setRemainingAttempts,
      setEmailError,
      setPasswordError,
      setShowErrorMessage,
      isChecked,
      loggedIn,
      router, // Pasa el router a la función onSubmit
    });
  };

  return (
    <form onSubmit={handleSubmit(handleSubmitForm)} className="w-full my-2">
      <div className="pt-5 w-full">
        <CustomInput
          id="email"
          placeholder="Ingresa tu nombre de usuario"
          pass={false}
          type="text"
          label="Usuario"
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
        {emailError && showErrorMessage && (
          <p className="w-[320px] mt-[5px] text-[#DE1111]">
            Usuario no registrado.
          </p>
        )}
      </div>
      <div className="my-2 w-full">
        <CustomInput
          id="password"
          placeholder="Ingresa tu contraseña"
          pass={true}
          type="password"
          label="Contraseña"
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
        {errorMessage.includes("Incorrect password") && showErrorMessage && (
          <p className="w-[320px] mt-[5px] text-[#DE1111]">
            {Number(remainingAttempts) === 1
              ? "Contraseña incorrecta. Te queda 1 intento. Si fallas otra vez tu cuenta será bloqueada temporalmente por 30 minutos."
              : Number(remainingAttempts) === 2
              ? "Contraseña incorrecta. Te quedan 2 intentos."
              : "Tu cuenta ha sido bloqueada temporalmente por 30 minutos. Una vez pasado este periodo podrás volver a iniciar sesión."}
          </p>
        )}
        {errorMessage.includes("Too many attempts. Please try again later.") &&
          showErrorMessage && (
            <p className="w-[320px] mt-[5px] text-[#DE1111]">
              Tu cuenta ha sido bloqueada temporalmente por 30 minutos. Una vez pasado este periodo podrás volver a iniciar sesión.
            </p>
          )}
      </div>
      <div className="w-full text-left mt-2 flex items-center mb-4">
        <Checkbox isChecked={isChecked} setIsChecked={setIsChecked} />
        <a className="ml-2">Recordarme</a>
      </div>
      <div className="w-full">
        <Button text="Iniciar sesión" isCompleted={!isButtonDisabled} />
      </div>
      <div className="w-full text-center mt-4">
        <LinkComponent
          link="/restablecer-contrasena"
          text="He olvidado mi contraseña"
          decorationColor="hover:decoration-orange"
          textColor="text-purple-disabled"
          textColorHover="hover:text-purple-text"
        />
      </div>
    </form>
  );
};

export default LoginForm;