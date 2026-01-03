'use client';

import { useState } from 'react';
import SidebarItem from './SidebarItem';
import { 
  FaCalculator, 
  FaTicketAlt, 
  FaExchangeAlt, 
  FaSyncAlt,
  FaHome,
  FaUser,
  FaUserShield,
  FaSignInAlt,
  FaUserPlus
} from 'react-icons/fa';

export default function Sidebar() {
  const [activeTab, setActiveTab] = useState('tarifa');

  // Itens da sidebar - ajuste conforme suas rotas
  const navItems = [
    { id: 'tarifa', label: 'Tarifas', icon: <FaTicketAlt />, route: '/sistema/tarifas' },
    { id: 'conversor', label: 'Conversor', icon: <FaExchangeAlt />, route: '/sistema/conversor' },
    { id: 'reemissao', label: 'Reemissão', icon: <FaSyncAlt />, route: '/sistema/reemissao' },
    // Adicione outros itens conforme necessário
    { id: 'home', label: 'Home', icon: <FaHome />, route: '/' },
    { id: 'cliente', label: 'Cliente', icon: <FaUser />, route: '/cliente' },
    { id: 'admin', label: 'Admin', icon: <FaUserShield />, route: '/admin' },
    { id: 'login', label: 'Login', icon: <FaSignInAlt />, route: '/login' },
    { id: 'registro', label: 'Registro', icon: <FaUserPlus />, route: '/registro' },
  ];

  return (
    <div className="w-64 bg-[#001e3c] text-white flex flex-col h-screen flex-shrink-0">
      {/* Logo Area */}
      <div className="p-5 pb-8 border-b border-[#0a2748]">
        <div className="flex items-center gap-3">
          <FaCalculator className="text-xl text-blue-400" />
          <span className="text-lg font-semibold tracking-wide">CALCULA FÁCIL</span>
        </div>
        <div className="mt-2 text-xs text-gray-400">
          Sistema Unificado
        </div>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 p-2">
        {navItems.map((item) => (
          <SidebarItem
            key={item.id}
            icon={item.icon}
            label={item.label}
            isActive={activeTab === item.id}
            onClick={() => {
              setActiveTab(item.id);
              // Navegação será implementada depois
              console.log(`Navegar para: ${item.route}`);
            }}
          />
        ))}
      </nav>

      {/* Footer/Status */}
      <div className="p-4 border-t border-[#0a2748] bg-[#0a1c33]">
        <div className="flex items-center gap-2 text-sm">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          <span className="text-gray-300">Online</span>
          <span className="text-gray-400 ml-auto">v1.0</span>
        </div>
        <div className="text-xs text-gray-400 mt-1">
          Usuário: Geraldo
        </div>
      </div>
    </div>
  );
}
