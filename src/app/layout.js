import { Inter } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
const inter = Inter({ subsets: ["latin"] });
import Head from '../components/Head';

export const metadata = {
  title: "SOS Bairro São Luis",
  description: "SOS Bairro São Luis - Aplicativo criado para auxiliar as pessoas que perdem seus bens devido as enchentes de maio de 2024.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Head />
        {children}
        </body>
    </html>
  );
}
