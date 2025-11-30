import { useParams } from "react-router-dom";
import marcas from "../data/marcas.json";
import "../styles/estilos.css";

export default function BrandPage() {
  const { id } = useParams();
  const marca = marcas.find((m) => m.id === id);

  if (!marca) {
    return <h2>Marca no encontrada</h2>;
  }

  return (
    <div className="brand-container">
      <h1 className="brand__title">{marca.nombre}</h1>
      <p className="brand__description">{marca.descripcion}</p>
      <h2 className="brand__subtitle">Modelos destacados</h2>
      <div className="catalogo__grid">
        {marca.modelos.map((modelo) => (
          <div key={modelo.id} className="catalogo-card">
            <img src={modelo.imagen} alt={modelo.nombre} className="catalogo-card__image" />
            <div className="catalogo-card__info">
              <h3 className="catalogo-card__title">{modelo.nombre}</h3>
              <p className="catalogo-card__description">{modelo.descripcion}</p>
              <p className="catalogo-card__price">{modelo.precio}</p>
              <a className="btn--secondary" href={`/marca/${marca.id}/modelo/${modelo.id}`}>
                Más información
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
