'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Calculator, Shield } from 'lucide-react';

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
          <div className="flex items-center">
            <Shield className="w-6 h-6 text-green-600 mr-3" />
            <div>
              <h1 className="text-xl font-bold text-gray-900">Calculadora de Remarcação</h1>
              <p className="text-sm text-gray-600">Bem-vindo, {user?.name}</p>
            </div>
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
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <Calculator className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Calculadora de Remarcação Aérea
            </h2>
            <p className="text-gray-600">
              Área protegida - Em breve sua calculadora será integrada aqui
            </p>
          </div>

          <div className="border-2 border-dashed border-gray-300 rounded-xl p-8">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-4">🚀 Em Desenvolvimento</h3>
              <p className="text-gray-600 mb-6">
                Sua calculadora HTML/JS será carregada nesta área em breve.
              </p>
              
              <div className="bg-gray-100 rounded-lg p-6 max-w-md mx-auto text-left mb-6">
                <h4 className="font-bold mb-2">Para testar agora:</h4>
                <ol className="list-decimal pl-5 space-y-1 text-gray-700">
                  <li>O sistema de login está funcionando</li>
                  <li>Área protegida está ativa</li>
                  <li>Dashboard admin está acessível</li>
                </ol>
              </div>

              <button
                onClick={() => alert('Calculadora em desenvolvimento!')}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Testar Versão Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
