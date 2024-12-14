import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
interface DosCicloProps {
    allowedEspecialidades: string[];
}

export default function DosCiclo({ allowedEspecialidades }: DosCicloProps) {
    const { especialidad } = useParams<{ especialidad: string }>();
    const [especialidadData, setEspecialidadData] = useState("");
    useEffect(() => {
        if (especialidad) {
            setEspecialidadData(especialidad);
        }
    }, [especialidad]);
    if (especialidad && !allowedEspecialidades.includes(especialidad)) {
        return <h1>404</h1>;
    }

    
  return (
    <div>DosCicloLayout: {especialidadData}</div>
  )
}
