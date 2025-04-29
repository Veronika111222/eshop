"use client";

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Opravené cesty k importům komponent
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  material: "gold" | "silver";
};

const necklaces: Product[] = [
  { 
    id: 1, 
    name: 'Zlatý řetízek "Venice"', 
    price: 1850, 
    image: '/imgs/nahrdelnik.jpg',
    description: 'Elegantní zlatý řetízek ze 14k zlata v klasickém designu, délka 45cm. Ideální jako základ pro přívěsky nebo jako samostatný decentní šperk.',
    material: "gold"
  },
  { 
    id: 2, 
    name: 'Stříbrný náhrdelník s přívěskem "Moonlight"', 
    price: 890, 
    image: '/imgs/nahrdelnik.jpg',
    description: 'Jemný stříbrný řetízek s přívěskem ve tvaru měsíce, zdobený drobnými zirkony. Délka řetízku je nastavitelná od 40 do 45cm.',
    material: "silver"
  },
  { 
    id: 3, 
    name: 'Zlatý choker "Classic Elegance"', 
    price: 2450, 
    image: '/imgs/nahrdelnik.jpg',
    description: 'Luxusní choker z 18k zlata s minimalistickým designem, který dokonale objímá krk. Délka 38cm, ideální pro večerní události i denní nošení.',
    material: "gold"
  },
  { 
    id: 4, 
    name: 'Stříbrná riviera "Diamond Line"', 
    price: 1290, 
    image: '/imgs/nahrdelnik.jpg',
    description: 'Elegantní stříbrný náhrdelník typu riviera s linií drobných zirkonů, které vytvářejí efekt nepřerušované jiskřivé linie. Délka 42cm.',
    material: "silver"
  },
  { 
    id: 5, 
    name: 'Zlatý víceřadý náhrdelník "Cascade"', 
    price: 2980, 
    image: '/imgs/nahrdelnik.jpg',
    description: 'Působivý třířadý náhrdelník z 14k zlata s různými délkami řetízků, které vytvářejí dynamický kaskádovitý efekt. Délky 40cm, 45cm a 50cm.',
    material: "gold"
  },
  { 
    id: 6, 
    name: 'Stříbrný perlový náhrdelník "Classic White"', 
    price: 1150, 
    image: '/imgs/nahrdelnik.jpg',
    description: 'Klasický perlový náhrdelník tvořený z pravých sladkovodních perel osazených ve stříbře. Délka 45cm, perličky o průměru 7-8mm.',
    material: "silver"
  },
  { 
    id: 7, 
    name: 'Zlatý řetízek "Cuban Link"', 
    price: 2250, 
    image: '/imgs/nahrdelnik.jpg',
    description: 'Masivnější zlatý řetízek z 18k zlata ve stylu Cuban link, který kombinuje moderní vzhled s nadčasovou estetikou. Délka 50cm.',
    material: "gold"
  },
  { 
    id: 8, 
    name: 'Stříbrný náhrdelník s přívěskem "Sapphire Drop"', 
    price: 980, 
    image: '/imgs/nahrdelnik.jpg',
    description: 'Elegantní stříbrný řetízek s přívěskem ve tvaru kapky, zdobený modrým safírem obklopeným drobnými zirkony. Délka řetízku 45cm.',
    material: "silver"
  },
  { 
    id: 9, 
    name: 'Zlatý choker "Art Deco"', 
    price: 3150, 
    image: '/imgs/nahrdelnik.jpg',
    description: 'Luxusní choker inspirovaný érou Art Deco, vyroben ze 14k zlata s geometrickými vzory a vsazenými černými onyxy. Délka 36cm.',
    material: "gold"
  },
];

const NecklacesPage: React.FC = () => {
  const collectionRef = useRef<HTMLDivElement>(null);
  const [materialFilter, setMaterialFilter] = useState<"all" | "gold" | "silver">("all");
  
  const scrollToCollection = () => {
    collectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const filteredNecklaces = materialFilter === "all" 
    ? necklaces 
    : necklaces.filter(necklace => necklace.material === materialFilter);

  return (
    <div className="flex flex-col min-h-screen bg-neutral-900 text-gray-300">
      {/* Navigační lišta */}
      <Navbar />

      {/* Zpět na hlavní stranu */}
      <div className="max-w-7xl mx-auto px-4 w-full pt-6">
        <Link 
          href="/" 
          className="inline-flex items-center text-amber-500 hover:text-amber-400 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span>Zpět na hlavní stranu</span>
        </Link>
      </div>

      {/* Hero sekce */}
      <section className="relative w-full py-20 md:py-32 overflow-hidden">
        {/* Pozadí s gradientem */}
        <div className="absolute inset-0 bg-[url('/imgs/nahrdelnik.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black"></div>
        
        {/* Tenká zlatá linka v horní části */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-700 via-amber-500 to-amber-700"></div>
        
        {/* Navigační šipka v levém horním rohu hero sekce */}
        <div className="absolute top-4 left-4 z-10">
          <button 
            onClick={() => window.history.back()}
            className="rounded-full bg-amber-600/80 hover:bg-amber-500 p-3 text-white shadow-lg transition-all duration-300 hover:scale-105"
            aria-label="Zpět"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </button>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
            <div className="inline-block p-1 border-2 border-amber-500 rounded-lg mb-4">
              <span className="text-amber-400 text-sm font-light tracking-widest uppercase">Luxusní kolekce</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-amber-300 to-amber-600 bg-clip-text text-transparent">
                Zlaté a stříbrné náhrdelníky
              </span>
            </h1>
            
            <div className="h-1 w-24 bg-amber-500 rounded mb-6"></div>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              Náhrdelníky jsou jedním z nejstarších a nejoblíbenějších šperků, které zdobí dekolt a přitahují pozornost k obličeji. Naše exkluzivní kolekce nabízí širokou škálu stylů - od klasických řetízků, přes elegantní chokery a riviery, až po výrazné náhrdelníky s přívěsky a perlami.
            </p>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              Každý náhrdelník v naší kolekci je vyroben z nejkvalitnějších materiálů — 14k a 18k zlata nebo ryzího stříbra, často doplněné o diamanty, drahé kameny nebo umělecké přívěsky. Vyberte si náhrdelník, který bude dokonale odrážet váš osobní styl a eleganci.
            </p>
            
            <button 
              onClick={scrollToCollection}
              className="px-8 py-3 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Prozkoumat kolekci
            </button>
          </div>
          
          <div className="md:w-1/2 relative">
            <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-2xl transform rotate-3">
              <Image
                src="/imgs/nahrdelnik.jpg"
                alt="Zlaté a stříbrné náhrdelníky"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-40"></div>
            </div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-amber-600 opacity-10 rounded-full blur-3xl"></div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-400 opacity-10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>

      {/* Hlavní obsah */}
      <main className="flex-grow py-20 bg-gradient-to-b from-neutral-900 to-neutral-800 relative">
        {/* Dekorativní prvky */}
        <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-amber-600 opacity-5 blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-amber-400 opacity-5 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16" ref={collectionRef}>
            <span className="text-amber-500 text-sm font-semibold tracking-wider uppercase">Exkluzivita & Elegance</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
              Naše <span className="text-amber-500">náhrdelníky</span>
            </h2>
            <div className="h-1 w-24 bg-amber-500 mx-auto rounded"></div>
            <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
              Vyberte si z naší exkluzivní kolekce zlatých a stříbrných náhrdelníků, které dodají eleganci každému outfitu.
            </p>
            
            {/* Filtry materiálu */}
            <div className="flex justify-center mt-8 space-x-4">
              <button 
                onClick={() => setMaterialFilter("all")}
                className={`px-6 py-2 rounded-full transition-all ${
                  materialFilter === "all" 
                    ? "bg-amber-600 text-white" 
                    : "bg-neutral-800 text-gray-300 hover:bg-neutral-700"
                }`}
              >
                Všechny náhrdelníky
              </button>
              <button 
                onClick={() => setMaterialFilter("gold")}
                className={`px-6 py-2 rounded-full transition-all ${
                  materialFilter === "gold" 
                    ? "bg-amber-600 text-white" 
                    : "bg-neutral-800 text-gray-300 hover:bg-neutral-700"
                }`}
              >
                Zlaté
              </button>
              <button 
                onClick={() => setMaterialFilter("silver")}
                className={`px-6 py-2 rounded-full transition-all ${
                  materialFilter === "silver" 
                    ? "bg-amber-600 text-white" 
                    : "bg-neutral-800 text-gray-300 hover:bg-neutral-700"
                }`}
              >
                Stříbrné
              </button>
            </div>
          </div>
          
          <section className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {filteredNecklaces.map(({ id, name, price, image, description, material }) => (
              <article
                key={id}
                className={`bg-neutral-800 rounded-lg border border-neutral-700 hover:border-amber-500 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex flex-col`}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
                  <div className="absolute top-4 right-4">
                    <span className={`${
                      material === "gold" ? "bg-amber-600" : "bg-gray-500"
                    } text-white text-xs px-3 py-1 rounded-full font-medium shadow-lg`}>
                      {material === "gold" ? "Zlatý" : "Stříbrný"}
                    </span>
                  </div>
                </div>
                
                <div className="p-6 flex-grow flex flex-col">
                  <h2 className="text-xl font-bold text-amber-500 hover:text-amber-400 transition-colors mb-2">{name}</h2>
                  <p className="text-gray-400 text-sm mb-4 flex-grow">{description}</p>
                  
                  <div className="flex justify-between items-center mt-auto">
                    <p className="text-white text-xl font-bold">
                      {price.toLocaleString()}&nbsp;€
                    </p>
                    
                    <button
                      type="button"
                      className="bg-amber-600 text-white px-4 py-2 rounded-md hover:bg-amber-700 transition-colors flex items-center"
                    >
                      <span>Detail</span>
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </section>
        </div>
      </main>

      {/* Info sekce o náhrdelníkách */}
      <section className="py-20 bg-neutral-900 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-neutral-800/40 rounded-xl p-10 border border-neutral-700 shadow-xl">
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <div className="md:w-1/3">
                <div className="relative w-full h-[300px] rounded-lg overflow-hidden">
                  <Image
                    src="/imgs/nahrdelnik.jpg"
                    alt="Náhrdelník detail"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              
              <div className="md:w-2/3">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  Proč vybrat <span className="text-amber-500">náhrdelník</span> u nás?
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-amber-600/20 flex items-center justify-center text-amber-500 mr-4 mt-1 flex-shrink-0">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-300">
                      <span className="text-amber-500 font-semibold">Prémiové materiály</span> - Naše náhrdelníky jsou vyrobeny pouze z certifikovaného 14k a 18k zlata nebo ryzího stříbra (925/1000) nejvyšší kvality, které zajišťují trvalý lesk a odolnost.
                    </p>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-amber-600/20 flex items-center justify-center text-amber-500 mr-4 mt-1 flex-shrink-0">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-300">
                      <span className="text-amber-500 font-semibold">Řemeslné mistrovství</span> - Každý náhrdelník je výsledkem práce zkušených zlatníků, kteří kombinují tradiční techniky s moderním designem pro vytvoření šperku, který vydrží generace.
                    </p>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-amber-600/20 flex items-center justify-center text-amber-500 mr-4 mt-1 flex-shrink-0">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-300">
                      <span className="text-amber-500 font-semibold">Různé délky a styly</span> - Nabízíme širokou škálu délek a stylů náhrdelníků - od těsných chokerů (36-38cm) přes klasické náhrdelníky (42-45cm) až po dlouhé řetízky (60-80cm) pro různé výstřihy a příležitosti.
                    </p>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-amber-600/20 flex items-center justify-center text-amber-500 mr-4 mt-1 flex-shrink-0">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-300">
                      <span className="text-amber-500 font-semibold">Bezpečná zapínání</span> - Všechny naše náhrdelníky jsou vybaveny kvalitními a bezpečnými zapínáními, která zajišťují, že váš cenný šperk zůstane vždy na svém místě.
                    </p>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Link 
                    href="/kontakt" 
                    className="inline-flex items-center text-amber-500 hover:text-amber-400 transition-colors"
                  >
                    <span>Kontaktujte nás pro osobní konzultaci</span>
                    <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patička */}
      <Footer />
    </div>
  );
};

export default NecklacesPage;