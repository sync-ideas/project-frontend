import React from "react";
import logo from '../../../public/assets/images/icon.svg'
import Image from "next/image";

interface MessageProps {}

const Message: React.FC<MessageProps> = (props) => {
    const message = "Hemos enviado un mensaje a tu correo elecrónico para que puedas volver a ingresar";
    return (
    <div className="sm:text-left">
        <div className="flex items-center flex-col justify-center pt-16">
            <Image
                src={logo}
                width={100}
                height={100}
                alt="Logo"
            />
            <div className="p-5 text-center text-sm font-normal w-80 font-sans">
                <p>{message}</p>
            </div>
            <div className="font-normal font-sans">
                <button className="w-80 h-14 rounded-sm text-white bg-violet-600">Iniciar sesión</button>
            </div>
        </div>
    </div>
    );
};

export default Message;
