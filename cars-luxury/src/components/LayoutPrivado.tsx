import { Outlet, Link, useNavigate } from "react-router-dom";

export default function LayoutPrivado() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // Elimina el token
    navigate("/login", { replace: true }); // Redirige al login reemplazando el historial
  };

  return (
    <div className="app-container">
      <header className="header">
        <div className="menu container">
          <div>
            <Link to="/" className="logo-header">LUXURY SPORT VEHICLES</Link>
          </div>
          <nav className="navbar">
            <ul>
              <li className="botones-header"><Link to="/redes">Redes sociales</Link></li>
              <li className="botones-header"><Link to="/diseñadores">Diseñadores</Link></li>
              <li className="botones-header"><Link to="/noticias">Noticias</Link></li>
              <li className="botones-header"><Link to="/catalogo">Catálogo</Link></li>
              <li>
                <Link to="/">
                  <img src="/public/img/icono_inicio.jpg" alt="" className="icono-session" />
                </Link>
              </li>
              <li>
                <button onClick={handleLogout} className="botones-header logout-button">
                  Cerrar Sesión
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <Outlet /> {/* Aquí salen las páginas privadas */}
      </main>
      <footer className="main-footer">
        <p>© 2025 CARS LUXURY - Todos los derechos reservados</p>
      </footer>
    </div>
  );
}
