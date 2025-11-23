import marcas from "../data/marcas.json";
import { Link } from "react-router-dom";

export default function CatalogoPage() {
  return (
    <section className="catalogo container">
      <h2 className="catalogo-titulo">Catálogo de Marcas</h2>

      <div className="catalogo-grid">
        {marcas.map((marca) => (
          <div className="catalogo-card" key={marca.id}>
            <img src={marca.imagen} alt={marca.nombre} />

            <div className="catalogo-info">
              <h3>{marca.nombre}</h3>
              <p>{marca.descripcion}</p>

              <Link to={`/marca/${marca.id}`} className="btn-2">
                Ver más
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
