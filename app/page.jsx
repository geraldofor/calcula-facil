import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Sistema Completo de <span className="text-blue-600">Reservas e Cálculos</span>
        </h1>
        <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
          Automatize sua gestão de reservas, cálculos financeiros e pagamentos com uma plataforma tudo-em-um.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link 
            href="/app" 
            className="px-8 py-4 bg-blue-600 text-white rounded-xl text-lg font-semibold hover:bg-blue-700 transition shadow-lg"
          >
            Começar Agora Gratuitamente
          </Link>
          <Link 
            href="/admin" 
            className="px-8 py-4 bg-white text-blue-600 border-2 border-blue-600 rounded-xl text-lg font-semibold hover:bg-blue-50 transition"
          >
            Acessar Painel Admin
          </Link>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { title: 'Dashboard Admin', desc: 'Controle completo de usuários e métricas', icon: '📊', link: '/admin' },
            { title: 'Sistema Operacional', desc: 'Cadastro de reservas e cálculos', icon: '⚙️', link: '/app' },
            { title: 'Área do Cliente', desc: 'Autoatendimento para seus clientes', icon: '👤', link: '/cliente' },
          ].map((feature) => (
            <Link 
              key={feature.title}
              href={feature.link}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition cursor-pointer"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
              <div className="mt-4 text-blue-600 font-semibold">Acessar →</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
