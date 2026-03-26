import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import VitrinaDigitalPage from "@/components/servicos/VitrinaDigitalPage";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Vitrine Digital — Conecta Leste SP",
  description:
    "Landing pages de alta conversão para promoções, campanhas e lançamentos de comércios locais da Zona Leste de SP.",
};

export default function Page() {
  return (
    <>
      <Navbar />
      <VitrinaDigitalPage />
      <Footer />
    </>
  );
}
