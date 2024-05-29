import axios from "axios";

interface FormData {
  level: string;
  number: number;
  letter: string;
  lista: File;
}

export default async function envioPlanilla(formData: FormData) {
  console.log(formData);

  const datos = new FormData();
  datos.append("fullname", "Nombre");
  datos.append("contact_phone", "Telefono");
  datos.append("file", formData.lista);
  try {
    const estudiantes = await axios.post(
      "https://attendance-control.vercel.app/api/students/excel-import",
      datos,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNzE3MDE5OTk4LCJleHAiOjE3MTcwNTU5OTh9.A-sEEg6Jlr1SIKEXwXmR7ambet623YT4xe_CKntcAe4",
        },
      }
    );
    console.log(estudiantes.data);
  } catch (error) {
    console.log(error);
  }
}
