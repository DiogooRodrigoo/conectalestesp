import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import SocialMediaPage from "@/components/servicos/SocialMediaPage";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Social Media — Conecta Leste SP",
  description:
    "Gestão completa de Instagram e TikTok para comércios locais da Zona Leste de SP. Stories, Reels, carrosséis e tráfego pago para atrair clientes todo dia.",
};

export default function Page() {
  return (
    <>
      <Navbar />
      <SocialMediaPage />
      <Footer />
    </>
  );
}
