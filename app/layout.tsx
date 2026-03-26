import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const SITE_URL = "https://conectaleste.com.br"; // atualizar quando tiver domínio

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Conecta Leste SP | Agência de Marketing Digital na Zona Leste de SP",
    template: "%s | Conecta Leste SP",
  },

  description:
    "Gestão de redes sociais, sites e presença digital para comércios da Zona Leste de SP. Do bairro pro digital — comece hoje.",

  keywords: [
    "agência de marketing digital zona leste",
    "marketing digital zona leste SP",
    "agência de redes sociais zona leste",
    "gestão de instagram zona leste São Paulo",
    "agência de social media para pequenas empresas SP",
    "marketing digital para barbearia zona leste",
    "marketing digital para restaurante zona leste",
    "marketing digital para salão de beleza SP",
    "marketing para clínica zona leste",
    "criação de site para comércio local SP",
    "gestão de Google Meu Negócio zona leste",
    "agendamento online para salão barbearia",
    "landing page para comércio SP",
    "agência de marketing Itaquera",
    "agência de marketing Tatuapé",
    "agência de marketing Penha São Paulo",
    "agência de marketing Guaianases",
    "agência de marketing São Mateus",
    "agência de marketing Cidade Tiradentes",
    "agência de marketing Sapopemba",
    "marketing digital Vila Formosa",
    "como aparecer no Google zona leste SP",
  ],

  authors: [{ name: "Conecta Leste SP" }],
  creator: "Conecta Leste SP",
  publisher: "Conecta Leste SP",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: "Conecta Leste SP",
    title: "Conecta Leste SP | Marketing Digital para Comércios da Zona Leste",
    description:
      "Gestão de redes sociais, sites e presença digital para comércios da Zona Leste de SP. Do bairro pro digital — comece hoje.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Conecta Leste SP | Marketing Digital para Comércios da Zona Leste",
    description:
      "Gestão de redes sociais, sites e presença digital para comércios da Zona Leste de SP. Do bairro pro digital — comece hoje.",
  },

  other: {
    "geo.region": "BR-SP",
    "geo.placename": "Zona Leste, São Paulo, SP",
    "geo.position": "-23.5489;-46.4731",
    ICBM: "-23.5489, -46.4731",
  },
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
