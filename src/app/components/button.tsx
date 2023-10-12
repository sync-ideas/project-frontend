import React from "react";

interface ButtonProps {
  text: string;
  isCompleted: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, isCompleted, onClick }) => {
  // Clases por defecto para el botón (cuando no está completo)
  let buttonClasses =
    "w-full h-[50px] px-6 py-3 bg-gray rounded-[5px] justify-center items-center gap-2.5 flex";

  // Si el formulario está completo, cambia las clases y el color de fondo
  if (isCompleted) {
    buttonClasses =
      "w-full h-[50px] px-6 py-3 bg-purple hover:bg-purple-hover active:bg-purple-dark rounded-[5px] justify-center items-center gap-2.5 flex";
  }

  return (
    <button
      type="submit"
      className={`${buttonClasses} ${
        isCompleted ? "cursor-pointer" : "cursor-not-allowed"
      }`}
      onClick={onClick}
    >
      <div className="text-white text-base font-bold leading-snug">
        {text}
      </div>
    </button>
  );
};

export default Button;
