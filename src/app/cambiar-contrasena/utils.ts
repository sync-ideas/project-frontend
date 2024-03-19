import axios from "axios";

export const SetNewPassword = async (token: string, password: string) => {
  const response = await axios.post(
    "https://attendance-control-sync-ideas.vercel.app/api/users/resetpassword",
    { token: token, password: password }
  );
  return response.data;
};
