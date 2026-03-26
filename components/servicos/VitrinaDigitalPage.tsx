"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  MegaphoneIcon,
  ArrowUpRightIcon,
  CheckCircleIcon,
} from "@phosphor-icons/react";

const EASE: [number, number, number, number] = [0.32, 0.72, 0, 1];
const fadeUp = (i = 0) => ({
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { delay: i * 0.07, duration: 0.65, ease: EASE } },
});

// ─── Tag Badge ───────────────────────────────────────────────────────────────

const tagStyles: Record<string, string> = {
  Conversão: "bg-[#F97316] text-white",
  WhatsApp: "bg-[#25D366] text-white",
  Promoção: "bg-[#F59E0B] text-white",
  Urgência: "bg-red-500 text-white",
  Campanha: "bg-[#6366F1] text-white",
  Analytics: "bg-[#10B981] text-white",
};

function TagBadge({ tag }: { tag: string }) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider ${tagStyles[tag] ?? "bg-zinc-100 text-zinc-500"}`}
    >
      {tag}
    </span>
  );
}

// ─── iPhone Frame ─────────────────────────────────────────────────────────────

function IPhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative shrink-0" style={{ width: 136, height: 274 }}>
      <div className="absolute inset-0 rounded-[2.4rem] bg-zinc-800 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.45)]" />
      <div className="absolute inset-[3.5px] rounded-[2.1rem] bg-zinc-950 overflow-hidden">
        <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-10 h-2.5 bg-black rounded-full z-30" />
        <div className="absolute inset-0 overflow-hidden rounded-[2.05rem]">
          {children}
        </div>
      </div>
      <div className="absolute -right-1.25 top-16.5 w-1 h-8 bg-zinc-600 rounded-r-sm" />
      <div className="absolute -left-1.25 top-10 w-1 h-3 bg-zinc-600 rounded-l-sm" />
      <div className="absolute -left-1.25 top-14.5 w-1 h-6 bg-zinc-600 rounded-l-sm" />
      <div className="absolute -left-1.25 top-22 w-1 h-6 bg-zinc-600 rounded-l-sm" />
    </div>
  );
}

// ─── Mockups ──────────────────────────────────────────────────────────────────

function MockupConversao({ hovered }: { hovered: boolean }) {
  return (
    <div className="w-full h-full bg-white flex flex-col pt-8">
      <div className="mx-3 rounded-xl bg-zinc-900 p-3 flex flex-col items-center gap-1.5">
        <div className="w-8 h-8 rounded-full bg-zinc-700 flex items-center justify-center">
          <span className="text-white text-[8px] font-black">L</span>
        </div>
        <span className="text-white text-[8px] font-bold">Desconto Especial</span>
        <span className="text-zinc-400 text-[6px]">Só por tempo limitado</span>
      </div>
      <div className="px-3 pt-3">
        <motion.div
          animate={{ scale: hovered ? 1.03 : 1 }}
          transition={{ duration: 0.25 }}
          className="bg-[#F97316] rounded-lg py-2 text-center"
        >
          <span className="text-white text-[7px] font-bold">Quero aproveitar →</span>
        </motion.div>
      </div>
      <div className="px-3 pt-3 flex flex-col gap-1.5">
        {[70, 55, 80].map((w, i) => (
          <div key={i} className="h-1.5 rounded-full bg-zinc-100" style={{ width: `${w}%` }} />
        ))}
      </div>
    </div>
  );
}

function MockupWhatsAppBtn({ hovered }: { hovered: boolean }) {
  return (
    <div className="w-full h-full bg-white flex flex-col pt-8 relative">
      <div className="px-3 flex flex-col gap-1.5 pt-2">
        {[80, 65, 90, 50, 70].map((w, i) => (
          <div key={i} className="h-1.5 rounded-full bg-zinc-100" style={{ width: `${w}%` }} />
        ))}
      </div>
      <div className="absolute bottom-0 left-0 right-0 px-3 pb-3">
        <motion.div
          animate={{ scale: hovered ? [1, 1.03, 1] : 1 }}
          transition={{ duration: 0.8, repeat: hovered ? Infinity : 0 }}
          className="rounded-lg py-2 text-center flex items-center justify-center gap-1.5"
          style={{ background: "#25D366" }}
        >
          <span className="text-white text-[8px]">💬</span>
          <span className="text-white text-[7px] font-bold">Falar no WhatsApp</span>
        </motion.div>
      </div>
    </div>
  );
}

function MockupPromocao({ hovered: _ }: { hovered: boolean }) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center pt-8 bg-linear-to-b from-[#F97316] to-[#EA580C]">
      <span className="text-white/70 text-[7px] uppercase tracking-widest font-semibold mb-2">
        Promoção
      </span>
      <span className="text-white font-black leading-none" style={{ fontSize: 36 }}>
        30% OFF
      </span>
      <span className="text-orange-100 text-[8px] mt-1">Só hoje!</span>
      <div className="mt-3 bg-white/20 rounded-full px-3 py-1">
        <span className="text-white text-[7px] font-semibold">🔥 Limitado</span>
      </div>
    </div>
  );
}

function MockupTimer({ hovered }: { hovered: boolean }) {
  return (
    <div className="w-full h-full bg-zinc-950 flex flex-col items-center justify-center pt-8 px-3">
      <span className="text-zinc-400 text-[8px] mb-2">Oferta expira em</span>
      <div className="flex items-baseline gap-0.5">
        <span className="text-red-400 font-black font-mono" style={{ fontSize: 28 }}>
          01:23:
        </span>
        <motion.span
          animate={{ opacity: hovered ? [1, 0, 1] : 1 }}
          transition={{ duration: 1, repeat: hovered ? Infinity : 0 }}
          className="text-red-400 font-black font-mono"
          style={{ fontSize: 28 }}
        >
          {hovered ? "44" : "45"}
        </motion.span>
      </div>
      <span className="text-zinc-500 text-[7px] mt-2">Não perca!</span>
    </div>
  );
}

function MockupCampanha({ hovered: _ }: { hovered: boolean }) {
  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center pt-8 px-3"
      style={{ background: "linear-gradient(to bottom, #1a1a2e, #16213e)" }}
    >
      <div className="flex gap-1 mb-2">
        {["✦", "✦", "✦"].map((s, i) => (
          <span key={i} className="text-white/20 text-[8px]">{s}</span>
        ))}
      </div>
      <span className="text-white font-black text-xl tracking-tight leading-tight text-center">
        BLACK<br />FRIDAY
      </span>
      <span className="text-yellow-400 font-bold text-sm mt-1">Até 60% OFF</span>
      <span className="text-white/50 text-[7px] mt-1.5">22 Nov</span>
      <div className="flex gap-1 mt-2">
        {["★", "★", "★"].map((s, i) => (
          <span key={i} className="text-white/20 text-[8px]">{s}</span>
        ))}
      </div>
    </div>
  );
}

function MockupAnalytics({ hovered }: { hovered: boolean }) {
  return (
    <div className="w-full h-full bg-zinc-950 flex flex-col pt-8 px-3">
      <span className="text-white text-[8px] font-bold mb-2">Resultados</span>
      <div className="flex flex-col gap-1.5">
        {[
          { label: "Visitas", value: "1.247", color: "text-white" },
          { label: "Conversão", value: "4.2%", color: "text-[#10B981]" },
          { label: "Contatos", value: "52", color: "text-[#10B981]" },
        ].map((m) => (
          <div key={m.label} className="bg-white/5 rounded-lg px-2 py-1.5 flex items-center justify-between">
            <span className="text-zinc-400 text-[7px]">{m.label}</span>
            <span className={`font-bold text-[8px] ${m.color}`}>{m.value}</span>
          </div>
        ))}
      </div>
      <div className="mt-2 h-1 rounded-full bg-white/10 overflow-hidden">
        <motion.div
          animate={{ width: hovered ? "62%" : "30%" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="h-full bg-[#10B981] rounded-full"
        />
      </div>
      <span className="text-zinc-500 text-[6px] mt-1">Taxa de conversão</span>
    </div>
  );
}

// ─── Feature Type & Data ──────────────────────────────────────────────────────

type Feature = {
  title: string;
  desc: string;
  stat: string;
  tag: string;
  glowColor: string;
  mockup: (hovered: boolean) => React.ReactNode;
};

const features: Feature[] = [
  {
    title: "Alta Conversão",
    desc: "Página criada com foco em uma única ação: o cliente entrar em contato ou comprar. Sem distração, sem saída.",
    stat: "Até 5x mais conversão",
    tag: "Conversão",
    glowColor: "rgba(249,115,22,0.15)",
    mockup: (h) => <MockupConversao hovered={h} />,
  },
  {
    title: "WhatsApp Direto",
    desc: "Botão de WhatsApp proeminente na página. Com um clique, o cliente já está no chat pronto para comprar.",
    stat: "Contato imediato",
    tag: "WhatsApp",
    glowColor: "rgba(37,211,102,0.15)",
    mockup: (h) => <MockupWhatsAppBtn hovered={h} />,
  },
  {
    title: "Promoções e Ofertas",
    desc: "Ideal para divulgar promoções relâmpago, liquidações, combos e ofertas especiais com prazo e urgência.",
    stat: "Urgência que converte",
    tag: "Promoção",
    glowColor: "rgba(245,158,11,0.15)",
    mockup: (h) => <MockupPromocao hovered={h} />,
  },
  {
    title: "Contador Regressivo",
    desc: "Contador de tempo que aumenta a urgência e incentiva o cliente a agir agora, não depois.",
    stat: "+23% de cliques com timer",
    tag: "Urgência",
    glowColor: "rgba(239,68,68,0.15)",
    mockup: (h) => <MockupTimer hovered={h} />,
  },
  {
    title: "Campanhas Sazonais",
    desc: "Páginas criadas para datas especiais: Dia das Mães, Black Friday, Natal, Dia do Cliente e muito mais.",
    stat: "Uma página por campanha",
    tag: "Campanha",
    glowColor: "rgba(99,102,241,0.15)",
    mockup: (h) => <MockupCampanha hovered={h} />,
  },
  {
    title: "Rastreamento de Resultados",
    desc: "Pixel de rastreamento instalado para saber quantas pessoas visitaram, de onde vieram e quantas converteram.",
    stat: "Resultado mensurável",
    tag: "Analytics",
    glowColor: "rgba(16,185,129,0.15)",
    mockup: (h) => <MockupAnalytics hovered={h} />,
  },
];

// ─── Feature Card ─────────────────────────────────────────────────────────────

function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      variants={fadeUp(index * 0.07)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      whileHover={{ y: -4 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      transition={{ duration: 0.3, ease: EASE }}
      style={{
        boxShadow: hovered
          ? `0 20px 48px -12px ${feature.glowColor}, 0 4px 16px -4px rgba(0,0,0,0.08)`
          : "0 2px 12px -4px rgba(0,0,0,0.06)",
      }}
      className="bg-white rounded-2xl border border-zinc-100 overflow-hidden flex flex-col transition-shadow duration-300"
    >
      <div
        className="h-75 w-full flex items-center justify-center relative overflow-hidden"
        style={{
          background: `radial-gradient(ellipse at 50% 60%, ${feature.glowColor}, #F5F3EF 68%)`,
        }}
      >
        <IPhoneFrame>{feature.mockup(hovered)}</IPhoneFrame>
      </div>
      <div className="flex flex-col gap-3 p-5">
        <TagBadge tag={feature.tag} />
        <div>
          <h3 className="font-bold text-zinc-900 mb-1.5 tracking-tight">
            {feature.title}
          </h3>
          <p className="text-sm text-zinc-500 leading-relaxed">{feature.desc}</p>
        </div>
        <div className="pt-3 border-t border-zinc-50">
          <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wide">
            {feature.stat}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Hero Visual ──────────────────────────────────────────────────────────────

function HeroVisual() {
  return (
    <div className="relative w-full h-75 sm:h-90 lg:h-105">
      {/* Esquerda: promoção em laranja */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-0 top-8 w-22.5 h-40 rounded-2xl overflow-hidden border border-white/20 shadow-2xl"
        style={{ rotate: "-6deg" }}
      >
        <div
          className="w-full h-full flex flex-col items-center justify-center p-2"
          style={{ background: "linear-gradient(to bottom, #F97316, #EA580C)" }}
        >
          <span className="text-white/70 text-[6px] uppercase tracking-widest font-semibold mb-1">
            Promoção
          </span>
          <span className="text-white font-black leading-none" style={{ fontSize: 22 }}>
            50% OFF
          </span>
          <span className="text-orange-100 text-[6px] mt-1">Só hoje!</span>
        </div>
      </motion.div>

      {/* Centro: landing page card */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute left-20 top-0 w-45 rounded-xl overflow-hidden border border-zinc-200 shadow-[0_24px_60px_-12px_rgba(0,0,0,0.2)] bg-white"
      >
        <div className="bg-zinc-900 px-3 py-3 flex flex-col items-center gap-1">
          <div className="w-6 h-6 rounded-full bg-zinc-700 flex items-center justify-center">
            <span className="text-white text-[7px] font-black">L</span>
          </div>
          <span className="text-white text-[8px] font-bold">Oferta Especial</span>
          <span className="text-zinc-400 text-[6px]">Por tempo limitado</span>
        </div>
        <div className="p-2 flex flex-col gap-1.5">
          <div className="bg-[#F97316] rounded-md py-1.5 text-center">
            <span className="text-white text-[7px] font-bold">Quero aproveitar →</span>
          </div>
          <div className="rounded-md py-1.5 text-center flex items-center justify-center gap-1" style={{ background: "#25D366" }}>
            <span className="text-white text-[7px] font-bold">💬 WhatsApp</span>
          </div>
        </div>
      </motion.div>

      {/* Direita: contador regressivo */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute right-0 top-16 w-22.5 h-40 rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl bg-zinc-950"
        style={{ rotate: "5deg" }}
      >
        <div className="w-full h-full flex flex-col items-center justify-center p-2">
          <span className="text-zinc-400 text-[6px] mb-1.5">Expira em</span>
          <span className="text-red-400 font-black font-mono" style={{ fontSize: 18 }}>
            01:23:45
          </span>
          <span className="text-zinc-500 text-[6px] mt-1.5">Não perca!</span>
        </div>
      </motion.div>
    </div>
  );
}

// ─── Dados estáticos ──────────────────────────────────────────────────────────

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

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function VitrinaDigitalPage() {
  return (
    <main className="min-h-screen bg-[#FDFAF6]">
      {/* Hero */}
      <section className="pt-36 pb-20 px-4 max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Texto */}
          <div>
            <motion.div
              variants={fadeUp(0)}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap items-center gap-2 mb-6"
            >
              <span className="px-3 py-1 rounded-full bg-[#F97316]/10 border border-[#F97316]/20 text-[#F97316] text-[11px] uppercase tracking-[0.18em] font-semibold">
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
              Landing pages criadas para converter. Você divulga nos Stories, no
              WhatsApp ou em anúncios — e o cliente chega numa página feita só
              para ele agir.
            </motion.p>

            <motion.div
              variants={fadeUp(3)}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-3"
            >
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 bg-zinc-900 text-white font-semibold px-6 py-3.5 rounded-full hover:bg-zinc-700 transition-all duration-300 active:scale-[0.97]"
              >
                Quero esse serviço
                <span className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">
                  <ArrowUpRightIcon size={14} weight="bold" />
                </span>
              </a>
            </motion.div>
          </div>

          {/* Visual */}
          <motion.div variants={fadeUp(4)} initial="hidden" animate="visible">
            <HeroVisual />
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          variants={fadeUp(5)}
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
            <FeatureCard key={f.title} feature={f} index={i} />
          ))}
        </div>
      </section>

      {/* Use Cases + Checklist */}
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
                  <CheckCircleIcon size={18} weight="fill" className="text-[#F97316] shrink-0" />
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
          <div className="bg-[#F97316] rounded-3xl p-12 flex flex-col items-center text-center gap-6">
            <MegaphoneIcon size={40} weight="fill" className="text-white/80" />
            <h2 className="text-3xl font-bold text-white tracking-tight">
              Sua próxima promoção merece uma vitrine
            </h2>
            <p className="text-orange-100 text-sm leading-relaxed max-w-[40ch]">
              Entre em contato e receba sua Vitrine Digital pronta em até 72 horas.
            </p>
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white text-[#F97316] font-bold px-8 py-4 rounded-full hover:bg-orange-50 transition-all duration-300 active:scale-[0.97]"
            >
              Falar no WhatsApp agora
              <ArrowUpRightIcon size={18} weight="bold" />
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
