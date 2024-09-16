"use client";
import axios from "axios";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"; // Importa AppRouterInstance
import { Inputs } from "./LoginForm"; // Importa el tipo Inputs desde el archivo correspondiente
import { useLoginStore } from "@store/index";

// Definición de la interfaz que describe las props para onSubmit
interface OnSubmitProps {
  data: Inputs; // Datos del formulario
  setErrorMessage: (value: string) => void; // Función para establecer el mensaje de error
  setRemainingAttempts: (value: string) => void; // Función para establecer los intentos restantes
  setEmailError: (value: boolean) => void; // Función para establecer el error del email
  setPasswordError: (value: boolean) => void; // Función para establecer el error de la contraseña
  setShowErrorMessage: (value: boolean) => void; // Función para mostrar u ocultar el mensaje de error
  isChecked: boolean; // Estado del checkbox de "Recordarme"
  loggedIn: () => void; // Función para manejar el inicio de sesión exitoso
  router: AppRouterInstance; // Instancia del router de la aplicación
}

// Función asíncrona que maneja la lógica de envío del formulario
export const onSubmit = async ({
  data,
  setErrorMessage,
  setRemainingAttempts,
  setEmailError,
  setPasswordError,
  setShowErrorMessage,
  isChecked,
  loggedIn,
  router,
}: OnSubmitProps) => {
  // Funciones para actualizar el store
  const setToken = useLoginStore.getState().setToken;
  const setUserData = useLoginStore.getState().setUserData;

  // Reinicia los estados de error y muestra el mensaje de error al realizar un nuevo envío
  setErrorMessage("");
  setRemainingAttempts("");
  setShowErrorMessage(true);
  try {
    // Realiza una petición POST para iniciar sesión
    const response = await axios.post(
      "https://attendance-control.vercel.app/api/users/login",
      {
        email: data.email,
        password: data.password,
      }
    );
    const { token, user } = response.data;
    // Almacena el token y los datos del usuario en el store
    setToken(token);
    setUserData(user);
    // Ejecuta la función para manejar el inicio de sesión exitoso
    loggedIn();
    // Redirige al usuario a la página de inicio
    router.push("/home");
    // Guarda los datos del usuario si la casilla "Recordarme" está marcada
    if (isChecked) {
      localStorage.setItem("savedUserData", JSON.stringify(data));
    }
  } catch (error: any) {
    // Maneja los errores de la petición
    setErrorMessage(error.response.data.message);
    setRemainingAttempts(error.response.data.remainingAttempts);

    // Establece los errores de email y contraseña según el tipo de error
    if (error.response.data.message.includes("User not found")) {
      setEmailError(true);
    } else if (error.response.data.message.includes("Incorrect password")) {
      setPasswordError(true);
    } else if (
      error.response.data.message.includes(
        "Too many attempts. Please try again later."
      )
    ) {
      setPasswordError(true);
    }
  }
};
