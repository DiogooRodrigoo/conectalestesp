"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  CalendarCheckIcon,
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
  Agendamento: "bg-[#F97316] text-white",
  WhatsApp: "bg-[#25D366] text-white",
  Automação: "bg-[#0EA5E9] text-white",
  Gestão: "bg-zinc-800 text-white",
  Instagram: "bg-linear-to-r from-[#833AB4] via-[#E1306C] to-[#F77737] text-white",
  CRM: "bg-[#6366F1] text-white",
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

function MockupAgendamento({ hovered }: { hovered: boolean }) {
  return (
    <div className="w-full h-full bg-white flex flex-col pt-8">
      <div className="px-3 pb-2 border-b border-zinc-100">
        <span className="text-[8px] font-bold text-zinc-900">Marque Já</span>
      </div>
      <div className="flex flex-col gap-1 px-3 pt-2">
        {[
          { label: "Corte", price: "R$35" },
          { label: "Barba", price: "R$25" },
          { label: "Combo", price: "R$55" },
        ].map((s) => (
          <div
            key={s.label}
            className="flex items-center justify-between bg-zinc-100 rounded-md px-2 py-1"
          >
            <span className="text-[7px] font-medium text-zinc-700">{s.label}</span>
            <span className="text-[7px] font-bold text-zinc-900">{s.price}</span>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-1 px-3 pt-2">
        {["09:00", "10:00", "11:00", "14:00"].map((h, i) => (
          <div
            key={h}
            className={`rounded-md px-1.5 py-1 text-center text-[7px] font-semibold transition-all duration-300 ${
              i === 0 ? "bg-[#F97316] text-white" : "bg-zinc-100 text-zinc-500"
            }`}
          >
            {h}
          </div>
        ))}
      </div>
      <div className="mt-auto px-3 pb-3">
        <motion.div
          animate={{ scale: hovered ? 1.04 : 1 }}
          transition={{ duration: 0.25 }}
          className="bg-[#F97316] rounded-md py-1.5 text-center"
        >
          <span className="text-white text-[7px] font-bold">Confirmar</span>
        </motion.div>
      </div>
    </div>
  );
}

function MockupWhatsApp({ hovered }: { hovered: boolean }) {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="bg-[#075E54] px-2.5 py-2 flex items-center gap-2 shrink-0 pt-8">
        <div className="w-5 h-5 rounded-full bg-[#25D366] flex items-center justify-center shrink-0">
          <span className="text-white text-[7px] font-black">B</span>
        </div>
        <div>
          <span className="text-white text-[8px] font-semibold block leading-tight">
            Confirmação
          </span>
          <span className="text-green-300 text-[6px]">Automática</span>
        </div>
      </div>
      <div className="flex-1 bg-[#ECE5DD] p-2 flex flex-col gap-1.5">
        <div className="self-end bg-[#DCF8C6] rounded-lg px-2 py-1.5 max-w-[90%]">
          <p className="text-zinc-800 text-[7px] leading-relaxed whitespace-pre-line">
            {"✓✓ Horário confirmado!\nCorte — Seg 28/04 às 14h\nBarbearia Silva"}
          </p>
        </div>
        <motion.div
          animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 4 }}
          transition={{ duration: 0.3 }}
          className="self-start bg-white rounded-lg px-2 py-1.5 max-w-[80%]"
        >
          <p className="text-zinc-700 text-[7px]">Perfeito! Te esperamos 😊</p>
        </motion.div>
      </div>
    </div>
  );
}

function MockupLembrete({ hovered }: { hovered: boolean }) {
  return (
    <div className="w-full h-full bg-zinc-900 flex flex-col items-center justify-center pt-8 px-3">
      <div className="w-full bg-white rounded-xl p-3 flex flex-col gap-1.5">
        <span className="text-[9px] font-bold text-zinc-900">🔔 Lembrete</span>
        <span className="text-[7px] font-semibold text-zinc-500">
          Seu horário em 1 hora
        </span>
        <div className="text-[6.5px] text-zinc-400 border-t border-zinc-100 pt-1.5">
          Corte — 14:00 • Barbearia Silva
        </div>
        <div className="mt-1 h-1 rounded-full bg-zinc-100 overflow-hidden">
          <motion.div
            animate={{ width: hovered ? "85%" : "40%" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="h-full bg-[#0EA5E9] rounded-full"
          />
        </div>
        <span className="text-[6px] text-zinc-400">Toque para confirmar</span>
      </div>
    </div>
  );
}

function MockupGestao({ hovered: _ }: { hovered: boolean }) {
  const slots = [
    { time: "09:00", name: "João S.", service: "Corte", free: false },
    { time: "10:00", name: "Pedro M.", service: "Barba", free: false },
    { time: "11:00", name: "", service: "", free: true },
    { time: "14:00", name: "Carlos R.", service: "Combo", free: false },
  ];
  return (
    <div className="w-full h-full bg-white flex flex-col pt-8">
      <div className="px-3 pb-2 border-b border-zinc-100">
        <span className="text-[8px] font-bold text-zinc-900">Agenda de Hoje</span>
      </div>
      <div className="flex flex-col gap-1 px-3 pt-2">
        {slots.map((s) =>
          s.free ? (
            <div
              key={s.time}
              className="rounded-md border border-dashed border-zinc-200 bg-zinc-50 px-2 py-1.5 flex items-center gap-1.5"
            >
              <span className="text-[#F97316] text-[6px] font-bold">{s.time}</span>
              <span className="text-zinc-300 text-[6px]">——— livre</span>
            </div>
          ) : (
            <div
              key={s.time}
              className="rounded-md border border-zinc-100 bg-white px-2 py-1.5 flex items-center gap-1.5 shadow-[0_1px_3px_-1px_rgba(0,0,0,0.06)]"
            >
              <span className="text-[#F97316] text-[6px] font-bold shrink-0">{s.time}</span>
              <span className="text-zinc-700 text-[6px]">
                {s.name} • {s.service}
              </span>
            </div>
          )
        )}
      </div>
    </div>
  );
}

function MockupInstagram({ hovered }: { hovered: boolean }) {
  return (
    <div className="w-full h-full bg-white flex flex-col pt-8">
      <div className="flex items-center justify-between px-3 py-1.5 border-b border-zinc-100">
        <span className="text-[8px] font-bold text-transparent bg-clip-text bg-linear-to-r from-[#833AB4] via-[#E1306C] to-[#F77737]">
          Instagram
        </span>
      </div>
      <div className="flex flex-col items-center pt-3 px-3 gap-1.5">
        <div className="w-8 h-8 rounded-full bg-[#F97316] flex items-center justify-center">
          <span className="text-white text-[8px] font-black">SB</span>
        </div>
        <span className="text-[7px] font-bold text-zinc-900">sua_barbearia</span>
        <span className="text-[6px] text-zinc-400 text-center leading-tight">
          Barbearia • Zona Leste SP
        </span>
        <motion.div
          animate={{ scale: hovered ? [1, 1.04, 1] : 1 }}
          transition={{ duration: 0.9, repeat: hovered ? Infinity : 0 }}
          className="mt-1 w-full bg-[#F97316] rounded-md py-1.5 text-center"
        >
          <span className="text-white text-[7px] font-bold">Agendar Agora →</span>
        </motion.div>
      </div>
      <div className="grid grid-cols-3 gap-px mt-2 px-3">
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className="aspect-square bg-zinc-800 rounded-sm" />
        ))}
      </div>
    </div>
  );
}

function MockupCRM({ hovered }: { hovered: boolean }) {
  const clients = [
    { name: "João S.", last: "há 7 dias", dot: "bg-green-400" },
    { name: "Pedro M.", last: "há 21 dias", dot: "bg-yellow-400" },
    { name: "Carlos R.", last: "há 45 dias", dot: "bg-red-400" },
  ];
  return (
    <div className="w-full h-full bg-zinc-950 flex flex-col pt-8 px-3">
      <span className="text-[8px] font-bold text-white mb-2">Clientes</span>
      <div className="flex flex-col gap-1.5">
        {clients.map((c, i) => (
          <div
            key={c.name}
            className="flex items-center justify-between bg-white/5 rounded-lg px-2 py-1.5"
          >
            <div className="flex items-center gap-1.5">
              <div className={`w-1.5 h-1.5 rounded-full ${c.dot}`} />
              <span className="text-white text-[7px] font-medium">{c.name}</span>
            </div>
            <motion.span
              animate={{ opacity: hovered ? 1 : 0.5 }}
              transition={{ duration: 0.3, delay: i * 0.08 }}
              className="text-zinc-400 text-[6px]"
            >
              {c.last}
            </motion.span>
          </div>
        ))}
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
    title: "Agendamento Online 24h",
    desc: "O cliente agenda quando quiser, mesmo fora do horário de atendimento. Sem precisar ligar ou esperar resposta.",
    stat: "Disponível 24 horas",
    tag: "Agendamento",
    glowColor: "rgba(249,115,22,0.15)",
    mockup: (h) => <MockupAgendamento hovered={h} />,
  },
  {
    title: "Integração com WhatsApp",
    desc: "Confirmação de agendamento automática pelo WhatsApp. O cliente recebe a confirmação na hora que marcar.",
    stat: "Resposta imediata",
    tag: "WhatsApp",
    glowColor: "rgba(37,211,102,0.15)",
    mockup: (h) => <MockupWhatsApp hovered={h} />,
  },
  {
    title: "Lembretes Automáticos",
    desc: "Lembrete enviado pelo WhatsApp 24h antes do horário marcado. Reduz faltas e aumenta a pontualidade.",
    stat: "Reduz faltas em até 60%",
    tag: "Automação",
    glowColor: "rgba(14,165,233,0.15)",
    mockup: (h) => <MockupLembrete hovered={h} />,
  },
  {
    title: "Gestão de Horários",
    desc: "Você define os horários disponíveis, intervalos e folgas. O sistema controla a agenda automaticamente.",
    stat: "Zero conflito de horário",
    tag: "Gestão",
    glowColor: "rgba(24,24,27,0.12)",
    mockup: (h) => <MockupGestao hovered={h} />,
  },
  {
    title: "Link na Bio do Instagram",
    desc: "Um link direto na bio do Instagram leva o cliente à página de agendamento. Simples e sem atrito.",
    stat: "Conversão direto do Insta",
    tag: "Instagram",
    glowColor: "rgba(225,48,108,0.15)",
    mockup: (h) => <MockupInstagram hovered={h} />,
  },
  {
    title: "Histórico de Clientes",
    desc: "Registro de todos os agendamentos anteriores por cliente. Útil para fidelização e controle de frequência.",
    stat: "Histórico completo",
    tag: "CRM",
    glowColor: "rgba(99,102,241,0.15)",
    mockup: (h) => <MockupCRM hovered={h} />,
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

// ─── MacBook Screen: Scheduling System ────────────────────────────────────────

function MacBookScreen() {
  const slots = [
    { time: "09:00", name: "João Silva", service: "Corte + Barba", color: "bg-[#F97316]/15 border-[#F97316]/30 text-[#F97316]", dot: "bg-[#F97316]" },
    { time: "10:00", name: "Pedro Melo", service: "Corte", color: "bg-sky-50 border-sky-200 text-sky-600", dot: "bg-sky-400" },
    { time: "11:00", free: true },
    { time: "12:00", name: "Carlos Reis", service: "Barba", color: "bg-violet-50 border-violet-200 text-violet-600", dot: "bg-violet-400" },
    { time: "14:00", name: "Lucas Gomes", service: "Combo", color: "bg-emerald-50 border-emerald-200 text-emerald-600", dot: "bg-emerald-400" },
    { time: "15:00", free: true },
    { time: "16:00", name: "Rafael Costa", service: "Corte", color: "bg-[#F97316]/15 border-[#F97316]/30 text-[#F97316]", dot: "bg-[#F97316]" },
  ];

  return (
    <div className="w-full h-full bg-[#F8F7F4] flex overflow-hidden">
      {/* Sidebar */}
      <div className="w-[28%] h-full bg-white border-r border-zinc-100 flex flex-col">
        {/* Logo */}
        <div className="px-2.5 pt-3 pb-2 border-b border-zinc-100">
          <div className="flex items-center gap-1.5">
            <div className="w-4 h-4 rounded-md bg-[#F97316] flex items-center justify-center shrink-0">
              <span className="text-white text-[7px] font-black">M</span>
            </div>
            <span className="text-[8px] font-bold text-zinc-900">Marque Já</span>
          </div>
        </div>
        {/* Nav */}
        <div className="flex flex-col gap-0.5 p-1.5 flex-1">
          {[
            { label: "Agenda", active: true },
            { label: "Clientes", active: false },
            { label: "Serviços", active: false },
            { label: "Relatórios", active: false },
          ].map((item) => (
            <div
              key={item.label}
              className={`rounded-md px-2 py-1 text-[7px] font-semibold ${
                item.active
                  ? "bg-[#F97316]/10 text-[#F97316]"
                  : "text-zinc-400"
              }`}
            >
              {item.label}
            </div>
          ))}
        </div>
        {/* Mini stats */}
        <div className="p-1.5 border-t border-zinc-100 flex flex-col gap-1">
          <div className="bg-zinc-50 rounded-md p-1.5">
            <span className="text-[6px] text-zinc-400 block">Hoje</span>
            <span className="text-[11px] font-bold text-zinc-900">5 agend.</span>
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Topbar */}
        <div className="flex items-center justify-between px-2.5 py-2 border-b border-zinc-100 bg-white">
          <span className="text-[8px] font-bold text-zinc-900">Segunda, 28 Abr</span>
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 rounded-full bg-[#F97316] flex items-center justify-center">
              <span className="text-white text-[6px] font-black">+</span>
            </div>
          </div>
        </div>

        {/* Slots */}
        <div className="flex-1 overflow-hidden px-2 py-1.5 flex flex-col gap-1">
          {slots.map((s) =>
            "free" in s ? (
              <div
                key={s.time}
                className="flex items-center gap-1.5 rounded-md border border-dashed border-zinc-200 bg-white/60 px-2 py-1"
              >
                <span className="text-[6px] font-semibold text-zinc-300 w-6 shrink-0">{s.time}</span>
                <span className="text-[6px] text-zinc-300">— livre</span>
              </div>
            ) : (
              <div
                key={s.time}
                className={`flex items-center gap-1.5 rounded-md border px-2 py-1 ${s.color}`}
              >
                <span className="text-[6px] font-bold w-6 shrink-0 opacity-70">{s.time}</span>
                <div className={`w-1 h-1 rounded-full shrink-0 ${s.dot}`} />
                <div className="flex-1 min-w-0">
                  <span className="text-[6.5px] font-semibold block leading-tight truncate">{s.name}</span>
                  <span className="text-[5.5px] opacity-60">{s.service}</span>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Hero Visual ──────────────────────────────────────────────────────────────

function HeroVisual() {
  return (
    <div className="relative w-full flex items-center justify-center py-8">
      {/* Glow de fundo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-80 h-40 rounded-full bg-[#F97316]/10 blur-3xl" />
      </div>

      {/* MacBook flutuando */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10"
      >
        {/* Lid / tela */}
        <div
          className="relative rounded-t-xl overflow-hidden border border-zinc-300 bg-zinc-800"
          style={{ width: 420, height: 264 }}
        >
          {/* Moldura da tela */}
          <div className="absolute inset-0 bg-zinc-900 rounded-t-xl" />
          {/* Notch câmera */}
          <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-zinc-700 z-20" />
          {/* Tela */}
          <div className="absolute inset-1.25 rounded-lg overflow-hidden">
            <MacBookScreen />
          </div>
        </div>

        {/* Base / teclado */}
        <div className="relative" style={{ width: 420 }}>
          {/* Superficie do teclado */}
          <div
            className="w-full bg-linear-to-b from-zinc-300 to-zinc-400 rounded-b-xl shadow-[0_16px_48px_-8px_rgba(0,0,0,0.35)]"
            style={{ height: 14 }}
          />
          {/* Reflexo */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-zinc-200 rounded-b-sm"
            style={{ width: 120, height: 4 }}
          />
          {/* Sombra no chão */}
          <div
            className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/20 blur-lg"
            style={{ width: 340, height: 14 }}
          />
        </div>
      </motion.div>

      {/* Card flutuante: novo agendamento */}
      <motion.div
        animate={{ y: [0, -7, 0] }}
        transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
        className="absolute top-4 -right-2 lg:right-0 bg-white rounded-xl border border-zinc-100 shadow-[0_8px_24px_-4px_rgba(0,0,0,0.12)] px-3 py-2 z-20 flex items-center gap-2"
      >
        <div className="w-6 h-6 rounded-full bg-[#25D366] flex items-center justify-center shrink-0">
          <span className="text-white text-[8px] font-black">✓</span>
        </div>
        <div>
          <span className="text-[8px] font-bold text-zinc-900 block">Novo agendamento</span>
          <span className="text-[7px] text-zinc-400">Marcos — 17:00 • Corte</span>
        </div>
      </motion.div>

      {/* Card flutuante: ocupação */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
        className="absolute bottom-6 -left-2 lg:left-0 bg-white rounded-xl border border-zinc-100 shadow-[0_8px_24px_-4px_rgba(0,0,0,0.12)] px-3 py-2 z-20"
      >
        <span className="text-[7px] text-zinc-400 block mb-1">Ocupação hoje</span>
        <div className="flex items-center gap-2">
          <div className="w-20 h-1.5 rounded-full bg-zinc-100 overflow-hidden">
            <div className="h-full w-[71%] rounded-full bg-[#F97316]" />
          </div>
          <span className="text-[8px] font-bold text-zinc-900">71%</span>
        </div>
      </motion.div>
    </div>
  );
}

// ─── Dados estáticos ──────────────────────────────────────────────────────────

const segments = [
  "Barbearias",
  "Salões de beleza",
  "Clínicas estéticas",
  "Espaços de massagem",
  "Estúdios de tatuagem",
  "Consultórios",
  "Personal trainers",
  "Manicures e pedicures",
];

const included = [
  "Página de agendamento personalizada",
  "Integração com WhatsApp Business",
  "Lembretes automáticos para clientes",
  "Link para bio do Instagram",
  "Cadastro de serviços e preços",
  "Controle de horários disponíveis",
  "Bloqueio de folgas e férias",
  "Painel de gestão da agenda",
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function MarqueJaPage() {
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
              <span className="px-3 py-1 rounded-full bg-[#F97316] text-white text-[11px] uppercase tracking-[0.18em] font-bold">
                Agendamento Online
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp(1)}
              initial="hidden"
              animate="visible"
              className="text-5xl md:text-6xl font-bold leading-[1.05] tracking-[-0.03em] text-zinc-900 mb-6"
            >
              Sua agenda cheia,
              <br />
              <span className="text-[#F97316]">sem esforço nenhum.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp(2)}
              initial="hidden"
              animate="visible"
              className="text-lg text-zinc-500 leading-relaxed max-w-[52ch] mb-8"
            >
              Sistema de agendamento online integrado ao WhatsApp. O cliente
              marca o horário pelo Instagram ou WhatsApp — e você recebe tudo
              organizado, sem precisar ficar no celular.
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
            { value: "60%", label: "de redução nas faltas com lembretes automáticos" },
            { value: "24h", label: "disponível para agendamentos, mesmo fora do horário" },
            { value: "3x", label: "mais agendamentos com link na bio do Instagram" },
            { value: "0", label: "conflitos de horário com gestão automática" },
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
            Como o Marque Já funciona
          </h2>
          <p className="text-zinc-500 text-sm max-w-[48ch]">
            Tudo automatizado para você focar no atendimento e não na gestão da agenda.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <FeatureCard key={f.title} feature={f} index={i} />
          ))}
        </div>
      </section>

      {/* Segments + Checklist */}
      <section className="py-20 px-4 max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            variants={fadeUp(0)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900 mb-6">
              Ideal para quem trabalha com hora marcada
            </h2>
            <div className="flex flex-wrap gap-2">
              {segments.map((s) => (
                <span
                  key={s}
                  className="px-4 py-2 rounded-full bg-white border border-zinc-200 text-sm font-medium text-zinc-700 shadow-[0_1px_4px_-2px_rgba(0,0,0,0.06)]"
                >
                  {s}
                </span>
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
            <CalendarCheckIcon size={40} weight="fill" className="text-white/80" />
            <h2 className="text-3xl font-bold text-white tracking-tight">
              Sua agenda organizada a partir de hoje
            </h2>
            <p className="text-orange-100 text-sm leading-relaxed max-w-[40ch]">
              Pare de perder horário por falta de sistema. Fale com a gente e
              ative o Marque Já no seu negócio.
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
