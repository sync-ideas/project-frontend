import { useLoginStore } from "@store/index";
import axios from "axios";
import { Course, Inputs } from "src/app/estudiantes/nuevo-estudiante/components/NuevoFormEstudiante";

export const handleSubmitEditedStudent = async (formData:Inputs, id:number) =>{
  const accessToken = useLoginStore.getState().token;
  const dataFormated = {
    name: formData.nombre,
    surname: formData.apellido,
    contact_email: formData.email,
    birthdate: formData.fechaNacimiento,
    personal_id: formData.identificacion,
    course_id: formData.curso
  }
  const response = await axios.put(`https://project-backend-v2.vercel.app/api_v2/students/update/${id}`,dataFormated,{
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })
  console.log(response.data);
  return response
}