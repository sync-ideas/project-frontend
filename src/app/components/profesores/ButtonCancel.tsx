import React from "react";
import { useRouter } from "next/navigation";
interface ButtonProps {
  text: string;
  route?: string;
  onClick?:
    | (() => void)
    | ((e: React.MouseEvent<HTMLButtonElement>) => Promise<void>);
}
const ButtonCancel: React.FC<ButtonProps> = ({ text, onClick, route }) => {
  const router = useRouter();
  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      await onClick(e);
    }
    if (route) {
      router.push(route);
    }
  };
  return (
    <button
      className="w-full h-[50px] opacity-70 hover:opacity-100 px-6 py-3 bg-transparent border-purple-text border-[2px] rounded-[5px] justify-center items-center gap-2.5 flex"
      onClick={handleClick}
      type="button"
    >
      <div className="text-purple-text text-base font-bold leading-snug">{text}</div>
    </button>
  );
};

export default ButtonCancel;
