import { Outlet } from "react-router-dom";

export default function LayoutPublico() {
  return (
    <div className="public-container" style={{ minHeight: "100vh" }}>
      <main>
        <Outlet /> {/* Solo login / register */}
      </main>
    </div>
  );
}
