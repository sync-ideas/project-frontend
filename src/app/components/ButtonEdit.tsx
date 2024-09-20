"use client";
import React from "react";

interface ButtonProps {
  text: string;
  userId: number;
  onClick: (userId: number) => void;
}

const ButtonEdit: React.FC<ButtonProps> = ({ text, userId, onClick }) => {
  return (
    <button
      className="w-[93px] h-[43px] bg-white hover:bg-[#E7E7E7] active:bg-[#B3B3B3] border-[1px] rounded-[8px] border-purple-text shadow-profesores-button-edit active:profesores-button-edit-click hidden md:block"
      onClick={() => onClick(userId)}
    >
      <div className="text-purple-text text-[20px] leading-[22px] font-normal">
        {text}
      </div>
    </button>
  );
};

export default ButtonEdit;