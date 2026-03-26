"use client";

import { motion } from "framer-motion";
import {
  Megaphone,
  ArrowUpRight,
  CheckCircle,
  WhatsappLogo,
  Target,
  Tag,
  Timer,
  ChartBar,
} from "@phosphor-icons/react";

const EASE: [number, number, number, number] = [0.32, 0.72, 0, 1];
const fadeUp = (i = 0) => ({
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.65, ease: EASE } },
});

const features = [
  {
    icon: Target,
    title: "Alta Conversão",
    desc: "Página criada com foco em uma única ação: o cliente entrar em contato ou comprar. Sem distração, sem saída.",
    stat: "Até 5x mais conversão",
    tag: "Conversão",
  },
  {
    icon: WhatsappLogo,
    title: "WhatsApp Direto",
    desc: "Botão de WhatsApp proeminente na página. Com um clique, o cliente já está no chat pronto para comprar.",
    stat: "Contato imediato",
    tag: "WhatsApp",
  },
  {
    icon: Tag,
    title: "Promoções e Ofertas",
    desc: "Ideal para divulgar promoções relâmpago, liquidações, combos e ofertas especiais com prazo e urgência.",
    stat: "Urgência que converte",
    tag: "Promoção",
  },
  {
    icon: Timer,
    title: "Contador Regressivo",
    desc: "Contador de tempo que aumenta a urgência e incentiva o cliente a agir agora, não depois.",
    stat: "+23% de cliques com timer",
    tag: "Urgência",
  },
  {
    icon: Megaphone,
    title: "Campanhas Sazonais",
    desc: "Páginas criadas para datas especiais: Dia das Mães, Black Friday, Natal, Dia do Cliente e muito mais.",
    stat: "Uma página por campanha",
    tag: "Campanha",
  },
  {
    icon: ChartBar,
    title: "Rastreamento de Resultados",
    desc: "Pixel de rastreamento instalado para saber quantas pessoas visitaram, de onde vieram e quantas converteram.",
    stat: "Resultado mensurável",
    tag: "Analytics",
  },
];

const useCases = [
  { title: "Promoção relâmpago", desc: "Oferta de 24 a 72h com desconto especial para atrair movimento rápido." },
  { title: "Lançamento de serviço", desc: "Página exclusiva para divulgar um serviço novo com condições especiais." },
  { title: "Combo promocional", desc: "Pacote de serviços com preço especial e prazo limitado." },
  { title: "Campanha sazonal", desc: "Black Friday, Dia das Mães, Natal — aproveite as datas de alta demanda." },
];

const included = [
  "Layout focado em conversão",
  "Botão WhatsApp destacado",
  "Contador regressivo (opcional)",
  "Galeria de fotos do produto/serviço",
  "Depoimentos de clientes",
  "Pixel de rastreamento instalado",
  "Link encurtado para divulgação",
  "Compatível com Stories e anúncios",
];

export default function VitrinaDigitalPage() {
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
              Landing Pages
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp(1)}
            initial="hidden"
            animate="visible"
            className="text-5xl md:text-6xl font-bold leading-[1.05] tracking-[-0.03em] text-zinc-900 mb-6"
          >
            Uma página que
            <br />
            <span className="text-[#F97316]">vende sua promoção.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp(2)}
            initial="hidden"
            animate="visible"
            className="text-lg text-zinc-500 leading-relaxed max-w-[52ch] mb-8"
          >
            Landing pages criadas para converter. Você divulga nos Stories, no WhatsApp ou em anúncios
            — e o cliente chega numa página feita só para ele agir.
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
            { value: "5x", label: "mais conversão que um post no Instagram" },
            { value: "72h", label: "para sua vitrine estar no ar e pronta" },
            { value: "+23%", label: "de cliques com contador regressivo" },
            { value: "100%", label: "focado em gerar contato ou venda" },
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
            Cada vitrine é pensada para um objetivo claro: transformar visitante em cliente.
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

      {/* Use cases + Checklist */}
      <section className="py-20 px-4 max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            variants={fadeUp(0)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900 mb-6">
              Quando usar a Vitrine Digital
            </h2>
            <div className="flex flex-col gap-3">
              {useCases.map((u) => (
                <div
                  key={u.title}
                  className="bg-white rounded-xl border border-zinc-100 p-5 shadow-[0_1px_4px_-2px_rgba(0,0,0,0.05)]"
                >
                  <p className="font-semibold text-zinc-900 text-sm mb-1">{u.title}</p>
                  <p className="text-xs text-zinc-500 leading-relaxed">{u.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp(1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900 mb-6">
              O que você recebe
            </h2>
            <div className="flex flex-col gap-2">
              {included.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 bg-white rounded-xl border border-zinc-100 px-4 py-3 shadow-[0_1px_4px_-2px_rgba(0,0,0,0.05)]"
                >
                  <CheckCircle size={18} weight="fill" className="text-zinc-700 shrink-0" />
                  <span className="text-sm text-zinc-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
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
          className="max-w-2xl mx-auto"
        >
          <div className="bg-zinc-900 rounded-3xl p-12 flex flex-col items-center text-center gap-6">
            <Megaphone size={40} weight="fill" className="text-white/40" />
            <h2 className="text-3xl font-bold text-white tracking-tight">
              Sua próxima promoção merece uma vitrine
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-[40ch]">
              Entre em contato e receba sua Vitrine Digital pronta em até 72 horas.
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
