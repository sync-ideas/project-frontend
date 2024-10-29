"use client";
import React, { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { studentSchemaNew } from "src/app/validations/profesores/nuevo/studentSchemaNew";
import { areInputsNotEmpty } from "@functions/index";
import CustomInputEstudiante from "@components/inputEstudiante";
import Button from "@components/button";
import { ConfirmationModal } from "./Modals/ModalConfirmNew";
import { getCourses } from "../../cursos/coursesSubmit";
import { handleSubmitNewStudent } from "@functions/estudiantes/handleSubmitNewEstudiante";
import ModalConfirmNewSuccess from "@components/profesores/Modals/ModalConfirmNewSuccess";
import { useRouter } from "next/navigation";
import { Student } from "@components/estudiantes/CardsStudents";

export type Inputs = {
  nombre: string;
  apellido: string;
  identificacion: string;
  fechaNacimiento: string;
  email: string;
  curso: string;
};
export interface Course {
  id: number;
  level: string;
  number: number;
  letter: string;
  active?: boolean;
  createdAt: string;
  updatedAt?: string;
}




const NuevoFormEstudiante = ({estudiante}:{estudiante:Student}) => {
  console.log(estudiante);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<Inputs>({
    resolver: zodResolver(studentSchemaNew),
    defaultValues: {
      nombre: estudiante?.name,
      apellido: estudiante?.surname,
      identificacion: estudiante?.personal_id,
      fechaNacimiento: estudiante?.birthdate,
      email: estudiante?.contact_email,
      
    },
  });
  const navigate = useRouter();
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [cursos, setCursos] = useState([]);

  const handleInputChange = useCallback(() => {
    const inputsNotEmpty = areInputsNotEmpty(
      watch,
      "nombre",
      "apellido",
      "identificacion",
      "fechaNacimiento",
      "email",
      "curso"
    );
    setIsButtonDisabled(inputsNotEmpty);
  }, [watch, setIsButtonDisabled]);

  const handleSubmitForm = () => {
    // Guardar los datos en el store
    setIsConfirmModalOpen(true);
  };
  const handleConfirm = async () => {
    setIsConfirmModalOpen(false);
    try {
      //envio de la data a la api
      handleSubmitNewStudent(watch())
        .then((result) => {
          if (result.status < 400)
            setTimeout(() => setIsSuccessModalOpen(true), 2000);
        })
        .then((result) => navigate.push("/estudiantes"));
    } catch (error) {
      // Handle error (e.g., show error message)
    }
  };

  useEffect(() => {
    getCourses().then((response) => setCursos(response));
    
  }, []);
  const handleSuccessClose = () => {
    setIsSuccessModalOpen(false);
    //router.push("/estudiantes"); // Redirect to another page
  };

  return (
    <>
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <div className="flex flex-col gap-6 py-[20px] min-h-[381px] h-auto">
          <a>Ingresa datos del estudiante</a>
          <CustomInputEstudiante
          defaultValue={estudiante?.name}
            id="nombre"
            label="Nombre"
            placeholder="Ingresa un nombre"
            type="text"
            textStyle="text-left"
            register={register}
            onChange={handleInputChange}
          />
          {errors.nombre?.message && (
            <p className="w-[320px] mt-[5px] text-[#DE1111]">
              {errors.nombre.message}
            </p>
          )}
          <CustomInputEstudiante
          defaultValue={estudiante?.surname}
            id="apellido"
            placeholder="Ingresa un apellido"
            label="Apellido"
            type="text"
            textStyle="text-left"
            register={register}
            onChange={handleInputChange}
          />
          {errors.apellido?.message && (
            <p className="w-[320px] mt-[5px] text-[#DE1111]">
              {errors.apellido.message}
            </p>
          )}
          <CustomInputEstudiante
          defaultValue={estudiante?.personal_id}
            id="identificacion"
            placeholder="Ingresa número de identificación"
            label="DNI / RUT"
            type="text"
            textStyle="text-left"
            register={register}
            onChange={handleInputChange}
          />
          {errors.identificacion?.message && (
            <p className="w-[320px] mt-[5px] text-[#DE1111] text-sm">
              {errors.identificacion.message}
            </p>
          )}
          <CustomInputEstudiante
          defaultValue={estudiante?.birthdate}
            id="fechaNacimiento"
            placeholder="22 | Abril | 2014"
            label="Fecha de nacimiento"
            type="date"
            register={register}
            onChange={handleInputChange}
          />
          {errors.fechaNacimiento?.message && (
            <p className="w-[320px] mt-[5px] text-[#DE1111]">
              {errors.fechaNacimiento.message}
            </p>
          )}
          <CustomInputEstudiante
          defaultValue={estudiante?.contact_email}
            id="email"
            placeholder="Ingresa dirección de e-mail"
            label="Correo electrónico"
            type="text"
            textStyle="text-left"
            register={register}
            onChange={handleInputChange}
          />
          {errors.email?.message && (
            <p className="w-[320px] mt-[5px] text-[#DE1111]">
              {errors.email.message}
            </p>
          )}
          <select
            {...register("curso")}
            className="border h-[50px] px-6 rounded-lg border-purple-800 focus:outline-purple"
            onChange={handleInputChange}
            defaultValue={"No Seleccionado"}
          >
            <option key={0} value={"No Seleccionado"}>
              Selecciona un Curso
            </option>
            {cursos.map((curso) => (
              <option
                key={curso.id}
                className="font-normal"
                value={curso.id.toString()}
              >
                {curso.number}º {curso.letter}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col py-6">
          <Button
            text="Editar datos estudiante"
            isCompleted={isButtonDisabled}
          />
        </div>
      </form>
      <ConfirmationModal
        isOpen={isConfirmModalOpen}
        onClose={() => setIsConfirmModalOpen(false)}
        onConfirm={handleConfirm}
        formData={watch()}
      />
      {isSuccessModalOpen && (
        <ModalConfirmNewSuccess
          onClose={() => setIsSuccessModalOpen(false)}
          text="Estudiante creado con Éxito"
        />
      )}
    </>
  );
};
export default NuevoFormEstudiante;
