import React from "react";
import Image from "next/image";
import logo from "../../../public/assets/images/icon.svg";
import LinkComponent from "../components/LinkComponent/LinkComponentCustom";
import CustomInput from "../components/input";
import Link from "next/link";

interface GetPasswordProps {}
const GetPassword: React.FC<GetPasswordProps> = (props) => {
    return (
        <div className="h-screen sm:py-10 sm:flex sm:justify-center">
            <div className="flex items-center flex-col pt-[60px] px-6 sm:min-w-[360px] sm:m-auto sm:border-0 sm:shadow-md sm:max-h-full sm:min-h-[640px] sm:rounded-[20px]">
                <Image src={logo} width={106} height={106} alt="Logo" />
                <form action="" className="w-full">
                    <div className="pt-5 my-2 w-full">
                        <CustomInput
                            placeholder="Ingresa tu correo electrónico"
                            pass={false}
                            type="email"
                            label="Correo electrónico"
                        />
                    </div>
                    <div className="w-full">
                        <button
                            className="bg-purple hover:bg-purple-hover focus:bg-purple-dark disabled:bg-grey-lines py-3 px-6 text-white w-full border-0 rounded-md font-bold"
                            type="submit"
                        >
                            <Link href="">Recuperar contraseña</Link>
                        </button>
                    </div>
                </form>
                <div className="w-full text-right mt-4">
                    <LinkComponent
                        link="/login"
                        text="< Volver a Iniciar Sesión"
                        textColor="purple-disabled"
                        decorationColor="green"
                    />
                </div>
            </div>
        </div>
    );
};

export default GetPassword;
