import React, { useState } from "react";

const QuestionScreen = () => {
  const [tab, setTab] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    tel: "",
    email: "",
    date: "",
    message1: "",
    satisfaccion: "",
    productos: []
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => {
        const productos = checked 
          ? [...prev.productos, value]
          : prev.productos.filter((p) => p !== value);
        return { ...prev, productos };
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `Nombre: ${formData.name}%0A` +
      `Celular: ${formData.tel}%0A` +
      `Correo: ${formData.email}%0A` +
      `Fecha: ${formData.date}%0A` +
      `Pregunta 1: ${formData.message1}%0A` +
      `Satisfacción: ${formData.satisfaccion}%0A` +
      `Productos: ${formData.productos.join(", ")}`;

    window.open(`https://wa.me/?text=${msg}`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-xl">
        <h1 className="block text-gray-700 font-bold mb-6 text-xl text-center">
          CUESTIONARIO DE PREGUNTAS Y ENVÍO POR WHATSAPP
        </h1>

        <div className="flex justify-center space-x-4">
          <button type="button" onClick={() => setTab(0)} className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'>Datos</button>
          <button type="button" onClick={() => setTab(1)} className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded px-2'>Preguntas</button>
        </div>

        {tab === 0 && (
          <>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Nombre</label>
              <input name="name" value={formData.name} onChange={handleChange} type="text" required className="shadow appearance-none border rounded w-full py-2 px-3" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Número de Celular</label>
              <input name="tel" value={formData.tel} onChange={handleChange} type="tel" required className="shadow appearance-none border rounded w-full py-2 px-3" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Correo</label>
              <input name="email" value={formData.email} onChange={handleChange} type="email" required className="shadow appearance-none border rounded w-full py-2 px-3" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Fecha</label>
              <input name="date" value={formData.date} onChange={handleChange} type="date" required className="shadow appearance-none border rounded w-full py-2 px-3" />
            </div>
          </>
        )}

        {tab === 1 && (
          <>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">¿Por qué estás interesado en este cuestionario?</label>
              <textarea name="message1" value={formData.message1} onChange={handleChange} required className="shadow appearance-none border rounded w-full py-2 px-3"></textarea>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">¿Cuál es tu nivel de satisfacción con nuestro servicio?</label>
              <div className="flex flex-col space-y-2">
                <label><input type="radio" name="satisfaccion" value="alta" checked={formData.satisfaccion === 'alta'} onChange={handleChange} className="mr-2" />Alta</label>
                <label><input type="radio" name="satisfaccion" value="media" checked={formData.satisfaccion === 'media'} onChange={handleChange} className="mr-2" />Media</label>
                <label><input type="radio" name="satisfaccion" value="baja" checked={formData.satisfaccion === 'baja'} onChange={handleChange} className="mr-2" />Baja</label>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">¿Qué productos te interesan?</label>
              <div className="flex flex-col space-y-2">
                <label><input type="checkbox" name="productos" value="producto1" checked={formData.productos.includes('producto1')} onChange={handleChange} className="mr-2" />Producto 1</label>
                <label><input type="checkbox" name="productos" value="producto2" checked={formData.productos.includes('producto2')} onChange={handleChange} className="mr-2" />Producto 2</label>
                <label><input type="checkbox" name="productos" value="producto3" checked={formData.productos.includes('producto3')} onChange={handleChange} className="mr-2" />Producto 3</label>
              </div>
            </div>
          </>
        )}

        <div className="flex items-center justify-center mt-6">
          <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            <i className="fab fa-whatsapp"></i> Enviar a WhatsApp
          </button>
        </div>
      </form>
    </div>
  );
};

export default QuestionScreen;