import Footer from "../../components/Footer";
import Breadcrumb from "../../components/Breadcrumb";
import NavBar from "../../components/navbar";

import NuevoFormEstudiante from "./NuevoFormEstudiante";

const NuevoEstudiante = () => {
  return (
    <div>
      <NavBar />
      <div className="px-[24px] md:px-[32px] xl:px-[120px] flex flex-col">
        <Breadcrumb
          links={[
            { hiper: "/home", text: "Inicio" },
            { hiper: "/estudiantes", text: "Estudiantes" },
            { hiper: "/nuevo-estudiante", text: "Agregar Estudiante" },
          ]}
        />
        <div className="flex flex-col items-center w-full">
          <div className="w-full xl:w-[312px]">
            <NuevoFormEstudiante />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default NuevoEstudiante;
