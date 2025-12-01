import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LoginPage.css";
import { login } from "../services/authService";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await login(email, password);
      const data = await res.json();

      if (!res.ok) {
        setMsg(data.msg || "Credenciales incorrectas");
        return;
      }

      localStorage.setItem("token", data.token);
      navigate("/", { replace: true });
    } catch (error) {
      setMsg("Error de servidor");
    }
  };

  return (
    <div className="login__background">
      <form className="login__box" onSubmit={handleLogin}>
        <h1 className="login__title">Iniciar Sesión</h1>

        <label className="login__label">Correo electrónico</label>
        <input
          className="login__input"
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label className="login__label">Contraseña</label>
        <input
          className="login__input"
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" className="login__btn">Ingresar</button>

        {msg && <p className="login__error">{msg}</p>}
      </form>
    </div>
  );
}
