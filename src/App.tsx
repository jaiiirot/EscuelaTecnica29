import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Institucion from "./pages/Institucion";
import UnoCiclo from "./pages/UnoCiclo";
import Novedades from "./pages/Novedades";
import EcoEt29 from "./pages/EcoEt29";
import Cooperadora from "./pages/Cooperadora";
import DosCiclo from "./pages/DosCiclo";
import IndexLayout from "./components/layouts/IndexLayout";

export default function App() {
  const allowedEspecialidades = [
    "computacion",
    "electricidad",
    "mecanica",
  ];
  return (
    <Routes>
      <Route path="/" element={<IndexLayout />}>
        <Route index element={<Home />} />
        <Route path="/institucion" element={<Institucion />} />
        <Route path="/unoCiclo" element={<UnoCiclo />} />
        <Route
          path="/:especialidad"
          element={<DosCiclo allowedEspecialidades={allowedEspecialidades} />}
        />
        <Route path="/novedades" element={<Novedades />} />
        <Route path="/ecoet29" element={<EcoEt29 />} />
        <Route path="/cooperadora" element={<Cooperadora />} />
        <Route path="*" element={<h1>404</h1>} />
      </Route>
    </Routes>
  );
}
