"use client";
import { useState, useCallback } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema } from "../../validations/userSchemaRestore";
import Image from "next/image";
import logo from "../../../public/assets/images/icon.svg";
import CustomInput from "../components/input";
import Button from "../components/button";
import LinkComponent from "../components/LinkComponent/LinkComponentCustom";
import { areInputsNotEmpty } from "../functions/input/formUtils";

interface GetPasswordProps {}

type Inputs = {
  email: string;
};

const GetPassword: React.FC<GetPasswordProps> = (props) => {
  //Funcion para dirigir a otra pagina en caso de respuesta positiva de login
  const router = useRouter();

  //Formulario con react-hook-form y validaciones iniciales con zod
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<Inputs>({
    resolver: zodResolver(userSchema),
  });

  //Estado de boton para activarlo
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  //Estados de inputs para cambiar estilos si hay errores
  const [emailError, setEmailError] = useState(false);

  //Validacion de inputs con valor para activar el boton
  const handleInputChange = useCallback(() => {
    const inputsNotEmpty = areInputsNotEmpty(watch, "email");
    setIsButtonDisabled(!inputsNotEmpty);
  }, [watch, setIsButtonDisabled]);

  // Lógica para manejar el clic en el input y actualizar los estados de error
  const handleInputClick = (inputId: string) => {
    if (inputId === "email") {
      setEmailError(false);
    }
  };

  const onSubmit = async (data: Inputs) => {
    try {
      const response = await axios.post(
        "https://attendance-control.vercel.app/api/users/forgotpassword",
        {
          email: data.email,
        }
      );
      // console.log(response.data);
      // Si la peticion es exitosa redirige a mensaje-enviado
      router.push("/mensaje-enviado");
    } catch (error: any) {
      // console.error(error.response.data.message);
      // Si hay un error, actualiza los estados de error correspondientes
      if (error.response.data.message.includes("User not found")) {
        setEmailError(true);
      }
    }
  };

  return (
    <div className="h-screen sm:py-10 sm:flex sm:justify-center">
      <div className="flex items-center flex-col pt-[60px] px-6 sm:min-w-[360px] sm:m-auto sm:border-0 sm:shadow-md sm:max-h-full sm:min-h-[640px] sm:rounded-[20px]">
        <Image src={logo} width={106} height={106} alt="logo" priority />
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <div className="pt-5 my-2 w-full">
            <CustomInput
              id="email"
              placeholder="Ingresa tu correo electrónico"
              pass={false}
              type="text"
              label="Correo electrónico"
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
            {emailError && (
              <p className="w-[320px] mt-[5px] text-[#DE1111]">
                Usuario no registrado.
              </p>
            )}
          </div>
          <div className="w-full">
            <Button
              text="Recuperar contraseña"
              isCompleted={!isButtonDisabled}
            />
          </div>
          <div className="w-full text-right mt-4">
            <LinkComponent
              link="/login"
              text="< Volver a Iniciar Sesión"
              decorationColor="hover:decoration-green"
              textColor="text-purple-disabled"
              textColorHover="hover:text-purple"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default GetPassword;
