import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Ana Lima",
    role: "Leitora assídua",
    text: "A Livraria Pétalas mudou completamente minha relação com a leitura. A curadoria é incrível e sempre encontro exatamente o que preciso!",
    rating: 5,
    avatar: "AL",
    color: "#E07594",
  },
  {
    id: 2,
    name: "Mariana Costa",
    role: "Bookstagrammer",
    text: "Frete rápido, embalagem linda e livros de qualidade impecável. Recomendo de olhos fechados para qualquer leitor.",
    rating: 5,
    avatar: "MC",
    color: "#4A7060",
  },
  {
    id: 3,
    name: "Beatriz Santos",
    role: "Professora de Literatura",
    text: "O atendimento é excepcional e o acervo é muito rico. Encontrei títulos raríssimos que não achava em lugar nenhum.",
    rating: 5,
    avatar: "BS",
    color: "#C9547A",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 px-6" style={{ backgroundColor: "#FDF0F4" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p style={{ color: "#E07594", fontSize: "0.85rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em" }}>
            Depoimentos
          </p>
          <h2 style={{ color: "#2E5347", fontSize: "2rem", fontWeight: 800, marginTop: 4 }}>
            O que nossas leitoras dizem
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-4"
            >
              <Quote className="w-8 h-8" style={{ color: "#F2A8BC" }} />

              <p style={{ color: "#4A6B60", lineHeight: 1.7, fontSize: "0.95rem" }}>{t.text}</p>

              <div className="flex gap-0.5 mt-auto">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4" style={{ color: "#E07594", fill: "#E07594" }} />
                ))}
              </div>

              <div className="flex items-center gap-3 pt-2 border-t" style={{ borderColor: "#F2A8BC33" }}>
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white flex-shrink-0"
                  style={{ backgroundColor: t.color, fontSize: "0.8rem", fontWeight: 700 }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: "#2E5347", fontSize: "0.9rem" }}>{t.name}</div>
                  <div style={{ fontSize: "0.78rem", color: "#6B8F7E" }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
