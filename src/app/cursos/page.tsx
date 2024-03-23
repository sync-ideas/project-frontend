"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Footer from "../components/Footer";
import NavBar from "../components/navbar";
import Button from "../components/button";
import courses from "../../../public/assets/images/courses.svg";
import Breadcrumb from "../components/Breadcrumb";
interface CourseRegistrationProps {}

const CourseRegistration: React.FC<CourseRegistrationProps> = (props) => {
  const router = useRouter();
  const handleClik = () => {
    router.push("/nuevo-curso");
  };
  return (
    <div>
      <NavBar />
      <div className="px-[24px] md:px-[32px] xl:px-[120px] flex flex-col">
        <Breadcrumb
          links={[
            { hiper: "/estudiantes", text: "Estudiantes" },
            { hiper: "/curso", text: "Cursos" },
          ]}
        />
        <Link href="/nuevo-curso">
          <div className="bg-purple bg-opacity-20 opacity-70 hover:opacity-100 mt-[10px] md:mt-[24px] mb-[10px] flex w-full h-[422px] md:h-[938px] xl:h-[456px] 2xl:h-screen rounded-[5px]">
            <div className="px-[20px] mx-auto my-auto max-w-[134px] flex items-center justify-center flex-col">
              <Image
                src={courses}
                width={68}
                height={66.58}
                style={{
                  width: "100%",
                  height: "auto",
                }}
                alt="courses"
              />
              <p className="text-center text-purple-text font-semibold pt-[24px] block ">
                Crea el primer<br />
                curso de tu <br />
                establecimiento
              </p>
            </div>
          </div>
        </Link>
        <div className="md:mt-[16px] w-full xl:w-[312px] self-end ">
          <Button text="Nuevo curso" onClick={handleClik} isCompleted={true} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CourseRegistration;
