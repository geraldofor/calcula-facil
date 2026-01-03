'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ShieldAlert } from 'lucide-react';

export default function SistemaPage() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Verificar se usuário está logado
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');
    
    if (!token || !userData) {
      router.push('/login');
      return;
    }
    
    setUser(JSON.parse(userData));
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Verificando acesso...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Protegido */}
      <div className="bg-white shadow border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Calculadora de Remarcação</h1>
            <p className="text-gray-600">
              Olá, <span className="font-semibold">{user.name}</span> • Plano: {user.plan}
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
              ✓ Acesso Ativo
            </div>
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

      {/* Área da Calculadora */}
      <div className="max-w-7xl mx-auto p-6">
        <div className="bg-white rounded-xl shadow p-8">
          <div className="flex items-center mb-6">
            <ShieldAlert className="w-6 h-6 text-green-600 mr-3" />
            <h2 className="text-xl font-semibold">Área Protegida</h2>
          </div>
          
          <div className="p-6 border-2 border-dashed border-gray-300 rounded-lg text-center">
            <p className="text-lg mb-4">🎉 <strong>Parabéns!</strong> Você tem acesso à área premium.</p>
            <p className="text-gray-600 mb-6">
              Aqui será carregada a <strong>Calculadora de Remarcação Aérea</strong> completa.
            </p>
            
            <div className="max-w-2xl mx-auto bg-gray-100 p-6 rounded-lg">
              <h3 className="font-bold mb-4">Próximos passos:</h3>
              <ol className="text-left list-decimal pl-5 space-y-2 text-gray-700">
                <li>Integrar seu código HTML/JS da calculadora aqui</li>
                <li>Conectar com banco de dados para salvar cálculos</li>
                <li>Implementar sistema real de pagamentos</li>
                <li>Adicionar histórico de cálculos por usuário</li>
              </ol>
            </div>
            
            <button
              onClick={() => alert('Em breve: calculadora funcional!')}
              className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Testar Calculadora (Em Breve)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
