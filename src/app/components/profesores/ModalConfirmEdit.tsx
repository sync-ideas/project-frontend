import React from "react";
import Image from "next/image";
import vector from "../../../../public/assets/images/VectorConfirmEdit.svg";

interface ModalProps {
    onClose: () => void;
  }

const ModalConfirmEdit: React.FC<ModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
      <div className="bg-[#1F8B58] flex items-center flex-col gap-[10px] px-[24px] py-[12px] border border-solid border-[#362B3E] rounded-xl shadow-lg relative z-10 w-[205px] text-center">
        <Image alt="imagen-vector" src={vector} width={50} height={50} />
        <p className="text-white text-[16px] font-bold leading-[22px] not-italic w-[157px]">Cambios guardados con éxito</p>
      </div>
    </div>
  );
};

export default ModalConfirmEdit;