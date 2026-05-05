import { Truck, Shield, RefreshCw, Headphones } from "lucide-react";

const perks = [
  { icon: Truck, title: "Frete Grátis", desc: "Nas compras acima de R$ 99" },
  { icon: Shield, title: "Compra Segura", desc: "Pagamento 100% protegido" },
  { icon: RefreshCw, title: "Troca Fácil", desc: "30 dias para devoluções" },
  { icon: Headphones, title: "Suporte 24h", desc: "Atendimento sempre disponível" },
];

export function AboutSection() {
  return (
    <>
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div
              className="absolute -top-6 -left-6 w-72 h-72 rounded-full blur-3xl opacity-20"
              style={{ backgroundColor: "#F2A8BC" }}
            />
            <img
              src="https://images.unsplash.com/photo-1765547683057-52188e9b4107?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxib29rc3RvcmUlMjBzaGVsZiUyMGxpYnJhcnklMjBhZXN0aGV0aWN8ZW58MXx8fHwxNzc3OTk1Mjk2fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Estante de livros"
              className="relative rounded-3xl shadow-2xl object-cover w-full"
              style={{ height: 420 }}
            />
            <div
              className="absolute -bottom-5 -right-5 p-5 rounded-2xl shadow-xl"
              style={{ backgroundColor: "#2E5347" }}
            >
              <div style={{ fontSize: "2rem", fontWeight: 900, color: "#F2A8BC" }}>15+</div>
              <div style={{ fontSize: "0.8rem", color: "white" }}>Anos de história</div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <p style={{ color: "#E07594", fontSize: "0.85rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em" }}>
              Nossa história
            </p>
            <h2 style={{ color: "#2E5347", fontSize: "2rem", fontWeight: 800 }}>
              Mais do que uma livraria, <span style={{ color: "#E07594" }}>uma comunidade</span>
            </h2>
            <p style={{ color: "#4A7060", lineHeight: 1.8, fontSize: "0.95rem" }}>
              Fundada com amor pela literatura, a Livraria Pétalas nasceu do sonho de criar um espaço
              onde cada leitor pudesse encontrar não apenas livros, mas experiências únicas. Acreditamos
              que cada história tem o poder de transformar vidas.
            </p>
            <p style={{ color: "#4A7060", lineHeight: 1.8, fontSize: "0.95rem" }}>
              Com uma curadoria cuidadosa e apaixonada, selecionamos os melhores títulos nacionais e
              internacionais para você. Nossa missão é conectar pessoas a histórias que importam.
            </p>
            <button
              className="w-fit px-6 py-3 rounded-full text-white transition-all hover:scale-105 shadow"
              style={{ backgroundColor: "#E07594" }}
            >
              Conheça nossa história
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 px-6" style={{ backgroundColor: "#2E5347" }}>
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {perks.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "#F2A8BC22" }}
              >
                <Icon className="w-6 h-6" style={{ color: "#F2A8BC" }} />
              </div>
              <div>
                <div style={{ fontWeight: 700, color: "white" }}>{title}</div>
                <div style={{ fontSize: "0.82rem", color: "#6B8F7E" }}>{desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
