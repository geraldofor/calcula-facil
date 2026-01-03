'use client';

import { useState } from 'react';
import { Calculator, Calendar, DollarSign, Users, FileText, Download } from 'lucide-react';

export default function SistemaOperacional() {
  const [activeTab, setActiveTab] = useState('reservas');

  // Dados de exemplo
  const reservas = [
    { id: 1, cliente: 'João Silva', data: '15/05/2024', valor: 1250.00, status: 'confirmada' },
    { id: 2, cliente: 'Maria Santos', data: '16/05/2024', valor: 890.00, status: 'pendente' },
    { id: 3, cliente: 'Carlos Oliveira', data: '17/05/2024', valor: 2100.00, status: 'confirmada' },
    { id: 4, cliente: 'Ana Costa', data: '18/05/2024', valor: 750.00, status: 'cancelada' },
  ];

  const calculosRecentes = [
    { descricao: 'Cálculo de reserva padrão', valor: 1250.00, data: '15/05/2024' },
    { descricao: 'Cálculo com desconto', valor: 890.00, data: '16/05/2024' },
    { descricao: 'Cálcio para grupo', valor: 2100.00, data: '17/05/2024' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Sistema Operacional</h1>
              <p className="text-gray-600">Gerencie reservas, cálculos e pagamentos</p>
            </div>
            <div className="mt-4 md:mt-0 flex items-center space-x-4">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                Nova Reserva
              </button>
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center">
                <Calculator className="w-4 h-4 mr-2" />
                Novo Cálculo
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              {[
                { id: 'reservas', label: 'Reservas', icon: Calendar },
                { id: 'calculos', label: 'Cálculos', icon: Calculator },
                { id: 'clientes', label: 'Clientes', icon: Users },
                { id: 'financeiro', label: 'Financeiro', icon: DollarSign },
                { id: 'relatorios', label: 'Relatórios', icon: FileText },
              ].map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-3 px-1 border-b-2 font-medium text-sm flex items-center ${
                      activeTab === tab.id
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <Icon className="w-4 h-4 mr-2" />
                    {tab.label}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Conteúdo Principal */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Coluna 1: Cards Rápidos */}
          <div className="lg:col-span-2">
            {/* Cards de Métricas */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {[
                { label: 'Reservas Hoje', value: '8', icon: Calendar, color: 'bg-blue-500' },
                { label: 'Valor em Aberto', value: 'R$ 5.230,00', icon: DollarSign, color: 'bg-green-500' },
                { label: 'Clientes Ativos', value: '42', icon: Users, color: 'bg-purple-500' },
              ].map((metric) => (
                <div key={metric.label} className="bg-white rounded-xl shadow p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">{metric.label}</p>
                      <p className="text-2xl font-bold mt-1">{metric.value}</p>
                    </div>
                    <div className={`${metric.color} p-3 rounded-lg`}>
                      <metric.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Formulário de Nova Reserva (Aba Reservas) */}
            {activeTab === 'reservas' && (
              <div className="bg-white rounded-xl shadow p-6 mb-6">
                <h2 className="text-xl font-bold mb-4">Nova Reserva</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Cliente</label>
                    <input className="w-full px-4 py-2 border rounded-lg" placeholder="Nome do cliente" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Data</label>
                    <input type="date" className="w-full px-4 py-2 border rounded-lg" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Valor</label>
                    <input className="w-full px-4 py-2 border rounded-lg" placeholder="R$ 0,00" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                    <select className="w-full px-4 py-2 border rounded-lg">
                      <option>Pendente</option>
                      <option>Confirmada</option>
                      <option>Cancelada</option>
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Observações</label>
                    <textarea className="w-full px-4 py-2 border rounded-lg" rows="3" placeholder="Detalhes adicionais..." />
                  </div>
                </div>
                <div className="flex justify-end space-x-3 mt-6">
                  <button className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                    Cancelar
                  </button>
                  <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    Salvar Reserva
                  </button>
                </div>
              </div>
            )}

            {/* Tabela de Reservas */}
            <div className="bg-white rounded-xl shadow overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                <h3 className="text-lg font-semibold">Reservas Recentes</h3>
                <button className="text-sm text-blue-600 hover:text-blue-800 flex items-center">
                  <Download className="w-4 h-4 mr-1" />
                  Exportar
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Cliente</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Data</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Valor</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Ações</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {reservas.map((reserva) => (
                      <tr key={reserva.id}>
                        <td className="px-6 py-4 whitespace-nowrap font-medium">{reserva.cliente}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{reserva.data}</td>
                        <td className="px-6 py-4 whitespace-nowrap">R$ {reserva.valor.toFixed(2)}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-3 py-1 rounded-full text-sm ${
                            reserva.status === 'confirmada' ? 'bg-green-100 text-green-800' :
                            reserva.status === 'pendente' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {reserva.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <button className="text-blue-600 hover:text-blue-800 mr-3">Editar</button>
                          <button className="text-red-600 hover:text-red-800">Cancelar</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Coluna 2: Sidebar */}
          <div className="space-y-6">
            {/* Calculadora Rápida */}
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Calculator className="w-5 h-5 mr-2" />
                Calculadora Rápida
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-2">Valor Base</label>
                  <input className="w-full px-4 py-2 border rounded-lg" placeholder="R$ 0,00" />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-2">Taxa (%)</label>
                  <input className="w-full px-4 py-2 border rounded-lg" placeholder="10" />
                </div>
                <div className="pt-4 border-t">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Total:</span>
                    <span className="font-bold text-lg">R$ 0,00</span>
                  </div>
                  <button className="w-full mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    Calcular
                  </button>
                </div>
              </div>
            </div>

            {/* Cálculos Recentes */}
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-lg font-semibold mb-4">Cálculos Recentes</h3>
              <div className="space-y-4">
                {calculosRecentes.map((calc, index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-4 py-2">
                    <p className="font-medium">{calc.descricao}</p>
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>R$ {calc.valor.toFixed(2)}</span>
                      <span>{calc.data}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Atalhos Rápidos */}
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-lg font-semibold mb-4">Atalhos Rápidos</h3>
              <div className="space-y-3">
                {[
                  { label: 'Gerar Relatório', icon: FileText },
                  { label: 'Enviar Cobrança', icon: DollarSign },
                  { label: 'Agendar Lembrete', icon: Calendar },
                  { label: 'Exportar Dados', icon: Download },
                ].map((atalho) => (
                  <button
                    key={atalho.label}
                    className="w-full text-left px-4 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 flex items-center"
                  >
                    <atalho.icon className="w-4 h-4 mr-3 text-gray-500" />
                    {atalho.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
