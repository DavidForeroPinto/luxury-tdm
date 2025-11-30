import "../styles/disenadores.css";

export default function DesignersPage() {
  const designers = [
    {
      id: 1,
      name: "Jhonathan Uni",
      role: "Chief Exterior Designer",
      description: "Especialista en líneas agresivas y aerodinámica funcional. Ha liderado proyectos para hypercars europeos de edición limitada.",
      focus: "Aerodinámica • Identidad visual • Presencia en pista",
      image: "/img/disenadores/Foto_uni.jpeg"
    },
    {
      id: 2,
      name: "David Forero",
      role: "Lead Interior Designer",
      description: "Fusiona minimalismo japonés con lujo europeo. Crea cabinas limpias, intuitivas y totalmente centradas en el conductor.",
      focus: "Interiores • Ergonomía • Experiencia de usuario",
      image: "/img/disenadores/David.jpeg"
    },
    {
      id: 3,
      name: "Alex Cuevas",
      role: "Head of Digital Experience",
      description: "Responsable de interfaces, animaciones y configuradores 3D. Une el mundo físico del coche con el universo digital.",
      focus: "UX/UI • Realidad aumentada • Personalización digital",
      image: "/img/disenadores/Foto_uni.jpeg"
    }
  ];

  return (
    <main className="designers">
      {/* Hero */}
      <section className="designers__hero">
        <div className="designers-hero__container">
          <div className="designers-hero__content">
            <span className="designers-hero__pill">Creatividad Elite</span>
            <h1 className="designers-hero__title">
              Los genios detrás de cada <span className="designers-hero__accent">línea perfecta</span>
            </h1>
            <p className="designers-hero__subtitle">
              Velocidad. Precisión. Lujo minimalista. Conoce las mentes que definen el futuro del diseño automotriz.
            </p>
          </div>
          <div className="designers-hero__car">
            <div className="designers-hero__car-icon">🚗</div>
            <div className="designers-hero__car-glow"></div>
          </div>
        </div>
      </section>

      {/* Grid de diseñadores */}
      <section className="designers__grid">
        {designers.map((d, i) => (
          <article 
            key={d.id} 
            className="designer-card"
            style={{ animationDelay: `${i * 0.15}s` }}
          >
            <div className="designer-card__image-container">
              {d.image ? (
                <img
                  src={d.image}
                  alt={d.name}
                  className="designer-card__image"
                  onError={(e) => {
                    e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgeD0iNTAlIiB5PSI5MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+SW1hZ2VuIG5vIGRpc3BvbmlibGU8L3RleHQ+PC9zdmc+';
                  }}
                />
              ) : (
                <div className="designer-card__placeholder">
                  <span>📸</span>
                  <p>Agregar imagen</p>
                </div>
              )}
            </div>

            <div className="designer-card__info">
              <h2 className="designer-card__name">{d.name}</h2>
              <div className="designer-card__role">{d.role}</div>
              <p className="designer-card__description">{d.description}</p>
              <div className="designer-card__focus">
                <span className="designer-card__focus-label">Enfoque:</span>
                <span className="designer-card__focus-text">{d.focus}</span>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* Timeline */}
      <section className="timeline">
        <h2 className="timeline__title">Proceso Creativo</h2>
        <div className="timeline__grid">
          {[
            { year: "Concepto", desc: "Bocetos iniciales a mano alzada, explorando proporciones y siluetas.", icon: "✏️" },
            { year: "3D Studio", desc: "Modelado digital en alta resolución y pruebas aerodinámicas.", icon: "🖥️" },
            { year: "Prototipo", desc: "Construcción de modelos físicos y validación real.", icon: "🏎️" },
            { year: "Producción", desc: "Ajustes finales de materiales y detalles lumínicos.", icon: "⚙️" }
          ].map((item, i) => (
            <div key={i} className="timeline__item" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="timeline__icon">{item.icon}</div>
              <div className="timeline__content">
                <span className="timeline__year">{item.year}</span>
                <p className="timeline__desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
