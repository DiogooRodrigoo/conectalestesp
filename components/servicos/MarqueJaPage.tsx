"use client";

import { motion } from "framer-motion";
import {
  CalendarCheck,
  ArrowUpRight,
  CheckCircle,
  WhatsappLogo,
  Bell,
  Clock,
  Link as LinkIcon,
  ShieldCheck,
} from "@phosphor-icons/react";

const EASE: [number, number, number, number] = [0.32, 0.72, 0, 1];
const fadeUp = (i = 0) => ({
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.65, ease: EASE } },
});

const features = [
  {
    icon: CalendarCheck,
    title: "Agendamento Online 24h",
    desc: "O cliente agenda quando quiser, mesmo fora do horário de atendimento. Sem precisar ligar ou esperar resposta.",
    stat: "Disponível 24 horas",
    tag: "Agendamento",
  },
  {
    icon: WhatsappLogo,
    title: "Integração com WhatsApp",
    desc: "Confirmação de agendamento automática pelo WhatsApp. O cliente recebe a confirmação na hora que marcar.",
    stat: "Resposta imediata",
    tag: "WhatsApp",
  },
  {
    icon: Bell,
    title: "Lembretes Automáticos",
    desc: "Lembrete enviado pelo WhatsApp 24h antes do horário marcado. Reduz faltas e aumenta a pontualidade.",
    stat: "Reduz faltas em até 60%",
    tag: "Automação",
  },
  {
    icon: Clock,
    title: "Gestão de Horários",
    desc: "Você define os horários disponíveis, intervalos e folgas. O sistema controla a agenda automaticamente.",
    stat: "Zero conflito de horário",
    tag: "Gestão",
  },
  {
    icon: LinkIcon,
    title: "Link na Bio do Instagram",
    desc: "Um link direto na bio do Instagram leva o cliente à página de agendamento. Simples e sem atrito.",
    stat: "Conversão direto do Insta",
    tag: "Instagram",
  },
  {
    icon: ShieldCheck,
    title: "Histórico de Clientes",
    desc: "Registro de todos os agendamentos anteriores por cliente. Útil para fidelização e controle de frequência.",
    stat: "Histórico completo",
    tag: "CRM",
  },
];

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

export default function MarqueJaPage() {
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
            <span className="px-3 py-1 rounded-full bg-[#F97316]/10 border border-[#F97316]/20 text-[#F97316] text-[11px] uppercase tracking-[0.18em] font-semibold">
              Serviço
            </span>
            <span className="px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-500 text-[11px] uppercase tracking-[0.18em] font-semibold">
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
            Sistema de agendamento online integrado ao WhatsApp. O cliente marca o horário pelo
            Instagram ou WhatsApp — e você recebe tudo organizado, sem precisar ficar no celular.
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
            <motion.div
              key={f.title}
              variants={fadeUp(i * 0.08)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="bg-white rounded-2xl border border-zinc-100 p-6 flex flex-col gap-4 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_24px_-8px_rgba(0,0,0,0.1)] transition-shadow duration-300"
            >
              <div className="flex items-start justify-between">
                <div className="w-10 h-10 rounded-xl bg-[#F97316]/10 flex items-center justify-center">
                  <f.icon size={20} weight="fill" className="text-[#F97316]" />
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
                <span className="text-xs font-semibold text-[#F97316]">{f.stat}</span>
              </div>
            </motion.div>
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
                  <CheckCircle size={18} weight="fill" className="text-[#F97316] shrink-0" />
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
            <CalendarCheck size={40} weight="fill" className="text-white/80" />
            <h2 className="text-3xl font-bold text-white tracking-tight">
              Sua agenda organizada a partir de hoje
            </h2>
            <p className="text-orange-100 text-sm leading-relaxed max-w-[40ch]">
              Pare de perder horário por falta de sistema. Fale com a gente e ative o Marque Já no seu negócio.
            </p>
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white text-[#F97316] font-bold px-8 py-4 rounded-full hover:bg-orange-50 transition-all duration-300 active:scale-[0.97]"
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
