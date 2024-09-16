import React from "react";

interface ButtonProps {
  buttonColor?: string;
  text: string;
  isCompleted: boolean;
  onClick?:
    | (() => void)
    | ((e: React.MouseEvent<HTMLButtonElement>) => Promise<void>);
}

const Button: React.FC<ButtonProps> = ({ buttonColor = "purple",text, isCompleted, onClick }) => {
  // Definir el tipo de botón basado en si está completo o no
  const buttonType = isCompleted ? "submit" : "button";
  
  // Mapear los colores permitidos en clases de Tailwind
  const buttonColorClasses = {
    red: "bg-red hover:bg-red-hover active:bg-red-dark",
    purple: "bg-purple hover:bg-purple-hover active:bg-purple-dark",
  };

  // Clases por defecto para el botón (cuando no está completo)
  let buttonClasses =
    "w-full h-[50px] px-6 py-3 bg-gray rounded-[5px] justify-center items-center gap-2.5 flex";

  // Si el formulario está completo, cambia las clases y el color de fondo
  if (isCompleted) {
    buttonClasses =`w-full h-[50px] px-6 py-3 ${buttonColorClasses[buttonColor]} rounded-[5px] justify-center items-center gap-2.5 flex`
      // "w-full h-[50px] px-6 py-3 bg-purple hover:bg-purple-hover active:bg-purple-dark rounded-[5px] justify-center items-center gap-2.5 flex";
  }
  return (
    <button
      type={buttonType}
      className={`${buttonClasses} ${
        isCompleted ? "cursor-pointer" : "cursor-not-allowed"
      }`}
      onClick={onClick}
      disabled={!isCompleted}
    >
      <div className="text-white text-base font-bold leading-snug">{text}</div>
    </button>
  );
};

export default Button;
