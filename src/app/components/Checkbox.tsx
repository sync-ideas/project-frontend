import PropTypes from "prop-types";
import React, { useState } from "react";
import vectorCheckbox from "../../../public/assets/images/vectorCheckbox.svg";
import Image from "next/image";

interface Props {
  className?: string; 
  isChecked: boolean; // Prop para pasar el estado
  setIsChecked: (newValue: boolean) => void; // Prop para pasar la función de actualización del estado
}

export const Checkbox = ({ className, isChecked, setIsChecked }: Props): JSX.Element => {
  const [isHovered, setIsHovered] = useState(false); // Estado interno para controlar si está en hover

  const handleMouseEnter = () => {
    setIsHovered(true); // Establece el estado en hover al entrar con el mouse
  };

  const handleMouseLeave = () => {
    setIsHovered(false); // Establece el estado en no hover al salir con el mouse
  };

  const handleCheckboxClick = () => {
    setIsChecked(!isChecked); // Invierte el estado al hacer clic
  };

  const getBorderColor = () => {
    if (isChecked) return "border-purple"; // Cambia el color de borde si está en estado de clic
    if (isHovered) return "border-purple-neon"; // Cambia el color de borde en hover
    return "border-purple"; // Borde predeterminado
  };

  const getBackground = () => {
    if (isChecked) return "bg-purple"; // Cambia el color de fondo a morado si está en estado de clic
    if (isHovered) return "bg-purple-light"; // Cambia el color de fondo a otro color en hover
    return ""; // No background for "default" o cuando no está en hover ni clic
  };

  return (
    <div
      className={`w-[18px] h-[18px] border border-solid rounded-[3px] ${getBorderColor()} ${getBackground()} ${className}`}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      onClick={handleCheckboxClick}
      style={{
        display: "flex",
        justifyContent: "center", // Centra horizontalmente
        alignItems: "center", // Centra verticalmente
      }}
    >
      {isChecked && (
        <div>
          <Image
            src={vectorCheckbox}
            alt="Checkbox"
            height={vectorCheckbox.height}
            width={vectorCheckbox.width}
          />
        </div>
      )}
    </div>
  );
};
