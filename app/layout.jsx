import './globals.css';
import Navigation from '../components/Navigation';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Calcula Fácil - Sistema de Reservas',
  description: 'Sistema Unificado de Reservas e Cálculos',
};

export default function RootLayout({ children }) {
  // Verificar se estamos em uma página que NÃO deve ter o Navigation
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '';
  const hideNavigation = ['/sistema', '/admin'].includes(pathname);

  return (
    <html lang="pt-BR" className={inter.className}>
      <body>
        {!hideNavigation && <Navigation />}
        <main>{children}</main>
        {!hideNavigation && (
          <footer className="bg-gray-800 text-white p-6 mt-8">
            <div className="max-w-7xl mx-auto text-center">
              <p>© 2024 Calcula Fácil. Todos os direitos reservados.</p>
              <p className="text-sm text-gray-400 mt-2">Sistema de gestão de reservas e cálculos financeiros</p>
            </div>
          </footer>
        )}
      </body>
    </html>
  );
}
