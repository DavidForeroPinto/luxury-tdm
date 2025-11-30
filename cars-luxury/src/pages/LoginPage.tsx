import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LoginPage.css";

export default function NeonLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
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
      navigate("/", { replace: true });
    } catch (error) {
      setMsg("Error del servidor, intenta más tarde");
    }
  };

  return (
    <div className="login__background">
      <div className="login__anim" aria-hidden="true"></div>

      <form className="login__box" onSubmit={handleLogin}>
        <h1 className="login__title">Iniciar Sesión</h1>

        <label htmlFor="email" className="login__label">Correo electrónico</label>
        <input
          id="email"
          className="login__input"
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="email"
        />

        <label htmlFor="password" className="login__label">Contraseña</label>
        <input
          id="password"
          className="login__input"
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          autoComplete="current-password"
        />

        <button type="submit" className="login__btn">Ingresar</button>

        {msg && <p className="login__error" role="alert">{msg}</p>}
      </form>
    </div>
  );
}
