export default function Marquee() {
  const items = [
    "Barbearias",
    "Salões de Beleza",
    "Clínicas",
    "Restaurantes",
    "Lanchonetes",
    "Lojas Locais",
    "Pet Shops",
    "Prestadores de Serviço",
    "Estéticas",
    "Consultórios",
  ];

  const doubled = [...items, ...items];

  return (
    <div className="border-y border-zinc-100 bg-white py-4 overflow-hidden">
      <div className="flex gap-10 animate-marquee whitespace-nowrap w-max">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-10 text-sm font-medium text-zinc-400">
            {item}
            <span className="w-1.5 h-1.5 rounded-full bg-[#F97316] inline-block" />
          </span>
        ))}
      </div>
    </div>
  );
}
