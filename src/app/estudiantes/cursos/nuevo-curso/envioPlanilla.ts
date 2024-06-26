import axios from "axios";

interface FormData {
  level: string;
  number: number;
  letter: string;
  lista: File | null;
}

export default async function envioPlanilla(formData: FormData) {
  const datos = new FormData();
  datos.append("fullname", "Nombre");
  datos.append("contact_phone", "Telefono");
  if (formData.lista) {
    datos.append("file", formData.lista);
  }
  try {
    await axios.post(
      "https://attendance-control.vercel.app/api/students/excel-import",
      datos,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzE4NzYwNDExLCJleHAiOjE3MTg3OTY0MTF9.bs1r3U_2wpE1IxEj0_35s3zs1hrESxx1YcjjF6zGP2Y",
        },
      }
    );
    return undefined;
  } catch (error) {
    return error;
  }
}
