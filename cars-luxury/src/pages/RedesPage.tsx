import "../styles/redes.css";

export default function RedesPage() {
  const redes = [
    {
      id: 1,
      nombre: "Instagram",
      usuario: "@hyperlux.cars",
      descripcion:
        "Fotografía detallada, tomas nocturnas y contenido detrás de cámaras de shootings exclusivos.",
      link: "https://instagram.com/",
      tipo: "Visual",
    },
    {
      id: 2,
      nombre: "TikTok",
      usuario: "@hyperlux.motion",
      descripcion:
        "Clips cortos en movimiento, POV desde el cockpit y sonido puro de motores.",
      link: "https://www.tiktok.com/",
      tipo: "Video",
    },
    {
      id: 3,
      nombre: "YouTube",
      usuario: "HyperLux Studio",
      descripcion:
        "Reviews completos, comparativas y recorridos 3D de cada modelo, con énfasis en diseño y tecnología.",
      link: "https://youtube.com/",
      tipo: "Long-form",
    },
    {
      id: 4,
      nombre: "X (Twitter)",
      usuario: "@hyperlux_news",
      descripcion:
        "Anuncios rápidos, teasers de nuevos proyectos y cobertura en vivo de lanzamientos.",
      link: "https://x.com/",
      tipo: "Live",
    },
  ];

  return (
    <main className="redes-page">
      <section className="redes-hero">
        <span className="redes-pill">Comunidad</span>
        <h1>Conecta con el universo HyperLux</h1>
        <p>
          Síguenos en redes para ver lanzamientos, configuraciones únicas y
          momentos que no llegan a la web oficial.
        </p>
      </section>

      <section className="redes-grid">
        {redes.map((r) => (
          <article key={r.id} className="red-social-card">
            <div className="red-social-header">
              <span className="red-social-nombre">{r.nombre}</span>
              <span className="red-social-tipo">{r.tipo}</span>
            </div>
            <h2>{r.usuario}</h2>
            <p>{r.descripcion}</p>
            <a
              href={r.link}
              target="_blank"
              rel="noopener noreferrer"
              className="red-social-btn"
            >
              Ir al perfil
            </a>
          </article>
        ))}
      </section>

      <section className="redes-highlight">
        <h2>Contenido destacado</h2>
        <p>
          Cada semana seleccionamos configuraciones, renders 3D y clips de
          sonido enviados por la comunidad para destacarlos en nuestras redes.
        </p>
        <button className="redes-cta-btn">Enviar tu configuración</button>
      </section>
    </main>
  );
}
