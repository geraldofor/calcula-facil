'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Calculator, Shield, LogOut } from 'lucide-react';

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
    <div className="min-h-screen bg-gray-50">
      {/* ÚNICO HEADER - SEM NAVIGATION GLOBAL */}
      <div className="bg-white shadow-lg border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Shield className="w-8 h-8 text-green-600 mr-3" />
              <div>
                <h1 className="text-xl font-bold text-gray-900">Calculadora de Remarcação Aérea</h1>
                <p className="text-sm text-gray-600">
                  Acesso autorizado • <span className="font-semibold">{user?.name}</span>
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                ✓ Plano Ativo
              </span>
              <button
                onClick={() => {
                  localStorage.removeItem('token');
                  localStorage.removeItem('user');
                  router.push('/login');
                }}
                className="flex items-center px-4 py-2 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Sair
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div className="max-w-4xl mx-auto p-4 md:p-6">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <Calculator className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Área da Calculadora</h2>
            <p className="text-gray-600">
              Esta área está protegida. Sua calculadora será carregada aqui.
            </p>
          </div>

          <div className="border-2 border-dashed border-gray-300 rounded-xl p-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-4">Em Desenvolvimento</h3>
              <p className="text-gray-600 mb-6">
                Seu sistema de acesso está funcionando! Próximo passo: integrar a calculadora.
              </p>
              
              <div className="bg-gray-100 rounded-lg p-6 max-w-md mx-auto mb-6 text-left">
                <h4 className="font-bold mb-3">Status atual:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    <span>Sistema de login funcionando</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    <span>Área protegida ativa</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-yellow-600 rounded-full mr-3"></div>
                    <span>Calculadora a ser integrada</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={() => alert('Calculadora em desenvolvimento!')}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold"
              >
                Testar Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
