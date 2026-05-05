import { Star, Heart, ShoppingCart } from "lucide-react";
import { useState } from "react";

const books = [
  {
    id: 1,
    title: "A Redoma de Vidro",
    author: "Sylvia Plath",
    price: "R$ 49,90",
    originalPrice: "R$ 69,90",
    rating: 4.9,
    reviews: 342,
    cover: "#C9547A",
    tag: "Bestseller",
  },
  {
    id: 2,
    title: "Orgulho e Preconceito",
    author: "Jane Austen",
    price: "R$ 39,90",
    originalPrice: "R$ 54,90",
    rating: 4.8,
    reviews: 891,
    cover: "#4A7060",
    tag: "Clássico",
  },
  {
    id: 3,
    title: "Normal People",
    author: "Sally Rooney",
    price: "R$ 44,90",
    originalPrice: null,
    rating: 4.7,
    reviews: 567,
    cover: "#E07594",
    tag: "Novo",
  },
  {
    id: 4,
    title: "O Morro dos Ventos Uivantes",
    author: "Emily Brontë",
    price: "R$ 37,90",
    originalPrice: "R$ 52,00",
    rating: 4.8,
    reviews: 412,
    cover: "#2E5347",
    tag: "Romance",
  },
];

export function FeaturedBooks() {
  const [liked, setLiked] = useState<number[]>([]);

  return (
    <section className="py-20 px-6" style={{ backgroundColor: "#FAFAFA" }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p style={{ color: "#E07594", fontSize: "0.85rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em" }}>
              Mais Vendidos
            </p>
            <h2 style={{ color: "#2E5347", fontSize: "2rem", fontWeight: 800, marginTop: 4 }}>
              Livros em Destaque
            </h2>
          </div>
          <a href="#" style={{ color: "#4A7060", fontSize: "0.9rem", fontWeight: 600 }} className="hidden md:block hover:underline">
            Ver todos →
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {books.map((book) => (
            <div
              key={book.id}
              className="group rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 bg-white"
            >
              <div
                className="relative flex items-center justify-center"
                style={{ height: 240, backgroundColor: book.cover + "22" }}
              >
                <div
                  className="w-28 h-40 rounded-lg shadow-2xl flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-2"
                  style={{ backgroundColor: book.cover }}
                >
                  <span className="text-white text-xs text-center px-2 font-semibold leading-tight">
                    {book.title}
                  </span>
                </div>

                <span
                  className="absolute top-3 left-3 px-2 py-1 rounded-full text-white"
                  style={{ fontSize: "0.7rem", fontWeight: 700, backgroundColor: "#E07594" }}
                >
                  {book.tag}
                </span>

                <button
                  onClick={() => setLiked(liked.includes(book.id) ? liked.filter(i => i !== book.id) : [...liked, book.id])}
                  className="absolute top-3 right-3 p-2 rounded-full bg-white shadow transition-transform hover:scale-110"
                >
                  <Heart
                    className="w-4 h-4"
                    style={{ color: liked.includes(book.id) ? "#E07594" : "#ccc", fill: liked.includes(book.id) ? "#E07594" : "none" }}
                  />
                </button>
              </div>

              <div className="p-4 flex flex-col gap-2">
                <h3 style={{ color: "#2E5347", fontWeight: 700, fontSize: "0.95rem" }}>{book.title}</h3>
                <p style={{ color: "#6B8F7E", fontSize: "0.82rem" }}>{book.author}</p>

                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5"
                      style={{ color: "#E07594", fill: i < Math.floor(book.rating) ? "#E07594" : "none" }}
                    />
                  ))}
                  <span style={{ fontSize: "0.75rem", color: "#999", marginLeft: 4 }}>({book.reviews})</span>
                </div>

                <div className="flex items-center gap-2 mt-1">
                  <span style={{ fontWeight: 800, color: "#2E5347" }}>{book.price}</span>
                  {book.originalPrice && (
                    <span style={{ fontSize: "0.8rem", color: "#aaa", textDecoration: "line-through" }}>
                      {book.originalPrice}
                    </span>
                  )}
                </div>

                <button
                  className="mt-2 w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-white transition-all hover:opacity-90"
                  style={{ backgroundColor: "#2E5347", fontSize: "0.85rem" }}
                >
                  <ShoppingCart className="w-4 h-4" />
                  Adicionar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
