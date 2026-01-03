'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Users, DollarSign, CreditCard, BarChart3 } from 'lucide-react';

export default function AdminPage() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Verificar se é admin
    const userData = localStorage.getItem('user');
    
    if (!userData) {
      router.push('/login');
      return;
    }
    
    const parsedUser = JSON.parse(userData);
    
    // SIMULAÇÃO: Se e-mail tem "admin", permite acesso
    if (!parsedUser.email.includes('admin')) {
      router.push('/sistema'); // Não-admin vai para calculadora
      return;
    }
    
    setUser(parsedUser);
    setLoading(false);
  }, [router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Verificando permissões...</p>
        </div>
      </div>
    );
  }

  // Dados de exemplo
  const metrics = [
    { label: 'Usuários Ativos', value: '42', icon: Users, color: 'bg-blue-500', change: '+5' },
    { label: 'Receita Mensal', value: 'R$ 8.540', icon: DollarSign, color: 'bg-green-500', change: '+12%' },
    { label: 'Assinaturas', value: '38', icon: CreditCard, color: 'bg-purple-500', change: '+3' },
    { label: 'Crescimento', value: '24%', icon: BarChart3, color: 'bg-yellow-500', change: '+4%' },
  ];

  const recentUsers = [
    { name: 'Carlos Silva', email: 'carlos@email.com', plan: 'Premium', status: 'ativo' },
    { name: 'Ana Costa', email: 'ana@email.com', plan: 'Básico', status: 'ativo' },
    { name: 'João Santos', email: 'joao@email.com', plan: 'Premium', status: 'pendente' },
    { name: 'Maria Oliveira', email: 'maria@email.com', plan: 'Teste', status: 'ativo' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Painel Administrativo</h1>
            <p className="text-gray-600">Gestão completa do sistema</p>
          </div>
          <div className="flex items-center space-x-4">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
              Admin: {user?.name}
            </span>
            <button
              onClick={() => {
                localStorage.removeItem('token');
                localStorage.removeItem('user');
                router.push('/login');
              }}
              className="px-4 py-2 text-gray-600 hover:text-gray-900"
            >
              Sair
            </button>
          </div>
        </div>
      </div>

      {/* Conteúdo */}
      <div className="max-w-7xl mx-auto p-4 md:p-6">
        {/* Métricas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric) => (
            <div key={metric.label} className="bg-white rounded-xl shadow p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">{metric.label}</p>
                  <p className="text-2xl font-bold mt-1">{metric.value}</p>
                  <p className="text-sm text-green-600 mt-1">{metric.change}</p>
                </div>
                <div className={`${metric.color} p-3 rounded-lg`}>
                  <metric.icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tabela de Usuários */}
        <div className="bg-white rounded-xl shadow overflow-hidden mb-8">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold">Usuários Recentes</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Nome</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">E-mail</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Plano</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {recentUsers.map((user, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap font-medium">{user.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">
                        {user.plan}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 rounded text-xs ${
                        user.status === 'ativo' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {user.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button className="text-blue-600 hover:text-blue-800 text-sm mr-3">
                        Editar
                      </button>
                      <button className="text-red-600 hover:text-red-800 text-sm">
                        Bloquear
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Ações Rápidas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-lg font-semibold mb-4">Ações Rápidas</h3>
            <div className="space-y-3">
              <button className="w-full text-left px-4 py-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                Adicionar Novo Usuário
              </button>
              <button className="w-full text-left px-4 py-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                Gerar Relatório Financeiro
              </button>
              <button className="w-full text-left px-4 py-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                Configurar Planos
              </button>
            </div>
          </div>

          <div className="md:col-span-2 bg-white rounded-xl shadow p-6">
            <h3 className="text-lg font-semibold mb-4">Visão Geral do Sistema</h3>
            <p className="text-gray-600 mb-4">
              Sistema de cálculo de remarcação aérea com controle de acesso por assinatura.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">Próximos passos:</p>
                <ul className="mt-2 text-sm text-blue-700 space-y-1">
                  <li>• Integrar calculadora real</li>
                  <li>• Conectar banco de dados</li>
                  <li>• Sistema de pagamentos</li>
                </ul>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <p className="text-sm text-green-800">Status atual:</p>
                <ul className="mt-2 text-sm text-green-700 space-y-1">
                  <li>✅ Sistema de login</li>
                  <li>✅ Painel admin</li>
                  <li>✅ Área protegida</li>
                  <li>🔄 Calculadora</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
