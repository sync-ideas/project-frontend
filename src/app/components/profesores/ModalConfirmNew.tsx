"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import ButtonCancel from "./ButtonCancel";
import Button from "../button";
import { useLoginStore, useProfesoresStore } from "../../../store";
import { useRouter } from "next/navigation";

const ModalConfirmNew: React.FC = () => {
  const { newUser, resetNewUser, showSuccessModalNew, setShowSuccessModalNew, setShowSuccessModalNewSuccess } = useProfesoresStore();
  const data = newUser[0];
  const router = useRouter();
  const [emailError, setEmailError] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(true);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  // Estado local para manejar la visibilidad del modal
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    if (showSuccessModalNew) {
      setIsModalVisible(true);
    }
  }, [showSuccessModalNew]);

  // Función de cierre del modal con retraso para permitir que la animación se complete
  const handleClose = () => {
    setIsModalVisible(false);
    setTimeout(() => {
      setShowSuccessModalNew(false);
    }, 100); // Duración de la animación en milisegundos
  };

  const handleCancel = () => {
    handleClose();
  };

  const handleConfirm = async () => {
    try {
      const accessToken = useLoginStore.getState().token;
      router.prefetch("/profesores");
      await axios.post(
        "https://attendance-control.vercel.app/api/users/register",
        {
          email: data.email,
          fullname: data.fullname,
          username: data.username,
          password: data.password,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      setShowSuccessModalNewSuccess(true);
      router.push("/profesores"); // Redirige al usuario a la página de profesores después de la creación
      handleClose(); // Cierra el modal después de una respuesta exitosa
    } catch (error: any) {
      if (
        error.response.data.message.includes(
          "Email or username already exists."
        )
      ) {
        setEmailError(true);
        setIsButtonDisabled(false);
      }
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
        <div className="bg-[#1F8B58] flex items-center text-center justify-center flex-col gap-[10px] px-[24px] py-[12px] border border-[#362B3E] rounded-t-2xl sm:w-[360px] h-[76px]">
          <p className="text-white text-[16px] leading-[22px] font-bold sm:w-[312px] h-[44px]">
            Confirma los datos del nuevo perfil de profesor
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
              {emailError && showErrorMessage && (
                <p className="text-[16px] w-[312px] leading-[22px] text-[#DE1111]">
                  El correo o usuario registrado ya existe. Intenta otro.
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-3 px-6 pb-7 h-[140px] w-full">
            <ButtonCancel text="Cancelar" onClick={handleCancel} />
            <Button
              text="Confirmar"
              isCompleted={isButtonDisabled}
              onClick={handleConfirm}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalConfirmNew;
