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

const earrings: Product[] = [
  { 
    id: 1, 
    name: 'Zlaté náušnice "Diamond Point"', 
    price: 1450, 
    image: '/imgs/nausnice.jpg',
    description: 'Elegantní náušnice z 18k zlata s briliantem o váze 0.1ct, ideální pro každodenní nošení i formální příležitosti.',
    material: "gold"
  },
  { 
    id: 2, 
    name: 'Stříbrné náušnice "Pearl Elegance"', 
    price: 690, 
    image: '/imgs/nausnice.jpg',
    description: 'Klasické náušnice ze stříbra s pravými sladkovodními perlami o průměru 6mm, které dodávají jemný a ženský nádech.',
    material: "silver"
  },
  { 
    id: 3, 
    name: 'Zlaté náušnice "Sapphire Harmony"', 
    price: 2250, 
    image: '/imgs/nausnice.jpg',
    description: 'Luxusní náušnice z 14k zlata s modrými safíry, které vynikají svou jiskřivostí. Bezpečné klapkové zapínání zabraňuje ztrátě.',
    material: "gold"
  },
  { 
    id: 4, 
    name: 'Stříbrné náušnice "Art Deco"', 
    price: 780, 
    image: '/imgs/nausnice.jpg',
    description: 'Stylové stříbrné náušnice s francouzským zapínáním inspirované art deco stylem, zdobené černým onyxem a drobnými zirkony.',
    material: "silver"
  },
  { 
    id: 5, 
    name: 'Zlaté kroužky "Twisted Hoop"', 
    price: 1890, 
    image: '/imgs/nausnice.jpg',
    description: 'Elegantní kroucené kroužky z 18k zlata o průměru 25mm, které dodají šmrnc každému outfitu. Klasický design s moderním zpracováním.',
    material: "gold"
  },
  { 
    id: 6, 
    name: 'Stříbrné visací náušnice "Cascade"', 
    price: 850, 
    image: '/imgs/nausnice.jpg',
    description: 'Efektní visací náušnice ze stříbra s kaskádou jemných řetízků zakončených drobnými hvězdičkami. Délka 5.5cm.',
    material: "silver"
  },
  { 
    id: 7, 
    name: 'Zlaté náušnice "Mini Geometric"', 
    price: 1150, 
    image: '/imgs/nausnice.jpg',
    description: 'Minimalistické puzetové náušnice z 14k zlata v geometrickém designu - dokonalý doplněk pro moderní ženu, která ocení jednoduchost a eleganci.',
    material: "gold"
  },
  { 
    id: 8, 
    name: 'Stříbrné náušnice "Emerald Classic"', 
    price: 920, 
    image: '/imgs/nausnice.jpg',
    description: 'Klasické šroubkové náušnice ze stříbra s přírodními smaragdy vsazenými do oválného designu, který zvýrazňuje jejich zelenou barvu.',
    material: "silver"
  },
  { 
    id: 9, 
    name: 'Zlaté náušnice "Ruby Elegance"', 
    price: 2480, 
    image: '/imgs/nausnice.jpg',
    description: 'Luxusní klapkové náušnice z 18k zlata s rubíny obklopenými drobnými diamanty pro výrazný a sofistikovaný vzhled.',
    material: "gold"
  },
];

const EarringsPage: React.FC = () => {
  const collectionRef = useRef<HTMLDivElement>(null);
  const [materialFilter, setMaterialFilter] = useState<"all" | "gold" | "silver">("all");
  
  const scrollToCollection = () => {
    collectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const filteredEarrings = materialFilter === "all" 
    ? earrings 
    : earrings.filter(earring => earring.material === materialFilter);

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
        <div className="absolute inset-0 bg-[url('/imgs/nausnice.jpg')] bg-cover bg-center opacity-20"></div>
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
                Zlaté a stříbrné náušnice
              </span>
            </h1>
            
            <div className="h-1 w-24 bg-amber-500 rounded mb-6"></div>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              Náušnice jsou nepostradatelnou součástí každého šperkovníku, rámují obličej a dokonale podtrhují váš styl. Naše exkluzivní kolekce nabízí náušnice všech typů - od elegantních puzetových, přes bezpečné šroubkové a klapkové, až po výrazné kroužky a visací náušnice.
            </p>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              Každý pár náušnic v naší kolekci je vyroben z nejkvalitnějších materiálů — 14k a 18k zlata nebo ryzího stříbra, často doplněné o diamanty, drahé kameny či perly. Vyberte si náušnice, které budou dokonale odrážet váš osobní styl a eleganci.
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
                src="/imgs/nausnice.jpg"
                alt="Zlaté a stříbrné náušnice"
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
            <span className="text-amber-500 text-sm font-semibold tracking-wider uppercase">Exkluzivita & Styl</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
              Naše <span className="text-amber-500">náušnice</span>
            </h2>
            <div className="h-1 w-24 bg-amber-500 mx-auto rounded"></div>
            <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
              Vyberte si z naší exkluzivní kolekce zlatých a stříbrných náušnic, které doplní váš osobitý šarm a eleganci.
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
                Všechny náušnice
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
            {filteredEarrings.map(({ id, name, price, image, description, material }) => (
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
                      {material === "gold" ? "Zlaté" : "Stříbrné"}
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

      {/* Info sekce o náušnicích */}
      <section className="py-20 bg-neutral-900 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-neutral-800/40 rounded-xl p-10 border border-neutral-700 shadow-xl">
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <div className="md:w-1/3">
                <div className="relative w-full h-[300px] rounded-lg overflow-hidden">
                  <Image
                    src="/imgs/nausnice.jpg"
                    alt="Náušnice detail"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              
              <div className="md:w-2/3">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  Proč vybrat <span className="text-amber-500">náušnice</span> u nás?
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-amber-600/20 flex items-center justify-center text-amber-500 mr-4 mt-1 flex-shrink-0">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-300">
                      <span className="text-amber-500 font-semibold">Různé typy zapínání</span> - Nabízíme širokou škálu typů zapínání - od klasických puzetových přes bezpečné šroubkové a klapkové, až po francouzské zapínání či kroužky - pro maximální pohodlí a bezpečnost.
                    </p>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-amber-600/20 flex items-center justify-center text-amber-500 mr-4 mt-1 flex-shrink-0">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-300">
                      <span className="text-amber-500 font-semibold">Hypoalergenní materiály</span> - Naše zlaté i stříbrné náušnice jsou vyrobeny z kvalitních hypoalergenních materiálů, které jsou vhodné i pro citlivé uši a zaručují pohodlné celodenní nošení.
                    </p>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-amber-600/20 flex items-center justify-center text-amber-500 mr-4 mt-1 flex-shrink-0">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-300">
                      <span className="text-amber-500 font-semibold">Pro každou příležitost</span> - Od decentních kousků pro každodenní nošení, přes sofistikované modely pro pracovní prostředí, až po výrazné náušnice pro zvláštní příležitosti - máme náušnice pro každý moment vašeho života.
                    </p>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-amber-600/20 flex items-center justify-center text-amber-500 mr-4 mt-1 flex-shrink-0">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-300">
                      <span className="text-amber-500 font-semibold">Perfektní dárek</span> - Náušnice jsou jedním z nejoblíbenějších dárků - jejich univerzální velikost a rozmanitost stylů z nich činí ideální dárek, kterým určitě potěšíte své blízké.
                    </p>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Link 
                    href="/kontakt" 
                    className="inline-flex items-center text-amber-500 hover:text-amber-400 transition-colors"
                  >
                    <span>Kontaktujte nás pro více informací</span>
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

export default EarringsPage;