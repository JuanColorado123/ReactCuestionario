import { Link } from "react-router-dom";


export default function WelcomeScreen() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-200 text-center p-4">
      <h1 className="text-3xl font-bold mb-4">Bienvenid@ al Formulario</h1>
      <p className="mb-6">Presiona el botón para comenzar con las preguntas.</p>
      <Link to="/formulario" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
        Ir al formulario
      </Link>
    </div>
  );
}
