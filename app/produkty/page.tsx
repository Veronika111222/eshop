"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import Navbar from "../components/navbar";
import Footer from "../components/footer";

/** Jednotlivé kategorie – adresářové názvy přesně odpovídají podsložkám v app/produkty/ */
const categories = [
  {
    key: "deckenausnice",
    label: "Dětské náušnice",
    img: "/imgs/kategorie/deckenausnice.jpg",
  },
  {
    key: "diamant",
    label: "Diamantové šperky",
    img: "/imgs/kategorie/diamant.jpg",
  },
  {
    key: "kameny",
    label: "Drahé kameny",
    img: "/imgs/kategorie/kameny.jpg",
  },
  { key: "krest", label: "Křest", img: "/imgs/kategorie/krest.jpg" },
  {
    key: "nahrdelniky",
    label: "Náhrdelníky",
    img: "/imgs/kategorie/nahrdelniky.jpg",
  },
  { key: "naramky", label: "Náramky", img: "/imgs/kategorie/naramky.jpg" },
  {
    key: "narozenidetatka",
    label: "Narození děťátka",
    img: "/imgs/kategorie/narozenidetatka.jpg",
  },
  { key: "narozeniny", label: "Narozeniny", img: "/imgs/kategorie/narozeniny.jpg" },
  { key: "perly", label: "Perly", img: "/imgs/kategorie/perly.jpg" },
  { key: "privesky", label: "Přívěsky", img: "/imgs/kategorie/privesky.jpg" },
  { key: "promoce", label: "Promoce", img: "/imgs/kategorie/promoce.jpg" },
  { key: "prsteny", label: "Prsteny", img: "/imgs/kategorie/prsteny.jpg" },
  {
    key: "snubniprsteny",
    label: "Snubní prsteny",
    img: "/imgs/kategorie/snubniprsteny.jpg",
  },
  { key: "soupravy", label: "Soupravy", img: "/imgs/kategorie/soupravy.jpg" },
  {
    key: "svatebnisperky",
    label: "Svatební šperky",
    img: "/imgs/kategorie/svatebnisperky.jpg",
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
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-gray-100">
      <Navbar />

      {/* Hlavička s animovaným efektem */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative h-60 md:h-80 w-full overflow-hidden">
          <Image
            src="/imgs/kategorie/header-jewelry.jpg" 
            alt="Šperky"
            fill
            priority
            className="object-cover scale-105 animate-slow-zoom"
          />
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg tracking-wider">
              Naše <span className="text-yellow-400">kolekce</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-100 max-w-xl mx-auto drop-shadow-md">
              Objevte dokonalé šperky pro každou příležitost
            </p>
          </div>
        </div>
      </header>

      <main className="flex-grow max-w-7xl mx-auto w-full px-4 py-12">
        {/* Vyhledávání a filtry */}
        <div className={`sticky ${isScrolled ? 'top-16' : 'top-20'} z-30 backdrop-blur-md bg-gray-900/80 py-4 px-4 rounded-lg mb-8 shadow-lg transition-all duration-300 border border-gray-800`}>
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Vyhledávání */}
            <div className="relative w-full md:w-1/3">
              <input
                type="text"
                placeholder="Hledat v kategoriích..."
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="w-full bg-gray-800 border border-gray-700 text-white rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
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
            <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto">
              <button
                onClick={() => setActiveCategory("all")}
                className={`whitespace-nowrap px-4 py-1 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === "all"
                    ? "bg-yellow-500 text-gray-900"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                Všechny
              </button>
              <button
                onClick={() => setActiveCategory("popular")}
                className={`whitespace-nowrap px-4 py-1 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === "popular"
                    ? "bg-yellow-500 text-gray-900"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                Populární
              </button>
              <button
                onClick={() => setActiveCategory("new")}
                className={`whitespace-nowrap px-4 py-1 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === "new"
                    ? "bg-yellow-500 text-gray-900"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                Novinky
              </button>
            </div>
          </div>
        </div>

        {/* Počet nalezených položek */}
        <div className="mb-6 text-gray-400">
          <p>
            Nalezeno <span className="font-semibold text-white">{filteredCategories.length}</span> kategorií
          </p>
        </div>

        {/* Grid karet kategorií */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredCategories.map(({ key, label, img }) => (
            <Link
              key={key}
              href={`/produkty/${key}`}
              className="group"
            >
              <div className="relative h-64 md:h-72 rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-xl">
                {/* Obrázek */}
                <Image
                  src={img}
                  alt={label}
                  fill
                  className="object-cover"
                />
                
                {/* Překrytí efekt */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:from-black/70 group-hover:via-black/20 transition-all duration-300" />
                
                {/* Obsah karty */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <span className="inline-block bg-yellow-500/20 text-yellow-300 text-xs font-medium py-1 px-2 rounded-md mb-2 backdrop-blur-sm">
                    Kategorie
                  </span>
                  <h2 className="text-2xl font-bold text-white mb-2 drop-shadow-lg group-hover:translate-y-0 transform transition-all duration-300">
                    {label}
                  </h2>
                  
                  {/* Odkaz s animací */}
                  <div className="flex items-center text-gray-300 group-hover:text-yellow-400 transition-colors duration-300">
                    <span className="text-sm font-medium">Zobrazit produkty</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1 transform transition-transform duration-300 group-hover:translate-x-1"
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
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 text-gray-600 mb-4"
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
            <h3 className="text-xl font-semibold text-white mb-2">Žádné kategorie nenalezeny</h3>
            <p className="text-gray-400 max-w-md">
              Zkuste změnit vyhledávací kritéria nebo resetujte filtry.
            </p>
            <button
              onClick={() => setFilter("")}
              className="mt-4 px-4 py-2 bg-yellow-500 text-gray-900 rounded-md hover:bg-yellow-400 transition-colors"
            >
              Resetovat filtry
            </button>
          </div>
        )}
      </main>
      
      {/* Promo sekce před patičkou */}
      <section className="bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-white">Doručíme Vaše šperky rychle a bezpečně</h2>
              <p className="text-gray-300 mb-6">
                Všechny šperky pečlivě balíme a zasíláme pojištěnou zásilkou. Při objednávce nad 5000 Kč je doprava zdarma.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/doprava"
                  className="px-6 py-3 bg-yellow-500 text-gray-900 rounded-md font-medium hover:bg-yellow-400 transition-colors"
                >
                  Informace o dopravě
                </Link>
                <Link 
                  href="/kontakt"
                  className="px-6 py-3 bg-gray-700 text-white rounded-md font-medium hover:bg-gray-600 transition-colors"
                >
                  Kontaktovat nás
                </Link>
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="grid grid-cols-3 gap-2">
                <div className="flex items-center justify-center p-4 bg-gray-700 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <div className="flex items-center justify-center p-4 bg-gray-700 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex items-center justify-center p-4 bg-gray-700 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div className="flex items-center justify-center p-4 bg-gray-700 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <div className="flex items-center justify-center p-4 bg-gray-700 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div className="flex items-center justify-center p-4 bg-gray-700 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
        @keyframes slow-zoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        .animate-slow-zoom {
          animation: slow-zoom 20s alternate infinite ease-in-out;
        }
      `}</style>
    </div>
  );
}