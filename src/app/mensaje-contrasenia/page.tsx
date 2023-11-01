import React from "react";
import logo from '../../../public/assets/images/icon.svg'
import Image from "next/image";
import Button from "../components/button";

interface MessagePassProps {}

const MessagePass: React.FC<MessagePassProps> = (props) => {
    const message = "Haz cambiado exitosamente tu contraseña, ahora puedes volver a iniciar sesión.";
    return (
    <div className="h-screen sm:py-10 sm:flex sm:justify-center">
        <div className="flex items-center flex-col pt-[60px] px-6 sm:min-w-[360px] sm:m-auto sm:border-0 sm:shadow-md sm:max-h-full sm:min-h-[640px] sm:rounded-[20px]">
            <div className="flex items-center flex-col justify-center">
                <Image
                    src={logo}
                    width={106}
                    height={106}
                    alt="Logo"
                />
                <div className="p-5 text-center text-sm w-[337px]">
                    <p>{message}</p>
                </div>
            </div>
            <Button isCompleted={true} text="Iniciar sesión"></Button>
        </div>
    </div>
    );
};

export default MessagePass;