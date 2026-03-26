"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  InstagramLogo,
  TiktokLogo,
  Heart,
  ChatCircle,
  PaperPlaneTilt,
  ArrowUpRight,
  CheckCircle,
  CalendarBlank,
  WhatsappLogo,
  MusicNote,
  Users,
  ChartBar,
  Images,
  Play,
} from "@phosphor-icons/react";

const EASE: [number, number, number, number] = [0.32, 0.72, 0, 1];
const fadeUp = (i = 0) => ({
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.65, ease: EASE } },
});

/* ─── Tag badges ─── */
const tagStyles: Record<string, string> = {
  Instagram: "bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#F77737] text-white",
  Stories:   "bg-[#F59E0B] text-white",
  Reels:     "bg-gradient-to-r from-[#833AB4] to-[#E1306C] text-white",
  TikTok:    "bg-[#010101] text-[#FF0050]",
  Ads:       "bg-[#1877F2] text-white",
  Relatório: "bg-[#10B981] text-white",
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
      {/* Power button */}
      <div className="absolute right-[-5px] top-[66px] w-[4px] h-8 bg-zinc-600 rounded-r-sm" />
      {/* Silent switch */}
      <div className="absolute left-[-5px] top-[40px] w-[4px] h-3 bg-zinc-600 rounded-l-sm" />
      {/* Volume up */}
      <div className="absolute left-[-5px] top-[58px] w-[4px] h-6 bg-zinc-600 rounded-l-sm" />
      {/* Volume down */}
      <div className="absolute left-[-5px] top-[88px] w-[4px] h-6 bg-zinc-600 rounded-l-sm" />
    </div>
  );
}

/* ─── Mockup: Post / Carrossel ─── */
function MockupPost({ hovered }: { hovered: boolean }) {
  return (
    <div className="relative w-full h-full flex flex-col bg-white overflow-hidden pt-8">
      {/* Instagram top bar */}
      <div className="flex items-center px-2.5 py-1.5 border-b border-zinc-100">
        <InstagramLogo size={11} weight="bold" className="text-zinc-800" />
        <div className="ml-auto flex gap-2">
          <Heart size={10} className="text-zinc-600" />
          <PaperPlaneTilt size={10} className="text-zinc-600" />
        </div>
      </div>
      {/* Post */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5 px-2 py-1.5">
          <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#F97316] to-[#EA580C] ring-2 ring-[#E1306C]/50 shrink-0" />
          <span className="text-zinc-900 text-[7px] font-semibold flex-1">sua_barbearia</span>
          <span className="text-[#E1306C] text-[6px] font-bold">Seguir</span>
        </div>
        <div className="relative w-full aspect-square bg-gradient-to-br from-zinc-800 to-zinc-950 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white/10 text-2xl font-black tracking-tighter">EST.</span>
          </div>
          <motion.div
            animate={{ x: hovered ? 0 : "100%" }}
            transition={{ duration: 0.4, ease: EASE }}
            className="absolute inset-0 bg-gradient-to-br from-[#F97316]/40 to-zinc-900 flex items-center justify-center"
          >
            <span className="text-white/20 text-2xl font-black tracking-tighter">2/4</span>
          </motion.div>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
            {[0,1,2].map((i) => (
              <motion.div
                key={i}
                animate={{ scale: hovered && i === 1 ? 1.3 : 1, opacity: i === (hovered ? 1 : 0) ? 1 : 0.4 }}
                transition={{ duration: 0.3 }}
                className="w-1 h-1 rounded-full bg-white"
              />
            ))}
          </div>
        </div>
        <div className="px-2.5 pt-1.5 pb-1">
          <div className="flex items-center gap-2 mb-1">
            <Heart size={10} className="text-zinc-800" />
            <ChatCircle size={10} className="text-zinc-800" />
            <PaperPlaneTilt size={10} className="text-zinc-800" />
          </div>
          <span className="text-zinc-900 text-[6px] font-semibold block">1.247 curtidas</span>
          <span className="text-zinc-400 text-[6px]">Ver 89 comentários</span>
        </div>
      </div>
    </div>
  );
}

/* ─── Mockup: Stories ─── */
function MockupStories({ hovered }: { hovered: boolean }) {
  return (
    <div className="relative w-full h-full bg-gradient-to-b from-[#833AB4] via-[#E1306C] to-[#F77737] overflow-hidden">
      {/* Progress bars */}
      <div className="absolute top-12 left-2 right-2 flex gap-0.5 z-10">
        {[0,1,2].map((i) => (
          <div key={i} className="flex-1 h-0.5 rounded-full bg-white/30 overflow-hidden">
            {i === 0 && <div className="h-full w-full bg-white rounded-full" />}
            {i === 1 && (
              <motion.div
                animate={{ width: hovered ? "100%" : "40%" }}
                transition={{ duration: hovered ? 1.5 : 0.3, ease: "linear" }}
                className="h-full bg-white rounded-full"
              />
            )}
          </div>
        ))}
      </div>
      {/* Avatar */}
      <div className="absolute top-[54px] left-2 flex items-center gap-1">
        <div className="w-4 h-4 rounded-full bg-white/30 border border-white/60" />
        <span className="text-white text-[6px] font-semibold">sua_marca</span>
      </div>
      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5">
        <span className="text-white/80 text-[7px] font-bold uppercase tracking-widest">PROMOÇÃO</span>
        <span className="text-white text-2xl font-black leading-none">DO DIA!</span>
        <span className="text-white/70 text-[7px]">Só hoje — 30% OFF</span>
      </div>
      {/* Bottom */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center">
        <PaperPlaneTilt size={12} className="text-white/70" />
      </div>
    </div>
  );
}

/* ─── Mockup: Reels ─── */
function MockupReels({ hovered }: { hovered: boolean }) {
  return (
    <div className="relative w-full h-full bg-gradient-to-b from-zinc-900 to-zinc-950 overflow-hidden">
      {/* Top label */}
      <div className="absolute top-12 left-0 right-0 flex justify-center">
        <span className="text-white text-[7px] font-bold uppercase tracking-widest opacity-60">Reels</span>
      </div>
      {/* Play button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          animate={{ scale: hovered ? 1.2 : 1, opacity: hovered ? 0.5 : 0.2 }}
          transition={{ duration: 0.3 }}
        >
          <Play size={32} weight="fill" className="text-white" />
        </motion.div>
      </div>
      {/* Side icons */}
      <div className="absolute right-2 bottom-14 flex flex-col gap-3 items-center">
        <div className="flex flex-col items-center gap-0.5">
          <Heart size={12} className="text-white" />
          <span className="text-white text-[6px]">4.2k</span>
        </div>
        <div className="flex flex-col items-center gap-0.5">
          <ChatCircle size={12} className="text-white" />
          <span className="text-white text-[6px]">312</span>
        </div>
        <PaperPlaneTilt size={12} className="text-white" />
      </div>
      {/* Bottom */}
      <div className="absolute bottom-4 left-2 right-10">
        <div className="flex items-center gap-1 mb-1">
          <MusicNote size={8} className="text-white/60" />
          <span className="text-white/50 text-[6px] truncate">Música · sua_marca</span>
        </div>
        <div className="h-0.5 bg-white/20 rounded-full overflow-hidden">
          <motion.div
            animate={{ width: hovered ? "75%" : "30%" }}
            transition={{ duration: 0.8, ease: "linear" }}
            className="h-full bg-white/60 rounded-full"
          />
        </div>
      </div>
    </div>
  );
}

/* ─── Mockup: TikTok ─── */
function MockupTikTok({ hovered }: { hovered: boolean }) {
  return (
    <div className="relative w-full h-full bg-[#010101] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80" />
      {/* Play button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          animate={{ scale: hovered ? 1.1 : 1, opacity: hovered ? 0.3 : 0.15 }}
          transition={{ duration: 0.3 }}
        >
          <Play size={28} weight="fill" className="text-white" />
        </motion.div>
      </div>
      {/* TikTok logo */}
      <div className="absolute top-12 right-2">
        <TiktokLogo size={12} className="text-white/30" />
      </div>
      {/* Side icons */}
      <div className="absolute right-2 bottom-12 flex flex-col gap-3 items-center">
        <div className="flex flex-col items-center gap-0.5">
          <Heart size={12} className="text-white" />
          <span className="text-white text-[6px]">12k</span>
        </div>
        <div className="flex flex-col items-center gap-0.5">
          <ChatCircle size={12} className="text-white" />
          <span className="text-white text-[6px]">891</span>
        </div>
        <motion.div
          animate={{ rotate: hovered ? 360 : 0 }}
          transition={{ duration: 3, repeat: hovered ? Infinity : 0, ease: "linear" }}
          className="w-5 h-5 rounded-full border-2 border-white/30 flex items-center justify-center bg-zinc-800"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
        </motion.div>
      </div>
      {/* Bottom */}
      <div className="absolute bottom-4 left-2 right-10">
        <span className="text-white/50 text-[6px] block">@sua_barbearia</span>
        <div className="mt-0.5 flex items-center gap-1">
          <MusicNote size={7} className="text-[#FF0050]" />
          <span className="text-white/40 text-[6px] truncate">som original</span>
        </div>
      </div>
    </div>
  );
}

/* ─── Mockup: Meta Ads ─── */
function MockupAds({ hovered }: { hovered: boolean }) {
  return (
    <div className="relative w-full h-full flex flex-col bg-white overflow-hidden pt-8">
      {/* Facebook top bar */}
      <div className="flex items-center px-2.5 py-1.5 border-b border-zinc-100">
        <span className="text-[#1877F2] text-[11px] font-black">f</span>
        <div className="ml-auto flex gap-2">
          <Users size={10} className="text-zinc-500" />
          <ChatCircle size={10} className="text-zinc-500" />
        </div>
      </div>
      {/* Ad post */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5 px-2 py-1.5">
          <div className="w-5 h-5 rounded-full bg-[#1877F2] flex items-center justify-center shrink-0">
            <span className="text-white text-[6px] font-bold">B</span>
          </div>
          <div>
            <span className="text-zinc-900 text-[6px] font-semibold block">Barbearia Estilo</span>
            <span className="text-[#1877F2] text-[5px]">Patrocinado</span>
          </div>
        </div>
        <div className="w-full aspect-square bg-gradient-to-br from-[#F97316] via-[#EA580C] to-zinc-900 flex items-center justify-center relative overflow-hidden">
          <span className="text-white/10 text-2xl font-black tracking-tighter">EST.</span>
          <motion.div
            animate={{ opacity: hovered ? 1 : 0.5, scale: hovered ? 1.05 : 1 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-1.5 left-1.5 bg-black/60 text-white text-[5px] px-1.5 py-0.5 rounded-full"
          >
            📍 3km de você
          </motion.div>
        </div>
        <div className="px-2 py-1.5 flex items-center justify-between bg-zinc-50 border-t border-zinc-100">
          <div>
            <p className="text-zinc-900 text-[6px] font-semibold">30% OFF hoje</p>
            <p className="text-zinc-400 text-[5px]">Oferta limitada</p>
          </div>
          <motion.div
            animate={{ scale: hovered ? 1.05 : 1 }}
            transition={{ duration: 0.2 }}
            className="bg-[#1877F2] text-white text-[6px] font-bold px-2 py-1 rounded"
          >
            Saiba Mais
          </motion.div>
        </div>
      </div>
    </div>
  );
}

/* ─── Mockup: Relatório ─── */
function MockupRelatorio({ hovered }: { hovered: boolean }) {
  const bars = [
    { label: "Alcance", value: "+312%", height: hovered ? "80%" : "40%", color: "#10B981" },
    { label: "Seguid.", value: "+48", height: hovered ? "55%" : "25%", color: "#10B981" },
    { label: "Engaj.", value: "+2.1%", height: hovered ? "65%" : "30%", color: "#10B981" },
  ];
  return (
    <div className="relative w-full h-full bg-zinc-950 flex flex-col px-3 pt-12 pb-3 overflow-hidden">
      <div className="flex items-center justify-between mb-3">
        <span className="text-white text-[9px] font-bold">Relatório — Abril</span>
        <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] shadow-[0_0_6px_#10B981]" />
      </div>
      <div className="flex items-end gap-2 flex-1 pb-1">
        {bars.map((b) => (
          <div key={b.label} className="flex-1 flex flex-col items-center gap-1">
            <span className="text-[#10B981] text-[6px] font-bold">{b.value}</span>
            <div className="w-full flex items-end" style={{ height: "80px" }}>
              <motion.div
                animate={{ height: b.height }}
                transition={{ duration: 0.6, ease: EASE }}
                style={{ background: b.color }}
                className="w-full rounded-t-sm opacity-80"
              />
            </div>
            <span className="text-zinc-500 text-[6px]">{b.label}</span>
          </div>
        ))}
      </div>
      <div className="pt-2 border-t border-white/5 flex items-center gap-1">
        <ChartBar size={8} className="text-[#10B981]" />
        <span className="text-zinc-500 text-[6px]">100% transparente</span>
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
    title: "Posts & Carrosséis",
    desc: "Artes profissionais com identidade visual do seu negócio. Carrosséis com alta taxa de engajamento.",
    stat: "0,66% engajamento médio",
    tag: "Instagram",
    glowColor: "rgba(225,48,108,0.15)",
    mockup: (h) => <MockupPost hovered={h} />,
  },
  {
    title: "Stories Diários",
    desc: "Presença constante nos stories: promoções do dia, bastidores, depoimentos e chamadas para ação.",
    stat: "até 500M visualizações/dia",
    tag: "Stories",
    glowColor: "rgba(245,158,11,0.15)",
    mockup: (h) => <MockupStories hovered={h} />,
  },
  {
    title: "Reels",
    desc: "Vídeos curtos que ampliam o alcance orgânico. Reels bem feitos atingem quem ainda não te conhece.",
    stat: "+37% alcance orgânico",
    tag: "Reels",
    glowColor: "rgba(131,58,180,0.15)",
    mockup: (h) => <MockupReels hovered={h} />,
  },
  {
    title: "TikTok",
    desc: "Conteúdo autêntico no formato da plataforma — bastidores, tendências e vídeos virais.",
    stat: "98,6M usuários no Brasil",
    tag: "TikTok",
    glowColor: "rgba(255,0,80,0.12)",
    mockup: (h) => <MockupTikTok hovered={h} />,
  },
  {
    title: "Tráfego Pago (Meta Ads)",
    desc: "Anúncios segmentados por raio de 1 a 10km do seu estabelecimento. Você aparece para quem está perto.",
    stat: "ROI 300–600% para negócios locais",
    tag: "Ads",
    glowColor: "rgba(24,119,242,0.15)",
    mockup: (h) => <MockupAds hovered={h} />,
  },
  {
    title: "Relatório Mensal",
    desc: "Todo mês você recebe um relatório com alcance, seguidores, interações e o que gerou mais resultado.",
    stat: "100% transparente",
    tag: "Relatório",
    glowColor: "rgba(16,185,129,0.15)",
    mockup: (h) => <MockupRelatorio hovered={h} />,
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
      style={{ boxShadow: hovered ? `0 20px 48px -12px ${feature.glowColor}, 0 4px 16px -4px rgba(0,0,0,0.08)` : "0 2px 12px -4px rgba(0,0,0,0.06)" }}
      className="bg-white rounded-2xl border border-zinc-100 overflow-hidden flex flex-col transition-shadow duration-300"
    >
      {/* Visual area com iPhone frame */}
      <div
        className="h-75 w-full flex items-center justify-center relative overflow-hidden"
        style={{ background: `radial-gradient(ellipse at 50% 60%, ${feature.glowColor}, #F5F3EF 68%)` }}
      >
        <IPhoneFrame>
          {feature.mockup(hovered)}
        </IPhoneFrame>
      </div>

      {/* Content */}
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

/* ─── Hero floating frames ─── */
function HeroVisual() {
  return (
    <div className="relative w-full h-75 sm:h-90 lg:h-105">
      {/* Stories frame */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-0 top-8 w-[90px] h-[160px] rounded-2xl overflow-hidden border border-white/20 shadow-2xl rotate-[-6deg]"
      >
        <div className="w-full h-full bg-gradient-to-b from-[#833AB4] via-[#E1306C] to-[#F77737] flex items-center justify-center">
          <span className="text-white/30 text-xs font-black uppercase tracking-wider rotate-[-90deg]">Stories</span>
        </div>
      </motion.div>

      {/* Post frame — center */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute left-[80px] top-0 w-[180px] rounded-xl overflow-hidden border border-zinc-200 shadow-[0_24px_60px_-12px_rgba(0,0,0,0.2)]"
      >
        <div className="flex items-center gap-2 px-2.5 py-2 bg-white border-b border-zinc-100">
          <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#F97316] to-[#EA580C]" />
          <span className="text-zinc-900 text-[9px] font-semibold">sua_barbearia</span>
        </div>
        <div className="aspect-square bg-gradient-to-br from-zinc-800 to-zinc-950 flex items-center justify-center">
          <span className="text-white/10 text-3xl font-black tracking-tighter">EST.</span>
        </div>
        <div className="bg-white px-2.5 py-2">
          <div className="flex gap-3 mb-1">
            <Heart size={12} className="text-zinc-700" />
            <ChatCircle size={12} className="text-zinc-700" />
            <PaperPlaneTilt size={12} className="text-zinc-700" />
          </div>
          <span className="text-zinc-900 text-[8px] font-semibold">1.247 curtidas</span>
        </div>
      </motion.div>

      {/* Reels frame */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute right-0 top-16 w-[90px] h-[160px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl rotate-[5deg]"
      >
        <div className="w-full h-full bg-zinc-900 flex items-center justify-center relative">
          <Play size={24} weight="fill" className="text-white/20" />
          <div className="absolute right-2 bottom-6 flex flex-col gap-2 items-center">
            <Heart size={11} className="text-white/60" />
            <ChatCircle size={11} className="text-white/60" />
          </div>
          <span className="absolute top-2 left-0 right-0 text-center text-white/30 text-[7px] font-bold uppercase tracking-widest">Reels</span>
        </div>
      </motion.div>

      {/* Floating badge: seguidores */}
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
        className="absolute bottom-16 left-[60px] bg-white rounded-xl px-3 py-2 shadow-[0_8px_24px_-6px_rgba(0,0,0,0.15)] border border-zinc-100"
      >
        <p className="text-zinc-400 text-[8px]">Novos seguidores</p>
        <p className="text-zinc-900 text-base font-bold tracking-tight">+312%</p>
      </motion.div>

      {/* Floating badge: alcance */}
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
        className="absolute bottom-8 right-8 bg-[#F97316] rounded-xl px-3 py-2 shadow-[0_8px_24px_-6px_rgba(249,115,22,0.4)]"
      >
        <p className="text-orange-200 text-[8px]">Alcance</p>
        <p className="text-white text-base font-bold tracking-tight">+48 hoje</p>
      </motion.div>
    </div>
  );
}

/* ─── Passos ─── */
const steps = [
  { icon: CalendarBlank, n: "01", title: "Planejamos", desc: "Calendário mensal de conteúdo alinhado com seu negócio e datas importantes." },
  { icon: Images,         n: "02", title: "Criamos e publicamos", desc: "Artes, legendas e publicação nos horários de maior audiência." },
  { icon: WhatsappLogo,  n: "03", title: "Você aprova", desc: "Recebe o preview no WhatsApp e aprova com um clique antes de publicar." },
];

const included = [
  "Planejamento mensal de conteúdo",
  "Criação de artes e legendas",
  "Publicação nos horários certos",
  "Stories todos os dias úteis",
  "Respostas a comentários",
  "Hashtags estratégicas",
  "Análise de concorrentes locais",
  "Relatório mensal de desempenho",
];

/* ─── Page ─── */
export default function SocialMediaPage() {
  return (
    <main className="min-h-screen bg-[#FDFAF6]">

      {/* ── Hero ── */}
      <section className="pt-36 pb-20 px-4 max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <motion.div variants={fadeUp(0)} initial="hidden" animate="visible" className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#F77737] text-white text-[11px] uppercase tracking-[0.18em] font-bold">
                Social Media
              </span>
              <span className="px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-500 text-[11px] uppercase tracking-[0.18em] font-semibold">
                Carro-chefe
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp(1)}
              initial="hidden"
              animate="visible"
              className="text-5xl md:text-6xl font-bold leading-[1.05] tracking-[-0.03em] text-zinc-900"
            >
              Social Media
              <br />
              <span className="text-[#F97316]">que vende de verdade.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp(2)}
              initial="hidden"
              animate="visible"
              className="text-lg text-zinc-500 leading-relaxed max-w-[48ch]"
            >
              Cuidamos de todo o Instagram e TikTok do seu negócio — do planejamento à publicação.
              Conteúdo feito pra atrair cliente local, todo dia, sem você precisar se preocupar.
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
            { value: "113M", label: "usuários Instagram no Brasil" },
            { value: "89%", label: "dos pedidos de PMEs vêm do Instagram" },
            { value: "73%", label: "já compraram algo descoberto no Instagram" },
            { value: "+37%", label: "de alcance com Reels" },
          ].map((s) => (
            <div key={s.label} className="bg-white rounded-2xl border border-zinc-100 p-5 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.06)]">
              <span className="text-3xl font-bold tracking-tight text-zinc-900 block">{s.value}</span>
              <span className="text-xs text-zinc-400 leading-relaxed">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ── Features ── */}
      <section className="py-20 px-4 max-w-[1280px] mx-auto">
        <motion.div variants={fadeUp(0)} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 mb-3">O que está incluído</h2>
          <p className="text-zinc-500 text-sm max-w-[48ch]">
            Cada entrega foi pensada para gerar presença, engajamento e cliente novo no seu negócio.
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
        <motion.div variants={fadeUp(0)} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 mb-3">
            Tudo cuidado por nós.
            <br />
            <span className="text-[#F97316]">Você só aprova.</span>
          </h2>
          <p className="text-zinc-500 text-sm max-w-[44ch]">
            Planejamos, criamos, publicamos e respondemos. Você recebe o preview antes de ir ao ar.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 relative">
          {/* Connector line */}
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
            <div key={item} className="flex items-center gap-3 bg-white rounded-xl border border-zinc-100 px-4 py-3 shadow-[0_1px_4px_-2px_rgba(0,0,0,0.05)]">
              <CheckCircle size={18} weight="fill" className="text-[#F97316] shrink-0" />
              <span className="text-sm text-zinc-700 font-medium">{item}</span>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-4">
        <motion.div variants={fadeUp(0)} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-2xl mx-auto">
          <div className="bg-[#F97316] rounded-3xl p-12 flex flex-col items-center text-center gap-6 relative overflow-hidden">
            {/* subtle dot pattern */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
            <Users size={40} weight="fill" className="text-white/80 relative" />
            <h2 className="text-3xl font-bold text-white tracking-tight relative">
              Prontos para cuidar do seu Instagram e TikTok
            </h2>
            <p className="text-orange-100 text-sm leading-relaxed max-w-[40ch] relative">
              Entre em contato agora e receba uma análise gratuita da presença digital do seu negócio.
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
