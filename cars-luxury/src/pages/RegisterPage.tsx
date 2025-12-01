/* import { useState } from "react";
import { register } from "../services/authService";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await register(email, password);
      const data = await res.json();

      setMsg(data.msg);

      if (res.ok) {
        window.location.href = "/login";
      }
    } catch {
      setMsg("Error en el servidor.");
    }
  };

  return (
    <div className="register-container">
      <h1>Crear Cuenta</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Registrar</button>
      </form>

      <p>{msg}</p>
    </div>
  );
}
 */