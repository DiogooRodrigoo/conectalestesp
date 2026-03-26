import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import PresencaDigitalPage from "@/components/servicos/PresencaDigitalPage";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Presença Digital — Conecta Leste SP",
  description:
    "Site profissional, Google Meu Negócio otimizado e SEO local para comércios da Zona Leste de SP aparecerem no Google.",
};

export default function Page() {
  return (
    <>
      <Navbar />
      <PresencaDigitalPage />
      <Footer />
    </>
  );
}
