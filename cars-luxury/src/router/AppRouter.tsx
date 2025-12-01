// Ajusta los imports a la ubicación de tus archivos
import { createBrowserRouter } from "react-router-dom";

import LayoutPrivado from "../components/LayoutPrivado";
import LayoutPublico from "../components/LayoutPublico";
import ProtectedRoute from "../components/ProtectedRoute";

import HomePage from "../pages/HomePage";
import RedesPage from "../pages/RedesPage";
import DesignersPage from "../pages/DesignersPage";
import NoticiasPage from "../pages/NoticiasPage";
import CatalogoPage from "../pages/CatalogoPage";
import BrandPage from "../pages/BrandPage";
import ModelPage from "../pages/ModelPage";
import LoginPage from "../pages/LoginPage";
/*import RegisterPage from "../pages/RegisterPage";*/

export const router = createBrowserRouter([
  {
    element: <LayoutPrivado />, // Layout para rutas privadas
    children: [
      {
        element: <ProtectedRoute />, // Componente que protege rutas hijas
        children: [
          { index: true, element: <HomePage /> },
          { path: "redes", element: <RedesPage /> },
          { path: "diseñadores", element: <DesignersPage /> },
          { path: "noticias", element: <NoticiasPage /> },
          { path: "catalogo", element: <CatalogoPage /> },
          { path: "marca/:id", element: <BrandPage /> },
          { path: "marca/:marcaId/modelo/:modeloId", element: <ModelPage /> },
        ],
      },
    ],
  },
  {
    element: <LayoutPublico />, // Layout para rutas públicas (login, registro)
    children: [
      { path: "/login", element: <LoginPage /> },
      /*{ path: "/register", element: <RegisterPage /> },*/
    ],
  },
  // Opcionalmente puedes agregar ruta 404 aquí:
  // { path: "*", element: <NotFoundPage /> },
]);
