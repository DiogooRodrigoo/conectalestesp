import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import MarqueJaPage from "@/components/servicos/MarqueJaPage";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Marque Já — Conecta Leste SP",
  description:
    "Sistema de agendamento online integrado ao WhatsApp para barbearias, salões e clínicas da Zona Leste de SP.",
};

export default function Page() {
  return (
    <>
      <Navbar />
      <MarqueJaPage />
      <Footer />
    </>
  );
}
