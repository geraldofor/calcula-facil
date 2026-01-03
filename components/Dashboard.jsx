'use client';

export default function Dashboard() {
  const stats = [
    { label: 'Usuários Ativos', value: 128, color: 'bg-green-500', icon: '👥' },
    { label: 'Assinaturas Ativas', value: 85, color: 'bg-blue-500', icon: '💰' },
    { label: 'Limites Atingidos', value: 23, color: 'bg-yellow-500', icon: '⚠️' },
    { label: 'Pendentes de Pagamento', value: 6, color: 'bg-red-500', icon: '⏰' },
  ];

  const users = [
    { name: 'Geraldo Souza', email: 'geraldo@exemplo.com', status: 'ativo', lastAccess: '28/04/2024' },
    { name: 'Maria Lima', email: 'maria@exemplo.com', status: 'pendente', lastAccess: '25/04/2024' },
    { name: 'Carlos Silva', email: 'carlos@exemplo.com', status: 'bloqueado', lastAccess: '20/04/2024' },
    { name: 'Ana Reis', email: 'ana@exemplo.com', status: 'ativo', lastAccess: '18/04/2024' },
  ];

  const getStatusBadge = (status) => {
    const styles = {
      ativo: 'bg-green-100 text-green-800',
      pendente: 'bg-yellow-100 text-yellow-800',
      bloqueado: 'bg-red-100 text-red-800',
    };
    const text = {
      ativo: 'Ativo',
      pendente: 'Pagamento Pendente',
      bloqueado: 'Bloqueado',
    };
    return <span className={`px-3 py-1 rounded-full text-sm ${styles[status]}`}>{text[status]}</span>;
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">PAINEL ADMINISTRATIVO</h1>
            <p className="text-gray-600">Sistema Unificado de Reservas</p>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-700">
              Olá, <span className="font-semibold">Administrador</span>
            </span>
            <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
              Sair
            </button>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Visão Geral</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white p-6 rounded-xl shadow border hover:shadow-md transition">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center">
                    <div className={`w-3 h-3 ${stat.color} rounded-full mr-2`}></div>
                    <h3 className="text-lg font-semibold text-gray-700">{stat.label}</h3>
                  </div>
                  <p className="text-3xl font-bold mt-2">{stat.value}</p>
                </div>
                <span className="text-2xl">{stat.icon}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Users Table */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Gerenciamento de Usuários</h2>
        <div className="bg-white rounded-xl shadow overflow-hidden">
          <table className="min-w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Nome</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">E-mail</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Status</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Último Acesso</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {users.map((user, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 font-medium">{user.name}</td>
                  <td className="px-6 py-4">{user.email}</td>
                  <td className="px-6 py-4">{getStatusBadge(user.status)}</td>
                  <td className="px-6 py-4">{user.lastAccess}</td>
                  <td className="px-6 py-4 space-x-2">
                    {user.status === 'ativo' && (
                      <>
                        <button className="text-blue-600 hover:text-blue-800">Editar</button>
                        <button className="text-red-600 hover:text-red-800">Bloquear</button>
                      </>
                    )}
                    {user.status === 'pendente' && (
                      <button className="text-green-600 hover:text-green-800">Cobrar</button>
                    )}
                    {user.status === 'bloqueado' && (
                      <button className="text-green-600 hover:text-green-800">Desbloquear</button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
