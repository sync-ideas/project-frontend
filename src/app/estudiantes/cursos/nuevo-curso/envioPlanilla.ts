import axios from "axios";

interface FormData {
  level: string;
  number: number;
  letter: string;
  lista: File | null;
}

export default async function envioPlanilla(formData: FormData) {
  const datos = new FormData();
  const user = localStorage.getItem("login-storage");
  const token = JSON.parse(user!).state.token;
  const bearer = `Bearer ${token}`;
  datos.append("name", "Nombre");
  datos.append("surname", "Apellido");
  datos.append("contact_phone", "Telefono");
  if (formData.lista) {
    datos.append("file", formData.lista);
  }

  const result = await axios
    .post(
      "https://attendance-control.vercel.app/api/students/excel-import",
      datos,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: bearer,
        },
      }
    )
    .catch(function (error) {
      if (error.response) {
        return error.response.data.result;
      }
    });
  return result;
}
