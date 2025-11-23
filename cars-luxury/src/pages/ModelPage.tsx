import { useParams } from "react-router-dom";
import marcas from "../data/marcas.json";
import Modelo3D from "../components/Modelo3D";

export default function ModelPage() {
  const { marcaId, modeloId } = useParams();

  // 1. Buscar la marca
  const marca = marcas.find((m) => m.id === marcaId);
  if (!marca) return <h2>Marca no encontrada</h2>;

  // 2. Buscar el modelo dentro de la marca
  const modelo = marca.modelos.find((mod) => mod.id === modeloId);
  if (!modelo) return <h2>Modelo no encontrado</h2>;

  // 3. Sacar la ruta del modelo 3D desde el JSON
  //    (respetando tu JSON y arreglando el caso "agera-rs.")
  let rawPath = modelo.modelo3D || `/models/${modelo.id}.glb`;

  // si no termina en .glb, se la añadimos (por ejemplo "/models/agera-rs." → "/models/agera-rs.glb")
  if (!rawPath.endsWith(".glb")) {
    rawPath = `${rawPath}glb`;
  }

  return (
    <div className="model-container">
      <h1 className="model-title">{modelo.nombre}</h1>
      <p className="model-price">{modelo.precio}</p>

      <div className="model-img-box">
        <img src={modelo.imagen} alt={modelo.nombre} />
      </div>

      <p className="model-description">{modelo.descripcion}</p>

      <h2 className="model-subtitle">Vista 3D</h2>

      <div className="model-3d-wrapper">
        <div className="model-3d-info">
          <p>
            Explora el modelo en 360°. Rota, haz zoom y aprecia cada detalle.
          </p>
        </div>

        <div className="model-3d-box">
          <Modelo3D file={rawPath} />
        </div>
      </div>
    </div>
  );
}
