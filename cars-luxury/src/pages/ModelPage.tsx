import { useParams } from "react-router-dom";
import marcas from "../data/marcas.json";
import Modelo3D from "../components/Modelo3D";

export default function ModelPage() {
  const { marcaId, modeloId } = useParams();
  const marca = marcas.find((m) => m.id === marcaId);
  if (!marca) return <h2>Marca no encontrada</h2>;

  const modelo = marca.modelos.find((mod) => mod.id === modeloId);
  if (!modelo) return <h2>Modelo no encontrado</h2>;

  let rawPath = modelo.modelo3D || `/models/${modelo.id}.glb`;
  if (!rawPath.endsWith(".glb")) {
    rawPath = `${rawPath}glb`;
  }

  return (
    <div className="model">
      <h1 className="model__title">{modelo.nombre}</h1>
      <p className="model__price">{modelo.precio}</p>
      <div className="model__image-box">
        <img src={modelo.imagen} alt={modelo.nombre} className="model__image" />
      </div>
      <p className="model__description">{modelo.descripcion}</p>
      <h2 className="model__subtitle">Vista 3D</h2>
      <div className="model__3d-wrapper">
        <div className="model__3d-info">
          <p>Explora el modelo en 360°. Rota, haz zoom y aprecia cada detalle.</p>
        </div>
        <div className="model__3d-box">
          <Modelo3D file={rawPath} />
        </div>
      </div>
    </div>
  );
}
