export default function TopBar() {
  return (
    <div className="bg-[#001e3c] text-white px-6 py-3 flex justify-between items-center shadow-md">
      <div className="text-sm font-medium">
        Sistema Unificado de Reservas
      </div>
      <div className="flex items-center gap-2 text-sm">
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
        <span className="text-gray-300">Online</span>
        <span className="text-gray-400 ml-2">●</span>
        <span className="text-gray-300">Geraldo</span>
      </div>
    </div>
  );
}
