"use client";

import { motion } from "framer-motion";
import {
  InstagramLogo,
  Globe,
  CalendarCheck,
  Megaphone,
  Robot,
  ArrowUpRight,
  Sparkle,
} from "@phosphor-icons/react";

const EASE: [number, number, number, number] = [0.32, 0.72, 0, 1];

const fadeUp = (i: number) => ({
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: EASE },
  },
});

// Rows 1 & 2 — paired cards
const rows = [
  [
    {
      id: "social",
      icon: InstagramLogo,
      label: "Social Media",
      tag: "Carro-chefe",
      tagColor: "bg-[#F97316]/10 text-[#F97316] border-[#F97316]/20",
      description:
        "Gestão completa de Instagram e TikTok: stories, carrosséis, artes promocionais e tráfego pago para atrair clientes locais todo dia.",
      features: ["Instagram & TikTok", "Stories diários", "Posts em carrossel", "Tráfego pago"],
      accent: "bg-gradient-to-br from-[#F97316]/8 to-[#F97316]/3",
      iconBg: "bg-[#F97316]",
      large: true, // col-span-2
    },
    {
      id: "presenca",
      icon: Globe,
      label: "Presença Digital",
      tag: "Sites",
      tagColor: "bg-zinc-100 text-zinc-500 border-zinc-200",
      description:
        "Sites institucionais modernos, otimizados para aparecer no Google e converter visitantes em clientes.",
      features: ["Site institucional", "SEO local", "Google Maps", "Mobile first"],
      accent: "bg-gradient-to-br from-zinc-50 to-zinc-50/50",
      iconBg: "bg-zinc-900",
      large: false, // col-span-1
    },
  ],
  [
    {
      id: "agenda",
      icon: CalendarCheck,
      label: "Marque Já",
      tag: "Carro-chefe",
      tagColor: "bg-[#F97316]/10 text-[#F97316] border-[#F97316]/20",
      description:
        "Sistema de agendamento online integrado ao WhatsApp. Perfeito para barbearias, estéticas, clínicas e qualquer negócio que trabalha com hora marcada.",
      features: ["Agendamento online", "Integração WhatsApp", "Link no Instagram", "Notificações automáticas"],
      accent: "bg-gradient-to-br from-[#F97316]/8 to-[#F97316]/3",
      iconBg: "bg-[#F97316]",
      large: false, // col-span-1
    },
    {
      id: "vitrine",
      icon: Megaphone,
      label: "Vitrine Digital",
      tag: "Landing Pages",
      tagColor: "bg-zinc-100 text-zinc-500 border-zinc-200",
      description:
        "Páginas de divulgação focadas em conversão para promoções, lançamentos e campanhas sazonais.",
      features: ["Alta conversão", "WhatsApp direto", "Promoções", "Campanhas sazonais"],
      accent: "bg-gradient-to-br from-zinc-50 to-zinc-50/50",
      iconBg: "bg-zinc-900",
      large: true, // col-span-2
    },
  ],
];

type CardProps = {
  id: string;
  icon: React.ElementType;
  label: string;
  tag: string;
  tagColor: string;
  description: string;
  features: string[];
  accent: string;
  iconBg: string;
  large: boolean;
  index: number;
};

function ServiceCard({ id, icon: Icon, label, tag, tagColor, description, features, accent, iconBg, large, index }: CardProps) {
  return (
    <motion.div
      key={id}
      variants={fadeUp(index)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className={`${large ? "lg:col-span-2" : "lg:col-span-1"} ${accent} rounded-[2rem] border border-black/[0.06] p-1.5 group`}
    >
      <div className="rounded-[calc(2rem-0.375rem)] bg-white/80 h-full p-7 flex flex-col gap-5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)]">
        <div className="flex items-start justify-between">
          <div className={`w-11 h-11 rounded-xl ${iconBg} flex items-center justify-center`}>
            <Icon size={22} weight="fill" className="text-white" />
          </div>
          <span className={`px-2.5 py-1 rounded-full border text-[10px] uppercase tracking-wider font-semibold ${tagColor}`}>
            {tag}
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-bold tracking-tight text-zinc-900">{label}</h3>
          <p className="text-sm text-zinc-500 leading-relaxed">{description}</p>
        </div>
        <div className="flex flex-wrap gap-2 mt-auto">
          {features.map((f) => (
            <span key={f} className="text-[11px] font-medium text-zinc-500 bg-zinc-50 border border-zinc-100 px-2.5 py-1 rounded-full">
              {f}
            </span>
          ))}
        </div>
        <button className="flex items-center gap-1.5 text-xs font-semibold text-zinc-400 hover:text-zinc-900 transition-colors duration-200 group-hover:text-zinc-700 w-fit mt-1">
          Saiba mais
          <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
        </button>
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="servicos" className="py-32 px-4 max-w-[1280px] mx-auto">
      {/* Header */}
      <div className="flex flex-col gap-4 mb-16">
        <span className="px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-500 text-[11px] uppercase tracking-[0.18em] font-semibold w-fit">
          Serviços
        </span>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.03em] leading-tight max-w-[16ch]">
            Tudo que seu negócio<br />precisa no digital
          </h2>
          <p className="text-zinc-500 max-w-[40ch] md:text-right text-sm leading-relaxed">
            Do básico ao avançado — cada serviço foi pensado para resolver um problema real do comércio local.
          </p>
        </div>
      </div>

      {/* Rows 1 & 2 — alternating large/small */}
      <div className="flex flex-col gap-4">
        {rows.map((row, rowIdx) => (
          <div key={rowIdx} className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {row.map((card, cardIdx) => (
              <ServiceCard
                key={card.id}
                {...card}
                index={rowIdx * 2 + cardIdx}
              />
            ))}
          </div>
        ))}

        {/* Row 3 — Persona IA centered with animation */}
        <motion.div
          variants={fadeUp(4)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="flex justify-center"
        >
          <div className="relative w-full max-w-2xl group">
            {/* Animated glow ring */}
            <motion.div
              animate={{ opacity: [0.4, 0.8, 0.4], scale: [1, 1.02, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-purple-400/20 via-violet-400/10 to-pink-400/20 blur-xl pointer-events-none"
            />

            {/* Card shell */}
            <div className="relative bg-gradient-to-br from-purple-50/90 to-violet-50/60 rounded-[2rem] border border-purple-200/40 p-1.5">
              <div className="rounded-[calc(2rem-0.375rem)] bg-white/90 p-8 flex flex-col items-center text-center gap-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9)]">

                {/* Animated icon */}
                <div className="relative">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 rounded-2xl border-2 border-dashed border-purple-200"
                  />
                  <div className="w-16 h-16 rounded-2xl bg-purple-600 flex items-center justify-center relative">
                    <Robot size={30} weight="fill" className="text-white" />
                    {/* Floating sparkles */}
                    <motion.span
                      animate={{ y: [-4, -10, -4], opacity: [0, 1, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                      className="absolute -top-2 -right-2"
                    >
                      <Sparkle size={14} weight="fill" className="text-purple-400" />
                    </motion.span>
                    <motion.span
                      animate={{ y: [-4, -10, -4], opacity: [0, 1, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.7 }}
                      className="absolute -top-1 -left-3"
                    >
                      <Sparkle size={10} weight="fill" className="text-violet-300" />
                    </motion.span>
                    <motion.span
                      animate={{ y: [-4, -10, -4], opacity: [0, 1, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 1.4 }}
                      className="absolute -bottom-1 -right-3"
                    >
                      <Sparkle size={12} weight="fill" className="text-pink-300" />
                    </motion.span>
                  </div>
                </div>

                {/* Tag */}
                <span className="px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-purple-600 text-[10px] uppercase tracking-wider font-semibold">
                  Inovação
                </span>

                {/* Text */}
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl font-bold tracking-tight text-zinc-900">Persona IA</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed max-w-[52ch]">
                    Criamos um personagem digital para a sua marca — com identidade visual, voz e personalidade únicas.
                    O avatar publica conteúdo, grava vídeos com IA e representa o seu negócio 24h por dia.
                  </p>
                </div>

                {/* Features */}
                <div className="flex flex-wrap justify-center gap-2">
                  {["Avatar digital", "Identidade & voz", "Posts com persona", "Vídeos com IA"].map((f) => (
                    <span key={f} className="text-[11px] font-medium text-purple-600 bg-purple-50 border border-purple-100 px-3 py-1 rounded-full">
                      {f}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <button className="flex items-center gap-2 bg-purple-600 text-white text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-purple-700 transition-all duration-300 active:scale-[0.97] group-hover:shadow-[0_8px_24px_-8px_rgba(147,51,234,0.4)]">
                  Conhecer a Persona IA
                  <span className="w-5 h-5 rounded-full bg-white/15 flex items-center justify-center">
                    <ArrowUpRight size={11} weight="bold" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
