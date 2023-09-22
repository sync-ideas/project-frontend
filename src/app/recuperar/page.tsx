import React from "react";
import Image from "next/image";
import logo from "../../../public/assets/images/icon.svg";
import LinkComponent from "../components/Link";
import Link from "next/link";

interface GetPasswordProps {}
const GetPassword: React.FC<GetPasswordProps> = (props) => {
    return (
        <div className="flex items-center flex-col justify-center pt-16 px-6">
            <Image src={logo} width={106} height={106} alt="Logo" />

            <div className="pt-5 my-2 w-full">
                <label
                    htmlFor="email"
                    className="text-base text-text-dark mb-5 w-full"
                >
                    Correo Electrónico
                </label>
                <input
                    type="email"
                    placeholder="Ingresa tu correo electrónico"
                    name="email"
                    className="py-3 pl-3 border-2 rounded-lg text-base w-full border-purple-basic bg-white placeholder-purple-basic hover:border-purple-basic text-text-dark focus:border-purple-basic"
                />
            </div>
            <div className="w-full">
                <button className="bg-purple-basic hover:bg-purple-hover focus:bg-purple-dark disabled:bg-grey-lines py-3 px-6 text-text-light w-full border-0 rounded-md font-bold" type="submit" >
                    <Link href={""}>Recuperar contraseña</Link>
                    
                </button>
            </div>
            <div className="w-full items-right">
                <LinkComponent link="/" text="< Volver a Iniciar Sesión" />
            </div>
        </div>
    );
};

export default GetPassword;
