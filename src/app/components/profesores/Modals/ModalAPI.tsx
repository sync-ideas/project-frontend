import axios from "axios";
import { useLoginStore, useModalStore } from "@store/index";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const useCreateProfesor = () => {
  const router = useRouter();
  const { setModalNew, setModalNewSuccess, setErrorModal } = useModalStore();
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleClose = () => {
    setTimeout(() => {
      setModalNew(false);
    }, 100); // Duración de la animación en milisegundos
  };

  const createProfesor = async (data: {
    email: string;
    fullname: string;
    username: string;
    password: string;
  }) => {
    try {
      const accessToken = useLoginStore.getState().token;

      // Prefetch de la ruta antes de redirigir
      router.prefetch("/profesores");

      // Llamada a la API
      await axios.post(
        "https://project-backend-v2.vercel.app/api_v2/users/admin/register",
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
      // Configura el estado de éxito y realiza las acciones correspondientes
      setModalNewSuccess(true);
      router.push("/profesores"); // Redirige a la página de profesores
      handleClose(); // Cierra el modal
      // console.log(error.response.data.message)
    } catch (error: any) {
      // Verifica si el error tiene la estructura esperada
      if (
        error.response.data.message.includes(
          "User already exists"
        )
      ) {
        setErrorModal(true); // Muestra el error de email
      } else {
        console.error("Error al crear el profesor:", error);
      }
      setIsButtonDisabled(false); // Habilita el botón nuevamente
    }
  };

  return { createProfesor };
};

export const useDeleteProfesor = () => {
  const router = useRouter();

  const { setModalDeleteSuccess } = useModalStore();

  const accessToken = useLoginStore.getState().token;

  const deleteProfesor = async (userId: string) => {
    try {
      const response = await axios.delete(
        `https://attendance-control.vercel.app/api/users/delete/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      // Mensaje de confirmación
      router.push("/profesores");
      setModalDeleteSuccess(true);
      console.log(`Profesor con ID ${userId} eliminado exitosamente.`);
      return response.data; // Si necesitas devolver la respuesta
    } catch (error) {
      // Manejo de errores
      console.error(
        `Error al intentar eliminar el profesor con ID ${userId}: `,
        error.response?.data?.message || error.message
      );
    }
  };

  return deleteProfesor;
};
