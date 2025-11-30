import { Outlet, Link, useNavigate } from "react-router-dom";

export default function LayoutPrivado() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login", { replace: true });
  };

  return (
    <div className="app-container">
      <header className="header">
        <div className="header__container">
          <div>
            <Link to="/" className="header__logo">LUXURY SPORT VEHICLES</Link>
          </div>
          <nav className="header__navbar">
            <ul className="header__navbar-list">
              <li className="header__navbar-item">
                <Link to="/redes" className="header__navbar-link">Redes sociales</Link>
              </li>
              <li className="header__navbar-item">
                <Link to="/diseñadores" className="header__navbar-link">Diseñadores</Link>
              </li>
              <li className="header__navbar-item">
                <Link to="/noticias" className="header__navbar-link">Noticias</Link>
              </li>
              <li className="header__navbar-item">
                <button onClick={handleLogout} className="logout-button">
                  Cerrar Sesión
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="footer">
        <p>© 2025 CARS LUXURY - Todos los derechos reservados</p>
      </footer>
    </div>
  );
}
