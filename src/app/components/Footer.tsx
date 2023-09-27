import React from "react";
import LinkComponent from "./LinkComponent/LinkComponentCustom";

interface FooterProps {}

const Footer: React.FC<FooterProps> = (props) => {
    return (
        <div className="bg-transparent w-full h-[60px] m-auto py-[10px] text-center">
            <LinkComponent
                text="Contacto"
                textColor="purple"
                decorationColor="purple-hoverLight"
                link="/contacto"
            />
            <p className="font-sans text-xs text-purple-disabled text-center leading-[22px]">
                © Asistencias 2023
            </p>
        </div>
    );
};

export default Footer;
