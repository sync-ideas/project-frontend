"use client";
import React, { useState, useEffect } from "react";
import ButtonCancel from "../ButtonCancel";
import Button from "../../button";
import { useModalStore } from "@store/index";


interface ModalProps {
  bgColor?: string; // Color de fondo
  buttonColor?: string; // Color del botón
  text: string; // Texto del modal
  onConfirm: () => Promise<void>; // Función genérica para la acción de confirmación
  onClose: () => void;
  data: {
    fullname: string;
    email: string;
    username: string;
  }; // Datos del formulario (o los que necesites pasar)
}

const ModalConfirmNew: React.FC<ModalProps> = ({
  bgColor = "green",
  buttonColor,
  text,
  onConfirm,
  onClose,
  data,
}) => {
  const bgColorClasses = {
    green: "bg-green-card",
    red: "bg-red",
  };

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(true);
  const { setErrorModal } = useModalStore.getState();


  useEffect(() => {
    setIsModalVisible(true);
  }, []);

  const handleClose = () => {
    setIsModalVisible(false);
    setTimeout(() => {
      onClose();
    }, 200);
  };

  const handleCancel = () => {
    handleClose();
  };

  const handleConfirm = async () => {
    try {
      await onConfirm(); // Llama a la función que le pasas para hacer la acción
      handleClose();
    } catch (error) {
      setErrorModal(true); // Puedes manejar el error aquí o pasar otra función
    }
  };

  return (
    <div className="fixed inset-0 flex items-end sm:items-center justify-center z-50">
      <div
        className="fixed inset-0 bg-black opacity-50"
        style={{ pointerEvents: "none" }}
      ></div>
      <div
        className={`flex flex-col rounded-2xl z-10 w-full sm:w-auto h-[428px] mx-6 sm:mx-0 transform transition-transform duration-300 ${
          isModalVisible ? "translate-y-0" : "translate-y-full"
        }`}
        style={{ pointerEvents: "auto" }}
      >
        <div
          className={`${bgColorClasses[bgColor]} flex items-center text-center justify-center flex-col gap-[10px] px-[24px] py-[12px] border border-[#362B3E] rounded-t-2xl sm:w-[360px] h-[76px]`}
        >
          <p className="text-white text-[16px] leading-[22px] font-bold sm:w-[312px] h-[44px] flex justify-center items-center">
            {text}
          </p>
        </div>

        <div className="bg-white flex flex-col rounded-b-2xl gap-6 pt-[24px] border border-[#362B3E]">
          <div className="flex flex-col text-center gap-4">
            <div className="flex flex-col">
              <span className="text-[16px] leading-[22px] font-bold text-black">
                Nombre:
              </span>
              <span className="text-[16px] leading-[22px] text-black">
                {data.fullname}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-[16px] leading-[22px] font-bold text-black">
                Correo:
              </span>
              <span className="text-[16px] leading-[22px] text-black">
                {data.email}
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-[16px] leading-[22px] font-bold text-black">
                Nombre de usuario:
              </span>
              <span className="text-[16px] leading-[22px] text-black">
                {data.username}
              </span>
              {emailError &&(
                <p className="text-[16px] w-[312px] leading-[22px] text-[#DE1111]">
                  El correo o usuario registrado ya existe. Intenta otro.
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-3 px-6 pb-7 h-[140px] w-full">
            <ButtonCancel text="Cancelar" onClick={handleCancel} />
            <Button
              buttonColor={buttonColor}
              text="Confirmar"
              isCompleted={!isButtonDisabled}
              onClick={handleConfirm}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalConfirmNew;
