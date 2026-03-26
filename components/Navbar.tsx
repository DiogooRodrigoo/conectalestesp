"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { List, X, ArrowUpRight, ArrowLeft } from "@phosphor-icons/react";

const mainLinks = [
  { label: "Serviços", href: "/#servicos" },
  { label: "Como Funciona", href: "/#como-funciona" },
  { label: "Segmentos", href: "/#segmentos" },
  { label: "Contato", href: "/#contato" },
];

const serviceLinks = [
  { label: "Social Media", href: "/servicos/social-media" },
  { label: "Presença Digital", href: "/servicos/presenca-digital" },
  { label: "Marque Já", href: "/servicos/marque-ja" },
  { label: "Vitrine Digital", href: "/servicos/vitrine-digital" },
  { label: "Persona IA", href: "/servicos/persona-ia" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isServicePage = pathname.startsWith("/servicos");
  const links = isServicePage ? serviceLinks : mainLinks;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
        className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4"
      >
        <div
          className={`flex items-center justify-between gap-6 px-5 py-3 rounded-full transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
            scrolled
              ? "bg-white/90 backdrop-blur-xl shadow-[0_8px_32px_-8px_rgba(0,0,0,0.12)] border border-black/6"
              : "bg-white/70 backdrop-blur-lg border border-black/6"
          }`}
          style={{ maxWidth: 920, width: "100%" }}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <span className="w-7 h-7 rounded-lg overflow-hidden flex items-center justify-center">
              <Image src="/conecta-logo.jpeg" alt="Conecta Leste SP" width={28} height={28} className="object-cover w-full h-full" />
            </span>
            <span className="font-semibold text-sm tracking-tight text-zinc-900 hidden sm:block">
              Conecta Leste SP
            </span>
          </Link>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-1 flex-1 justify-center">
            <AnimatePresence mode="wait">
              {isServicePage ? (
                <motion.div
                  key="service-links"
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.25 }}
                  className="flex items-center gap-1"
                >
                  {serviceLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <Link
                        key={link.label}
                        href={link.href}
                        className={`relative text-sm px-3 py-1.5 rounded-full transition-all duration-200 whitespace-nowrap ${
                          isActive
                            ? "text-[#F97316] font-semibold bg-[#F97316]/8"
                            : "text-zinc-500 hover:text-zinc-900"
                        }`}
                      >
                        {link.label}
                        {isActive && (
                          <motion.span
                            layoutId="service-indicator"
                            className="absolute inset-0 rounded-full bg-[#F97316]/10 border border-[#F97316]/20"
                            transition={{ duration: 0.25, ease: [0.32, 0.72, 0, 1] }}
                          />
                        )}
                      </Link>
                    );
                  })}
                </motion.div>
              ) : (
                <motion.div
                  key="main-links"
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.25 }}
                  className="flex items-center gap-6"
                >
                  {mainLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors duration-200 whitespace-nowrap"
                    >
                      {link.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-3 shrink-0">
            {isServicePage ? (
              <Link
                href="/"
                className="hidden md:flex items-center gap-1.5 text-zinc-500 hover:text-zinc-900 text-sm font-medium transition-colors duration-200"
              >
                <ArrowLeft size={14} weight="bold" />
                Início
              </Link>
            ) : null}
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-1.5 bg-zinc-900 text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-zinc-700 transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.97]"
            >
              WhatsApp
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
              <motion.div animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.3 }}>
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
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-6 md:hidden"
          >
            {isServicePage && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-xs uppercase tracking-widest text-zinc-400 font-semibold mb-2"
              >
                Serviços
              </motion.p>
            )}
            {links.map((link, i) => {
              const isActive = pathname === link.href;
              return (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                >
                  <Link
                    href={link.href}
                    className={`text-3xl font-semibold transition-colors ${
                      isActive ? "text-[#F97316]" : "text-zinc-900"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              );
            })}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: links.length * 0.07, duration: 0.4 }}
              className="flex flex-col items-center gap-3 mt-4"
            >
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#F97316] text-white px-8 py-3 rounded-full font-semibold"
              >
                Falar no WhatsApp
              </a>
              {isServicePage && (
                <Link href="/" className="text-sm text-zinc-400 hover:text-zinc-700 transition-colors">
                  ← Voltar ao início
                </Link>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
