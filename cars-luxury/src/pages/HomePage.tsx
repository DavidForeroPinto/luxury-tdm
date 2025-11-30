import marcas from "../data/marcas.json";

export default function HomePage() {
  const scrollLeft = () => {
    const track = document.querySelector(".catalogo__track");
    track?.scrollBy({ left: -350, behavior: "smooth" });
  };

  const scrollRight = () => {
    const track = document.querySelector(".catalogo__track");
    track?.scrollBy({ left: 350, behavior: "smooth" });
  };

  return (
    <div>
      {/* Hero */}
      <section className="hero">
        <img
          className="hero__image"
          src="/img/imagen-portada.jpg"
          alt="Cars"
        />
        <div className="hero__text">
          <h1 className="hero__title">
            Descubre el <span className="hero__title-accent">Mundo</span>
            <br />
            de los Hipercoches
          </h1>
          <p className="hero__description">
            ¡Bienvenido a la página donde los sueños sobre ruedas se hacen
            realidad! Explora y disfruta de los automóviles más increíbles del
            mundo.
          </p>
        </div>
      </section>

      {/* Carrusel */}
      <section className="catalogo">
        <h2 className="catalogo__titulo">Hipercoches Populares</h2>
        <div className="catalogo__carousel">
          <button className="catalogo__btn catalogo__btn--left" onClick={scrollLeft}>
            ❮
          </button>
          <div className="catalogo__track">
            {marcas.map((marca) => (
              <div key={marca.id} className="catalogo-card catalogo__card--horizontal">
                <img src={marca.imagen} alt={marca.nombre} className="catalogo-card__image" />
                <div className="catalogo-card__info">
                  <h3 className="catalogo-card__title">{marca.nombre}</h3>
                  <p className="catalogo-card__description">{marca.descripcion}</p>
                  <a href={`/marca/${marca.id}`} className="btn--secondary">
                    Ver modelos
                  </a>
                </div>
              </div>
            ))}
          </div>
          <button className="catalogo__btn catalogo__btn--right" onClick={scrollRight}>
            ❯
          </button>
        </div>
      </section>
    </div>
  );
}
