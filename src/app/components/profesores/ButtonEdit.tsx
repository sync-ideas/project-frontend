"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { handleEditClick } from "../../../functions";

interface ButtonProps {
  userId: number;
}

const ButtonEdit: React.FC<ButtonProps> = ({ userId }) => {
  const router = useRouter();

  return (
    <button
      className="w-[93px] h-[43px] bg-white hover:bg-[#E7E7E7] active:bg-[#B3B3B3] border-[1px] rounded-[8px] border-purple-text shadow-profesores-button-edit active:profesores-button-edit-click hidden md:block"
      onClick={() => handleEditClick(userId, router)}
    >
      <div className="text-purple-text text-[20px] leading-[22px] font-normal">
        Editar
      </div>
    </button>
  );
};

export default ButtonEdit;