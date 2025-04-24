/*  app/sluzby/page.tsx  */
"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/* --------------------------  SLIDER ŠIPKY  -------------------------- */
interface ArrowProps { onClick?: () => void; }

const NextArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <button
    aria-label="Další"
    onClick={onClick}
    className="
      absolute top-1/2 right-4
      transform -translate-y-1/2
      bg-amber-600 text-white
      p-3 rounded-full
      hover:bg-amber-700
      transition-all
      shadow-lg
      z-10
      opacity-90 hover:opacity-100
    "
  >
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path d="M10.293 15.707a1 1 0 010-1.414L13.586 11H3a1 1 0 110-2h10.586l-3.293-3.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" />
    </svg>
  </button>
);

const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <button
    aria-label="Předchozí"
    onClick={onClick}
    className="
      absolute top-1/2 left-4
      transform -translate-y-1/2
      bg-amber-600 text-white
      p-3 rounded-full
      hover:bg-amber-700
      transition-all
      shadow-lg
      z-10
      opacity-90 hover:opacity-100
    "
  >
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.707 4.293a1 1 0 000 1.414L12.586 9H3a1 1 0 100 2h9.586l-2.879 2.879a1 1 0 001.414 1.414l5-5a1 1 0 000-1.414l-5-5a1 1 0 00-1.414 0z" />
    </svg>
  </button>
);

/* --------------------------  DATA SLUŽEB  -------------------------- */
const services = [
  { id: 1, title: "Ruční výroba šperků",          img: "/imgs/vyroba.jpg" },
  { id: 2, title: "Výměna baterií v hodinkách",   img: "/imgs/baterie1.jpg" },
  { id: 3, title: "Výkup zlata a stříbra",        img: "/imgs/vykup.jpg" },
  { id: 4, title: "Dárkové poukazy",              img: "/imgs/poukazy.jpg" },
  { id: 5, title: "Profesionální opravy šperků",  img: "/imgs/opravy.jpg" },
  { id: 6, title: "Nastřelování náušnic",         img: "/imgs/nastrelovani1.jpg" },
];

/* --------------------------  NASTAVENÍ SLIDERU  -------------------------- */
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  pauseOnHover: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    { breakpoint: 1280, settings: { slidesToShow: 3 } },
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 640,  settings: { slidesToShow: 1 } },
  ],
};

/* ======================================================================= */
export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-900 text-gray-300">
      <Navbar />

      {/* HERO OBRÁZEK */}
      <section className="relative w-full h-[55vh] md:h-[65vh] overflow-hidden">
        {/* Hlavní obrázek */}
        <div className="absolute inset-0 transform scale-105 transition-transform duration-10000 hover:scale-100">
          <Image
            src="/imgs/uvod5.jpg"
            alt="Naše služby"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        {/* Překryvy pro zlepšení čitelnosti a efektu */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/70" />
        
        {/* Tenká zlatá linka v horní části */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-700 via-amber-500 to-amber-700"></div>
        
        {/* Obsah hero sekce */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
          <div className="space-y-6 text-center max-w-4xl">
            <div className="inline-block p-1 border-2 border-amber-500 rounded-lg mb-2">
              <span className="text-amber-400 text-sm font-light tracking-widest uppercase">Profesionální služby</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-2">
              <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                Naše služby
              </span>
            </h1>
            
            <div className="h-1 w-32 bg-amber-500 mx-auto rounded"></div>
            
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto drop-shadow-lg">
              Profesionální péče o vaše nejcennější šperky a drahé kovy
            </p>
          </div>
        </div>
      </section>

      {/* SLIDER SLUŽEB */}
      <section className="py-20 bg-gradient-to-b from-neutral-900 to-neutral-800 relative">
        {/* Dekorativní prvky */}
        <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-amber-600 opacity-5 blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-amber-400 opacity-5 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4">
          {/* Nadpis sekce */}
          <div className="text-center mb-16">
            <span className="text-amber-500 text-sm font-semibold tracking-wider uppercase">Naše odbornost</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
              Luxusní péče o <span className="text-amber-500">Váš šperk</span>
            </h2>
            <div className="h-1 w-24 bg-amber-500 mx-auto rounded"></div>
            <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
              Nabízíme široké spektrum profesionálních služeb v oblasti zlatnictví, oprav a úprav šperků.
            </p>
          </div>
          
          {/* Slider služeb */}
          <div className="slider-container">
            <Slider {...sliderSettings} className="services-slider">
              {services.map(({ id, title, img }) => (
                <div key={id} className="px-4 pb-10">
                  <div className="
                    bg-neutral-800 
                    rounded-lg overflow-hidden 
                    shadow-lg
                    group
                    border border-neutral-700
                    hover:border-amber-500
                    transition-all duration-300
                    transform hover:-translate-y-2
                    h-full
                    flex flex-col
                  ">
                    <div className="relative overflow-hidden">
                      <div className="h-64 overflow-hidden">
                        <Image
                          src={img}
                          alt={title}
                          width={400}
                          height={260}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-60"></div>
                    </div>
                    <div className="p-6 flex-grow flex flex-col items-center justify-center text-center">
                      <h3 className="text-xl font-bold text-amber-500 group-hover:text-amber-400 transition-colors">
                        {title}
                      </h3>
                      <div className="mt-4 w-12 h-0.5 bg-amber-600/30 group-hover:bg-amber-500 transition-colors"></div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      {/* TEXTOVÝ BLOK S DEKORATIVNÍMI PRVKY */}
      <section className="py-20 bg-neutral-900 relative">
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 h-64 w-1 bg-gradient-to-b from-transparent via-amber-600/30 to-transparent"></div>
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 h-64 w-1 bg-gradient-to-b from-transparent via-amber-600/30 to-transparent"></div>
        
        <div className="max-w-3xl mx-auto w-full px-6 relative">
          {/* Dekorativní uvozovky */}
          <div className="absolute -top-10 -left-4 text-amber-600/20 text-9xl font-serif">&quot;</div>
          <div className="absolute -bottom-32 -right-4 text-amber-600/20 text-9xl font-serif transform rotate-180">&quot;</div>
          
          <div className="bg-neutral-800/30 rounded-xl p-10 border border-neutral-700 shadow-xl relative z-10">
            <div className="text-center space-y-8">
              <p className="text-lg sm:text-xl leading-relaxed text-gray-300">
                V Zlatnictví Perla věříme, že každý šperk si zaslouží péči, která podtrhne jeho
                jedinečnost. Proto nabízíme kompletní servis – od ruční výroby
                originálních klenotů, přes precizní opravy a revitalizaci rodinných
                pokladů, až po výkup zlata a stříbra za férové ceny. Vaše hodinky znovu
                ožijí díky rychlé výměně baterií, a chcete‑li obdarovat své blízké,
                připravíme elegantní dárkový poukaz, který nikdy nezklame.
              </p>
              <div className="h-0.5 w-24 bg-amber-600 mx-auto"></div>
              <p className="text-lg sm:text-xl leading-relaxed text-gray-300">
                Každý krok provádíme s důrazem na detail, zkušeností
                zlatnických mistrů a respektem k tradicím. Přijďte se přesvědčit – vaše
                spokojenost je pro nás tou nejcennější odměnou.
              </p>
            </div>
            
            {/* Podpis nebo emblém */}
            <div className="mt-8 flex justify-center">
              <div className="text-amber-500 font-serif italic text-xl">Zlatnictví Perla</div>
            </div>
          </div>
        </div>
        
        {/* CTA tlačítko pod textem */}
        <div className="text-center mt-16">
          <Link
            href="/kontakt"
            className="inline-flex items-center px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-md transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <span className="font-medium">Kontaktujte nás</span>
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
          </Link>
        </div>
      </section>

      <Footer />
      
      <style jsx global>{`
        .services-slider .slick-dots {
          bottom: -30px;
        }
        
        .services-slider .slick-dots li button:before {
          color: #d97706;
          opacity: 0.5;
          font-size: 10px;
        }
        
        .services-slider .slick-dots li.slick-active button:before {
          color: #d97706;
          opacity: 1;
        }
        
        .slider-container {
          margin-left: -16px;
          margin-right: -16px;
          padding: 10px;
        }
      `}</style>
    </div>
  );
}