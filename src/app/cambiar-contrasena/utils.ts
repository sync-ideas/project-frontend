import axios from "axios";

export const SetNewPassword = async (token: string, password: string) => {
  const response = await axios.post(
    "https://attendance-dev.3.us-1.fl0.io/api/users/resetpassword",
    { token: token, password: password }
  );
  return response.data;
};
