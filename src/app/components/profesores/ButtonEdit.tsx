import React from "react";

interface ButtonProps {
  onClick?:
    | (() => void)
    | ((e: React.MouseEvent<HTMLButtonElement>) => Promise<void>);
}

const ButtonEdit: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <button
      className="w-[93px] h-[43px] bg-white border-[1px] rounded-[8px] border-purple-text shadow-profesores-button-edit hidden md:block"
      onClick={onClick}
    >
      <div className=" text-purple-text text-[20px] leading-[22px] font-normal ">Editar</div>
    </button>
  );
};

export default ButtonEdit;

