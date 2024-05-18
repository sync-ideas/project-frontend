"use client";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema } from "../validations/userSchema";
import Image from "next/image";
import logo from "../../../public/assets/images/icon.svg";
import Button from "../components/button";
import CustomInput from "../components/input";
import LinkComponent from "../components/LinkComponent/LinkComponentCustom";
import { Checkbox } from "../components/Checkbox";
import { areInputsNotEmpty } from "../functions/input/formUtils";

interface LoginProps {}

type Inputs = {
  email: string;
  password: string;
};
const Login: React.FC<LoginProps> = (props) => {
  //Funcion para dirigir a otra pagina en caso de respuesta positiva de login
  const router = useRouter();

  //Formulario con react-hook-form y validaciones iniciales con zod
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<Inputs>({
    resolver: zodResolver(userSchema),
  });

  //Estado de checkbox para guardar los datos registrados en los input
  const [isChecked, setIsChecked] = useState(false);
  //Estado de boton para activarlo
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  //Estados de inputs para cambiar estilos si hay errores
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [remainingAttempts, setRemainingAttempts] = useState("");
  //Estados de inputs para mostrar errores
  const [showErrorMessage, setShowErrorMessage] = useState(true);

  //Validacion de inputs con valor para activar el boton
  const handleInputChange = useCallback(() => {
    const inputsNotEmpty = areInputsNotEmpty(watch, "email", "password");
    setIsButtonDisabled(!inputsNotEmpty);
  }, [watch, setIsButtonDisabled]);

  // Lógica para manejar el clic en el input y actualizar los estados de error
  const handleInputClick = (inputId: string) => {
    if (inputId === "email" || inputId === "password") {
      setEmailError(false);
      setPasswordError(false);
      setShowErrorMessage(false);
    }
  };

  // Verificar si hay datos guardados en el localStorage y establecerlos
  useEffect(() => {
    const savedUserData = localStorage.getItem("savedUserData");
    if (savedUserData) {
      const parsedData = JSON.parse(savedUserData);
      setValue("email", parsedData.email);
      setValue("password", parsedData.password);
      handleInputChange(); // Actualizar el estado del botón después de establecer los valores
    }
  }, [setValue, handleInputChange]);

  const onSubmit = async (data: Inputs) => {
    // Reiniciar estados de error y mostrar mensaje al realizar un nuevo envío de datos
    setErrorMessage("");
    setRemainingAttempts("");
    setShowErrorMessage(true);
    try {
      const response = await axios.post(
        "https://attendance-control.vercel.app/api/users/login",
        {
          email: data.email,
          password: data.password,
        }
      );
      // console.log(response.data);
      // Si la peticion es exitosa redirige a home
      router.push("/home");
      // Guarda los datos si la casilla "Recordarme" está marcada
      if (isChecked) {
        localStorage.setItem("savedUserData", JSON.stringify(data));
      }
      // console.log(localStorage.savedUserData)
    } catch (error: any) {
      // console.error(error.response.data);
      // console.error(error.response.data.message);
      // Si hay un error, actualiza los estados de error correspondientes
      setErrorMessage(error.response.data.message);
      setRemainingAttempts(error.response.data.remainingAttempts);

      if (error.response.data.message.includes("User not found")) {
        setEmailError(true);
      } else if (error.response.data.message.includes("Incorrect password")) {
        setPasswordError(true);
      } else if (error.response.data.message.includes("Too many attempts. Please try again later.")) {
        setPasswordError(true);
      }
    }
  };

  return (
    <div className="h-screen sm:py-10 sm:flex sm:justify-center">
      <div className="flex items-center flex-col pt-[60px] px-6 sm:min-w-[360px] sm:m-auto sm:border-0 sm:shadow-md sm:max-h-full sm:min-h-[640px] sm:rounded-[20px]">
        <Image src={logo} width={106} height={106} alt="logo" priority />
        <form onSubmit={handleSubmit(onSubmit)} className="w-full my-2">
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

            {/* Validaciones iniciales de formulario */}
            {errors.email?.message && (
              <p className="w-[320px] mt-[5px] text-[#DE1111]">
                {errors.email.message}
              </p>
            )}

            {/* Mostrar mensaje de error del backend */}
            {emailError && showErrorMessage && (
              <p className="w-[320px] mt-[5px] text-[#DE1111]">
                Usuario no registrado.
              </p>
            )}
          </div>
          <div className=" my-2 w-full">
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

            {/* Validaciones iniciales de formulario */}
            {errors.password?.message && (
              <p className="w-[320px] mt-[5px] text-[#DE1111]">
                {errors.password.message}
              </p>
            )}

            {/* Mostrar mensaje de error del backend */}
            {errorMessage.includes("Incorrect password") &&
              showErrorMessage && (
                <p className="w-[320px] mt-[5px] text-[#DE1111]">
                  {Number(remainingAttempts) === 1
                    ? "Contraseña incorrecta. Te queda 1 intento. Si fallas otra vez tu cuenta será bloqueada temporalmente por 30 minutos."
                    : Number(remainingAttempts) === 2
                    ? "Contraseña incorrecta. Te quedan 2 intentos."
                    : "Tu cuenta ha sido bloqueada temporalmente por 30 minutos. Una vez pasado este periodo podrás volver a iniciar sesión."}
                </p>
              )}

            {/* Mostrar mensaje de error de "Demasiados intentos" */}
            {errorMessage.includes(
              "Too many attempts. Please try again later."
            ) &&
              showErrorMessage && (
                <p className="w-[320px] mt-[5px] text-[#DE1111]">
                  Tu cuenta ha sido bloqueada temporalmente por 30 minutos. Una
                  vez pasado este periodo podrás volver a iniciar sesión.
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
        {/* <div className="w-[320px]">{JSON.stringify(watch(), null, 2)}</div> */}
      </div>
    </div>
  );
};

export default Login;
