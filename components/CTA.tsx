"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, WhatsappLogo } from "@phosphor-icons/react";

export default function CTA() {
  return (
    <section id="contato" className="py-32 px-4">
      <div className="max-w-[1280px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] as [number, number, number, number] }}
          className="rounded-[2.5rem] bg-[#F97316] p-2"
        >
          <div className="rounded-[2rem] bg-gradient-to-br from-[#F97316] to-[#EA580C] px-8 md:px-16 py-16 md:py-24 flex flex-col md:flex-row items-center justify-between gap-10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]">
            {/* Left */}
            <div className="flex flex-col gap-5 text-center md:text-left">
              <span className="px-3 py-1 rounded-full bg-white/15 border border-white/20 text-orange-100 text-[11px] uppercase tracking-[0.18em] font-semibold w-fit mx-auto md:mx-0">
                Vamos conversar
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-[-0.03em] leading-tight">
                Pronto para crescer<br className="hidden md:block" /> no digital?
              </h2>
              <p className="text-orange-100 text-base leading-relaxed max-w-[40ch]">
                Diagnóstico gratuito, sem compromisso. Veja exatamente o que seu negócio
                precisa para aparecer online.
              </p>
            </div>

            {/* Right */}
            <div className="flex flex-col gap-3 shrink-0 w-full md:w-auto">
              <a
                href="https://wa.me/5511999999999?text=Olá! Quero saber mais sobre os serviços da Conecta Leste SP."
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2.5 bg-white text-zinc-900 font-bold px-8 py-4 rounded-full hover:bg-orange-50 transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.97] shadow-[0_8px_32px_-8px_rgba(0,0,0,0.2)]"
              >
                <WhatsappLogo size={20} weight="fill" className="text-green-500" />
                Falar no WhatsApp
                <span className="w-7 h-7 rounded-full bg-zinc-900/8 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">
                  <ArrowUpRight size={14} weight="bold" />
                </span>
              </a>
              <p className="text-center text-xs text-orange-200">
                Resposta em até 1 hora • Atendimento personalizado
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
