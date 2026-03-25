"use client";

import { motion } from "framer-motion";
import { MagnifyingGlass, PencilSimple, RocketLaunch } from "@phosphor-icons/react";

const steps = [
  {
    number: "01",
    icon: MagnifyingGlass,
    title: "Diagnóstico gratuito",
    description:
      "Analisamos a presença digital atual do seu negócio — redes sociais, Google Maps, site e WhatsApp — e identificamos o que está faltando.",
  },
  {
    number: "02",
    icon: PencilSimple,
    title: "Estratégia personalizada",
    description:
      "Montamos um plano sob medida para o seu segmento e orçamento. Sem enrolação, direto ao ponto do que vai trazer resultado.",
  },
  {
    number: "03",
    icon: RocketLaunch,
    title: "Execução e resultado",
    description:
      "Cuidamos de tudo enquanto você foca no atendimento. Você acompanha o crescimento em tempo real.",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-32 px-4">
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="flex flex-col gap-4 mb-20 text-center items-center">
          <span className="px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-500 text-[11px] uppercase tracking-[0.18em] font-semibold">
            Como funciona
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.03em] leading-tight">
            Simples. Rápido. Com resultado.
          </h2>
          <p className="text-zinc-500 max-w-[46ch] text-center text-base leading-relaxed">
            Em menos de uma semana o seu negócio já está ativo no digital com presença profissional.
          </p>
        </div>

        {/* Steps */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Connector line */}
          <div className="hidden md:block absolute top-10 left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-px bg-zinc-200" />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.12, duration: 0.6, ease: [0.32, 0.72, 0, 1] as [number, number, number, number] }}
                className="flex flex-col items-center text-center gap-5"
              >
                {/* Icon circle */}
                <div className="relative z-10 w-20 h-20 rounded-[1.5rem] bg-white border border-black/[0.06] shadow-[0_8px_24px_-8px_rgba(0,0,0,0.08)] flex items-center justify-center">
                  <Icon size={28} weight="duotone" className="text-[#F97316]" />
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#F97316] text-white text-[10px] font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-bold tracking-tight text-zinc-900">{step.title}</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed max-w-[30ch] mx-auto">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
