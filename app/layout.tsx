import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Conecta Leste SP — Marketing Digital para Comércios de Bairro",
  description:
    "Transformamos comércios locais da Zona Leste de São Paulo em marcas digitais fortes. Social Media, Sites, Agendamento Online, Vitrine Digital e Persona IA.",
  keywords:
    "marketing digital zona leste, agencia marketing sao paulo, gestao redes sociais, instagram barbearia, site para comercio local",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={outfit.className}>
      <body className="bg-[#FDFAF6] text-zinc-900 antialiased">
        {children}
      </body>
    </html>
  );
}
