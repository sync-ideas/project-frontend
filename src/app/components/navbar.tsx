"use client";
import React, { useEffect, useRef, useState } from "react";
import logo from "../../../public/assets/images/icon.svg";
import menu from "../../../public/assets/images/menu.svg";
import green from "../../../public/assets/images/menu-green.svg";
import LinkComponent from "./LinkComponent/LinkComponentCustom";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLImageElement | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    function handleResize() {
      setIsSmallScreen(window.innerWidth <= 768);
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      {/* Mobile menu (only when isSmallScreen is true) */}
      {isSmallScreen && (
        <div className="flex w-full px-[24px] md:px-[32px] py-[12px] m-auto justify-between">
          <Image
            className="cursor-pointer"
            src={logo}
            width={35}
            height={35}
            alt="Logo"
            onClick={() => router.push("/home")}
          />
          {isOpen ? (
            <Image
              src={green}
              width={35}
              height={35}
              alt="Menu Close"
              onClick={toggleMenu}
              className="cursor-pointer"
              ref={buttonRef}
            />
          ) : (
            <Image
              src={menu}
              width={35}
              height={35}
              alt="Menu Open"
              onClick={toggleMenu}
              className="cursor-pointer"
              ref={buttonRef}
            />
          )}
          {isOpen && (
            <div
              ref={menuRef}
              className="flex flex-col absolute mt-2 py-2 px-6 bg-purple text-white border rounded shadow right-5 top-[60px] z-50"
            >
              <LinkComponent
                text="Institución"
                textColor="text-white"
                decorationColor="hover:decoration-orange"
                link=""
                textColorHover="hover:text-white"
              />
              <LinkComponent
                text="Profesores"
                textColor="text-white"
                decorationColor="hover:decoration-orange"
                link="/profesores"
                textColorHover="hover:text-white"
              />
              <LinkComponent
                text="Estudiantes"
                textColor="text-white"
                decorationColor="hover:decoration-orange"
                link="/estudiantes"
                textColorHover="hover:text-white"
              />
              <LinkComponent
                text="Estadísticas"
                textColor="text-white"
                decorationColor="hover:decoration-orange"
                link="/estadisticas"
                textColorHover="hover:text-white"
              />
              <LinkComponent
                text="Mi cuenta"
                textColor="text-white"
                decorationColor="hover:decoration-orange"
                link="/mi-cuenta"
                textColorHover="hover:text-white"
              />
            </div>
          )}
        </div>
      )}

      {!isSmallScreen && (
        <div className="w-full px-[32px] xl:px-[120px] py-[16px]">
          <div className="flex justify-between">
            <Image
              className="cursor-pointer"
              src={logo}
              width={35}
              height={35}
              alt="Logo"
              onClick={() => router.push("/home")}
            />
            <div className="flex md:w-[600px] justify-end align-center py-[6.5px] space-x-12">
              <LinkComponent
                text="Institución"
                textColor="text-black"
                decorationColor="hover:decoration-green"
                link="/institucion"
                textColorHover="hover:text-black"
              />
              <LinkComponent
                text="Profesores"
                textColor="text-black"
                decorationColor="hover:decoration-green"
                link="/profesores"
                textColorHover="hover:text-black"
              />
              <LinkComponent
                text="Estudiantes"
                textColor="text-black"
                decorationColor="hover:decoration-green"
                link="/estudiantes"
                textColorHover="hover:text-black"
              />
              <LinkComponent
                text="Estadísticas"
                textColor="text-black"
                decorationColor="hover:decoration-green"
                link="/estadisticas"
                textColorHover="hover:text-black"
              />
              <LinkComponent
                text="Mi cuenta"
                textColor="text-black"
                decorationColor="hover:decoration-green"
                link="/mi-cuenta"
                textColorHover="hover:text-black"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
