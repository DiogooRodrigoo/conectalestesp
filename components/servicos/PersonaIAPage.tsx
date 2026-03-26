"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  RobotIcon,
  ArrowUpRightIcon,
  CheckCircleIcon,
  SparkleIcon,
} from "@phosphor-icons/react";

const EASE: [number, number, number, number] = [0.32, 0.72, 0, 1];
const fadeUp = (i = 0) => ({
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { delay: i * 0.07, duration: 0.65, ease: EASE } },
});

// ─── Tag Badge ───────────────────────────────────────────────────────────────

const tagStyles: Record<string, string> = {
  Design: "bg-[#EC4899] text-white",
  Branding: "bg-purple-600 text-white",
  IA: "bg-linear-to-r from-violet-700 to-purple-500 text-white",
  Conteúdo: "bg-[#8B5CF6] text-white",
  Automação: "bg-[#6366F1] text-white",
  Inovação: "bg-linear-to-r from-[#833AB4] via-[#EC4899] to-[#F59E0B] text-white",
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

function MockupDesign({ hovered }: { hovered: boolean }) {
  return (
    <div className="w-full h-full bg-white flex flex-col items-center pt-8 px-3">
      <motion.div
        animate={{ scale: hovered ? 1.05 : 1 }}
        transition={{ duration: 0.3 }}
        className="w-14 h-14 rounded-full flex items-center justify-center"
        style={{ background: "linear-gradient(135deg, #7C3AED, #6D28D9)" }}
      >
        <span className="text-white font-black text-lg">BA</span>
      </motion.div>
      <span className="text-[8px] font-bold text-zinc-900 mt-2">Barba do Bairro</span>
      <div className="flex gap-1.5 mt-2">
        {["#7C3AED", "#EC4899", "#F97316"].map((color) => (
          <div
            key={color}
            className="w-3 h-3 rounded-full border border-white shadow-sm"
            style={{ background: color }}
          />
        ))}
      </div>
      <div className="mt-2 bg-purple-50 rounded-full px-2.5 py-0.5">
        <span className="text-purple-600 text-[6px] font-semibold">100% exclusivo</span>
      </div>
    </div>
  );
}

function MockupBranding({ hovered: _ }: { hovered: boolean }) {
  return (
    <div className="w-full h-full bg-white flex flex-col pt-8">
      <div className="flex items-center gap-2 px-3 pb-2 border-b border-zinc-100">
        <div
          className="w-5 h-5 rounded-full shrink-0 flex items-center justify-center"
          style={{ background: "linear-gradient(135deg, #7C3AED, #6D28D9)" }}
        >
          <span className="text-white text-[6px] font-black">BB</span>
        </div>
        <span className="text-[7px] font-bold text-zinc-900">@barba_do_bairro</span>
      </div>
      <div className="px-3 pt-2">
        <p className="text-[7px] text-zinc-700 leading-relaxed">
          Ei mano, quem não toma conta da barba tá dormindo 😂 Passa aqui hoje!
        </p>
        <div className="flex items-center gap-1.5 mt-2 pt-2 border-t border-zinc-50">
          <span className="text-[8px]">❤️</span>
          <span className="text-zinc-400 text-[6px]">342 curtidas</span>
        </div>
      </div>
    </div>
  );
}

function MockupVideoIA({ hovered }: { hovered: boolean }) {
  return (
    <div className="w-full h-full bg-zinc-950 flex flex-col pt-8 px-3">
      <div
        className="flex-1 rounded-xl flex flex-col items-center justify-center relative overflow-hidden mb-2"
        style={{ background: "linear-gradient(135deg, #5B21B6, #7C3AED)" }}
      >
        <span className="text-white/30 text-[6px] font-bold uppercase tracking-widest absolute top-2">
          PERSONA IA
        </span>
        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
          <span className="text-white text-sm">▶</span>
        </div>
        <motion.span
          animate={{ opacity: hovered ? [1, 0.3, 1] : 0.6 }}
          transition={{ duration: 0.8, repeat: hovered ? Infinity : 0 }}
          className="text-purple-200 text-[6px] font-semibold absolute bottom-2"
        >
          🤖 IA Gerando...
        </motion.span>
      </div>
      <div className="flex items-end gap-0.5 pb-2 h-6">
        {[3, 6, 4, 8, 5, 7, 3, 6, 4, 9, 5, 7, 4].map((h, i) => (
          <motion.div
            key={i}
            animate={{ height: hovered ? h * 2 : h }}
            transition={{ duration: 0.4, delay: i * 0.04 }}
            className="flex-1 bg-purple-500 rounded-full"
            style={{ height: h }}
          />
        ))}
      </div>
    </div>
  );
}

function MockupPostsPersona({ hovered: _ }: { hovered: boolean }) {
  return (
    <div className="w-full h-full bg-white flex flex-col pt-8">
      <div className="flex items-center gap-1.5 px-3 pb-1.5 border-b border-zinc-100">
        <span className="text-[7px] font-bold text-transparent bg-clip-text bg-linear-to-r from-[#833AB4] via-[#E1306C] to-[#F77737]">
          Instagram
        </span>
      </div>
      <div className="grid grid-cols-2 gap-1 px-3 pt-2">
        {[
          "from-purple-400 to-violet-600",
          "from-pink-400 to-purple-500",
          "from-violet-500 to-indigo-600",
          "from-purple-300 to-pink-400",
        ].map((gradient, i) => (
          <div
            key={i}
            className={`aspect-square rounded-md bg-linear-to-br ${gradient} relative overflow-hidden`}
          >
            <div className="absolute bottom-1 left-1 w-3 h-3 rounded-full bg-purple-600 border border-white flex items-center justify-center">
              <span className="text-white text-[4px] font-black">BB</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MockupPresenca({ hovered }: { hovered: boolean }) {
  return (
    <div className="w-full h-full bg-zinc-950 flex flex-col pt-8 px-3">
      <div className="flex items-center gap-1.5 mb-3">
        <motion.div
          animate={{ opacity: hovered ? [1, 0.4, 1] : 1 }}
          transition={{ duration: 1.2, repeat: hovered ? Infinity : 0 }}
          className="w-1.5 h-1.5 rounded-full bg-green-400"
          style={{ boxShadow: "0 0 6px #4ade80" }}
        />
        <span className="text-green-400 text-[7px] font-semibold">Online agora</span>
      </div>
      <span className="text-white text-[8px] font-bold mb-2">Barba do Bairro</span>
      <div className="flex flex-col gap-1.5">
        <div className="bg-white/5 rounded-lg px-2 py-1.5">
          <span className="text-zinc-400 text-[6px]">3 posts publicados hoje</span>
        </div>
        <div className="bg-white/5 rounded-lg px-2 py-1.5">
          <span className="text-zinc-400 text-[6px]">12 DMs respondidas</span>
        </div>
      </div>
      <div className="mt-2 flex items-end gap-0.5 h-6">
        {[2, 5, 3, 7, 4, 6, 8, 5, 3, 6, 4, 7].map((h, i) => (
          <motion.div
            key={i}
            animate={{ height: hovered ? h * 2.5 : h }}
            transition={{ duration: 0.35, delay: i * 0.03 }}
            className="flex-1 bg-purple-500/60 rounded-full"
            style={{ height: h }}
          />
        ))}
      </div>
      <span className="text-zinc-600 text-[5px] mt-0.5">atividade 24h</span>
    </div>
  );
}

function MockupDiferencial({ hovered: _ }: { hovered: boolean }) {
  return (
    <div className="w-full h-full bg-white flex flex-col pt-8 px-3">
      <span className="text-[7px] font-bold text-zinc-900 mb-2">Comparativo</span>
      <div className="grid grid-cols-2 gap-1.5">
        <div>
          <div className="bg-purple-600 rounded-t-md px-1.5 py-1 text-center">
            <span className="text-white text-[6px] font-bold">Com Persona</span>
          </div>
          <div className="bg-purple-50 rounded-b-md px-1.5 py-1.5 flex flex-col gap-1">
            <div className="flex justify-between">
              <span className="text-zinc-500 text-[5.5px]">Engaj.</span>
              <span className="text-purple-600 text-[6px] font-bold">4.2%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-500 text-[5.5px]">Seguid.</span>
              <span className="text-purple-600 text-[6px] font-bold">+48/mês</span>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-zinc-200 rounded-t-md px-1.5 py-1 text-center">
            <span className="text-zinc-500 text-[6px] font-bold">Sem Persona</span>
          </div>
          <div className="bg-zinc-50 rounded-b-md px-1.5 py-1.5 flex flex-col gap-1">
            <div className="flex justify-between">
              <span className="text-zinc-400 text-[5.5px]">Engaj.</span>
              <span className="text-zinc-400 text-[6px]">0.8%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-400 text-[5.5px]">Seguid.</span>
              <span className="text-zinc-400 text-[6px]">+3/mês</span>
            </div>
          </div>
        </div>
      </div>
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
    title: "Identidade Visual da Persona",
    desc: "Criamos um avatar com aparência, estilo e identidade visual única. Seu personagem digital tem cara própria.",
    stat: "100% exclusivo",
    tag: "Design",
    glowColor: "rgba(236,72,153,0.15)",
    mockup: (h) => <MockupDesign hovered={h} />,
  },
  {
    title: "Voz e Personalidade",
    desc: "Definimos como a persona fala, os trejeitos, o tom e a linguagem. Cada post tem a voz única do personagem.",
    stat: "Identidade de marca forte",
    tag: "Branding",
    glowColor: "rgba(147,51,234,0.15)",
    mockup: (h) => <MockupBranding hovered={h} />,
  },
  {
    title: "Vídeos com IA",
    desc: "O avatar aparece em vídeos gerados com inteligência artificial — falando, apresentando produtos e interagindo.",
    stat: "Conteúdo em vídeo sem câmera",
    tag: "IA",
    glowColor: "rgba(109,40,217,0.15)",
    mockup: (h) => <MockupVideoIA hovered={h} />,
  },
  {
    title: "Posts com a Persona",
    desc: "Todos os posts do Instagram e TikTok são publicados pelo personagem, criando uma narrativa consistente.",
    stat: "Narrativa contínua",
    tag: "Conteúdo",
    glowColor: "rgba(139,92,246,0.15)",
    mockup: (h) => <MockupPostsPersona hovered={h} />,
  },
  {
    title: "Presença 24/7",
    desc: "O avatar representa sua marca o tempo todo — mesmo quando você está atendendo, a persona está ativa online.",
    stat: "Ativo 24 horas por dia",
    tag: "Automação",
    glowColor: "rgba(99,102,241,0.15)",
    mockup: (h) => <MockupPresenca hovered={h} />,
  },
  {
    title: "Diferencial Competitivo",
    desc: "Poucos comércios locais têm uma persona digital. Isso cria memorabilidade e diferencia seu negócio da concorrência.",
    stat: "Inovação no bairro",
    tag: "Inovação",
    glowColor: "rgba(131,58,180,0.15)",
    mockup: (h) => <MockupDiferencial hovered={h} />,
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

const PERSONAS = [
  {
    initials: "CT",
    image: "/chef-toninho.jpeg",
    name: "Chef Toninho",
    negocio: "Restaurante",
    voz: "bem-humorado · direto",
    estilo: "informal · autêntico",
    emoji: "👨‍🍳",
    post: "Hoje tem prato especial no almoço! 🍝 Vem que tá incrível!",
    likes: "218",
    gradient: "linear-gradient(135deg, #F97316, #EA580C)",
    glow: "#F97316",
    ring: "rgba(249,115,22,0.4)",
  },
  {
    initials: "BB",
    image: "/barba-do-bairro.png",
    name: "Barba do Bairro",
    negocio: "Barbearia",
    voz: "raiz · confiante",
    estilo: "masculino · descolado",
    emoji: "✂️",
    post: "Quem não cuida da barba tá perdendo tempo 😂 Passa aqui hoje!",
    likes: "342",
    gradient: "linear-gradient(135deg, #7C3AED, #6D28D9)",
    glow: "#7C3AED",
    ring: "rgba(124,58,237,0.4)",
  },
  {
    initials: "DE",
    image: "/dra-estetica.png",
    name: "Dra. Estética",
    negocio: "Clínica de estética",
    voz: "acolhedora · especialista",
    estilo: "elegante · confiável",
    emoji: "💆‍♀️",
    post: "Você merece se cuidar! ✨ Agende sua avaliação gratuita hoje.",
    likes: "501",
    gradient: "linear-gradient(135deg, #EC4899, #BE185D)",
    glow: "#EC4899",
    ring: "rgba(236,72,153,0.4)",
  },
];

function HeroVisual() {
  const [idx, setIdx] = useState(0);
  const [step, setStep] = useState<"scanning" | "ready">("scanning");

  useEffect(() => {
    const cycle = setInterval(() => {
      setStep("scanning");
      setTimeout(() => {
        setIdx((i) => (i + 1) % PERSONAS.length);
        setStep("ready");
      }, 900);
    }, 3200);
    return () => clearInterval(cycle);
  }, []);

  const p = PERSONAS[idx];

  return (
    <div className="relative w-full flex items-center justify-center py-6">

      {/* ── Glow ambiente ── */}
      <motion.div
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <div
          className="w-72 h-48 rounded-full blur-3xl"
          style={{ background: p.glow, opacity: 0.15 }}
        />
      </motion.div>

      {/* ── Card central: gerador de persona ── */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-[0_32px_80px_-16px_rgba(0,0,0,0.5)]"
        style={{ width: 320, background: "#0D0A1A" }}
      >
        {/* Topbar do gerador */}
        <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/5">
          <div className="flex gap-1">
            <div className="w-2 h-2 rounded-full bg-red-500/60" />
            <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
            <div className="w-2 h-2 rounded-full bg-green-500/60" />
          </div>
          <span className="text-[9px] text-white/30 font-mono mx-auto">persona.ia — gerando</span>
        </div>

        {/* Área do avatar */}
        <div className="flex flex-col items-center pt-8 pb-6 px-6 relative">
          {/* Scan line */}
          <AnimatePresence>
            {step === "scanning" && (
              <motion.div
                key="scan"
                initial={{ top: "20%", opacity: 0.6 }}
                animate={{ top: "90%", opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.85, ease: "linear" }}
                className="absolute left-0 right-0 h-px pointer-events-none z-20"
                style={{ background: `linear-gradient(90deg, transparent, ${p.glow}, transparent)` }}
              />
            )}
          </AnimatePresence>

          {/* Orb externo pulsante */}
          <div className="relative mb-5">
            <motion.div
              animate={{ scale: [1, 1.12, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -inset-4 rounded-full blur-xl"
              style={{ background: p.glow }}
            />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-2 rounded-full border border-dashed"
              style={{ borderColor: p.ring }}
            />

            {/* Avatar */}
            <AnimatePresence mode="wait">
              <motion.div
                key={p.name}
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.7, opacity: 0 }}
                transition={{ duration: 0.4, ease: EASE }}
                className="relative w-20 h-20 rounded-full overflow-hidden shadow-[0_0_40px_-4px_rgba(0,0,0,0.6)]"
                style={{ boxShadow: `0 0 32px -4px ${p.glow}` }}
              >
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-cover scale-125 object-top"
                  sizes="80px"
                />
                {/* Badge IA */}
                <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-white flex items-center justify-center shadow-md z-10">
                  <span className="text-[10px]">🤖</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Nome e negócio */}
          <AnimatePresence mode="wait">
            <motion.div
              key={p.name + "-text"}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: EASE }}
              className="text-center mb-4"
            >
              <span className="text-white font-bold text-sm block">{p.name}</span>
              <span className="text-white/40 text-[10px]">{p.negocio}</span>
            </motion.div>
          </AnimatePresence>

          {/* Atributos da persona — terminal style */}
          <AnimatePresence mode="wait">
            <motion.div
              key={p.name + "-attrs"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.15 }}
              className="w-full bg-white/3 rounded-xl p-3 font-mono flex flex-col gap-1.5 border border-white/5"
            >
              {[
                { label: "voz", value: p.voz },
                { label: "estilo", value: p.estilo },
                { label: "status", value: "✓ pronta para publicar" },
              ].map((attr) => (
                <div key={attr.label} className="flex gap-2 text-[9px]">
                  <span className="text-white/25 w-10 shrink-0">{attr.label}</span>
                  <span className="text-white/70">{attr.value}</span>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Indicador de persona ativa */}
          <div className="flex gap-1.5 mt-4">
            {PERSONAS.map((_, i) => (
              <motion.div
                key={i}
                animate={{ width: i === idx ? 20 : 6, opacity: i === idx ? 1 : 0.3 }}
                transition={{ duration: 0.3 }}
                className="h-1.5 rounded-full"
                style={{ background: i === idx ? p.glow : "#fff" }}
              />
            ))}
          </div>
        </div>
      </motion.div>

      {/* ── Card flutuante: post em tempo real ── */}
      <motion.div
        animate={{ y: [0, -7, 0] }}
        transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        className="absolute top-2 -right-2 lg:-right-4 z-20 bg-white rounded-xl border border-zinc-100 shadow-[0_8px_28px_-4px_rgba(0,0,0,0.13)] overflow-hidden"
        style={{ width: 148 }}
      >
        {/* Mini header Instagram */}
        <div className="flex items-center gap-1.5 px-2.5 py-2 border-b border-zinc-100">
          <AnimatePresence mode="wait">
            <motion.div
              key={p.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-4 h-4 rounded-full shrink-0 overflow-hidden"
            >
              <Image src={p.image} alt={p.name} fill className="object-cover" sizes="16px" />
            </motion.div>
          </AnimatePresence>
          <AnimatePresence mode="wait">
            <motion.span
              key={p.name + "-post-name"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="text-[7px] font-bold text-zinc-900 truncate"
            >
              {p.name}
            </motion.span>
          </AnimatePresence>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={p.name + "-post"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="px-2.5 py-2"
          >
            <p className="text-zinc-700 text-[7px] leading-relaxed line-clamp-2">{p.post}</p>
            <div className="flex items-center gap-1 mt-1.5 pt-1.5 border-t border-zinc-50">
              <span className="text-[8px]">❤️</span>
              <span className="text-zinc-400 text-[6px]">{p.likes} curtidas</span>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* ── Card flutuante: engajamento ── */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4.3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute bottom-4 -left-2 lg:-left-4 z-20 bg-white rounded-xl border border-zinc-100 shadow-[0_8px_28px_-4px_rgba(0,0,0,0.13)] px-3 py-2.5"
      >
        <span className="text-[7px] text-zinc-400 block mb-1.5 font-medium">Resultado em 7 dias</span>
        <div className="flex flex-col gap-1">
          {[
            { label: "Seguidores", value: "+48", color: "#7C3AED" },
            { label: "Engajamento", value: "4.2%", color: "#EC4899" },
          ].map((m) => (
            <div key={m.label} className="flex items-center justify-between gap-4">
              <span className="text-[7px] text-zinc-500">{m.label}</span>
              <span className="text-[8px] font-bold" style={{ color: m.color }}>{m.value}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

// ─── Dados estáticos ──────────────────────────────────────────────────────────

const examples = [
  {
    persona: "Chef Toninho",
    negocio: "Restaurante popular",
    desc: "Um chef simpático que compartilha receitas, dicas do dia e os pratos do cardápio de forma bem-humorada.",
  },
  {
    persona: "Barba do Bairro",
    negocio: "Barbearia",
    desc: "Personagem raiz que fala de cuidados masculinos, tendências de corte e novidades da barbearia com linguagem informal.",
  },
  {
    persona: "Dra. Estética",
    negocio: "Clínica de estética",
    desc: "Avatar profissional e acolhedor que educa sobre procedimentos, tira dúvidas e divulga promoções com autoridade.",
  },
];

const included = [
  "Criação do avatar e identidade visual",
  "Definição de personalidade e voz",
  "Roteiro dos primeiros posts com a persona",
  "Vídeos mensais com IA (avatar falando)",
  "Posts e stories com a persona",
  "Evolução mensal do personagem",
  "Relatório de engajamento da persona",
  "Consultoria de narrativa e storytelling",
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function PersonaIAPage() {
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
              <span className="px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-500 text-[11px] uppercase tracking-[0.18em] font-semibold">
                Serviço
              </span>
              <span className="px-3 py-1 rounded-full bg-linear-to-r from-[#7C3AED] to-[#EC4899] text-white text-[11px] uppercase tracking-[0.18em] font-bold">
                Persona IA
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp(1)}
              initial="hidden"
              animate="visible"
              className="text-5xl md:text-6xl font-bold leading-[1.05] tracking-[-0.03em] text-zinc-900 mb-6"
            >
              Sua marca ganha
              <br />
              <span className="text-purple-600">um rosto digital.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp(2)}
              initial="hidden"
              animate="visible"
              className="text-lg text-zinc-500 leading-relaxed max-w-[52ch] mb-8"
            >
              Criamos um personagem digital exclusivo para o seu negócio — com
              identidade visual, voz e personalidade únicas. A persona publica
              conteúdo, aparece em vídeos com IA e representa sua marca 24h por
              dia.
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
                className="group flex items-center gap-2 bg-purple-600 text-white font-semibold px-6 py-3.5 rounded-full hover:bg-purple-700 transition-all duration-300 active:scale-[0.97]"
              >
                Quero minha Persona IA
                <span className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">
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
            { value: "100%", label: "exclusivo — nenhum outro negócio terá igual" },
            { value: "24h", label: "ativa online representando sua marca" },
            { value: "3x", label: "mais memorabilidade com personagem fixo" },
            { value: "0", label: "necessidade de aparecer em câmera" },
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
            O que a Persona IA faz pelo seu negócio
          </h2>
          <p className="text-zinc-500 text-sm max-w-[48ch]">
            Um personagem completo — visual, voz e presença — que representa sua marca no digital.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <FeatureCard key={f.title} feature={f} index={i} />
          ))}
        </div>
      </section>

      {/* Examples */}
      <section className="py-20 px-4 max-w-[1280px] mx-auto">
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 mb-3">
            Exemplos de personas
          </h2>
          <p className="text-zinc-500 text-sm">Cada negócio terá uma persona única, criada do zero.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
          {examples.map((e, i) => (
            <motion.div
              key={e.persona}
              variants={fadeUp(i * 0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-linear-to-br from-purple-50 to-violet-50/60 rounded-2xl border border-purple-100/60 p-6"
            >
              <div className="w-12 h-12 rounded-2xl bg-purple-600 flex items-center justify-center mb-4">
                <RobotIcon size={24} weight="fill" className="text-white" />
              </div>
              <h3 className="font-bold text-zinc-900 text-lg mb-1">{e.persona}</h3>
              <span className="text-[10px] uppercase tracking-wider font-semibold text-purple-500 mb-3 block">
                {e.negocio}
              </span>
              <p className="text-sm text-zinc-500 leading-relaxed">{e.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Checklist */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            variants={fadeUp(0)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900 mb-4">
              O que você recebe
            </h2>
            <div className="flex flex-col gap-2">
              {included.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 bg-white rounded-xl border border-zinc-100 px-4 py-3 shadow-[0_1px_4px_-2px_rgba(0,0,0,0.05)]"
                >
                  <CheckCircleIcon size={18} weight="fill" className="text-purple-600 shrink-0" />
                  <span className="text-sm text-zinc-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp(1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-linear-to-br from-purple-600 to-violet-700 rounded-2xl p-8 text-white"
          >
            <SparkleIcon size={32} weight="fill" className="text-purple-200 mb-4" />
            <h3 className="text-xl font-bold mb-3">Por que criar uma Persona IA?</h3>
            <p className="text-purple-100 text-sm leading-relaxed mb-4">
              Comércios com personagem digital criam uma conexão emocional com o
              público. As pessoas seguem personagens, não produtos.
            </p>
            <p className="text-purple-100 text-sm leading-relaxed">
              Com uma persona, seu negócio vira uma marca com história — e o
              cliente volta não só pelo serviço, mas pela identidade da marca.
            </p>
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
          <div className="bg-linear-to-br from-purple-600 to-violet-700 rounded-3xl p-12 flex flex-col items-center text-center gap-6">
            <RobotIcon size={40} weight="fill" className="text-purple-200" />
            <h2 className="text-3xl font-bold text-white tracking-tight">
              Seu negócio merece uma identidade única
            </h2>
            <p className="text-purple-100 text-sm leading-relaxed max-w-[40ch]">
              Fale com a gente e descubra como criar a persona perfeita para o
              seu comércio.
            </p>
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white text-purple-600 font-bold px-8 py-4 rounded-full hover:bg-purple-50 transition-all duration-300 active:scale-[0.97]"
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
