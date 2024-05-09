"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Button from "../components/button";
import LinkComponent from "../components/LinkComponent/LinkComponentCustom";
import Image from "next/image";
import logo from "../../../public/assets/images/icon.svg";
import { SetNewPassword } from "./utils";

const cambiarContraseñaSchema = z
  .object({
    nuevaContrasena: z
      .string()
      .min(8, "La contraseña debe tener al menos 8 caracteres")
      .regex(/[A-Z]/, "La contraseña debe incluir al menos una letra mayúscula")
      .regex(/[0-9]/, "La contraseña debe incluir al menos un número")
      .regex(
        /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/,
        "La contraseña debe incluir al menos un carácter especial"
      ),
    repetirNuevaContrasena: z.string(),
  })
  .refine((data) => data.nuevaContrasena === data.repetirNuevaContrasena, {
    message: "Las contraseñas no coinciden",
    path: ["repetirNuevaContrasena"],
  });

type CambiarContrasenaData = z.infer<typeof cambiarContraseñaSchema>;

interface GetPasswordProps {
  params: {
    token: string;
  };
}

const Page: React.FC<GetPasswordProps> = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CambiarContrasenaData>({
    resolver: zodResolver(cambiarContraseñaSchema),
  });

  const onSubmit = (data: CambiarContrasenaData) => {
    console.log("Datos del formulario:", data);
    SetNewPassword(props.params.token, data.nuevaContrasena);
  };

  return (
    <div className="h-screen sm:py-10 sm:flex sm:justify-center">
      <div className="flex items-center flex-col pt-[60px] px-6 sm:min-w-[360px] sm:m-auto sm:border-0 sm:shadow-md sm:max-h-full sm:min-h-[640px] sm:rounded-[20px]">
        <Image src={logo} width={106} height={106} alt="logo" />
        <form onSubmit={handleSubmit(onSubmit)} className="w-full my-2">
          <div className="flex flex-col">
            <div className="pt-5 w-full">
              <label htmlFor="nuevaContrasena">Nueva contraseña:</label>
              <input
                className={`px-2 py-2 h-[50px] w-full placeholder:text-purple-hover border-2 rounded-lg font-normal  ${
                  errors.nuevaContrasena
                    ? "border-[#DE1111] focus:outline-[#DE1111] text-[#DE1111]"
                    : "border-purple focus:outline-purple"
                }`}
                id="nuevaContrasena"
                {...register("nuevaContrasena", { required: true })}
                type="password"
                placeholder="Ingresa tu nueva contraseña"
              />
              <p className="text-red-600">{errors.nuevaContrasena?.message}</p>
            </div>

            <div className="my-2 w-full">
              <label htmlFor="repetirNuevaContrasena">
                Repetir nueva contraseña:
              </label>
              <input
                className={`px-2 py-2 h-[50px] w-full placeholder:text-purple-hover border-2 rounded-lg font-normal  ${
                  errors.repetirNuevaContrasena
                    ? "border-[#DE1111] focus:outline-[#DE1111] text-[#DE1111]"
                    : "border-purple focus:outline-purple"
                }`}
                id="repetirNuevaContrasena"
                {...register("repetirNuevaContrasena", { required: true })}
                type="password"
                placeholder="Ingresa otra vez tu nueva contraseña"
              />
              <p className="text-red-600">
                {errors.repetirNuevaContrasena?.message}
              </p>
            </div>

            <div className="w-full">
              <Button text="Cambiar contraseña" isCompleted={true} />
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
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
