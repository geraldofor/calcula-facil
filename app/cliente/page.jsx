export default function ClientePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Área do Cliente</h1>
        <p className="text-gray-600 mb-6">
          Esta área está em desenvolvimento. Em breve, seus clientes poderão:
        </p>
        <div className="bg-white rounded-xl shadow p-6 mb-6">
          <ul className="text-left space-y-3 text-gray-700">
            <li className="flex items-center">
              <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
              <span>Visualizar histórico de cálculos</span>
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
              <span>Gerenciar sua assinatura</span>
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
              <span>Baixar relatórios</span>
            </li>
          </ul>
        </div>
        <a
          href="/sistema"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold"
        >
          Ir para Calculadora
        </a>
      </div>
    </div>
  );
}
