import { BookHeart, Sparkles, Globe, Brain, Feather, Telescope } from "lucide-react";

const categories = [
  { icon: BookHeart, label: "Romance", count: "1.2K livros", color: "#E07594", bg: "#FDF0F4" },
  { icon: Sparkles, label: "Fantasia", count: "890 livros", color: "#4A7060", bg: "#EFF5F3" },
  { icon: Globe, label: "Internacional", count: "640 livros", color: "#9B59A0", bg: "#F5EFF6" },
  { icon: Brain, label: "Autoajuda", count: "530 livros", color: "#D97B45", bg: "#FBF2EC" },
  { icon: Feather, label: "Poesia", count: "#F2A8BC livros", count: "280 livros", color: "#C9547A", bg: "#FBE8EF" },
  { icon: Telescope, label: "Ficção Científica", count: "410 livros", color: "#3B7A8C", bg: "#EBF5F7" },
];

export function Categories() {
  return (
    <section className="py-20 px-6" style={{ backgroundColor: "#EFF5F3" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p style={{ color: "#E07594", fontSize: "0.85rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em" }}>
            Explore
          </p>
          <h2 style={{ color: "#2E5347", fontSize: "2rem", fontWeight: 800, marginTop: 4 }}>
            Categorias Populares
          </h2>
          <p style={{ color: "#4A7060", marginTop: 8, fontSize: "0.95rem" }}>
            Encontre o gênero que combina com você
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map(({ icon: Icon, label, count, color, bg }) => (
            <button
              key={label}
              className="group flex flex-col items-center gap-3 p-5 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              style={{ backgroundColor: bg }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110"
                style={{ backgroundColor: color + "22" }}
              >
                <Icon className="w-7 h-7" style={{ color }} />
              </div>
              <div>
                <div style={{ fontWeight: 700, color: "#2E5347", fontSize: "0.9rem" }}>{label}</div>
                <div style={{ fontSize: "0.75rem", color: "#6B8F7E", marginTop: 2 }}>{count}</div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
