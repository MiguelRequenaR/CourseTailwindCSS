
const ContentDashboard = () => {
  return (
    <div className="flex-grow p-8">
      <h1 className="text-2xl font-semibold mb-4">Resumen de Finanzas</h1>
      <div className="grid grid-cols-2 gap-8">
        <div className="bg-white p-4 rounded shadow-md">
          {/* Contenido del primer bloque */}
        </div>
        <div className="bg-white p-4 rounded shadow-md">
          {/* Contenido del segundo bloque */}
        </div>
      </div>
    </div>
  );
};

export default ContentDashboard;
