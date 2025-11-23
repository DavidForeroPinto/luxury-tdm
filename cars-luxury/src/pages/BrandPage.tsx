import { useParams } from "react-router-dom";
import marcas from "../data/marcas.json";
import "../styles/estilos.css";

export default function BrandPage() {
  const { id } = useParams();

  // Buscar la marca por id
  const marca = marcas.find((m) => m.id === id);

  if (!marca) {
    return <h2>Marca no encontrada</h2>;
  }

  return (
    <div className="brand-container">

      {/* Encabezado */}
      <h1 className="brand-title">{marca.nombre}</h1>
      <p className="brand-description">{marca.descripcion}</p>

      {/* Modelos */}
      <h2 className="brand-subtitle">Modelos destacados</h2>

      <div className="catalogo-grid">
        {marca.modelos.map((modelo) => (
          <div key={modelo.id} className="catalogo-card">
            <img src={modelo.imagen} alt={modelo.nombre} />

            <div className="catalogo-info">
              <h3>{modelo.nombre}</h3>
              <p>{modelo.descripcion}</p>
              <p className="price-tag">{modelo.precio}</p>

              <a className="btn-2" href={`/marca/${marca.id}/modelo/${modelo.id}`}> Más información
              </a>
              
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
