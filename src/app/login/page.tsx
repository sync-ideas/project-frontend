"use client";
import Image from "next/image";
import logo from "../../../public/assets/images/icon.svg";
import LoginForm from "./LoginForm";

interface LoginProps {}

const Login: React.FC<LoginProps> = (props) => {
  return (
    <div className="h-screen sm:py-10 sm:flex sm:justify-center">
      <div className="flex items-center flex-col pt-[60px] px-6 sm:min-w-[360px] sm:m-auto sm:border-0 sm:shadow-md sm:max-h-full sm:min-h-[640px] sm:rounded-[20px]">
        <Image src={logo} width={106} height={106} alt="logo" priority />
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;