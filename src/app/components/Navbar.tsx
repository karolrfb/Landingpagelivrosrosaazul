import { useState } from "react";
import { BookOpen, ShoppingCart, Search, Menu, X } from "lucide-react";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav style={{ backgroundColor: "#2E5347" }} className="sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <BookOpen className="w-7 h-7" style={{ color: "#F2A8BC" }} />
          <span className="text-white tracking-wide" style={{ fontSize: "1.25rem", fontWeight: 700 }}>
            Livraria Pétalas
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {["Início", "Catálogo", "Categorias", "Sobre nós", "Contato"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-white/80 hover:text-white transition-colors"
              style={{ fontSize: "0.9rem" }}
            >
              {item}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button className="text-white/70 hover:text-white transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <button
            className="flex items-center gap-2 px-4 py-2 rounded-full text-white transition-all hover:opacity-90"
            style={{ backgroundColor: "#E07594", fontSize: "0.85rem" }}
          >
            <ShoppingCart className="w-4 h-4" />
            Carrinho
          </button>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {menuOpen && (
        <div style={{ backgroundColor: "#2E5347" }} className="md:hidden px-6 pb-4 flex flex-col gap-4">
          {["Início", "Catálogo", "Categorias", "Sobre nós", "Contato"].map((item) => (
            <a key={item} href="#" className="text-white/80 hover:text-white transition-colors">
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
