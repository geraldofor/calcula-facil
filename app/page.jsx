'use client';

import Card from './components/Card';

export default function SistemaPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Sistema de Cálculos
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card Tarifas */}
        <Card>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-100 rounded-lg">
              <span className="text-blue-600">💰</span>
            </div>
            <h2 className="text-lg font-semibold">Tarifas</h2>
          </div>
          <p className="text-gray-600 mb-4">
            Cálculo de tarifas aéreas com taxas, RAV e FEE.
          </p>
          <a 
            href="/sistema/tarifas" 
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition"
          >
            Acessar
          </a>
        </Card>

        {/* Card Conversor */}
        <Card>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-green-100 rounded-lg">
              <span className="text-green-600">🔄</span>
            </div>
            <h2 className="text-lg font-semibold">Conversor</h2>
          </div>
          <p className="text-gray-600 mb-4">
            Decodificação de itinerários aéreos.
          </p>
          <a 
            href="/sistema/conversor" 
            className="inline-block bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition"
          >
            Acessar
          </a>
        </Card>

        {/* Card Reemissão */}
        <Card>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-purple-100 rounded-lg">
              <span className="text-purple-600">✈️</span>
            </div>
            <h2 className="text-lg font-semibold">Reemissão</h2>
          </div>
          <p className="text-gray-600 mb-4">
            Cálculo de reemissão Amadeus e outros GDS.
          </p>
          <a 
            href="/sistema/reemissao" 
            className="inline-block bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-700 transition"
          >
            Acessar
          </a>
        </Card>
      </div>

      {/* Status */}
      <Card className="mt-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-gray-700">Status do Sistema</h3>
            <p className="text-sm text-gray-500">Todos os módulos operacionais</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-green-600 font-medium">Online</span>
          </div>
        </div>
      </Card>
    </div>
  );
}
