

const Sidebar = () => {
  return (
    <div className="bg-blue-900 text-white w-64 p-4">
      <h2 className="text-xl font-semibold mb-4">Finance Dashboard</h2>
      <ul className="space-y-2">
        <li className="hover:bg-blue-800 p-2 rounded">Inicio</li>
        <li className="hover:bg-blue-800 p-2 rounded">Transacciones</li>
        <li className="hover:bg-blue-800 p-2 rounded">Cuentas</li>
        <li className="hover:bg-blue-800 p-2 rounded">Informes</li>
        {/* Agregar más elementos de menú */}
      </ul>
    </div>
  );
};

export default Sidebar;
