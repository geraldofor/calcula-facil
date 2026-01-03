export default function SidebarItem({ icon, label, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`
        w-full flex items-center gap-4 px-4 py-3 mb-1 
        transition-all duration-200 ease-in-out
        rounded-lg text-left
        ${isActive 
          ? 'bg-[#0a2748] text-white border-l-4 border-blue-500' 
          : 'text-gray-400 hover:bg-[#0a1c33] hover:text-gray-300'
        }
      `}
    >
      <span className={`text-lg ${isActive ? 'text-blue-400' : 'text-gray-500'}`}>
        {icon}
      </span>
      <span className="font-medium text-sm tracking-wide">{label}</span>
    </button>
  );
}
