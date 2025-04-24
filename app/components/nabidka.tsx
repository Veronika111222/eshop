"use client";

import React, { useRef, useEffect, useState } from "react";

// Definice dat služeb
const testimonials = [
  {
    quote:
      "Provádíme výměnu baterií u hodinek na počkání nebo do druhého dne.",
    name: "Výměna bateríí",
    title: "Cena 95Kč",
  },
  {
    quote:
      "Nabízíme výkup zlata a stříbra. Aktuální cena výkupu na dotaz v prodejně nebo telefonicky.",
    name: "Výkup zlata a stříbra",
    title: "",
  },
  {
    quote: "Nabízíme dárkové poukazy, které si obdarovaní mohou vyměnit za šperky dle vlastního výběru.",
    name: "Dárkové poukazy",
    title: "",
  },
  {
    quote:
      "Naši zkušení zlatníci opraví Vaše šperky, upraví vellikost prstenů a obnoví jejich lesk díky profesionální renovaci.",
    name: "Opravy a čištění šperků",
    title: "Letování zlatých šperků cena: 220Kč",
  },
  {
    quote:
      "Rádi Vám vyrobíme šperky na míru, které dokonale odpovídají Vašim představám.",
    name: "Šperky na míru",
    title: "",
  },
  {
    quote:
      "Profesionální nastřelení náušnic se sterilními nástroji a možností výběru prvních náušnic.",
    name: "Nastřelení náušnic",
    title: "Cena jedné nastřelené naušnice: 200Kč",
  },
];

// Ikony pro služby
const serviceIcons = {
  "Výměna bateríí": (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  "Výkup zlata a stříbra": (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  "Dárkové poukazy": (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
    </svg>
  ),
  "Opravy a čištění šperků": (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    </svg>
  ),
  "Šperky na míru": (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  ),
  "Nastřelení náušnic": (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
    </svg>
  )
};

const Cards = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (!scrollerRef.current) return;
    
    // Duplikujeme karty pro nekonečný efekt
    const scrollerContent = Array.from(scrollerRef.current.children);
    scrollerContent.forEach(item => {
      const duplicatedItem = item.cloneNode(true);
      scrollerRef.current?.appendChild(duplicatedItem);
    });
  }, []);

  return (
    <div className="py-16 bg-gradient-to-b from-neutral-900 to-neutral-800 w-full overflow-hidden">
      {/* Nadpis sekce */}
      <div className="max-w-7xl mx-auto px-4 mb-12 text-center">
        <span className="text-amber-500 text-sm font-semibold tracking-wider uppercase">Profesionální služby</span>
        <h2 className="text-4xl font-bold text-white mt-2 mb-4">
          Naše <span className="text-amber-500">služby</span> zlatnictví
        </h2>
        <div className="h-1 w-24 bg-amber-500 mx-auto rounded"></div>
        <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
          Nabízíme široké spektrum profesionálních služeb v oblasti zlatnictví, oprav a úprav šperků.
        </p>
      </div>

      {/* Pohyblivé karty - v kontejneru s pevnou šířkou */}
      <div 
        ref={containerRef} 
        className="relative max-w-7xl mx-auto overflow-hidden mask-edges px-4"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div 
          ref={scrollerRef}
          className="scroller flex gap-6 py-4"
          style={{
            animationPlayState: isHovering ? 'paused' : 'running',
          }}
        >
          {testimonials.map((service, idx) => (
            <div
              key={idx}
              className="card-container min-w-[280px] sm:min-w-[320px] max-w-[320px] relative rounded-xl border border-amber-500/20 bg-neutral-800 flex flex-col group hover:border-amber-500 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/10 overflow-hidden flex-shrink-0 h-[420px]"
            >
              {/* Dekorativní horní lišta */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-600 to-amber-400"></div>
              
              {/* Horní část karty s ikonou a názvem */}
              <div className="py-5 px-6 border-b border-amber-500/10 flex items-center gap-4 h-[80px]">
                <div className="w-10 h-10 rounded-lg bg-amber-600/20 flex items-center justify-center text-amber-500">
                  {serviceIcons[service.name as keyof typeof serviceIcons] || (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  )}
                </div>
                <h3 className="text-lg font-bold text-amber-500 group-hover:text-amber-400 transition-colors line-clamp-2">
                  {service.name}
                </h3>
              </div>
              
              {/* Obsahová část karty */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <p className="text-gray-300 text-base leading-relaxed mb-4 line-clamp-5">{service.quote}</p>
                
                <div>
                  {service.title && (
                    <div className="mt-4 py-2 px-4 bg-amber-600/10 rounded-md inline-block">
                      <p className="text-amber-400 text-sm font-medium">{service.title}</p>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Tlačítko pro více informací */}
              <div className="px-6 pb-6">
                <a 
                  href={`/sluzby/${service.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-sm text-amber-500 hover:text-amber-400 font-medium flex items-center gap-1 transition-colors"
                >
                  <span>Více informací</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
              
              {/* Efekt zvýraznění při hoveru */}
              <div className="absolute -bottom-1 left-0 right-0 h-1 bg-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA tlačítko pod kartami */}
      <div className="mt-12 text-center">
        <a
          href="/sluzby"
          className="inline-flex items-center px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-md transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          <span className="font-medium">Všechny naše služby</span>
          <svg 
            className="w-5 h-5 ml-2" 
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path 
              fillRule="evenodd" 
              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>

      {/* CSS styly pro animaci - s použitím overflow-hidden na kontejneru */}
      <style jsx>{`
        .mask-edges {
          mask-image: linear-gradient(90deg, transparent, white 10%, white 90%, transparent);
          -webkit-mask-image: linear-gradient(90deg, transparent, white 10%, white 90%, transparent);
        }
        
        .scroller {
          animation: scroll 40s linear infinite;
          width: fit-content;
        }
        
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-50%));
          }
        }
        
        /* Oříznutí textu */
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-5 {
          display: -webkit-box;
          -webkit-line-clamp: 5;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Cards;