import "../styles/redes.css";

export default function RedesPage() {
  const redes = [
    {
      id: 1,
      nombre: "Instagram",
      usuario: "@hyperlux.cars",
      descripcion: "Fotografía detallada, tomas nocturnas y contenido detrás de cámaras de shootings exclusivos.",
      link: "https://www.instagram.com/hyperlux.coches?igsh=MWQxbm51M3JkMGt6OA==",
      tipo: "Visual",
      icon: "📸"
    },
    {
      id: 2,
      nombre: "TikTok",
      usuario: "@hyperlux.motion",
      descripcion: "Clips cortos en movimiento, POV desde el cockpit y sonido puro de motores.",
      link: "https://www.tiktok.com/@hyperlux_motion?_r=1&_t=ZS-91pylQcUzbd",
      tipo: "Video",
      icon: "🎥"
    }
  ];

  return (
    <main className="redes">
      {/* Hero Section */}
      <section className="redes__hero">
        <div className="redes__hero-bg">
          <span className="redes__hero-pill redes__hero-pill--pulse">Comunidad Elite</span>
          <h1 className="redes__hero-title">
            Conecta con el <span className="redes__hero-title-gradient">Universo HyperLux</span>
          </h1>
          <p className="redes__hero-subtitle">
            Descubre lanzamientos exclusivos, configuraciones únicas y momentos épicos que no verás en ningún otro lugar.
          </p>
          <div className="redes__hero-stats">
            <div className="redes__hero-stat">
              <span className="redes__hero-number">+10K</span>
              <span className="redes__hero-label">Configuraciones</span>
            </div>
            <div className="redes__hero-stat">
              <span className="redes__hero-number">500+</span>
              <span className="redes__hero-label">Videos</span>
            </div>
            <div className="redes__hero-stat">
              <span className="redes__hero-number">2M+</span>
              <span className="redes__hero-label">Views</span>
            </div>
          </div>
        </div>
      </section>

      {/* Grid de Redes */}
      <section className="redes__grid">
        {redes.map((r, index) => (
          <article 
            key={r.id} 
            className="redes__card"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="redes__card-header">
              <div className="redes__card-icon">{r.icon}</div>
              <div>
                <span className="redes__card-nombre">{r.nombre}</span>
                <span className="redes__card-tipo">{r.tipo}</span>
              </div>
            </div>
            <div className="redes__card-usuario">
              <h2 className="redes__card-usuario-nombre">{r.usuario}</h2>
              <div className="redes__card-follow">Seguir</div>
            </div>
            <p className="redes__card-description">{r.descripcion}</p>
            <div className="redes__card-actions">
              <a
                href={r.link}
                target="_blank"
                rel="noopener noreferrer"
                className="redes__card-btn redes__card-btn--primary"
              >
                <span>Ir al perfil</span>
                <svg className="redes__card-btn-icon" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <button className="redes__card-btn redes__card-btn--secondary">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M7 16V9c0-2.76 3-5 6-5s6 2.24 6 5v7" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="12" cy="9" r="1.5"/>
                  <path d="M12 19h.01" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </button>
            </div>
          </article>
        ))}
      </section>

      {/* Highlight / CTA */}
      <section className="redes__highlight">
        <div className="redes__highlight-content">
          <div className="redes__highlight-visual">
            <div className="redes__highlight-floating">
              <div className="redes__highlight-card redes__highlight-card--1"></div>
              <div className="redes__highlight-card redes__highlight-card--2"></div>
              <div className="redes__highlight-card redes__highlight-card--3"></div>
            </div>
          </div>
          <div className="redes__highlight-text">
            <h2 className="redes__highlight-title">Contenido Destacado</h2>
            <p>
              Cada semana destacamos las mejores <strong>configuraciones</strong>, renders 3D y clips de sonido 
              enviados por <strong>la comunidad</strong>.
            </p>
            <div className="redes__highlight-cta-group">
              <button className="redes__highlight-btn redes__highlight-btn--primary redes__highlight-btn--glow">
                <span>Enviar Configuración</span>
                <svg className="redes__highlight-btn-icon" viewBox="0 0 24 24">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </button>
              <button className="redes__highlight-btn redes__highlight-btn--secondary">
                Ver Destacados
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="redes__footer">
        <p>Únete al movimiento HyperLux 🚀 | #HyperLuxCars</p>
      </footer>
    </main>
  );
}
