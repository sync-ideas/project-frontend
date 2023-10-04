import React from "react";
import logo from '../../../public/assets/images/icon.svg'
import Image from "next/image";
import Button from "../components/button";

interface MessageProps {}

const Message: React.FC<MessageProps> = (props) => {
    const message = "Hemos enviado un mensaje a tu correo elecrónico para que puedas volver a ingresar";
    return (
    <div className="flex items-center flex-col pt-[60px] px-6 sm:max-w-[360px]">
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
    );
};

export default Message;
