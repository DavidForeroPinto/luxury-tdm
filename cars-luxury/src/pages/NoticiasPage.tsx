import "../styles/noticias.css";

export default function NoticiasPage() {
  const noticias = [
    {
      id: 1,
      categoria: "Lanzamiento",
      titulo: "Nuevo hypercar eléctrico redefine el 0–100 km/h",
      resumen:
        "Una nueva generación de hypercars totalmente eléctricos llega con más de 1,500 HP y tecnología de pista adaptada a la calle.",
      fecha: "Marzo 2025",
    },
    {
      id: 2,
      categoria: "Tecnología",
      titulo: "Actualizaciones OTA: tu coche mejora mientras duermes",
      resumen:
        "Mejoras de autonomía, nuevas funciones de conducción y ajustes de rendimiento llegan vía actualización remota.",
      fecha: "Febrero 2025",
    },
    {
      id: 3,
      categoria: "Diseño",
      titulo: "Minimalismo extremo en interiores de lujo",
      resumen:
        "Materiales sostenibles, pantallas flotantes y líneas limpias definen la nueva tendencia en cabinas de alta gama.",
      fecha: "Enero 2025",
    },
    {
      id: 4,
      categoria: "Experiencia",
      titulo: "Configuradores 3D: diseña tu coche en realidad aumentada",
      resumen:
        "Explora colores, llantas y detalles en tiempo real con modelos 3D que replican el coche exacto que vas a recibir.",
      fecha: "Diciembre 2024",
    },
  ];

  return (
    <main className="noticias-page">
      <section className="noticias-hero">
        <span className="noticias-pill">Actualidad</span>
        <h1>Noticias y tendencias del mundo hypercar</h1>
        <p>
          Mantente al día con las novedades más importantes en diseño,
          tecnología y rendimiento de los vehículos más exclusivos del mundo.
        </p>
      </section>

      <section className="noticias-grid">
        {noticias.map((n) => (
          <article key={n.id} className="noticia-card">
            <header className="noticia-header">
              <span className="noticia-categoria">{n.categoria}</span>
              <span className="noticia-fecha">{n.fecha}</span>
            </header>
            <h2>{n.titulo}</h2>
            <p>{n.resumen}</p>
            <button className="noticia-btn">Leer más</button>
          </article>
        ))}
      </section>
    </main>
  );
}
