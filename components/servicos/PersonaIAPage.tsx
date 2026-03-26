"use client";

import { motion } from "framer-motion";
import {
  Robot,
  ArrowUpRight,
  CheckCircle,
  Sparkle,
  VideoCamera,
  PaintBrush,
  Microphone,
  ClockCounterClockwise,
} from "@phosphor-icons/react";

const EASE: [number, number, number, number] = [0.32, 0.72, 0, 1];
const fadeUp = (i = 0) => ({
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.65, ease: EASE } },
});

const features = [
  {
    icon: PaintBrush,
    title: "Identidade Visual da Persona",
    desc: "Criamos um avatar com aparência, estilo e identidade visual única. Seu personagem digital tem cara própria.",
    stat: "100% exclusivo",
    tag: "Design",
  },
  {
    icon: Microphone,
    title: "Voz e Personalidade",
    desc: "Definimos como a persona fala, os trejeitos, o tom e a linguagem. Cada post tem a voz única do personagem.",
    stat: "Identidade de marca forte",
    tag: "Branding",
  },
  {
    icon: VideoCamera,
    title: "Vídeos com IA",
    desc: "O avatar aparece em vídeos gerados com inteligência artificial — falando, apresentando produtos e interagindo.",
    stat: "Conteúdo em vídeo sem câmera",
    tag: "IA",
  },
  {
    icon: Robot,
    title: "Posts com a Persona",
    desc: "Todos os posts do Instagram e TikTok são publicados pelo personagem, criando uma narrativa consistente.",
    stat: "Narrativa contínua",
    tag: "Conteúdo",
  },
  {
    icon: ClockCounterClockwise,
    title: "Presença 24/7",
    desc: "O avatar representa sua marca o tempo todo — mesmo quando você está atendendo, a persona está ativa online.",
    stat: "Ativo 24 horas por dia",
    tag: "Automação",
  },
  {
    icon: Sparkle,
    title: "Diferencial Competitivo",
    desc: "Poucos comércios locais têm uma persona digital. Isso cria memorabilidade e diferencia seu negócio da concorrência.",
    stat: "Inovação no bairro",
    tag: "Inovação",
  },
];

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

export default function PersonaIAPage() {
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
            <span className="px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-purple-600 text-[11px] uppercase tracking-[0.18em] font-semibold">
              Serviço
            </span>
            <span className="px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-purple-600 text-[11px] uppercase tracking-[0.18em] font-semibold">
              Inovação
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
            Criamos um personagem digital exclusivo para o seu negócio — com identidade visual, voz
            e personalidade únicas. A persona publica conteúdo, aparece em vídeos com IA e representa
            sua marca 24h por dia.
          </motion.p>

          <motion.div variants={fadeUp(3)} initial="hidden" animate="visible" className="flex flex-wrap gap-3">
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 bg-purple-600 text-white font-semibold px-6 py-3.5 rounded-full hover:bg-purple-700 transition-all duration-300 active:scale-[0.97]"
            >
              Quero minha Persona IA
              <span className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">
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
            <motion.div
              key={f.title}
              variants={fadeUp(i * 0.08)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="bg-white rounded-2xl border border-zinc-100 p-6 flex flex-col gap-4 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_24px_-8px_rgba(0,0,0,0.1)] transition-shadow duration-300"
            >
              <div className="flex items-start justify-between">
                <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center">
                  <f.icon size={20} weight="fill" className="text-purple-600" />
                </div>
                <span className="px-2 py-0.5 rounded-full bg-purple-50 border border-purple-100 text-[10px] font-semibold text-purple-400 uppercase tracking-wider">
                  {f.tag}
                </span>
              </div>
              <div>
                <h3 className="font-bold text-zinc-900 mb-1">{f.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{f.desc}</p>
              </div>
              <div className="mt-auto pt-2 border-t border-zinc-50">
                <span className="text-xs font-semibold text-purple-600">{f.stat}</span>
              </div>
            </motion.div>
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
              className="bg-gradient-to-br from-purple-50 to-violet-50/60 rounded-2xl border border-purple-100/60 p-6"
            >
              <div className="w-12 h-12 rounded-2xl bg-purple-600 flex items-center justify-center mb-4">
                <Robot size={24} weight="fill" className="text-white" />
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
                  <CheckCircle size={18} weight="fill" className="text-purple-600 shrink-0" />
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
            className="bg-gradient-to-br from-purple-600 to-violet-700 rounded-2xl p-8 text-white"
          >
            <Sparkle size={32} weight="fill" className="text-purple-200 mb-4" />
            <h3 className="text-xl font-bold mb-3">Por que criar uma Persona IA?</h3>
            <p className="text-purple-100 text-sm leading-relaxed mb-4">
              Comércios com personagem digital criam uma conexão emocional com o público. As pessoas
              seguem personagens, não produtos.
            </p>
            <p className="text-purple-100 text-sm leading-relaxed">
              Com uma persona, seu negócio vira uma marca com história — e o cliente volta não só pelo
              serviço, mas pela identidade da marca.
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
          <div className="bg-gradient-to-br from-purple-600 to-violet-700 rounded-3xl p-12 flex flex-col items-center text-center gap-6">
            <Robot size={40} weight="fill" className="text-purple-200" />
            <h2 className="text-3xl font-bold text-white tracking-tight">
              Seu negócio merece uma identidade única
            </h2>
            <p className="text-purple-100 text-sm leading-relaxed max-w-[40ch]">
              Fale com a gente e descubra como criar a persona perfeita para o seu comércio.
            </p>
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white text-purple-600 font-bold px-8 py-4 rounded-full hover:bg-purple-50 transition-all duration-300 active:scale-[0.97]"
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
