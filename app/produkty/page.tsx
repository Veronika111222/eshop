"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import Navbar from "../components/navbar";
import Footer from "../components/footer";

/** Jednotlivé kategorie – adresářové názvy přesně odpovídají podsložkám v app/produkty/ */
const categories = [
  {
    key: "detskenausnice",
    label: "Dětské náušnice",
    img: "/imgs/detske nausnice.jpg",
  },
  {
    key: "diamant",
    label: "Diamantové šperky",
    img: "/imgs/diamant.jpg",
  },
  {
    key: "kameny",
    label: "Drahé kameny",
    img: "/imgs/malachit.jpg",
  },
  { key: "zasnubniprsteny", label: "zásnubníprsteny", img: "/imgs/prsten5.jpg" },
  {
    key: "nahrdelniky",
    label: "Náhrdelníky",
    img: "/imgs/nahrdelnik1.jpg",
  },
  { key: "naramky", label: "Náramky", img: "/imgs/naramky1.jpg" },
  {
    key: "narozenidetatka",
    label: "Narození děťátka",
    img: "/imgs/narozeni.jpg",
  },
  { key: "narozeniny", label: "Narozeniny", img: "/imgs/privesky2.jpg" },
  { key: "perly", label: "Perly", img: "/imgs/perly3.jpg" },
  { key: "privesky", label: "Přívěsky", img: "/imgs/privesky3.jpg" },
  { key: "promoce", label: "Promoce", img: "/imgs/kategorie/promoce.jpg" },
  { key: "prsteny", label: "Prsteny", img: "/imgs/prsten5.jpg" },
  {
    key: "snubniprsteny",
    label: "Snubní prsteny",
    img: "/imgs/prsteny..jpg",
  },
  { key: "soupravy", label: "Soupravy", img: "/imgs/set.jpg" },
  {
    key: "naušnice",
    label: "naušnice",
    img: "/imgs/nausnice2.jpg",
  },
];

export default function ProductsPage() {
  const [filter, setFilter] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Efekt pro sledování scrollování
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Filtrované kategorie
  const filteredCategories = categories.filter(cat => 
    cat.label.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col bg-neutral-900 text-gray-300">
      <Navbar />

      {/* Hlavička s luxusním efektem */}
      <header className="relative overflow-hidden">
        {/* Overlay s gradientem */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/60 z-10" />
        
        {/* Tenká zlatá linka v horní části */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-700 via-amber-500 to-amber-700 z-20"></div>
        
        <div className="relative h-[45vh] w-full overflow-hidden">
          <Image
            src="/imgs/jewelry.jpg" 
            alt="Šperky"
            fill
            priority
            className="object-cover scale-105 animate-subtle-zoom filter brightness-[0.85]"
          />
          
          {/* Dekorativní prvky */}
          <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-amber-600 opacity-5 blur-3xl"></div>
          <div className="absolute -top-10 -right-20 w-96 h-96 rounded-full bg-amber-500 opacity-5 blur-3xl"></div>
        </div>
        
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
          <div className="text-center px-4 relative">
            {/* Dekorativní prvek nad textem */}
            <div className="inline-block p-1.5 border-2 border-amber-500 rounded-lg mb-3">
              <span className="text-amber-400 text-sm font-light tracking-widest uppercase">Naše nabídka</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-wide relative">
              <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                Kolekce
              </span>
              <span className="text-white"> šperků</span>
              <div className="h-1 w-20 bg-amber-500 mx-auto mt-4 rounded-full"></div>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 max-w-xl mx-auto backdrop-blur-sm">
              Objevte dokonalé šperky pro každou příležitost
            </p>
          </div>
        </div>
      </header>

      <main className="flex-grow relative mx-auto w-full px-4 py-20">
        {/* Dekorativní prvek v pozadí */}
        <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-amber-600 opacity-5 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-amber-500 opacity-5 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative">
          {/* Vyhledávání a filtry */}
          <div className={`sticky ${isScrolled ? 'top-16' : 'top-20'} z-30 backdrop-blur-md bg-neutral-800/90 py-5 px-6 rounded-xl mb-10 shadow-xl transition-all duration-300 border border-neutral-700`}>
            <div className="flex flex-col md:flex-row gap-5 items-center justify-between">
              {/* Vyhledávání */}
              <div className="relative w-full md:w-1/3">
                <input
                  type="text"
                  placeholder="Hledat v kategoriích..."
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  className="w-full bg-neutral-900 border border-neutral-700 text-white rounded-full py-2.5 px-5 pl-10 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              
              {/* Kategorie tlačítka */}
              <div className="flex gap-3 overflow-x-auto pb-2 w-full md:w-auto">
                <button
                  onClick={() => setActiveCategory("all")}
                  className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === "all"
                      ? "bg-gradient-to-r from-amber-500 to-amber-600 text-neutral-900 shadow-lg shadow-amber-700/20"
                      : "bg-neutral-800 text-gray-300 hover:bg-neutral-700 border border-neutral-700"
                  }`}
                >
                  Všechny
                </button>
                <button
                  onClick={() => setActiveCategory("popular")}
                  className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === "popular"
                      ? "bg-gradient-to-r from-amber-500 to-amber-600 text-neutral-900 shadow-lg shadow-amber-700/20"
                      : "bg-neutral-800 text-gray-300 hover:bg-neutral-700 border border-neutral-700"
                  }`}
                >
                  Populární
                </button>
                <button
                  onClick={() => setActiveCategory("new")}
                  className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === "new"
                      ? "bg-gradient-to-r from-amber-500 to-amber-600 text-neutral-900 shadow-lg shadow-amber-700/20"
                      : "bg-neutral-800 text-gray-300 hover:bg-neutral-700 border border-neutral-700"
                  }`}
                >
                  Novinky
                </button>
              </div>
            </div>
          </div>

          {/* Počet nalezených položek */}
          <div className="mb-8 text-gray-400 flex items-center">
            <div className="h-px flex-grow bg-neutral-800 mr-4"></div>
            <p>
              Nalezeno <span className="font-semibold text-amber-500">{filteredCategories.length}</span> kategorií
            </p>
            <div className="h-px flex-grow bg-neutral-800 ml-4"></div>
          </div>

          {/* Grid karet kategorií */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {filteredCategories.map(({ key, label, img }) => (
              <Link
                key={key}
                href={`/produkty/${key}`}
                className="group"
              >
                <div className="relative h-80 rounded-xl overflow-hidden shadow-lg border border-neutral-800 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-amber-800/10 group-hover:border-amber-700/50 group-hover:scale-[1.02]">
                  {/* Obrázek */}
                  <Image
                    src={img}
                    alt={label}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  
                  {/* Překrytí efekt */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-60 transition-all duration-300" />
                  
                  {/* Obsah karty */}
                  <div className="absolute inset-0 flex flex-col justify-end p-7">
                    <span className="inline-block bg-amber-500/20 text-amber-300 text-xs font-medium py-1 px-2.5 rounded-md mb-3 backdrop-blur-sm border border-amber-500/20">
                      Kategorie
                    </span>
                    <h2 className="text-2xl font-bold text-white mb-3 drop-shadow-lg transform transition-all duration-300">
                      {label}
                    </h2>
                    
                    {/* Odkaz s animací */}
                    <div className="flex items-center text-gray-300 group-hover:text-amber-400 transition-colors duration-300">
                      <span className="text-sm font-medium">Zobrazit produkty</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1.5 transform transition-transform duration-500 group-hover:translate-x-1.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          {/* Prázdný výsledek vyhledávání */}
          {filteredCategories.length === 0 && (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="w-20 h-20 rounded-full bg-neutral-800 flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-amber-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">Žádné kategorie nenalezeny</h3>
              <p className="text-gray-400 max-w-md mb-6">
                Zkuste změnit vyhledávací kritéria nebo resetujte filtry.
              </p>
              <button
                onClick={() => setFilter("")}
                className="px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-neutral-900 rounded-lg hover:shadow-lg hover:shadow-amber-700/20 transition-all font-medium"
              >
                Resetovat filtry
              </button>
            </div>
          )}
        </div>
      </main>
      
      {/* Promo sekce před patičkou */}
      <section className="bg-neutral-800 py-20 relative">
        {/* Dekorační prvky */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-800 via-amber-600 to-amber-800 opacity-50"></div>
        <div className="absolute -top-10 -right-10 w-64 h-64 rounded-full bg-amber-600 opacity-5 blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-amber-500 opacity-5 blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-amber-500 text-sm font-semibold tracking-wider uppercase mb-3 inline-block">Doprava a platba</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-5 text-white">Doručíme Vaše šperky rychle a bezpečně</h2>
              <div className="h-1 w-20 bg-amber-600 mb-6 rounded-full"></div>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Všechny šperky pečlivě balíme a zasíláme pojištěnou zásilkou. Při objednávce nad 5000 Kč je doprava zdarma.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/doprava"
                  className="px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-neutral-900 rounded-lg font-medium hover:shadow-lg hover:shadow-amber-700/20 transition-all"
                >
                  Informace o dopravě
                </Link>
                <Link 
                  href="/kontakt"
                  className="px-6 py-3 bg-neutral-700 text-white rounded-lg font-medium hover:bg-neutral-600 border border-neutral-600 transition-all"
                >
                  Kontaktovat nás
                </Link>
              </div>
            </div>
            
            <div className="flex justify-center md:justify-end">
              <div className="grid grid-cols-3 gap-3">
                <div className="flex items-center justify-center p-5 bg-neutral-700/50 border border-neutral-600 rounded-xl backdrop-blur-sm shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <div className="flex items-center justify-center p-5 bg-neutral-700/50 border border-neutral-600 rounded-xl backdrop-blur-sm shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex items-center justify-center p-5 bg-neutral-700/50 border border-neutral-600 rounded-xl backdrop-blur-sm shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div className="flex items-center justify-center p-5 bg-neutral-700/50 border border-neutral-600 rounded-xl backdrop-blur-sm shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <div className="flex items-center justify-center p-5 bg-neutral-700/50 border border-neutral-600 rounded-xl backdrop-blur-sm shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div className="flex items-center justify-center p-5 bg-neutral-700/50 border border-neutral-600 rounded-xl backdrop-blur-sm shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      
      {/* Animace pro CSS */}
      <style jsx global>{`
        @keyframes subtle-zoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.05); }
        }
        .animate-subtle-zoom {
          animation: subtle-zoom 25s alternate infinite ease-in-out;
        }
      `}</style>
    </div>
  );
}