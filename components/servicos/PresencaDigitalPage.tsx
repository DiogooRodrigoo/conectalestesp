"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Globe,
  ArrowUpRight,
  CheckCircle,
  MagnifyingGlass,
  DeviceMobile,
  Star,
  Camera,
  ChartLineUp,
} from "@phosphor-icons/react";

const EASE: [number, number, number, number] = [0.32, 0.72, 0, 1];
const fadeUp = (i = 0) => ({
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.65, ease: EASE } },
});

/* ─── Tag badges ─── */
const tagStyles: Record<string, string> = {
  Site:        "bg-[#1A73E8] text-white",
  SEO:         "bg-gradient-to-r from-[#4285F4] via-[#34A853] to-[#FBBC04] text-white",
  Maps:        "bg-[#34A853] text-white",
  Mobile:      "bg-zinc-800 text-white",
  Reputação:   "bg-[#F59E0B] text-white",
  Performance: "bg-[#10B981] text-white",
};

function TagBadge({ tag }: { tag: string }) {
  return (
    <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${tagStyles[tag] ?? "bg-zinc-100 text-zinc-500"}`}>
      {tag}
    </span>
  );
}

/* ─── iPhone Frame ─── */
function IPhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative shrink-0" style={{ width: 136, height: 274 }}>
      <div className="absolute inset-0 rounded-[2.4rem] bg-zinc-800 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.45)]" />
      <div className="absolute inset-[3.5px] rounded-[2.1rem] bg-zinc-950 overflow-hidden">
        <div className="absolute top-[10px] left-1/2 -translate-x-1/2 w-10 h-[10px] bg-black rounded-full z-30" />
        <div className="absolute inset-0 overflow-hidden rounded-[2.05rem]">
          {children}
        </div>
      </div>
      <div className="absolute right-[-5px] top-[66px] w-[4px] h-8 bg-zinc-600 rounded-r-sm" />
      <div className="absolute left-[-5px] top-[40px] w-[4px] h-3 bg-zinc-600 rounded-l-sm" />
      <div className="absolute left-[-5px] top-[58px] w-[4px] h-6 bg-zinc-600 rounded-l-sm" />
      <div className="absolute left-[-5px] top-[88px] w-[4px] h-6 bg-zinc-600 rounded-l-sm" />
    </div>
  );
}

/* ─── Mockup: Site ─── */
function MockupSite({ hovered }: { hovered: boolean }) {
  return (
    <div className="relative w-full h-full flex flex-col bg-white overflow-hidden pt-8">
      <div className="flex items-center px-2 py-1.5 border-b border-zinc-100 bg-zinc-50 gap-1.5">
        <div className="flex gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
          <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
          <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 bg-white rounded-sm px-1.5 py-0.5 flex items-center gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-[#34A853]" />
          <span className="text-[5px] text-zinc-400 truncate">suabarbearia.com.br</span>
        </div>
      </div>
      <div className="flex flex-col flex-1">
        <div className="bg-zinc-900 px-2 py-3 flex flex-col gap-1.5 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-950" />
          <motion.div
            animate={{ opacity: hovered ? 1 : 0.6 }}
            transition={{ duration: 0.4 }}
            className="relative flex flex-col gap-1"
          >
            <div className="h-1.5 w-16 bg-white/20 rounded-full" />
            <div className="h-3 w-24 bg-white/80 rounded-sm" />
            <div className="h-1 w-20 bg-white/30 rounded-full" />
            <div className="mt-1 h-4 w-14 bg-[#F97316] rounded-full flex items-center justify-center">
              <span className="text-white text-[5px] font-bold">Fale agora</span>
            </div>
          </motion.div>
        </div>
        <div className="px-2 py-2 flex flex-col gap-1.5">
          <div className="h-1.5 w-12 bg-zinc-200 rounded-full" />
          <div className="grid grid-cols-3 gap-1">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{
                  scale: hovered && i === 1 ? 1.04 : 1,
                  borderColor: hovered && i === 1 ? "#F97316" : "#f4f4f5",
                }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="rounded-sm border border-zinc-100 p-1 flex flex-col gap-0.5"
              >
                <div className="w-full aspect-square bg-zinc-100 rounded-sm" />
                <div className="h-1 bg-zinc-200 rounded-full" />
              </motion.div>
            ))}
          </div>
        </div>
        <div className="px-2 mt-auto pb-2">
          <motion.div
            animate={{ backgroundColor: hovered ? "#25D366" : "#22c55e" }}
            transition={{ duration: 0.3 }}
            className="rounded-full py-1.5 flex items-center justify-center"
          >
            <span className="text-white text-[5px] font-bold">WhatsApp</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

/* ─── Mockup: SEO ─── */
function MockupSEO({ hovered }: { hovered: boolean }) {
  return (
    <div className="relative w-full h-full flex flex-col bg-white overflow-hidden pt-8">
      <div className="px-2 py-1.5 border-b border-zinc-100 bg-white">
        <div className="flex items-center gap-1 bg-zinc-50 rounded-full border border-zinc-200 px-2 py-1">
          <MagnifyingGlass size={7} className="text-zinc-400" />
          <span className="text-[5.5px] text-zinc-600 truncate">barbearia perto de mim</span>
        </div>
      </div>
      <div className="flex flex-col gap-1.5 px-2 pt-2">
        <div className="flex flex-col gap-0.5 opacity-40">
          <span className="text-[4px] text-zinc-400 border border-zinc-300 px-0.5 rounded-sm w-fit">Patrocinado</span>
          <div className="h-1 w-20 bg-zinc-200 rounded-full" />
          <div className="h-1 w-16 bg-zinc-100 rounded-full" />
        </div>
        <motion.div
          animate={{
            backgroundColor: hovered ? "#EFF6FF" : "white",
            borderColor: hovered ? "#93C5FD" : "#f4f4f5",
          }}
          transition={{ duration: 0.4 }}
          className="flex flex-col gap-0.5 border rounded-md p-1.5"
        >
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-sm bg-[#F97316] flex items-center justify-center shrink-0">
              <span className="text-white text-[4px] font-black">B</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[5px] text-[#1A73E8] font-semibold">Barbearia Estilo — suabarbearia.com.br</span>
              <span className="text-[4px] text-zinc-400">suabarbearia.com.br › inicio</span>
            </div>
          </div>
          <div className="h-1 w-full bg-zinc-100 rounded-full" />
          <div className="h-1 w-3/4 bg-zinc-100 rounded-full" />
          <div className="flex items-center gap-0.5">
            {[0, 1, 2, 3, 4].map((i) => (
              <Star key={i} size={5} weight="fill" className="text-[#FBBC04]" />
            ))}
            <span className="text-[4px] text-zinc-400">(47)</span>
          </div>
        </motion.div>
        {[0, 1].map((i) => (
          <div key={i} className="flex flex-col gap-0.5 opacity-30">
            <div className="h-1 w-24 bg-zinc-200 rounded-full" />
            <div className="h-1 w-full bg-zinc-100 rounded-full" />
            <div className="h-1 w-3/4 bg-zinc-100 rounded-full" />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Mockup: Google Meu Negócio ─── */
function MockupGMN({ hovered }: { hovered: boolean }) {
  return (
    <div className="relative w-full h-full bg-white overflow-hidden pt-8">
      <div className="px-2 py-1 bg-white border-b border-zinc-100 flex items-center gap-1">
        <div className="flex gap-0.5">
          <div className="w-1.5 h-1.5 rounded-full bg-[#4285F4]" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#EA4335]" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#FBBC04]" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#34A853]" />
        </div>
        <span className="text-[5px] text-zinc-500 font-bold">Google Maps</span>
      </div>
      <div className="relative h-20 bg-[#E8F5E9] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-4 left-0 right-0 h-px bg-white/70" />
          <div className="absolute top-10 left-0 right-0 h-0.5 bg-white" />
          <div className="absolute top-14 left-0 right-0 h-px bg-white/70" />
          <div className="absolute left-8 top-0 bottom-0 w-px bg-white/70" />
          <div className="absolute left-14 top-0 bottom-0 w-0.5 bg-white" />
          <div className="absolute left-20 top-0 bottom-0 w-px bg-white/70" />
        </div>
        <motion.div
          animate={{ y: hovered ? [0, -4, 0] : 0 }}
          transition={{ duration: 0.6, repeat: hovered ? Infinity : 0, ease: "easeInOut" }}
          className="absolute top-6 left-12 flex flex-col items-center"
        >
          <div className="w-5 h-5 rounded-full bg-[#EA4335] flex items-center justify-center shadow-md">
            <span className="text-white text-[5px] font-black">B</span>
          </div>
          <div className="w-0 h-0 border-l-[3px] border-r-[3px] border-t-[4px] border-l-transparent border-r-transparent border-t-[#EA4335]" />
        </motion.div>
      </div>
      <div className="px-2 py-2 flex flex-col gap-1.5">
        <div className="flex items-start justify-between">
          <div>
            <span className="text-[8px] font-bold text-zinc-900 block">Barbearia Estilo</span>
            <span className="text-[5px] text-zinc-500">Barbearia · Aberto agora</span>
          </div>
          <motion.div
            animate={{ scale: hovered ? 1.1 : 1 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-0.5 bg-[#34A853] text-white px-1.5 py-0.5 rounded-sm"
          >
            <span className="text-[5px] font-bold">4.8</span>
            <Star size={5} weight="fill" />
          </motion.div>
        </div>
        <div className="flex gap-1.5">
          <div className="flex items-center gap-0.5 bg-[#1A73E8] text-white px-1.5 py-0.5 rounded-sm">
            <span className="text-[5px] font-bold">Ligar</span>
          </div>
          <div className="flex items-center gap-0.5 bg-zinc-100 text-zinc-700 px-1.5 py-0.5 rounded-sm">
            <span className="text-[5px] font-medium">Rota</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Mockup: Mobile ─── */
function MockupMobile({ hovered }: { hovered: boolean }) {
  return (
    <div className="relative w-full h-full bg-white overflow-hidden pt-8">
      <div className="flex items-center justify-between px-3 py-1 bg-zinc-50 border-b border-zinc-100">
        <span className="text-[4.5px] text-zinc-500 font-semibold">9:41</span>
        <div className="w-3 h-1.5 border border-zinc-400 rounded-[1px] flex items-center px-[1px]">
          <div className="h-full w-3/4 bg-[#34A853] rounded-[1px]" />
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex items-center justify-between px-2 py-1.5 bg-white border-b border-zinc-100">
          <div className="h-2 w-10 bg-zinc-200 rounded-full" />
          <div className="w-4 h-4 rounded-sm bg-zinc-100 flex items-center justify-center">
            <div className="flex flex-col gap-[2px]">
              <div className="w-2 h-[1px] bg-zinc-400 rounded-full" />
              <div className="w-2 h-[1px] bg-zinc-400 rounded-full" />
              <div className="w-2 h-[1px] bg-zinc-400 rounded-full" />
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-br from-zinc-800 to-zinc-950 px-2.5 py-4 flex flex-col gap-1">
          <div className="h-1.5 w-20 bg-white/20 rounded-full" />
          <div className="h-3 w-24 bg-white/70 rounded-sm" />
          <div className="h-1 w-18 bg-white/20 rounded-full" />
          <motion.div
            animate={{ scale: hovered ? 1.03 : 1 }}
            transition={{ duration: 0.3 }}
            className="mt-1 h-4 w-16 bg-[#F97316] rounded-full flex items-center justify-center"
          >
            <span className="text-white text-[5px] font-bold">WhatsApp</span>
          </motion.div>
        </div>
        <motion.div
          animate={{ opacity: hovered ? 1 : 0.7 }}
          transition={{ duration: 0.4 }}
          className="mx-2 mt-2 flex items-center gap-1.5 bg-green-50 rounded-lg px-2 py-1.5 border border-green-100"
        >
          <DeviceMobile size={10} className="text-[#34A853]" />
          <div>
            <span className="text-[5.5px] font-bold text-green-700 block">Mobile Friendly</span>
            <span className="text-[4.5px] text-green-600">Otimizado para celular</span>
          </div>
          <span className="ml-auto text-[8px] font-black text-[#34A853]">100</span>
        </motion.div>
      </div>
    </div>
  );
}

/* ─── Mockup: Avaliações ─── */
function MockupAvaliacoes({ hovered }: { hovered: boolean }) {
  const reviews = [
    { name: "João M.", text: "Atendimento incrível!", stars: 5 },
    { name: "Ana L.", text: "Melhor do bairro!", stars: 5 },
    { name: "Carlos R.", text: "Super recomendo.", stars: 5 },
  ];
  return (
    <div className="relative w-full h-full bg-white overflow-hidden pt-8">
      <div className="px-2 py-1.5 border-b border-zinc-100 bg-white">
        <span className="text-[7px] font-bold text-zinc-900 block">Avaliações</span>
        <div className="flex items-center gap-1">
          <div className="flex">
            {[0, 1, 2, 3, 4].map((i) => (
              <Star key={i} size={7} weight="fill" className="text-[#FBBC04]" />
            ))}
          </div>
          <span className="text-[6px] text-zinc-500">4.9 · 124 avaliações</span>
        </div>
      </div>
      <div className="flex flex-col gap-1 px-2 pt-1.5">
        {reviews.map((r, i) => (
          <motion.div
            key={r.name}
            animate={{
              opacity: hovered ? 1 : i === 0 ? 1 : 0.4 + i * 0.1,
              x: hovered ? 0 : i * 2,
            }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="bg-zinc-50 rounded-lg p-1.5 border border-zinc-100"
          >
            <div className="flex items-center gap-1 mb-0.5">
              <div className="w-3 h-3 rounded-full bg-gradient-to-br from-[#F97316] to-[#EA580C] flex items-center justify-center shrink-0">
                <span className="text-white text-[4px] font-bold">{r.name[0]}</span>
              </div>
              <span className="text-[5.5px] font-semibold text-zinc-800">{r.name}</span>
              <div className="ml-auto flex">
                {Array.from({ length: r.stars }).map((_, j) => (
                  <Star key={j} size={5} weight="fill" className="text-[#FBBC04]" />
                ))}
              </div>
            </div>
            <p className="text-[5px] text-zinc-500">{r.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ─── Mockup: Performance ─── */
function MockupPerformance({ hovered }: { hovered: boolean }) {
  const metrics = [
    { label: "Perf.", score: hovered ? 97 : 45 },
    { label: "SEO", score: hovered ? 100 : 52 },
    { label: "Acess.", score: hovered ? 98 : 60 },
  ];
  return (
    <div className="relative w-full h-full bg-zinc-950 flex flex-col px-2.5 pt-10 pb-3 overflow-hidden">
      <div className="flex items-center justify-between mb-2">
        <span className="text-white text-[8px] font-bold">Lighthouse</span>
        <div className="flex gap-0.5">
          <div className="w-1 h-1 rounded-full bg-[#10B981]" />
          <div className="w-1 h-1 rounded-full bg-[#10B981] opacity-60" />
          <div className="w-1 h-1 rounded-full bg-[#10B981] opacity-30" />
        </div>
      </div>
      <div className="flex justify-between mb-3">
        {metrics.map((m) => (
          <div key={m.label} className="flex flex-col items-center gap-1">
            <div className="relative w-10 h-10">
              <svg viewBox="0 0 40 40" className="absolute inset-0 -rotate-90">
                <circle cx="20" cy="20" r="16" fill="none" stroke="#27272a" strokeWidth="3" />
                <motion.circle
                  cx="20" cy="20" r="16"
                  fill="none"
                  stroke="#10B981"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 16}`}
                  animate={{ strokeDashoffset: 2 * Math.PI * 16 * (1 - m.score / 100) }}
                  transition={{ duration: 0.8, ease: EASE }}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[8px] font-black text-white">{m.score}</span>
              </div>
            </div>
            <span className="text-[5px] text-zinc-400">{m.label}</span>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center justify-between">
          <span className="text-[6px] text-zinc-400">Carregamento</span>
          <motion.span
            animate={{ color: hovered ? "#10B981" : "#EF4444" }}
            transition={{ duration: 0.5 }}
            className="text-[6px] font-bold"
          >
            {hovered ? "1.2s" : "4.8s"}
          </motion.span>
        </div>
        <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
          <motion.div
            animate={{ width: hovered ? "20%" : "80%", backgroundColor: hovered ? "#10B981" : "#EF4444" }}
            transition={{ duration: 0.8, ease: EASE }}
            className="h-full rounded-full"
          />
        </div>
      </div>
    </div>
  );
}

/* ─── Feature card ─── */
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
    title: "Site Institucional",
    desc: "Página profissional com informações do negócio, serviços, horários, localização e botão direto pro WhatsApp.",
    stat: "Pronto em até 7 dias",
    tag: "Site",
    glowColor: "rgba(26,115,232,0.15)",
    mockup: (h) => <MockupSite hovered={h} />,
  },
  {
    title: "SEO Local",
    desc: "Otimização para aparecer no Google quando alguém busca 'barbearia perto de mim' ou 'restaurante no [seu bairro]'.",
    stat: "46% das buscas são locais",
    tag: "SEO",
    glowColor: "rgba(66,133,244,0.15)",
    mockup: (h) => <MockupSEO hovered={h} />,
  },
  {
    title: "Google Meu Negócio",
    desc: "Criação e otimização do perfil no Google Maps. Fotos, horários, avaliações e respostas — tudo atualizado.",
    stat: "Apareça no Google Maps",
    tag: "Maps",
    glowColor: "rgba(52,168,83,0.15)",
    mockup: (h) => <MockupGMN hovered={h} />,
  },
  {
    title: "Mobile First",
    desc: "Site projetado para funcionar perfeitamente no celular. A maioria dos clientes vai acessar pelo smartphone.",
    stat: "80% do tráfego é mobile",
    tag: "Mobile",
    glowColor: "rgba(39,39,42,0.12)",
    mockup: (h) => <MockupMobile hovered={h} />,
  },
  {
    title: "Gestão de Avaliações",
    desc: "Estratégia para conseguir mais avaliações 5 estrelas no Google e responder feedbacks de forma profissional.",
    stat: "Mais estrelas = mais clientes",
    tag: "Reputação",
    glowColor: "rgba(245,158,11,0.15)",
    mockup: (h) => <MockupAvaliacoes hovered={h} />,
  },
  {
    title: "Carregamento Rápido",
    desc: "Site leve e otimizado que carrega em menos de 2 segundos. Quem espera muito, vai embora.",
    stat: "< 2s de carregamento",
    tag: "Performance",
    glowColor: "rgba(16,185,129,0.15)",
    mockup: (h) => <MockupPerformance hovered={h} />,
  },
];

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
        style={{ background: `radial-gradient(ellipse at 50% 60%, ${feature.glowColor}, #F5F3EF 68%)` }}
      >
        <IPhoneFrame>{feature.mockup(hovered)}</IPhoneFrame>
      </div>
      <div className="flex flex-col gap-3 p-5">
        <TagBadge tag={feature.tag} />
        <div>
          <h3 className="font-bold text-zinc-900 mb-1.5 tracking-tight">{feature.title}</h3>
          <p className="text-sm text-zinc-500 leading-relaxed">{feature.desc}</p>
        </div>
        <div className="pt-3 border-t border-zinc-50">
          <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wide">{feature.stat}</span>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Hero Visual ─── */
function HeroVisual() {
  return (
    <div className="relative w-full h-75 sm:h-90 lg:h-105">
      {/* Google Maps card — left */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-0 top-10 w-[100px] rounded-2xl overflow-hidden border border-zinc-200/80 shadow-2xl"
      >
        <div className="h-12 bg-[#E8F5E9] relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-3 left-0 right-0 h-px bg-white/80" />
            <div className="absolute top-6 left-0 right-0 h-1 bg-white/60" />
            <div className="absolute left-10 top-0 bottom-0 w-px bg-white/80" />
            <div className="absolute left-4 top-0 bottom-0 w-px bg-white/40" />
          </div>
          <div className="absolute top-2 left-8 flex flex-col items-center">
            <div className="w-4 h-4 rounded-full bg-[#EA4335] flex items-center justify-center shadow-md">
              <span className="text-white text-[5px] font-black">B</span>
            </div>
            <div className="w-0 h-0 border-l-[3px] border-r-[3px] border-t-[4px] border-l-transparent border-r-transparent border-t-[#EA4335]" />
          </div>
        </div>
        <div className="bg-white px-2 py-1.5">
          <span className="text-[7px] font-bold text-zinc-900 block">Barbearia Estilo</span>
          <div className="flex items-center gap-0.5">
            <Star size={6} weight="fill" className="text-[#FBBC04]" />
            <span className="text-[5px] text-zinc-500">4.9 · Aberto</span>
          </div>
        </div>
      </motion.div>

      {/* Browser frame — center */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute left-[80px] top-0 w-[190px] rounded-xl overflow-hidden border border-zinc-200 shadow-[0_24px_60px_-12px_rgba(0,0,0,0.2)]"
      >
        <div className="flex items-center gap-1.5 px-2.5 py-2 bg-zinc-100 border-b border-zinc-200">
          <div className="flex gap-1">
            <div className="w-2 h-2 rounded-full bg-red-400" />
            <div className="w-2 h-2 rounded-full bg-yellow-400" />
            <div className="w-2 h-2 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 bg-white rounded-md px-2 py-0.5 flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-[#34A853]" />
            <span className="text-[7px] text-zinc-400 truncate">suabarbearia.com.br</span>
          </div>
        </div>
        <div className="bg-zinc-900 px-4 py-5 flex flex-col gap-2">
          <div className="h-2 w-20 bg-white/20 rounded-full" />
          <div className="h-5 w-28 bg-white/70 rounded-sm" />
          <div className="h-1.5 w-24 bg-white/20 rounded-full" />
          <div className="mt-1 h-6 w-20 bg-[#F97316] rounded-full flex items-center justify-center">
            <span className="text-white text-[8px] font-bold">Fale no WhatsApp</span>
          </div>
        </div>
        <div className="bg-white px-4 py-3 flex gap-2">
          {[0, 1, 2].map((i) => (
            <div key={i} className="flex-1 flex flex-col gap-1">
              <div className="aspect-square bg-zinc-100 rounded-md" />
              <div className="h-1.5 bg-zinc-100 rounded-full" />
            </div>
          ))}
        </div>
      </motion.div>

      {/* Google search result — right */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute right-0 top-16 w-[110px] bg-white rounded-2xl overflow-hidden border border-zinc-200 shadow-2xl rotate-[4deg] p-2"
      >
        <div className="flex items-center gap-1 mb-1.5">
          <MagnifyingGlass size={7} className="text-[#4285F4]" />
          <span className="text-[5px] text-zinc-500 truncate">barbearia perto de mim</span>
        </div>
        <div className="flex items-start gap-1 bg-blue-50 rounded-md p-1.5 border border-blue-100">
          <div className="w-4 h-4 rounded-sm bg-[#F97316] flex items-center justify-center shrink-0 mt-0.5">
            <span className="text-white text-[4px] font-black">1º</span>
          </div>
          <div>
            <span className="text-[5px] text-[#1A73E8] font-semibold block">suabarbearia.com.br</span>
            <div className="flex mt-0.5">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} size={4} weight="fill" className="text-[#FBBC04]" />
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating badge: visitas */}
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
        className="absolute bottom-16 left-[60px] bg-white rounded-xl px-3 py-2 shadow-[0_8px_24px_-6px_rgba(0,0,0,0.15)] border border-zinc-100"
      >
        <p className="text-zinc-400 text-[8px]">Visitas ao site</p>
        <p className="text-zinc-900 text-base font-bold tracking-tight">+284%</p>
      </motion.div>

      {/* Floating badge: avaliações */}
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
        className="absolute bottom-8 right-8 bg-[#F97316] rounded-xl px-3 py-2 shadow-[0_8px_24px_-6px_rgba(249,115,22,0.4)]"
      >
        <p className="text-orange-200 text-[8px]">Google</p>
        <p className="text-white text-base font-bold tracking-tight">4.9 ⭐</p>
      </motion.div>
    </div>
  );
}

/* ─── Steps ─── */
const steps = [
  {
    icon: Camera,
    n: "01",
    title: "Levantamento",
    desc: "Coletamos fotos, informações, história e diferenciais do seu negócio.",
  },
  {
    icon: Globe,
    n: "02",
    title: "Criamos e publicamos",
    desc: "Site no ar, Google Meu Negócio otimizado e SEO configurado em até 7 dias.",
  },
  {
    icon: ChartLineUp,
    n: "03",
    title: "Você aparece no Google",
    desc: "Clientes te encontram, avaliam e entram em contato direto pelo WhatsApp.",
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

/* ─── Page ─── */
export default function PresencaDigitalPage() {
  return (
    <main className="min-h-screen bg-[#FDFAF6]">

      {/* ── Hero ── */}
      <section className="pt-36 pb-20 px-4 max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <motion.div variants={fadeUp(0)} initial="hidden" animate="visible" className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-500 text-[11px] uppercase tracking-[0.18em] font-semibold">
                Serviço
              </span>
              <span className="px-3 py-1 rounded-full bg-[#1A73E8] text-white text-[11px] uppercase tracking-[0.18em] font-bold">
                Sites & Google
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp(1)}
              initial="hidden"
              animate="visible"
              className="text-5xl md:text-6xl font-bold leading-[1.05] tracking-[-0.03em] text-zinc-900"
            >
              Seu negócio no
              <br />
              <span className="text-[#F97316]">Google, do jeito certo.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp(2)}
              initial="hidden"
              animate="visible"
              className="text-lg text-zinc-500 leading-relaxed max-w-[48ch]"
            >
              Site profissional, perfil no Google Meu Negócio otimizado e SEO local para o seu comércio
              aparecer quando o cliente procurar pelo seu bairro.
            </motion.p>

            <motion.div variants={fadeUp(3)} initial="hidden" animate="visible">
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 bg-zinc-900 text-white font-semibold px-6 py-3.5 rounded-full hover:bg-zinc-700 transition-all duration-300 active:scale-[0.97]"
              >
                Quero esse serviço
                <span className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">
                  <ArrowUpRight size={14} weight="bold" />
                </span>
              </a>
            </motion.div>
          </div>

          <motion.div variants={fadeUp(2)} initial="hidden" animate="visible">
            <HeroVisual />
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          variants={fadeUp(4)}
          initial="hidden"
          animate="visible"
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { value: "46%", label: "das buscas no Google têm intenção local" },
            { value: "76%", label: "visitam o negócio após busca local" },
            { value: "28%", label: "dessas visitas resultam em compra" },
            { value: "7 dias", label: "para o seu site estar no ar" },
          ].map((s) => (
            <div
              key={s.label}
              className="bg-white rounded-2xl border border-zinc-100 p-5 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.06)]"
            >
              <span className="text-3xl font-bold tracking-tight text-zinc-900 block">{s.value}</span>
              <span className="text-xs text-zinc-400 leading-relaxed">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ── Features ── */}
      <section className="py-20 px-4 max-w-[1280px] mx-auto">
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 mb-3">O que está incluído</h2>
          <p className="text-zinc-500 text-sm max-w-[48ch]">
            Tudo que seu negócio precisa para estar bem posicionado online e converter visitantes em clientes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {features.map((f, i) => (
            <FeatureCard key={f.title} feature={f} index={i} />
          ))}
        </div>
      </section>

      {/* ── Como funciona ── */}
      <section className="py-20 px-4 max-w-[1280px] mx-auto">
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 mb-3">
            Entregamos pronto.
            <br />
            <span className="text-[#F97316]">Você só usa.</span>
          </h2>
          <p className="text-zinc-500 text-sm max-w-[44ch]">
            Cuidamos de domínio, hospedagem, design e publicação. Você só nos passa as fotos e
            informações do negócio — o resto é com a gente.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 relative">
          <div className="hidden md:block absolute top-8 left-[calc(16.66%+16px)] right-[calc(16.66%+16px)] h-px bg-zinc-200" />
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              variants={fadeUp(i * 0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white rounded-2xl border border-zinc-100 p-6 flex flex-col gap-4 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.06)] relative z-10"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#F97316] flex items-center justify-center shrink-0">
                  <s.icon size={20} weight="fill" className="text-white" />
                </div>
                <span className="text-4xl font-black text-zinc-100 leading-none">{s.n}</span>
              </div>
              <div>
                <h3 className="font-bold text-zinc-900 mb-1">{s.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Checklist */}
        <motion.div
          variants={fadeUp(3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3"
        >
          {included.map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 bg-white rounded-xl border border-zinc-100 px-4 py-3 shadow-[0_1px_4px_-2px_rgba(0,0,0,0.05)]"
            >
              <CheckCircle size={18} weight="fill" className="text-[#F97316] shrink-0" />
              <span className="text-sm text-zinc-700 font-medium">{item}</span>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-4">
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-[#F97316] rounded-3xl p-12 flex flex-col items-center text-center gap-6 relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-10"
              style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "20px 20px" }}
            />
            <Globe size={40} weight="fill" className="text-white/80 relative" />
            <h2 className="text-3xl font-bold text-white tracking-tight relative">
              Seu negócio merece estar bem no Google
            </h2>
            <p className="text-orange-100 text-sm leading-relaxed max-w-[40ch] relative">
              Fale com a gente e descubra como aumentar sua visibilidade online em menos de 2 semanas.
            </p>
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center gap-2 bg-white text-[#F97316] font-bold px-8 py-4 rounded-full hover:bg-orange-50 transition-all duration-300 active:scale-[0.97]"
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
