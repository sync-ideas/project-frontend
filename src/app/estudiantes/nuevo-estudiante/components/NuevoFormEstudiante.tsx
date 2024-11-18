"use client";
import React, { useCallback, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
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
import { handleSubmitEditedStudent } from "@functions/estudiantes/handleSubmitEditEstudiante";

export type Inputs = {
  nombre: string;
  apellido: string;
  identificacion: string;
  fechaNacimiento: string;
  email: string;
  curso: number;
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

const NuevoFormEstudiante = ({ estudiante }: { estudiante?: Student }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    control,
    trigger,
  } = useForm<Inputs>({
    resolver: zodResolver(studentSchemaNew),
    defaultValues: {
      nombre: "",
      apellido: "",
      identificacion: "",
      fechaNacimiento: "",
      email: "",
      curso: estudiante?.course_id || 0,
    },
    mode: "all",
    reValidateMode: "onChange",
  });

  const navigate = useRouter();
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [cursos, setCursos] = useState<Course[]>([]);

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
    console.log("Form Errors:", errors);
    setIsButtonDisabled(inputsNotEmpty);
  }, [watch, setIsButtonDisabled, errors]);
  // Add this effect at the top level of your component

  const handleSubmitForm = () => {
    setIsConfirmModalOpen(true);
  };

  const handleConfirm = async () => {
    setIsConfirmModalOpen(false);
    try {
      const result = estudiante
        ? await handleSubmitEditedStudent(watch(), estudiante.id)
        : await handleSubmitNewStudent(watch());
      if (result.status < 400) {
        setTimeout(() => setIsSuccessModalOpen(true), 2000);
        navigate.push("/estudiantes");
      }
    } catch (error) {
      // Handle error (e.g., show error message)
    }
  };

  useEffect(() => {
    getCourses().then((response) => setCursos(response));
    if (estudiante) {
      setValue("nombre", estudiante.name);
      setValue("apellido", estudiante.surname);
      setValue("identificacion", estudiante.personal_id);
      setValue(
        "fechaNacimiento",
        estudiante.birthdate
          ? estudiante.birthdate.split("T")[0]
          : new Date().toISOString().split("T")[0]
      );
      setValue("email", estudiante.contact_email);
      setValue("curso", estudiante.course_id);
    }
  }, [estudiante, setValue, trigger]);

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
          <Controller
            name="curso"
            control={control}
            render={({ field }) => (
              <select
                {...field}
                className="border h-[50px] px-6 rounded-lg border-purple-800 focus:outline-purple"
                onChange={(e) => {
                  field.onChange(Number(e.target.value));
                  handleInputChange();
                  trigger("curso");
                }}
              >
                <option value={0}>Selecciona un Curso</option>
                {cursos.map((curso) => (
                  <option
                    key={curso.id}
                    value={curso.id}
                    className="font-normal"
                  >
                    {curso.number}º {curso.letter}
                  </option>
                ))}
              </select>
            )}
          />
          {errors.curso?.message && (
            <p className="w-[320px] mt-[5px] text-[#DE1111]">
              {errors.curso.message}
            </p>
          )}
        </div>
        <div className="flex flex-col py-6">
          <Button
            text={estudiante ? "Editar datos estudiante" : "Crear Estudiante"}
            isCompleted={isButtonDisabled}
          />
        </div>
      </form>
      <ConfirmationModal
        isOpen={isConfirmModalOpen}
        onClose={() => setIsConfirmModalOpen(false)}
        onConfirm={handleConfirm}
        formData={watch()}
        isEditing={!!estudiante}
      />
      {isSuccessModalOpen && (
        <ModalConfirmNewSuccess
          onClose={() => setIsSuccessModalOpen(false)}
          text={
            estudiante
              ? "Estudiante editado con éxito"
              : "Estudiante creado con éxito"
          }
        />
      )}
    </>
  );
};

export default NuevoFormEstudiante;
