import React from "react";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  buttonColor?: string;
  text: string;
  onClick?: () => void;
}

const GenericButton: React.FC<ButtonProps> = ({
  buttonColor = "purple",
  text,
  type = "button",
  onClick,
  disabled = false,
}) => {
  // Mapear los colores permitidos en clases de Tailwind
  const buttonColorClasses = {
    red: "bg-red hover:bg-red-hover active:bg-red-dark",
    purple: "bg-purple hover:bg-purple-hover active:bg-purple-dark",
    green: "bg-green hover:bg-green-hover active:bg-green-dark",
  };

  // Clases por defecto para el botón (cuando no está completo)
  let buttonClasses =
    "w-full h-[50px] px-6 py-3 bg-gray rounded-[5px] justify-center items-center gap-2.5 flex";

  // Si el formulario está completo, cambia las clases y el color de fondo

  return (
    <button
      type={type}
      className={`${buttonClasses} ${buttonColorClasses[buttonColor]} ${
        !disabled ? "cursor-pointer" : "cursor-not-allowed"
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      <div className="text-white text-base font-bold leading-snug">{text}</div>
    </button>
  );
};

export default GenericButton;
