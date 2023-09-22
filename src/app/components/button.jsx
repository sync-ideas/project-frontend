import React from "react";

const Button = ({ text, isCompleted }) => {
  // Clases por defecto para el botón (cuando no está completo)
  let buttonClasses =
    "h-[50px] px-6 py-3 bg-zinc-400 rounded-[5px] justify-center items-center gap-2.5 flex";

  // Si el formulario está completo, cambia las clases y el color de fondo
  if (isCompleted) {
    buttonClasses =
      "h-[50px] px-6 py-3 bg-purple-900 hover:bg-purple-800 active:bg-purple-950 rounded-[5px] justify-center items-center gap-2.5 flex";
  }

  return (
    <div className="w-[312px] h-[50px] justify-start items-start">
      <div
        className={`${buttonClasses} ${
          isCompleted ? "cursor-pointer" : "cursor-not-allowed"
        }`}
      >
        <div className="text-white text-base font-bold font-sans leading-snug">
          {text}
        </div>
      </div>
    </div>
  );
};

export default Button;
