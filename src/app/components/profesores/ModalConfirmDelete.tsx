import Button from "../button";
import { handleDeleteClick } from "../../../functions";
import ButtonCancel from "./ButtonCancel";

import { useRouter } from "next/navigation";

interface ModalProps {
  onClose: () => void;
  UserState: {
    fullname: string;
    userId: number;
    name: string;
    email: string;
    username: string;
  };
  setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalConfirmEdit: React.FC<ModalProps> = ({
  UserState,
  onClose,
  setSuccess,
}) => {
  const handleDelete = async () => {
    try {
      await handleDeleteClick(UserState.userId).then((data) => {
        if (data.status == 200) {
          onClose();
          setSuccess(true);
        }
      });
    } catch (error) {}
  };
  return (
    <div className="md:w-[30vw] w-[330px] h-[428px] bg-white border border-[#362B3E] top-1/4 left-0 md:left-14 md:-translate-x-1/4 z-50 absolute rounded-xl">
      <div className="bg-[#D22626] h-[76px] rounded-t-xl text-center leading-6 font-semibold align-middle flex items-center justify-center ">
        <h1 className="text-white uppercase">
          Confirma que deseas eliminar el perfil
        </h1>
      </div>
      <div className="text-center h-[164px] my-[24px] ">
        <p className="font-bold">Nombre:</p>
        <p className="pb-5">{UserState?.fullname}</p>
        <p className="font-bold">Email:</p>
        <p className="pb-5">{UserState?.email}</p>
        <p className="font-bold">Usuario:</p>
        <p className="pb-5">{UserState?.username}</p>
      </div>
      <div className="w-[312px] gap-3 flex justify-center mx-auto flex-col h-[140px]">
        <ButtonCancel onClick={onClose} text="Cancelar" />
        <Button onClick={handleDelete} text="Eliminar" isCompleted />
      </div>
    </div>
  );
};

export default ModalConfirmEdit;
