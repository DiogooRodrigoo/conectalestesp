"use client";

import { motion } from "framer-motion";
import {
  Globe,
  ArrowUpRight,
  CheckCircle,
  MagnifyingGlass,
  MapPin,
  DeviceMobile,
  Star,
  Lightning,
} from "@phosphor-icons/react";

const EASE: [number, number, number, number] = [0.32, 0.72, 0, 1];
const fadeUp = (i = 0) => ({
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.65, ease: EASE } },
});

const features = [
  {
    icon: Globe,
    title: "Site Institucional",
    desc: "Página profissional com informações do negócio, serviços, horários, localização e botão direto pro WhatsApp.",
    stat: "Pronto em até 7 dias",
    tag: "Site",
  },
  {
    icon: MagnifyingGlass,
    title: "SEO Local",
    desc: "Otimização para aparecer no Google quando alguém busca 'barbearia perto de mim' ou 'restaurante na [seu bairro]'.",
    stat: "46% das buscas são locais",
    tag: "Google",
  },
  {
    icon: MapPin,
    title: "Google Meu Negócio",
    desc: "Criação e otimização do perfil no Google Maps. Fotos, horários, avaliações e respostas — tudo atualizado.",
    stat: "Apareça no Google Maps",
    tag: "Google Maps",
  },
  {
    icon: DeviceMobile,
    title: "Mobile First",
    desc: "Site projetado para funcionar perfeitamente no celular. A maioria dos clientes vai acessar pelo smartphone.",
    stat: "80% do tráfego é mobile",
    tag: "Mobile",
  },
  {
    icon: Star,
    title: "Gestão de Avaliações",
    desc: "Estratégia para conseguir mais avaliações 5 estrelas no Google e responder feedbacks de forma profissional.",
    stat: "Mais estrelas = mais clientes",
    tag: "Reputação",
  },
  {
    icon: Lightning,
    title: "Carregamento Rápido",
    desc: "Site leve e otimizado que carrega em menos de 2 segundos. Quem espera muito, vai embora.",
    stat: "< 2s de carregamento",
    tag: "Performance",
  },
];

const included = [
  "Domínio personalizado (.com.br)",
  "Hospedagem inclusa no primeiro ano",
  "Formulário de contato",
  "Botão WhatsApp fixo",
  "Google Analytics configurado",
  "Mapa de localização",
  "Galeria de fotos do negócio",
  "Otimização SEO básica",
];

export default function PresencaDigitalPage() {
  return (
    <main className="min-h-screen bg-[#FDFAF6]">
      {/* Hero */}
      <section className="pt-36 pb-20 px-4 max-w-[1280px] mx-auto">
        <div className="max-w-3xl">
          <motion.div
            variants={fadeUp(0)}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap items-center gap-2 mb-6"
          >
            <span className="px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-500 text-[11px] uppercase tracking-[0.18em] font-semibold">
              Serviço
            </span>
            <span className="px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-500 text-[11px] uppercase tracking-[0.18em] font-semibold">
              Sites & Google
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp(1)}
            initial="hidden"
            animate="visible"
            className="text-5xl md:text-6xl font-bold leading-[1.05] tracking-[-0.03em] text-zinc-900 mb-6"
          >
            Seu negócio no
            <br />
            <span className="text-zinc-900">Google,</span>{" "}
            <span className="text-[#F97316]">do jeito certo.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp(2)}
            initial="hidden"
            animate="visible"
            className="text-lg text-zinc-500 leading-relaxed max-w-[52ch] mb-8"
          >
            Site profissional, perfil no Google Meu Negócio otimizado e SEO local para o seu comércio
            aparecer quando o cliente procurar pelo seu bairro.
          </motion.p>

          <motion.div variants={fadeUp(3)} initial="hidden" animate="visible" className="flex flex-wrap gap-3">
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 bg-zinc-900 text-white font-semibold px-6 py-3.5 rounded-full hover:bg-zinc-700 transition-all duration-300 active:scale-[0.97]"
            >
              Quero esse serviço
              <span className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">
                <ArrowUpRight size={14} weight="bold" />
              </span>
            </a>
          </motion.div>
        </div>

        <motion.div
          variants={fadeUp(4)}
          initial="hidden"
          animate="visible"
          className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { value: "46%", label: "das buscas no Google têm intenção local" },
            { value: "76%", label: "visitam o negócio após busca local" },
            { value: "28%", label: "dessas visitas resultam em compra" },
            { value: "7 dias", label: "para o seu site estar no ar" },
          ].map((s) => (
            <div
              key={s.label}
              className="bg-white rounded-2xl border border-zinc-100 p-5 flex flex-col gap-1 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.06)]"
            >
              <span className="text-3xl font-bold tracking-tight text-zinc-900">{s.value}</span>
              <span className="text-xs text-zinc-400 leading-relaxed">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 max-w-[1280px] mx-auto">
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 mb-3">
            O que está incluído
          </h2>
          <p className="text-zinc-500 text-sm max-w-[48ch]">
            Tudo que seu negócio precisa para estar bem posicionado online e converter visitantes em clientes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              variants={fadeUp(i * 0.08)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="bg-white rounded-2xl border border-zinc-100 p-6 flex flex-col gap-4 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_24px_-8px_rgba(0,0,0,0.1)] transition-shadow duration-300"
            >
              <div className="flex items-start justify-between">
                <div className="w-10 h-10 rounded-xl bg-zinc-100 flex items-center justify-center">
                  <f.icon size={20} weight="fill" className="text-zinc-600" />
                </div>
                <span className="px-2 py-0.5 rounded-full bg-zinc-50 border border-zinc-100 text-[10px] font-semibold text-zinc-400 uppercase tracking-wider">
                  {f.tag}
                </span>
              </div>
              <div>
                <h3 className="font-bold text-zinc-900 mb-1">{f.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{f.desc}</p>
              </div>
              <div className="mt-auto pt-2 border-t border-zinc-50">
                <span className="text-xs font-semibold text-zinc-500">{f.stat}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Checklist */}
      <section className="py-20 px-4 max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={fadeUp(0)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 mb-4">
              Entregamos pronto.
              <br />
              <span className="text-[#F97316]">Você só usa.</span>
            </h2>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-[44ch]">
              Cuidamos de domínio, hospedagem, design e publicação. Você só nos passa as fotos e
              informações do negócio — o resto é com a gente.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp(1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3"
          >
            {included.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 bg-white rounded-xl border border-zinc-100 px-4 py-3 shadow-[0_1px_4px_-2px_rgba(0,0,0,0.05)]"
              >
                <CheckCircle size={18} weight="fill" className="text-zinc-700 shrink-0" />
                <span className="text-sm text-zinc-700 font-medium">{item}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="bg-zinc-900 rounded-3xl p-12 flex flex-col items-center gap-6">
            <Globe size={40} weight="fill" className="text-white/40" />
            <h2 className="text-3xl font-bold text-white tracking-tight">
              Seu negócio merece estar bem no Google
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-[40ch]">
              Fale com a gente e descubra como aumentar sua visibilidade online em menos de 2 semanas.
            </p>
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#F97316] text-white font-bold px-8 py-4 rounded-full hover:bg-[#EA580C] transition-all duration-300 active:scale-[0.97]"
            >
              Falar no WhatsApp agora
              <ArrowUpRight size={18} weight="bold" />
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
