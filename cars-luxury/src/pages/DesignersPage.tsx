import "../styles/disenadores.css";

export default function DesignersPage() {
  const disenadores = [
    {
      id: 1,
      nombre: "Jhonathan Uni",
      rol: "Chief Exterior Designer",
      descripcion:
        "Especialista en líneas agresivas y aerodinámica funcional. Ha liderado proyectos para hypercars europeos de edición limitada.",
      enfoque: "Aerodinámica, identidad visual y presencia en pista.",
    },
    {
      id: 2,
      nombre: "David Forero ",
      rol: "Lead Interior Designer",
      descripcion:
        "Fusiona minimalismo japonés con lujo europeo. Su prioridad es crear cabinas limpias, intuitivas y totalmente centradas en el conductor.",
      enfoque: "Interiores, ergonomía y experiencia de usuario.",
    },
    {
      id: 3,
      nombre: "Alex Cuevas",
      rol: "Head of Digital Experience",
      descripcion:
        "Responsable de interfaces, animaciones y configuradores 3D. Su trabajo une el mundo físico del coche con el universo digital.",
      enfoque: "UX/UI, realidad aumentada y personalización digital.",
    },
  ];

  return (
    <main className="disenadores-page">
      <section className="disenadores-hero">
        <span className="disenadores-pill">Creatividad</span>
        <h1>Los diseñadores detrás de cada línea perfecta</h1>
        <p>
          Cada modelo es el resultado de una visión clara: velocidad, precisión
          y lujo minimalista. Conoce a las mentes que dan forma a esa filosofía.
        </p>
      </section>

      <section className="disenadores-grid">
        {disenadores.map((d) => (
          <article key={d.id} className="disenador-card">
            <div className="disenador-avatar">
              {/* Iniciales del diseñador */}
              <span>
                {d.nombre
                  .split(" ")
                  .map((p) => p[0])
                  .join("")}
              </span>
            </div>
            <h2>{d.nombre}</h2>
            <h3>{d.rol}</h3>
            <p className="disenador-descripcion">{d.descripcion}</p>
            <p className="disenador-enfoque">
              <strong>Enfoque:</strong> {d.enfoque}
            </p>
          </article>
        ))}
      </section>

      <section className="disenadores-timeline">
        <h2>Línea de diseño</h2>
        <div className="disenadores-timeline-line">
          <div className="timeline-item">
            <span className="timeline-year">Concepto</span>
            <p>Bocetos iniciales a mano alzada, explorando proporciones y siluetas.</p>
          </div>
          <div className="timeline-item">
            <span className="timeline-year">3D Studio</span>
            <p>Modelado digital en alta resolución y pruebas aerodinámicas virtuales.</p>
          </div>
          <div className="timeline-item">
            <span className="timeline-year">Prototipo</span>
            <p>Construcción de modelos físicos y validación de presencia real.</p>
          </div>
          <div className="timeline-item">
            <span className="timeline-year">Producción</span>
            <p>
              Ajustes finales de materiales, detalles interiores y personalidad lumínica.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
