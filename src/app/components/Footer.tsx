import { BookOpen, Instagram, Twitter, Facebook } from "lucide-react";

export function Footer() {
  const links = {
    "Livraria": ["Catálogo", "Novidades", "Bestsellers", "Promoções"],
    "Ajuda": ["Frete e Entrega", "Trocas e Devoluções", "Rastreio do Pedido", "FAQ"],
    "Institucional": ["Sobre nós", "Blog", "Trabalhe conosco", "Parceiros"],
  };

  return (
    <footer style={{ backgroundColor: "#1A3329" }}>
      <div className="max-w-7xl mx-auto px-6 py-16 grid sm:grid-cols-2 lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2 flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <BookOpen className="w-6 h-6" style={{ color: "#F2A8BC" }} />
            <span style={{ color: "white", fontSize: "1.1rem", fontWeight: 700 }}>Livraria Pétalas</span>
          </div>
          <p style={{ color: "#6B8F7E", fontSize: "0.85rem", lineHeight: 1.7, maxWidth: 280 }}>
            Conectando leitores às melhores histórias desde 2010. Porque toda vida merece uma boa leitura.
          </p>
          <div className="flex gap-3 mt-2">
            {[Instagram, Twitter, Facebook].map((Icon, i) => (
              <button
                key={i}
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{ backgroundColor: "#F2A8BC22" }}
              >
                <Icon className="w-4 h-4" style={{ color: "#F2A8BC" }} />
              </button>
            ))}
          </div>
        </div>

        {Object.entries(links).map(([title, items]) => (
          <div key={title} className="flex flex-col gap-3">
            <h4 style={{ color: "white", fontWeight: 700, fontSize: "0.9rem" }}>{title}</h4>
            {items.map((item) => (
              <a
                key={item}
                href="#"
                style={{ color: "#6B8F7E", fontSize: "0.83rem" }}
                className="hover:text-white transition-colors w-fit"
              >
                {item}
              </a>
            ))}
          </div>
        ))}
      </div>

      <div
        className="border-t px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3"
        style={{ borderColor: "#2E5347" }}
      >
        <p style={{ color: "#3D6B5E", fontSize: "0.8rem" }}>
          © 2026 Livraria Pétalas. Todos os direitos reservados.
        </p>
        <p style={{ color: "#3D6B5E", fontSize: "0.8rem" }}>
          Feito com 💗 para leitores apaixonados
        </p>
      </div>
    </footer>
  );
}
