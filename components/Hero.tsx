"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, InstagramLogo, GoogleLogo, WhatsappLogo } from "@phosphor-icons/react";

const EASE: [number, number, number, number] = [0.32, 0.72, 0, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.7, ease: EASE },
  }),
};

export default function Hero() {
  return (
    <section className="min-h-[100dvh] flex items-center pt-24 pb-16 px-4 max-w-[1280px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center w-full">

        {/* Left — Text */}
        <div className="flex flex-col gap-6">
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 w-fit"
          >
            <span className="px-3 py-1 rounded-full bg-[#F97316]/10 border border-[#F97316]/20 text-[#F97316] text-[11px] uppercase tracking-[0.18em] font-semibold">
              Agência Digital
            </span>
            <span className="px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-500 text-[11px] uppercase tracking-[0.18em] font-semibold">
              Zona Leste SP
            </span>
          </motion.div>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-5xl md:text-6xl lg:text-[4.5rem] font-bold leading-[1.05] tracking-[-0.03em] text-zinc-900"
          >
            Seu comércio{" "}
            <span className="relative">
              de bairro,
              <svg className="absolute -bottom-1 left-0 w-full" height="6" viewBox="0 0 300 6" fill="none">
                <path d="M2 4 Q75 1 150 4 Q225 7 298 4" stroke="#F97316" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              </svg>
            </span>
            <br />
            <span className="text-[#F97316]">no mundo digital.</span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-lg text-zinc-500 leading-relaxed max-w-[46ch]"
          >
            Cuidamos de toda a presença digital do seu negócio — redes sociais, site,
            agendamento online e muito mais — para você focar no que sabe fazer de melhor.
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap items-center gap-3"
          >
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 bg-zinc-900 text-white font-semibold px-6 py-3.5 rounded-full hover:bg-zinc-700 transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.97]"
            >
              Quero começar agora
              <span className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">
                <ArrowUpRight size={14} weight="bold" />
              </span>
            </a>
            <a
              href="#servicos"
              className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors duration-200 px-2"
            >
              Ver serviços
            </a>
          </motion.div>

          {/* Social proof */}
          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex items-center gap-5 pt-2"
          >
            {[
              { value: "47+", label: "Negócios conectados" },
              { value: "5", label: "Bairros atendidos" },
              { value: "100%", label: "Foco no resultado" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="text-xl font-bold text-zinc-900 tracking-tight">{stat.value}</span>
                <span className="text-xs text-zinc-400">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
          className="relative hidden lg:block"
        >
          {/* Outer shell */}
          <div className="relative rounded-[2.5rem] bg-zinc-100/80 border border-black/[0.06] p-2">
            {/* Inner card */}
            <div className="rounded-[2rem] bg-white overflow-hidden shadow-[0_20px_60px_-20px_rgba(0,0,0,0.08)]">
              {/* Header bar */}
              <div className="flex items-center gap-1.5 px-4 py-3 border-b border-zinc-100">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                <span className="ml-2 text-xs text-zinc-400">conectaleste.sp • Instagram</span>
              </div>

              {/* Mock content */}
              <div className="p-6 space-y-4">
                {/* Profile */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#F97316] to-[#EA580C] flex items-center justify-center text-white font-bold text-lg">
                    B
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-zinc-900">barbearia.estilo</p>
                    <p className="text-xs text-zinc-400">Barbearia Estilo • Penha, SP</p>
                  </div>
                  <span className="ml-auto text-xs bg-[#F97316] text-white px-3 py-1 rounded-full font-medium">
                    Seguindo
                  </span>
                </div>

                {/* Image placeholder */}
                <div className="rounded-2xl bg-gradient-to-br from-zinc-800 to-zinc-900 aspect-[4/3] flex flex-col items-center justify-center gap-3">
                  <span className="text-white/20 text-5xl font-black tracking-tighter">EST.</span>
                  <span className="text-white/40 text-xs uppercase tracking-widest">Barbearia Estilo</span>
                </div>

                {/* Stats */}
                <div className="flex items-center gap-4 text-xs text-zinc-500">
                  <span><b className="text-zinc-900">1.247</b> curtidas</span>
                  <span><b className="text-zinc-900">89</b> comentários</span>
                  <span className="ml-auto text-[#F97316] font-medium">+312% alcance</span>
                </div>

                {/* Platforms */}
                <div className="flex items-center gap-2 pt-1">
                  {[
                    { icon: InstagramLogo, label: "Instagram" },
                    { icon: GoogleLogo, label: "Google" },
                    { icon: WhatsappLogo, label: "WhatsApp" },
                  ].map(({ icon: Icon, label }) => (
                    <div
                      key={label}
                      className="flex items-center gap-1.5 bg-zinc-50 border border-zinc-100 rounded-full px-3 py-1.5"
                    >
                      <Icon size={13} weight="fill" className="text-zinc-500" />
                      <span className="text-xs text-zinc-500">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Floating badge */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-4 -right-4 bg-white rounded-2xl px-4 py-2.5 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.15)] border border-black/[0.06]"
          >
            <p className="text-xs text-zinc-400">Novos seguidores</p>
            <p className="text-lg font-bold text-zinc-900">+312%</p>
          </motion.div>

          {/* Floating badge 2 */}
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute -bottom-4 -left-4 bg-[#F97316] rounded-2xl px-4 py-2.5 shadow-[0_8px_32px_-8px_rgba(249,115,22,0.4)]"
          >
            <p className="text-xs text-orange-200">Agendamentos</p>
            <p className="text-lg font-bold text-white">+48 hoje</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
