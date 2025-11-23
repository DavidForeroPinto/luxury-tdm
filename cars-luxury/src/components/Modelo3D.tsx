import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Stage, useGLTF } from "@react-three/drei";

type Modelo3DProps = {
  file: string;
};

/** Este es el que SÍ usa useGLTF (va dentro del Canvas) */
function Model({ file }: Modelo3DProps) {
  const gltf: any = useGLTF(file);
  return <primitive object={gltf.scene} scale={1.8} />;
}

const Modelo3D: React.FC<Modelo3DProps> = ({ file }) => {
  return (
    <Canvas
      shadows
      camera={{ position: [6, 4, 10], fov: 40 }}
      style={{ width: "100%", height: "100%" }}
    >
      {/* Fondo oscuro tipo showroom */}
      <color attach="background" args={["#050608"]} />

      <Suspense fallback={null}>
        <Environment preset="city" />

        <Stage
          environment="city"
          intensity={0.9}
          shadows="contact"
          adjustCamera
        >
          <Model file={file} />
        </Stage>

        <OrbitControls enableZoom autoRotate autoRotateSpeed={1.3} />
      </Suspense>
    </Canvas>
  );
};

export default Modelo3D;
