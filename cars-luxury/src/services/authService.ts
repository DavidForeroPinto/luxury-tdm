const API_URL = import.meta.env.VITE_API_URL;

if (!API_URL) {
  console.error("❌ ERROR: VITE_API_URL no está definida");
}

// LOGIN
export async function login(email: string, password: string) {
  return fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
}

// REGISTER
export async function register(email: string, password: string) {
  return fetch(`${API_URL}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
}
