import React from "react";

interface ButtonProps {
  text: string;
  isCompleted: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, isCompleted }) => {
  // Clases por defecto para el botón (cuando no está completo)
  let buttonClasses =
    "h-[50px] px-6 py-3 bg-gray rounded-[5px] justify-center items-center gap-2.5 flex";

  // Si el formulario está completo, cambia las clases y el color de fondo
  if (isCompleted) {
    buttonClasses =
      "h-[50px] px-6 py-3 bg-purple hover:bg-purple-hover active:bg-purple-dark rounded-[5px] justify-center items-center gap-2.5 flex";
  }

  return (
    <div className="w-[312px] h-[50px] justify-start items-start">
      <div
        className={`${buttonClasses} ${
          isCompleted ? "cursor-pointer" : "cursor-not-allowed"
        }`}
      >
        <div className="text-white text-base font-sans leading-snug">
          {text}
        </div>
      </div>
    </div>
  );
};

export default Button;