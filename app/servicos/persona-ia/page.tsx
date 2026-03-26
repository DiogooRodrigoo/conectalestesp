import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import PersonaIAPage from "@/components/servicos/PersonaIAPage";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Persona IA — Conecta Leste SP",
  description:
    "Avatar digital com identidade visual, voz e personalidade únicas para representar sua marca 24h por dia nas redes sociais.",
};

export default function Page() {
  return (
    <>
      <Navbar />
      <PersonaIAPage />
      <Footer />
    </>
  );
}
