"use client";

import React from 'react';
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
  description: string; // Přidáno pro lepší popis produktu
};

const diamonds: Product[] = [
  { 
    id: 1, 
    name: 'Diamantový prsten "Eternity"', 
    price: 2850, 
    image: '/imgs/diamanty.jpg',
    description: 'Luxusní prsten s brilianty po celém obvodu, zasazený v 18k bílém zlatě.'
  },
  { 
    id: 2, 
    name: 'Diamantové náušnice "Stella"', 
    price: 1980, 
    image: '/imgs/diamanty.jpg',
    description: 'Elegantní náušnice s centrálním diamantem o váze 0.5ct obklopeným menšími kameny.'
  },
  { 
    id: 3, 
    name: 'Diamantový přívěsek "Aurora"', 
    price: 1650, 
    image: '/imgs/diamanty.jpg',
    description: 'Jedinečný přívěsek inspirovaný polární září, zdobený diamanty té nejvyšší kvality.'
  },
  { 
    id: 4, 
    name: 'Zásnubní prsten s diamantem', 
    price: 3200, 
    image: '/imgs/diamanty.jpg',
    description: 'Klasický zásnubní prsten s briliantem o váze 0.7ct zasazeným v 18k růžovém zlatě.'
  },
  { 
    id: 5, 
    name: 'Diamantový náramek "Cascade"', 
    price: 4500, 
    image: '/imgs/diamanty.jpg',
    description: 'Luxusní tenisový náramek s 36 diamanty o celkové váze 2.5ct, upevněný v bílém zlatě.'
  },
  { 
    id: 6, 
    name: 'Solitérní diamantový náhrdelník', 
    price: 2950, 
    image: '/imgs/diamanty.jpg',
    description: 'Elegantní náhrdelník s centrálním diamantem o váze 1ct zavěšeným na jemném zlatém řetízku.'
  },
];

const DiamondPage: React.FC = () => (
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
      <div className="absolute inset-0 bg-[url('/imgs/diamanty.jpg')] bg-cover bg-center opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black"></div>
      
      {/* Tenká zlatá linka v horní části */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-700 via-amber-500 to-amber-700"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
          <div className="inline-block p-1 border-2 border-amber-500 rounded-lg mb-4">
            <span className="text-amber-400 text-sm font-light tracking-widest uppercase">Luxusní kolekce</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-amber-300 to-amber-600 bg-clip-text text-transparent">
              Diamantové šperky
            </span>
          </h1>
          
          <div className="h-1 w-24 bg-amber-500 rounded mb-6"></div>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
            Diamanty jsou věčné, stejně jako vzpomínky, které s nimi vytvoříte. Naše exkluzivní kolekce diamantových šperků kombinuje nejkvalitnější diamanty s precizním řemeslným zpracováním. Každý kus je navržen tak, aby podtrhl jedinečnost okamžiku a stal se dědictvím pro budoucí generace.
          </p>
          <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
            Všechny naše diamanty jsou eticky získané a certifikované, abyste si mohli být jisti jejich původem i kvalitou. Vyberte si šperk, který bude zářit stejně jako vaše nejkrásnější životní momenty.
          </p>
          
          <button className="px-8 py-3 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Prozkoumat kolekci
          </button>
        </div>
        
        <div className="md:w-1/2 relative">
          <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-2xl transform rotate-3">
            <Image
              src="/imgs/diamanty.jpg"
              alt="Diamantové šperky"
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
        <div className="text-center mb-16">
          <span className="text-amber-500 text-sm font-semibold tracking-wider uppercase">Exkluzivita & Kvalita</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
            Naše <span className="text-amber-500">diamantové</span> šperky
          </h2>
          <div className="h-1 w-24 bg-amber-500 mx-auto rounded"></div>
          <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
            Vyberte si z naší exkluzivní nabídky diamantových šperků, kde každý kus vypráví příběh luxusu a jedinečnosti.
          </p>
        </div>
        
        <section className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {diamonds.map(({ id, name, price, image, description }) => (
            <article
              key={id}
              className="bg-neutral-800 rounded-lg border border-neutral-700 hover:border-amber-500 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex flex-col"
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
                  <span className="bg-amber-600 text-white text-xs px-3 py-1 rounded-full font-medium shadow-lg">
                    Exkluzivní
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

    {/* Info sekce o diamantech */}
    <section className="py-20 bg-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-neutral-800/40 rounded-xl p-10 border border-neutral-700 shadow-xl">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="md:w-1/3">
              <div className="relative w-full h-[300px] rounded-lg overflow-hidden">
                <Image
                  src="/imgs/diamanty.jpg" // Detailní záběr diamantu
                  alt="Diamant detail"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            
            <div className="md:w-2/3">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Proč vybrat <span className="text-amber-500">diamant</span>?
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-amber-600/20 flex items-center justify-center text-amber-500 mr-4 mt-1 flex-shrink-0">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-300">
                    <span className="text-amber-500 font-semibold">Věčná hodnota</span> - Diamanty si na rozdíl od jiných luxusních předmětů zachovávají svou hodnotu po generace a často na ceně dokonce získávají.
                  </p>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-amber-600/20 flex items-center justify-center text-amber-500 mr-4 mt-1 flex-shrink-0">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-300">
                    <span className="text-amber-500 font-semibold">Přírodní krása</span> - Každý diamant je jedinečný a vytváří se přirozeně pod zemí po miliony let, což z něj činí jeden z nejúžasnějších přírodních zázraků.
                  </p>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-amber-600/20 flex items-center justify-center text-amber-500 mr-4 mt-1 flex-shrink-0">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-300">
                    <span className="text-amber-500 font-semibold">Odolnost a trvanlivost</span> - Diamant je nejtvrdší přírodní materiál na Zemi, což zajišťuje, že váš šperk vydrží nápor každodenního nošení po desetiletí.
                  </p>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-amber-600/20 flex items-center justify-center text-amber-500 mr-4 mt-1 flex-shrink-0">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-300">
                    <span className="text-amber-500 font-semibold">Symbolika</span> - Po staletí diamanty symbolizují lásku, oddanost a věčnost, což z nich dělá perfektní volbu pro významné životní momenty.
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

export default DiamondPage;