import marcas from "../data/marcas.json";
import "../styles/estilos.css";

export default function HomePage() {
  return (
    <div>

      {/* ⭐ ENCABEZADO PRINCIPAL */}
      <section className="header-content container">
        <div className="hero-container">
          <img
            className="hero-img"
            src="/img/imagen-portada.jpg"
            alt="Cars"
          />

          <div className="hero-text">
            <h1>
              Descubre el <span>Mundo</span>
              <br />
              de los Hipercoches
            </h1>

            <p>
              ¡Bienvenido a la página donde los sueños sobre ruedas se hacen
              realidad! Explora y disfruta de los automóviles más increíbles del
              mundo.
            </p>
          </div>
        </div>
      </section>

      {/* ⭐ CARRUSEL DE MARCAS */}
      <section className="catalogo">
        <h2 className="catalogo-titulo">Hipercoches Populares</h2>

        <div className="carousel-container">

          <button
            className="carousel-btn left"
            onClick={() =>
              document.querySelector(".carousel-track")!.scrollBy({
                left: -350,
                behavior: "smooth",
              })
            }
          >
            ❮
          </button>

          <div className="carousel-track">
            {marcas.map((marca) => (
              <div key={marca.id} className="catalogo-card horizontal-card">
                <img src={marca.imagen} alt={marca.nombre} />

                <div className="catalogo-info">
                  <h3>{marca.nombre}</h3>
                  <p>{marca.descripcion}</p>
                  <a href={`/marca/${marca.id}`} className="btn-2">
                    Ver modelos
                  </a>
                </div>
              </div>
            ))}
          </div>

          <button
            className="carousel-btn right"
            onClick={() =>
              document.querySelector(".carousel-track")!.scrollBy({
                left: 350,
                behavior: "smooth",
              })
            }
          >
            ❯
          </button>
        </div>
      </section>

    </div>
  );
}
