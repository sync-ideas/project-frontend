import React from "react";
import NavBar from "../components/navbar";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import addProfessor from "../../../public/assets/images/add-professor.svg";
import Link from "next/link";
import Image from "next/image";
import Button from "../components/button";

interface ProfessorProps {}
const Professor: React.FC<ProfessorProps> = () => {
    return (
        <div className="max-h-screen">
            <NavBar />
            <div className="px-6 xl:px-[120px] py-[10px]">
                <div className="w-full flex justify-between mb-[10px]">
                    <Breadcrumb links={[{ hiper: "/", text: "Profesores" }]} />
                </div>
                <Link href="/nuevo-profesor" className="">
                    <div className="bg-purple bg-opacity-20 rounded-[5px] w-full flex items-center justify-center flex-col opacity-70 hover:opacity-100 px-20 h-[422px] sm:max-h-screen md:min-h-screen xl:min-h-full">
                        <Image
                            src={addProfessor}
                            alt="add professor icon"
                            width={63}
                            height={62}
                            className="w-16 h-16 mb-6"
                            style={{ color: "rgba(54, 43, 62, 1)" }}
                        />
                        <p className="text-center text-purple-text font-semibold text-base">
                            Agrega al primer <br />
                            profesor del <br />
                            equipo docente
                        </p>
                    </div>
                </Link>
                <div className="mt-[10px] sm:mt-6 w-full flex justify-end">
                    <Link href="/nuevo-profesor" className="w-full xl:w-1/5 min-w-[320px]">
                        <Button text="Nuevo perfil" isCompleted={true} />
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Professor;
