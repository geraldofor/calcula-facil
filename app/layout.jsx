import './globals.css';

export const metadata = {
  title: 'Calcula Fácil - Dashboard',
  description: 'Sistema Unificado de Reservas',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
}
