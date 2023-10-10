"use client";
import React, { useEffect, useRef, useState } from 'react';
import logo from "../../../public/assets/images/icon.svg";
import menu from "../../../public/assets/images/menu.svg";
import green from "../../../public/assets/images/menu-green.svg";
import LinkComponent from "./LinkComponent/LinkComponentCustom";
import Image from "next/image";

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const menuRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        function handleResize() {
            setIsSmallScreen(window.innerWidth <= 768);
        }

        window.addEventListener("resize", handleResize);

        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, []);

    useEffect(() => {
        function handleClickOutside(event: any) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
    }, []);

    return (
        <>
{/* Mobile menu (only when isSmallScreen is true) */}
            {isSmallScreen && (
                <div className="flex w-full p-[24px] m-auto justify-between">
                    <Image src={logo} width={35} height={35} alt="Logo" />
                    {isOpen ? (
                        <Image
                            src={green}
                            width={35}
                            height={35}
                            alt="Logo"
                            onClick={toggleMenu}
                            className="cursor-pointer"
                        />
                    ) : (
                        <Image
                            src={menu}
                            width={35}
                            height={35}
                            alt="Logo"
                            onClick={toggleMenu}
                            className="cursor-pointer"
                        />
                    )}
                    {isOpen && (
                        <div
                            ref={menuRef}
                            className="flex flex-col absolute mt-2 py-2 px-6 bg-purple text-white border rounded shadow right-5 top-[60px]"
                        >

                        </div>
                    )}
                </div>
            )}

            {!isSmallScreen && (
                <div className="flex w-full p-[24px] xl:mx-[0px] md:mr-[0px]">
                    <Image className="md:ml-[50px] xl:ml-[150px]" src={logo} width={35} height={35} alt="Logo" />
                    <div className="flex w-full mt-2 py-2 px-6 p-8 justify-evenly">
                        <LinkComponent
                            link="#"
                            decorationColor="white"
                            text="Institución"
                            textColor="purple-dark"
                        />
                        <LinkComponent
                            link="#"
                            decorationColor="white"
                            text="Profesores"
                            textColor="purple-dark"
                        />
                        <LinkComponent
                            link="#"
                            decorationColor="white"
                            text="Estudiantes"
                            textColor="purple-dark"
                        />
                        <LinkComponent
                            link="#"
                            decorationColor="white"
                            text="Estadísticas"
                            textColor="purple-dark"
                        />
                        <LinkComponent
                            link="#"
                            decorationColor="white"
                            text="Mi cuenta"
                            textColor="purple-dark"
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default NavBar;
