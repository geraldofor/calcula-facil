'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SistemaPage() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');
    
    if (!token || !userData) {
      router.push('/login');
      return;
    }
    
    setUser(JSON.parse(userData));
    setLoading(false);
  }, [router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Verificando acesso...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-xl shadow p-6 mb-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Calculadora de Remarcação</h1>
              <p className="text-gray-600">Bem-vindo, {user?.name}!</p>
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

        {/* Conteúdo Principal */}
        <div className="bg-white rounded-xl shadow p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">🚀 Área da Calculadora</h2>
            <p className="text-gray-600">
              Esta é a área protegida onde sua calculadora será carregada.
              Apenas usuários autorizados têm acesso.
            </p>
          </div>

          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🧮</div>
              <h3 className="text-xl font-semibold mb-4">Calculadora em Desenvolvimento</h3>
              <p className="text-gray-600 mb-6 max-w-md mx-auto">
                Seu código HTML/JS da calculadora de remarcação será integrado aqui em breve.
              </p>
              
              <div className="bg-gray-100 rounded-lg p-6 max-w-md mx-auto mb-6">
                <h4 className="font-bold mb-2">Status do Sistema:</h4>
                <ul className="text-left space-y-2 text-gray-700">
                  <li>✅ Sistema de login funcionando</li>
                  <li>✅ Área protegida ativa</li>
                  <li>🔄 Calculadora a ser integrada</li>
                  <li>🔄 Dashboard admin em teste</li>
                </ul>
              </div>

              <button
                onClick={() => alert('Em breve: calculadora completa!')}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Testar Versão Demo
              </button>
            </div>
          </div>
        </div>

        {/* Informações */}
        <div className="mt-6 bg-blue-50 rounded-xl p-6">
          <h3 className="font-bold text-blue-800 mb-2">Próxima Etapa:</h3>
          <p className="text-blue-700">
            Assim que o sistema básico estiver testado, vamos integrar sua calculadora HTML completa nesta área.
          </p>
        </div>
      </div>
    </div>
  );
}
