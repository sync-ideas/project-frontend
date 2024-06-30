"use client"
import axios from "axios";
import { useLoginStore } from "../../store";
import { useUserStore } from "../../store";

export const handleEditClick = async (userId: number, router: any) => {
  const { setUserId, setFullname, setEmail, setUsername, setRole } = useUserStore.getState();

  try {
    const accessToken = useLoginStore.getState().token;

    const response = await axios.get(
      `https://attendance-control.vercel.app/api/users/${userId}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    const { fullname, email, role, username } = response.data.user;
    setUserId(userId);
    setFullname(fullname);
    setEmail(email);
    setUsername(username);
    setRole(role);

    router.push('/profesores/editar-perfil');
  } catch (error) {
    // console.error("Error fetching user data:", error);
  }
};

export default handleEditClick;