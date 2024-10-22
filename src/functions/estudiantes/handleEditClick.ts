"use client"
import axios from "axios";
import { useCourseStore } from "@store/estudiantes/course-store";
import { useLoginStore } from "@store/index";


export const handleEditClick = async (userId: number, router: any) => {
  
  const { setUserId, setLevel, setNumber, setLetter } = useCourseStore.getState();

  try {
    const accessToken = useLoginStore.getState().token;

    const response = await axios.get(
      `https://project-backend-v2.vercel.app/api_v2/courses/${userId}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );


    console.log(response.data.data);
    const { level, number, letter } = response.data.data;
    setUserId(userId);
    setLevel(level);
    setNumber(number);
    setLetter(letter);

    router.push('/estudiantes/cursos/editar-curso');
  } catch (error) {
    // console.error("Error fetching user data:", error);
  }
};

export default handleEditClick;