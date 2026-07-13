export default function SearchBar() {
  return (
    <div className="relative w-full">
      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">
        search
      </span>
      <input
        type="text"
        placeholder="Buscar misiones, laboratorios, conceptos..."
        className="w-full bg-surface-container-low border-none rounded-xl pl-10 pr-12 py-2.5 focus:ring-2 focus:ring-primary/20 font-label-md text-label-md transition-all"
        aria-label="Buscar en la plataforma"
      />
      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-bold text-on-surface-variant/50 border border-on-surface-variant/20 px-1.5 py-0.5 rounded-md">
        ⌘K
      </span>
    </div>
  );
}