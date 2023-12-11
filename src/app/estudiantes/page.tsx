import React from "react";
import NavBar from "../components/navbar";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import Link from "next/link";
import Image from "next/image";
import Button from "../components/button";

interface StudentsProps {}
const Students: React.FC<StudentsProps> = () => {
    return (
        <div className="max-h-screen">
            <NavBar />
            <div className="px-6 sm:px-8 md:px-[120px] py-[10px] h-screen">
                <div className="w-full flex justify-between mb-[10px]">
                    <Breadcrumb links={[{ hiper: "/", text: "Estudiantes" }]} />
                </div>
                <div className="flex flex-col w-full items-center">
                    <Link
                        href={"/nuevo-estudiante"}
                        className="w-[312px] my-[10px]"
                    >
                        <Button text="Nuevo estudiante" isCompleted={true} />
                    </Link>
                    <Link href={"/cursos"} className="w-[312px] my-[10px]">
                        <Button text="Cursos" isCompleted={true} />
                    </Link>
                    <Link
                        href={"/generacion-qr"}
                        className="w-[312px] my-[10px]"
                    >
                        <Button text="Generación de QR" isCompleted={true} />
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Students;
