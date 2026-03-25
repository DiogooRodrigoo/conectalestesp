import { InstagramLogo, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-100 py-10 px-4">
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="w-7 h-7 rounded-lg bg-[#F97316] flex items-center justify-center">
            <span className="text-white font-bold text-xs">CL</span>
          </span>
          <span className="font-semibold text-sm text-zinc-900">Conecta Leste SP</span>
        </div>

        {/* Center */}
        <p className="text-xs text-zinc-400 text-center">
          © {new Date().getFullYear()} Conecta Leste SP · Marketing Digital para Comércios Locais · Zona Leste, São Paulo
        </p>

        {/* Social */}
        <div className="flex items-center gap-3">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-500 hover:bg-[#F97316] hover:text-white transition-all duration-200"
            aria-label="Instagram"
          >
            <InstagramLogo size={16} weight="fill" />
          </a>
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-500 hover:bg-green-500 hover:text-white transition-all duration-200"
            aria-label="WhatsApp"
          >
            <WhatsappLogo size={16} weight="fill" />
          </a>
        </div>
      </div>
    </footer>
  );
}
