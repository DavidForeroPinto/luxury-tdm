import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LoginPage.css";

export default function NeonLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3001/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();

      if (!res.ok) {
        setMsg(data.msg || "Error en el login");
        return;
      }

      localStorage.setItem("token", data.token);
      navigate("/", { replace: true }); // Redirige a la landing y reemplaza el historial
    } catch (error) {
      setMsg("Error del servidor, intenta más tarde");
    }
  };

  return (
    <div className="neon-gold-login-background">
      <div className="neon-gold-login-anim"></div>
      <form className="neon-gold-login-box" onSubmit={handleLogin}>
        <h1 className="neon-gold-login-title">Iniciar Sesión</h1>
        <input
          className="neon-gold-login-input"
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="email"
        />
        <input
          className="neon-gold-login-input"
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          autoComplete="current-password"
        />
        <button type="submit" className="neon-gold-login-btn">Ingresar</button>
        {msg && <p className="neon-gold-login-error">{msg}</p>}
      </form>
    </div>
  );
}
