import Button from "@components/button";
import type { Inputs } from "../NuevoFormEstudiante";

interface ModalConfirmNewProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  formData: Inputs;
}

export const ConfirmationModal = ({
  isOpen,
  onClose,
  onConfirm,
  formData,
}: ModalConfirmNewProps) => {
  if (!isOpen) return null;
  const fields = [
    { curso: "Curso" },
    { nombre: "Nombre" },
    { apellido: "Apellido" },
    { identificacion: "DNI" },
    { fechaNacimiento: "Fecha de Nacimiento" },
    { email: "Email" },
  ];
  const keyToDisplayName = fields.reduce((acc, field) => {
    const [key, value] = Object.entries(field)[0];
    acc[key] = value;
    return acc;
  }, {});

  return (
    <div className="absolute bottom-0 -translate-x-1/3 right-0 bg-white w-[60%] h-fit pb-20 border border-purple-500 rounded-t-2xl z-50">
      <div className="rounded-t-2xl bg-[#1f8b58] px-6 py-[16px] border border-[#362b3e]">
        <h2 className="text-center text-white text-base font-bold leading-5">
          Confirma los datos del nuevo estudiante
        </h2>
      </div>
      {/* Display form data summary */}
      <div className="flex flex-col px-6 mt-6">
        {Object.entries(formData).map(([key, value]) => (
          <div className="text-center mb-4" key={key}>
            <p className="text-base font-bold">
              {keyToDisplayName[key] || key}
              {":"}
            </p>
            <p className="">{value}</p>
          </div>
        ))}
        <div className="flex flex-col gap-3 mt-6">
          <Button text="Cancelar" isCompleted onClick={onClose} />
          <Button text="Confirmar" isCompleted onClick={onConfirm} />
        </div>
      </div>
    </div>
  );
};
