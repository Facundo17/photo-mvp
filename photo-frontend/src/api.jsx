const API_URL = "http://127.0.0.1:8000";

export async function getHello() {
  const response = await fetch(`${API_URL}/`);
  if (!response.ok) throw new Error("Error en la conexión");
  return response.json();
}
