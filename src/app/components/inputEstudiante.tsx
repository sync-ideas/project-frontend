"use client";

interface CustomInputProps {
  defaultValue?: string;
  id: string;
  placeholder?: string;
  type: string;
  label?: string;
  textStyle?: string;
  textStylePlaceholder?: string;
  method?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  register: any;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
  onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
}

const CustomInputEstudiante: React.FC<CustomInputProps> = ({
  id,
  placeholder,
  defaultValue,
  type,
  label,
  textStyle,
  textStylePlaceholder,
  method,
  register,
  onChange,
  error,
  onClick,
}) => {
  const isError = error;
  return (
    <div className="flex flex-col relative">
      <label
        htmlFor="input"
        className="absolute translate-x-6 px-1 -translate-y-3 bg-white"
      >
        {label}
      </label>
      <input
        id={id}
        className={`px-6 py-2 h-[50px] w-full placeholder:text-[#362b3e80] placeholder:font-normal placeholder:text-base border rounded-[5px] font-normal font-openSans ${textStyle}  ${
          isError
            ? "border-[#DE1111] focus:outline-[#DE1111]"
            : "border-purple focus:outline-purple"
        }`}
        defaultValue={defaultValue}
        type={type}
        placeholder={placeholder}
        {...register(id, {
          onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
            if (method) {
              method(e);
            }
            if (onChange) {
              onChange(e);
            }
          },
        })}
        onClick={onClick}
      />
    </div>
  );
};

export default CustomInputEstudiante;
