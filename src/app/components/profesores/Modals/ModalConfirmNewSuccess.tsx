"use client";
import React from "react";
import Image from "next/image";
import vectorConfirmNew from "@images/vectorConfirmNew.svg";

interface ModalProps {
  onClose: () => void;
  bgColor?: string; // Color de fondo
  text: string; // Texto
}
const ModalConfirmNewSuccess: React.FC<ModalProps> = ({
  onClose,
  bgColor="green",
  text,
}) => {
  const bgColorClasses = {
    green: "bg-green-card",
    red: "bg-red",
  };
  return (
    <div className="fixed inset-0 flex items-end sm:items-center justify-center z-50">
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>
      <div className="flex flex-col rounded-2xl z-10 w-full sm:w-auto h-[428px] mx-6 sm:mx-0">
        <div
          className={`${bgColorClasses[bgColor]} flex text-center justify-center flex-col gap-[10px] px-[24px] py-[12px] border border-[#362B3E] rounded-t-2xl sm:w-[360px] h-[76px]`}
        >
          <p className="text-white text-[16px] leading-[22px] font-bold sm:w-[312px]">
            {text}
          </p>
        </div>

        <div className="bg-white flex flex-col items-center justify-center rounded-b-2xl gap-6 w-[360px] h-[352px] border border-[#362B3E]">
          <Image
            width={132}
            height={132}
            alt="vector-confirm"
            src={vectorConfirmNew}
          />
        </div>
      </div>
    </div>
  );
};

export default ModalConfirmNewSuccess;
