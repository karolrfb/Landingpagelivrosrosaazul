import { useState } from "react";
import { Mail, Send, CheckCircle } from "lucide-react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section
      className="py-20 px-6 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #2E5347 0%, #4A7060 100%)" }}
    >
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-10"
        style={{ backgroundColor: "#F2A8BC" }}
      />
      <div
        className="absolute bottom-0 left-0 w-64 h-64 rounded-full blur-3xl opacity-10"
        style={{ backgroundColor: "#F2A8BC" }}
      />

      <div className="max-w-2xl mx-auto text-center relative">
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
          style={{ backgroundColor: "#F2A8BC22" }}
        >
          <Mail className="w-8 h-8" style={{ color: "#F2A8BC" }} />
        </div>

        <h2 style={{ fontSize: "2rem", fontWeight: 800, color: "white" }}>
          Receba novidades em primeira mão
        </h2>
        <p style={{ color: "#A8C8BB", marginTop: 12, fontSize: "0.95rem", lineHeight: 1.7 }}>
          Assine nossa newsletter e receba lançamentos, promoções exclusivas e dicas de leitura
          diretamente no seu e-mail.
        </p>

        {submitted ? (
          <div
            className="mt-8 flex items-center justify-center gap-3 py-4 px-6 rounded-2xl"
            style={{ backgroundColor: "#F2A8BC22" }}
          >
            <CheckCircle className="w-6 h-6" style={{ color: "#F2A8BC" }} />
            <span style={{ color: "white", fontWeight: 600 }}>Ótimo! Você está na lista. 🎉</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com"
              required
              className="flex-1 px-5 py-3.5 rounded-xl outline-none border-2 border-transparent focus:border-pink-300 transition-colors"
              style={{
                backgroundColor: "rgba(255,255,255,0.12)",
                color: "white",
                fontSize: "0.95rem",
              }}
            />
            <button
              type="submit"
              className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-white font-semibold transition-all hover:opacity-90 hover:scale-105 shadow-lg"
              style={{ backgroundColor: "#E07594", whiteSpace: "nowrap" }}
            >
              <Send className="w-4 h-4" />
              Quero receber
            </button>
          </form>
        )}

        <p style={{ color: "#6B8F7E", fontSize: "0.78rem", marginTop: 12 }}>
          Sem spam. Cancele quando quiser.
        </p>
      </div>
    </section>
  );
}
