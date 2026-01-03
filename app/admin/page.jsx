'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Users, DollarSign, CreditCard, BarChart3 } from 'lucide-react';

export default function AdminPage() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    
    if (!userData) {
      router.push('/login');
      return;
    }
    
    const parsedUser = JSON.parse(userData);
    
    // Permissão simples: qualquer usuário logado pode ver (PARA TESTE)
    // DEPOIS mudar para verificação real de admin
    setUser(parsedUser);
    setLoading(false);
  }, [router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Carregando...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Painel Administrativo</h1>
            <p className="text-gray-600">Bem-vindo, {user?.name}</p>
          </div>
          <button
            onClick={() => {
              localStorage.removeItem('token');
              localStorage.removeItem('user');
              router.push('/login');
            }}
            className="px-4 py-2 text-red-600 hover:text-red-800"
          >
            Sair
          </button>
        </div>
      </div>

      {/* Conteúdo */}
      <div className="max-w-7xl mx-auto p-6">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Dashboard Admin</h2>
            <p className="text-gray-600">
              Esta é a área administrativa do sistema. Aqui você controlará usuários, pagamentos e acessos.
            </p>
          </div>

          {/* Métricas */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              { label: 'Usuários', value: '42', icon: Users, color: 'bg-blue-500' },
              { label: 'Receita', value: 'R$ 8.540', icon: DollarSign, color: 'bg-green-500' },
              { label: 'Assinaturas', value: '38', icon: CreditCard, color: 'bg-purple-500' },
              { label: 'Crescimento', value: '24%', icon: BarChart3, color: 'bg-yellow-500' },
            ].map((metric) => (
              <div key={metric.label} className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center">
                  <div className={`${metric.color} p-3 rounded-lg mr-4`}>
                    <metric.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">{metric.label}</p>
                    <p className="text-xl font-bold">{metric.value}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mensagem */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">Próximos Passos</h3>
            <p className="text-blue-700 mb-4">
              Para tornar este painel completamente funcional, precisamos:
            </p>
            <ul className="space-y-2 text-blue-600">
              <li>• Conectar com banco de dados (Supabase)</li>
              <li>• Implementar sistema real de usuários</li>
              <li>• Integrar com Stripe para pagamentos</li>
              <li>• Adicionar proteção de admin real</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
