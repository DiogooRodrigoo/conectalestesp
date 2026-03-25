"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { List, X, ArrowUpRight } from "@phosphor-icons/react";

const links = [
  { label: "Serviços", href: "#servicos" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Segmentos", href: "#segmentos" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
        className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4"
      >
        <div
          className={`flex items-center justify-between gap-8 px-5 py-3 rounded-full transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
            scrolled
              ? "bg-white/90 backdrop-blur-xl shadow-[0_8px_32px_-8px_rgba(0,0,0,0.12)] border border-black/[0.06]"
              : "bg-white/70 backdrop-blur-lg border border-black/[0.06]"
          }`}
          style={{ maxWidth: 860, width: "100%" }}
        >
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 shrink-0">
            <span className="w-7 h-7 rounded-lg bg-[#F97316] flex items-center justify-center">
              <span className="text-white font-bold text-xs">CL</span>
            </span>
            <span className="font-semibold text-sm tracking-tight text-zinc-900 hidden sm:block">
              Conecta Leste SP
            </span>
          </a>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors duration-200 whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <a
              href="#contato"
              className="hidden md:flex items-center gap-1.5 bg-zinc-900 text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-zinc-700 transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.97]"
            >
              Falar no WhatsApp
              <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center">
                <ArrowUpRight size={11} weight="bold" />
              </span>
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center"
              aria-label="Menu"
            >
              <motion.div
                animate={{ rotate: open ? 45 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {open ? <X size={16} weight="bold" /> : <List size={16} weight="bold" />}
              </motion.div>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {links.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                className="text-3xl font-semibold text-zinc-900"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#contato"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28, duration: 0.4 }}
              className="mt-4 bg-[#F97316] text-white px-8 py-3 rounded-full font-semibold"
            >
              Falar no WhatsApp
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
