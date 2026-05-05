import { ArrowRight, Star } from "lucide-react";

export function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #FDF0F4 0%, #EFF5F3 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-6">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full w-fit"
            style={{ backgroundColor: "#F2A8BC", color: "#7A2840" }}
          >
            <Star className="w-4 h-4 fill-current" />
            <span style={{ fontSize: "0.82rem", fontWeight: 600 }}>+5.000 títulos disponíveis</span>
          </div>

          <h1
            className="leading-tight"
            style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)", fontWeight: 800, color: "#2E5347" }}
          >
            Descubra mundos <br />
            <span style={{ color: "#E07594" }}>através das páginas</span>
          </h1>

          <p style={{ color: "#4A6B60", fontSize: "1.05rem", lineHeight: 1.7, maxWidth: 480 }}>
            Uma curadoria especial de livros para quem ama uma boa leitura. Encontre sua próxima
            história favorita com entrega rápida e frete grátis acima de R$99.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              className="flex items-center gap-2 px-6 py-3 rounded-full text-white transition-all hover:scale-105 shadow-md"
              style={{ backgroundColor: "#2E5347" }}
            >
              Explorar catálogo
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              className="flex items-center gap-2 px-6 py-3 rounded-full transition-all hover:scale-105 border-2"
              style={{ borderColor: "#E07594", color: "#E07594" }}
            >
              Ver destaques
            </button>
          </div>

          <div className="flex items-center gap-6 pt-4">
            {[
              { num: "5K+", label: "Títulos" },
              { num: "12K+", label: "Leitores" },
              { num: "4.9", label: "Avaliação" },
            ].map((stat) => (
              <div key={stat.label}>
                <div style={{ fontSize: "1.4rem", fontWeight: 800, color: "#2E5347" }}>{stat.num}</div>
                <div style={{ fontSize: "0.8rem", color: "#6B8F7E" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex justify-center">
          <div
            className="absolute inset-0 rounded-3xl blur-3xl opacity-30"
            style={{ background: "radial-gradient(circle, #F2A8BC 30%, #6B8F7E 100%)" }}
          />
          <img
            src="https://images.unsplash.com/photo-1706195546853-a81b6a190daf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rcyUyMHJlYWRpbmclMjBjb3p5fGVufDF8fHx8MTc3Nzk5NTI5Mnww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Pessoa lendo um livro com café"
            className="relative rounded-3xl shadow-2xl object-cover w-full max-w-md"
            style={{ height: 480 }}
          />
          <div
            className="absolute -bottom-4 -left-4 p-4 rounded-2xl shadow-lg hidden md:block"
            style={{ backgroundColor: "#2E5347", color: "white" }}
          >
            <div style={{ fontSize: "0.75rem", color: "#F2A8BC", fontWeight: 600 }}>OFERTA DO DIA</div>
            <div style={{ fontSize: "0.9rem", fontWeight: 700 }}>30% OFF em Romance</div>
          </div>
        </div>
      </div>
    </section>
  );
}
