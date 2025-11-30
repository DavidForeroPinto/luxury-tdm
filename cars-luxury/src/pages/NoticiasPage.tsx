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
    {
      id: 5,
      categoria: "Rendimiento",
      titulo: "Motores V12 híbridos: la mezcla perfecta entre locura y eficiencia",
      resumen:
        "Las nuevas plataformas híbridas logran mantener el sonido brutal del V12 mientras reducen emisiones y aumentan torque instantáneo.",
      fecha: "Noviembre 2024",
    },
    {
      id: 6,
      categoria: "Industria",
      titulo: "Ferrari y Lamborghini anuncian colaboración histórica",
      resumen:
        "Las dos marcas italianas trabajan en un proyecto conjunto para desarrollar tecnología aerodinámica de nueva generación.",
      fecha: "Octubre 2024",
    },
    {
      id: 7,
      categoria: "Autonomía",
      titulo: "Modo pista autónomo llega a los superdeportivos",
      resumen:
        "Un sistema de inteligencia artificial permite aprender trazadas profesionales y optimizar tiempos de vuelta automáticamente.",
      fecha: "Agosto 2024",
    },
    {
      id: 8,
      categoria: "Lujo",
      titulo: "Personalización con oro líquido y fibra de carbono transparente",
      resumen:
        "Nuevos tratamientos de materiales permiten acabados que antes solo existían en concept cars.",
      fecha: "Julio 2024",
    },
    {
      id: 9,
      categoria: "Seguridad",
      titulo: "Frenos cerámicos autoajustables revolucionan las pistas",
      resumen:
        "Un nuevo sistema regula la presión en tiempo real según temperatura y desgaste.",
      fecha: "Junio 2024",
    },
    {
      id: 10,
      categoria: "Eventos",
      titulo: "Monterey Car Week rompe récord de asistencia",
      resumen:
        "Más de 120 hypercars únicos desfilaron en un evento histórico para coleccionistas.",
      fecha: "Mayo 2024",
    },
    {
      id: 11,
      categoria: "Tendencia",
      titulo: "Los volantes tipo F1 se convierten en estándar en hypercars",
      resumen:
        "Las interfaces inspiradas en la Fórmula 1 dominan las cabinas deportivas del futuro.",
      fecha: "Abril 2024",
    },
    {
      id: 12,
      categoria: "Futuro",
      titulo: "Hypercars voladores: primeros prototipos listos para pruebas",
      resumen:
        "Empresas de movilidad avanzan en modelos que combinan conducción en tierra y despegue vertical.",
      fecha: "Marzo 2024",
    },
  ];

  return (
    <main className="noticias">
      <section className="noticias__hero">
        <span className="noticias__pill">Actualidad</span>
        <h1 className="noticias__title">Noticias y tendencias del mundo hypercar</h1>
        <p className="noticias__subtitle">
          Mantente al día con las novedades más importantes en diseño,
          tecnología y rendimiento de los vehículos más exclusivos del mundo.
        </p>
      </section>

      <section className="noticias__grid">
        {noticias.map((n) => (
          <article key={n.id} className="noticias__card">
            <header className="noticias__card-header">
              <span className="noticias__card-category">{n.categoria}</span>
              <span className="noticias__card-date">{n.fecha}</span>
            </header>
            <h2 className="noticias__card-title">{n.titulo}</h2>
            <p className="noticias__card-text">{n.resumen}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
