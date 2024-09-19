"use client";
import axios from 'axios';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { Inputs } from './EditarForm';
import { useLoginStore, useUserStore, useModalStore } from '@store/index';

// Definición de la interfaz que describe las props para onSubmit
interface OnSubmitProps {
  data: Inputs;
  setErrorMessage: (value: string) => void;
  setNameError: (value: boolean) => void;
  setEmailError: (value: boolean) => void;
  setUserNameError: (value: boolean) => void;
  setShowErrorMessage: (value: boolean) => void;
  router: AppRouterInstance;
}

// Función asíncrona que maneja la lógica de envío del formulario
export const editSubmit = async ({
  data,
  setErrorMessage,
  setNameError,
  setEmailError,
  setUserNameError,
  setShowErrorMessage,
  router,
}: OnSubmitProps) => {
  // Funciones para actualizar el store
  const accessToken = useLoginStore.getState().token;
  const userId = useUserStore.getState().userId;
  // console.log( userId, accessToken)

  // Obtener funciones del nuevo store
  const { setModalEdit } = useModalStore.getState();

  // Reinicia los estados de error y muestra el mensaje de error al realizar un nuevo envío
  setErrorMessage('');
  setShowErrorMessage(true);

  try {
    // Realiza una petición PUT para actualizar el perfil del usuario
    router.prefetch('/profesores');
    const response = await axios.put(
      'https://attendance-control.vercel.app/api/users/update',
      {
        user_id: userId,
        fullname: data.fullname,
        email: data.email,
        username: data.username,
        password: data.password,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    setModalEdit(true);
    // console.log("Response:", response.data);
    // Redirige al usuario a la página de perfil después de la actualización
    router.push('/profesores');
  } catch (error: any) {
    // Maneja los errores de la petición
    setErrorMessage(error.response.data.message);

    // Establece los errores de los campos según el tipo de error
    if (error.response.data.message.includes('Email already exists')) {
      setEmailError(true);
    } else if (error.response.data.message.includes('Username already exists')) {
      setUserNameError(true);
    } else if (error.response.data.message.includes('Invalid name')) {
      setNameError(true);
    }
  }
};