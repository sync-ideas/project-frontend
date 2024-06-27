import axios from "axios";

interface FormData {
  level: string;
  number: number;
  letter: string;
  lista: File | null;
}

export default async function envioPlanilla(formData: FormData) {
  const datos = new FormData();
  const token = localStorage.getItem("token");
  const bearer = `Bearer ${token}`;
  datos.append("fullname", "Nombre");
  datos.append("contact_phone", "Telefono");
  if (formData.lista) {
    datos.append("file", formData.lista);
  }
  try {
    const result = await axios.post(
      "https://attendance-control.vercel.app/api/students/excel-import",
      datos,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: bearer,
        },
      }
    );
    return result;
  } catch (error) {
    return error;
  }
}
