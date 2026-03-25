"use client";

import { motion } from "framer-motion";
import { Scissors, Sparkle, Heart, Storefront, ForkKnife, Wrench } from "@phosphor-icons/react";

const segments = [
  { icon: Scissors, label: "Barbearias", color: "bg-blue-50 text-blue-600 border-blue-100" },
  { icon: Sparkle, label: "Salões de Beleza", color: "bg-pink-50 text-pink-600 border-pink-100" },
  { icon: Heart, label: "Clínicas e Estéticas", color: "bg-red-50 text-red-500 border-red-100" },
  { icon: Storefront, label: "Lojas Locais", color: "bg-amber-50 text-amber-600 border-amber-100" },
  { icon: ForkKnife, label: "Restaurantes", color: "bg-orange-50 text-[#F97316] border-orange-100" },
  { icon: Wrench, label: "Prestadores de Serviço", color: "bg-zinc-100 text-zinc-600 border-zinc-200" },
];

export default function Segments() {
  return (
    <section id="segmentos" className="py-24 px-4">
      <div className="max-w-[1280px] mx-auto">
        <div className="rounded-[2.5rem] bg-zinc-900 p-2">
          <div className="rounded-[2rem] bg-zinc-900 overflow-hidden px-8 md:px-14 py-16 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
            {/* Header */}
            <div className="flex flex-col gap-4 mb-12">
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-zinc-400 text-[11px] uppercase tracking-[0.18em] font-semibold w-fit">
                Para quem é
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-[-0.03em] leading-tight">
                Feito para o comércio de bairro
              </h2>
              <p className="text-zinc-400 text-sm leading-relaxed max-w-[46ch]">
                Se você tem um negócio local e quer ser encontrado por mais clientes — a Conecta Leste SP é para você.
              </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {segments.map((seg, i) => {
                const Icon = seg.icon;
                return (
                  <motion.div
                    key={seg.label}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07, duration: 0.5, ease: [0.32, 0.72, 0, 1] as [number, number, number, number] }}
                    className="flex items-center gap-3 bg-white/5 border border-white/8 rounded-2xl px-4 py-4 hover:bg-white/10 transition-colors duration-200 cursor-default"
                  >
                    <div className={`w-9 h-9 rounded-xl border flex items-center justify-center shrink-0 ${seg.color}`}>
                      <Icon size={17} weight="fill" />
                    </div>
                    <span className="text-sm font-medium text-zinc-200">{seg.label}</span>
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom note */}
            <p className="mt-8 text-xs text-zinc-500 text-center">
              E muito mais — se tem negócio local, tem espaço para crescer no digital.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
