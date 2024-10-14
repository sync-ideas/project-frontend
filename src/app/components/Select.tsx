import React, { ChangeEvent, useState } from "react";
import Select from "react-select";

const indicatorSeparatorStyle = {
  alignSelf: "stretch",
  backgroundColor: "white",
  marginBottom: 8,
  marginTop: 8,
  width: 1,
};
interface Option {
  id: string;
  value: string | number;
  label: string;
}
const IndicatorSeparator = () => {
  return <span style={indicatorSeparatorStyle} />;
};
interface CustomSelectProps {
  id: string;
  options: Option[];
  field: {
    onChange: (value: string | number) => void;
    value: string | number;
    name: string;
  };
  onChange: (option: Option) => void;
  disabled?: boolean;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  id,
  options,
  field,
  onChange,
  disabled = false,
}) => {
  const [selectedOption, setSelectedOption] = useState<Option>();

  const handleChange = (option: Option | null) => {
    if (option) {
      setSelectedOption(option);
      field.onChange(option.value); // Actualiza el valor del campo de formulario con el valor seleccionado.
      onChange(option);
    }
  };
  return (
    <Select
      id={id}
      instanceId={id}
      aria-activedescendant=""
      isDisabled={disabled}
      options={options}
      value={selectedOption}
      onChange={handleChange}
      isSearchable={false}
      defaultValue={options[0]}
      // Puedes agregar otras props para personalizar el comportamiento y el estilo
      components={{ IndicatorSeparator }}
      styles={{
        control: (provided, state) => ({
          ...provided,
          border: state.menuIsOpen ? "2px solid purple" : "1px solid purple",
          borderBottom: state.menuIsOpen ? "none" : "1px solid purple",
          boxShadow: "none",
          borderRadius: state.menuIsOpen ? "5px 5px 0 0" : "5px",
          opacity: 0.7,
          ":hover": {
            opacity: 1,
            border: "1px solid purple",
          },
          height: "50px",
          "@media (max-width: 1024px)": {
            width: "100%",
          },
        }),
        option: (provided, state) => ({
          ...provided,
          backgroundColor: state.isSelected ? "#333" : "transparent",
          color: state.isSelected ? "#fff" : "#333",
          opacity: 1,
          "@media (max-width: 1024px)": {
            width: "100%",
          },

          ":hover": {
            backgroundColor: "rgba(99, 49, 138, 0.6)",
          },
        }),
        menu: (provided, state) => ({
          ...provided,
          borderRadius: "0 0 5px 5px", // Cambia el borde del menú
          borderBottom: "2px solid purple", // Agrega sombra al menú
          borderLeft: "2px solid purple", // Agrega sombra al menú
          borderRight: "2px solid purple", // Agrega sombra al menú
          backgroundColor: "#fff", // Cambia el color de fondo del menú
          zIndex: 9999, // Ajusta el z-index para solapar otros elementos si es necesario
          marginTop: "-2px",

          opacity: 1,
          "@media (max-width: 1024px)": {
            width: "100%",
          },
          // marginLeft: "-1px",
        }),
        container: (provided, state) => ({
          ...provided,

          width: "100%",
        }),
      }}
    />
  );
};

export default CustomSelect;
