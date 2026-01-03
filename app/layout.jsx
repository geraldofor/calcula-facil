import './globals.css';
import Navigation from '../components/Navigation';

export const metadata = {
  title: 'Calcula Fácil - Sistema de Reservas',
  description: 'Sistema Unificado de Reservas e Cálculos',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <Navigation />
        <main>{children}</main>
        <footer className="bg-gray-800 text-white p-6 mt-8">
          <div className="max-w-7xl mx-auto text-center">
            <p>© 2024 Calcula Fácil. Todos os direitos reservados.</p>
            <p className="text-sm text-gray-400 mt-2">Sistema de gestão de reservas e cálculos financeiros</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
