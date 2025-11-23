import { useParams } from "react-router-dom";
import marcas from "../data/marcas.json";

export default function MarcaPage() {
  const { id } = useParams();
  const marca = marcas.find((m) => m.id === id);

  if (!marca) {
    return <h2>Marca no encontrada</h2>;
  }

  return (
    <div className="marca-page container">
      <h1>{marca.nombre}</h1>

      <img src={marca.imagen} alt={marca.nombre} className="marca-img" />

      <p className="marca-desc">{marca.descripcion}</p>

      <h2>Modelos destacados</h2>

      {/* Aquí más adelante agregaremos modelos y Three.js */}
      <p>Próximamente modelos y animaciones 3D.</p>
    </div>
  );
}
