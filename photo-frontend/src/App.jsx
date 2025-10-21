import { useState } from 'react'
import { getHello } from "./api";
import './App.css'

function App() {
  const [data, setData] = useState(null);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Front + FastAPI ✅</h1>
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={async () => {
          const result = await getHello();
          setData(result);
        }}
      >
        Obtener Datos
      </button>
      <p>{data ? JSON.stringify(data) : "Cargando..."}</p>
    </div>
  );
}

export default App
