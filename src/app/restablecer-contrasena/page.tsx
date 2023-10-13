"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../../public/assets/images/icon.svg";
import CustomInput from "../components/input";
import Button from "../components/button";
import LinkComponent from "../components/LinkComponent/LinkComponentCustom";

interface GetPasswordProps {}

const GetPassword: React.FC<GetPasswordProps> = (props) => {
    const [email, setEmail] = useState("");
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setEmail(value);
        setIsButtonDisabled(value === "");
    };

    const handleSubmit = () => {
        //TODO: Agregar código de envio de información a la bd
    };

    return (
        <div className="h-screen sm:py-10 sm:flex sm:justify-center">
            <div className="flex items-center flex-col pt-[60px] px-6 sm:min-w-[360px] sm:m-auto sm:border-0 sm:shadow-md sm:max-h-full sm:min-h-[640px] sm:rounded-[20px]">
                <Image src={logo} width={106} height={106} alt="logo" />
                <form action="" className="w-full">
                    <div className="pt-5 my-2 w-full">
                        <CustomInput
                            placeholder="Ingresa tu correo electrónico"
                            pass={false}
                            type="email"
                            label="Correo electrónico"
                            value={email}
                            method={handleEmailChange}
                        />
                    </div>
                    <div className="w-full">
                        <Button
                            text="Recuperar contraseña"
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
