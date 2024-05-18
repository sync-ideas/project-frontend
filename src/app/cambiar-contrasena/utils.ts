import axios from "axios";

export const SetNewPassword = async (token: string, password: string) => {
  try {
    const response = await axios.post(
      "https://attendance-control-sync-ideas.vercel.app/api/users/resetpassword",
      { token: token, password: password }
    );
    return response.data;
  } catch (error: any) {
    if (error.response?.status === 400) {
      return { error: error.response.data.message }; // Devuelve un objeto con el mensaje de error
    } else {
      return { error: "Error desconocido" };
    }
  }
};
