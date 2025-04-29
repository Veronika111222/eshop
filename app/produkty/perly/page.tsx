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
  pearlType: "freshwater" | "seawater";
  material: "gold" | "silver";
};

const pearls: Product[] = [
  { 
    id: 1, 
    name: 'Náhrdelník "Classic White" se sladkovodními perlami', 
    price: 2350, 
    image: '/imgs/perly.jpg',
    description: 'Elegantní náhrdelník z 18k zlata s dokonale sférickými bílými sladkovodními perlami, které vynikají svým leskem a hladkým povrchem.',
    pearlType: "freshwater",
    material: "gold"
  },
  { 
    id: 2, 
    name: 'Stříbrné náušnice "Teardrop" s mořskými perlami', 
    price: 1290, 
    image: '/imgs/perly.jpg',
    description: 'Luxusní náušnice ze stříbra s tahitskými tmavými perlami kapkovitého tvaru, které jsou známé svým unikátním barevným odleskem.',
    pearlType: "seawater",
    material: "silver"
  },
  { 
    id: 3, 
    name: 'Zlatý náramek "Pearl Cascade" se sladkovodními perlami', 
    price: 1950, 
    image: '/imgs/perly.jpg',
    description: 'Jemný náramek ze 14k zlata s kaskádou sladkovodních perel různých velikostí, které vytvářejí dynamický a přesto elegantní vzhled.',
    pearlType: "freshwater",
    material: "gold"
  },
  { 
    id: 4, 
    name: 'Stříbrný prsten "Akoya Solitaire" s mořskou perlou', 
    price: 980, 
    image: '/imgs/perly.jpg',
    description: 'Minimalistický stříbrný prsten s jedinou dokonalou Akoya perlou, která vyniká svým krémovým odstínem a vysokým leskem.',
    pearlType: "seawater",
    material: "silver"
  },
  { 
    id: 5, 
    name: 'Zlatý přívěsek "South Sea Luxury" s mořskou perlou', 
    price: 3200, 
    image: '/imgs/perly.jpg',
    description: 'Exkluzivní přívěsek z 18k zlata s vzácnou jižní mořskou perlou o průměru 11mm, oceňovanou pro svůj zlatavý odstín a výjimečný lesk.',
    pearlType: "seawater",
    material: "gold"
  },
  { 
    id: 6, 
    name: 'Stříbrné náušnice "Baroque" se sladkovodními perlami', 
    price: 850, 
    image: '/imgs/perly.jpg',
    description: 'Originální stříbrné náušnice s barokními sladkovodními perlami nepravidelného tvaru, které dodávají šperku jedinečný a umělecký charakter.',
    pearlType: "freshwater",
    material: "silver"
  },
  { 
    id: 7, 
    name: 'Zlatý náhrdelník "Tahitian Dream" s mořskými perlami', 
    price: 4500, 
    image: '/imgs/perly.jpg',
    description: 'Luxusní náhrdelník ze 14k zlata s tahitskými perlami, které se pyšní exotickým tmavým odstínem s odlesky modré, zelené a fialové.',
    pearlType: "seawater",
    material: "gold"
  },
  { 
    id: 8, 
    name: 'Stříbrný set "Bridal Collection" se sladkovodními perlami', 
    price: 1650, 
    image: '/imgs/perly.jpg',
    description: 'Svatební set ze stříbra obsahující náhrdelník a náušnice s čistě bílými sladkovodními perlami, ideální pro výjimečné životní okamžiky.',
    pearlType: "freshwater",
    material: "silver"
  },
  { 
    id: 9, 
    name: 'Zlatá brož "Vintage Pearl" se sladkovodní perlou', 
    price: 1750, 
    image: '/imgs/perly.jpg',
    description: 'Elegantní brož inspirovaná art deco stylem vyrobená ze 14k zlata s centrální krémovou sladkovodní perlou obklopenou drobnými zirkony.',
    pearlType: "freshwater",
    material: "gold"
  },
  { 
    id: 10, 
    name: 'Stříbrné vlasové doplňky "Pearl Pins" s mořskými perlami', 
    price: 890, 
    image: '/imgs/perly.jpg',
    description: 'Sada stříbrných vlasových sponek s drobnými Akoya perlami, které dodají jemný a elegantní akcent vašemu účesu.',
    pearlType: "seawater",
    material: "silver"
  },
  { 
    id: 11, 
    name: 'Zlaté manžetové knoflíčky "Pearl Elegance" s mořskými perlami', 
    price: 1980, 
    image: '/imgs/perly.jpg',
    description: 'Sofistikované manžetové knoflíčky z 18k zlata zdobené ušlechtilými Akoya perlami, které dodají elegantní tečku formálnímu outfitu.',
    pearthType: "seawater",
    material: "gold"
  },
  { 
    id: 12, 
    name: 'Stříbrný náramek "Multi-strand" se sladkovodními perlami', 
    price: 1290, 
    image: '/imgs/perly.jpg',
    description: 'Mnohovrstevný náramek ze stříbra se sladkovodními perlami v různých odstínech od bílé po růžovou, vytvářející bohatý a luxusní vzhled.',
    pearlType: "freshwater",
    material: "silver"
  },
];

const PearlsPage: React.FC = () => {
  const collectionRef = useRef<HTMLDivElement>(null);
  const [filters, setFilters] = useState({
    material: "all" as "all" | "gold" | "silver",
    pearlType: "all" as "all" | "freshwater" | "seawater"
  });
  
  const scrollToCollection = () => {
    collectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const filteredPearls = pearls.filter(pearl => {
    const materialMatch = filters.material === "all" || pearl.material === filters.material;
    const pearlTypeMatch = filters.pearlType === "all" || pearl.pearlType === filters.pearlType;
    return materialMatch && pearlTypeMatch;
  });

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
        <div className="absolute inset-0 bg-[url('/imgs/perly.jpg')] bg-cover bg-center opacity-20"></div>
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
                Perly v luxusních špercích
              </span>
            </h1>
            
            <div className="h-1 w-24 bg-amber-500 rounded mb-6"></div>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              Perly jsou symbolem elegance, rafinovanosti a nadčasové krásy. Naše exkluzivní kolekce perlových šperků nabízí jak sladkovodní, tak mořské perly, zasazené do kvalitního zlata i stříbra. Každý šperk je pečlivě navržen tak, aby vyzdvihl přirozenou krásu a lesk těchto vzácných pokladů přírody.
            </p>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              Od klasických bílých až po exotické tahitské perly s mnoha barevnými odstíny - naše kolekce zahrnuje perly z různých částí světa, každou s unikátním charakterem a krásou. Vyberte si šperk, který nejlépe vyjádří váš osobitý styl a dodá vašemu vzhledu nádech luxusu a elegance.
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
                src="/imgs/perly.jpg"
                alt="Šperky s perlami"
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
            <span className="text-amber-500 text-sm font-semibold tracking-wider uppercase">Exkluzivita & Krása</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
              Naše <span className="text-amber-500">perlové</span> šperky
            </h2>
            <div className="h-1 w-24 bg-amber-500 mx-auto rounded"></div>
            <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
              Vyberte si z naší exkluzivní kolekce perlových šperků, které kombinují přírodní krásu perel s dokonalým řemeslným zpracováním.
            </p>
            
            {/* Filtry materiálu a typu perel */}
            <div className="flex flex-col sm:flex-row justify-center mt-8 gap-4">
              <div className="flex justify-center space-x-3">
                <button 
                  onClick={() => setFilters(prev => ({ ...prev, material: "all" }))}
                  className={`px-4 py-2 rounded-full transition-all text-sm ${
                    filters.material === "all" 
                      ? "bg-amber-600 text-white" 
                      : "bg-neutral-800 text-gray-300 hover:bg-neutral-700"
                  }`}
                >
                  Všechny
                </button>
                <button 
                  onClick={() => setFilters(prev => ({ ...prev, material: "gold" }))}
                  className={`px-4 py-2 rounded-full transition-all text-sm ${
                    filters.material === "gold" 
                      ? "bg-amber-600 text-white" 
                      : "bg-neutral-800 text-gray-300 hover:bg-neutral-700"
                  }`}
                >
                  Zlaté
                </button>
                <button 
                  onClick={() => setFilters(prev => ({ ...prev, material: "silver" }))}
                  className={`px-4 py-2 rounded-full transition-all text-sm ${
                    filters.material === "silver" 
                      ? "bg-amber-600 text-white" 
                      : "bg-neutral-800 text-gray-300 hover:bg-neutral-700"
                  }`}
                >
                  Stříbrné
                </button>
              </div>
              
              <div className="flex justify-center space-x-3">
                <button 
                  onClick={() => setFilters(prev => ({ ...prev, pearlType: "all" }))}
                  className={`px-4 py-2 rounded-full transition-all text-sm ${
                    filters.pearlType === "all" 
                      ? "bg-amber-600 text-white" 
                      : "bg-neutral-800 text-gray-300 hover:bg-neutral-700"
                  }`}
                >
                  Všechny perly
                </button>
                <button 
                  onClick={() => setFilters(prev => ({ ...prev, pearlType: "freshwater" }))}
                  className={`px-4 py-2 rounded-full transition-all text-sm ${
                    filters.pearlType === "freshwater" 
                      ? "bg-amber-600 text-white" 
                      : "bg-neutral-800 text-gray-300 hover:bg-neutral-700"
                  }`}
                >
                  Sladkovodní
                </button>
                <button 
                  onClick={() => setFilters(prev => ({ ...prev, pearlType: "seawater" }))}
                  className={`px-4 py-2 rounded-full transition-all text-sm ${
                    filters.pearlType === "seawater" 
                      ? "bg-amber-600 text-white" 
                      : "bg-neutral-800 text-gray-300 hover:bg-neutral-700"
                  }`}
                >
                  Mořské
                </button>
              </div>
            </div>
          </div>
          
          <section className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPearls.map(({ id, name, price, image, description, material, pearlType }) => (
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
                  <div className="absolute top-4 right-4 flex flex-col gap-2">
                    <span className={`${
                      material === "gold" ? "bg-amber-600" : "bg-gray-500"
                    } text-white text-xs px-3 py-1 rounded-full font-medium shadow-lg`}>
                      {material === "gold" ? "Zlatý" : "Stříbrný"}
                    </span>
                    <span className={`${
                      pearlType === "freshwater" ? "bg-blue-500" : "bg-indigo-600"
                    } text-white text-xs px-3 py-1 rounded-full font-medium shadow-lg`}>
                      {pearlType === "freshwater" ? "Sladkovodní" : "Mořské"}
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

      {/* Info sekce o perlách */}
      <section className="py-20 bg-neutral-900 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-neutral-800/40 rounded-xl p-10 border border-neutral-700 shadow-xl">
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <div className="md:w-1/3">
                <div className="relative w-full h-[300px] rounded-lg overflow-hidden">
                  <Image
                    src="/imgs/perly.jpg"
                    alt="Perly detail"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              
              <div className="md:w-2/3">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  Tajemství <span className="text-amber-500">perel</span>
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-amber-600/20 flex items-center justify-center text-amber-500 mr-4 mt-1 flex-shrink-0">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-300">
                      <span className="text-amber-500 font-semibold">Přírodní zázrak</span> - Perly jsou jediným drahým kamenem, který vzniká v živém organismu. Trvá roky, než perlorodka či ústřice vytvoří perlu vrstvy za vrstvou perleti, což z každé perly činí unikátní klenot.
                    </p>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-amber-600/20 flex items-center justify-center text-amber-500 mr-4 mt-1 flex-shrink-0">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-300">
                      <span className="text-amber-500 font-semibold">Mořské vs. sladkovodní</span> - Mořské perly jako Akoya, Tahitské či Jižní mořské jsou vzácnější a ceněnější pro svůj lesk a velikost. Sladkovodní perly se vyznačují rozmanitostí tvarů a barev za dostupnější cenu.
                    </p>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-amber-600/20 flex items-center justify-center text-amber-500 mr-4 mt-1 flex-shrink-0">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-300">
                      <span className="text-amber-500 font-semibold">Hodnocení kvality</span> - Kvalita perel se posuzuje podle lesku, povrchu, tvaru, barvy a velikosti. Naše šperky obsahují pouze perly té nejvyšší kvality, pečlivě vybrané našimi experty.
                    </p>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-amber-600/20 flex items-center justify-center text-amber-500 mr-4 mt-1 flex-shrink-0">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-300">
                      <span className="text-amber-500 font-semibold">Péče o perly</span> - Perly vyžadují šetrné zacházení. Jsou organické a měkčí než jiné drahokamy. Doporučujeme je chránit před chemikáliemi, nosit je často (přirozené oleje z vaší pokožky jim prospívají) a skladovat je odděleně.
                    </p>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Link 
                    href="/kontakt" 
                    className="inline-flex items-center text-amber-500 hover:text-amber-400 transition-colors"
                  >
                    <span>Kontaktujte naše perlové specialisty</span>
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

export default PearlsPage;