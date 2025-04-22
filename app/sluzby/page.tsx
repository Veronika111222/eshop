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
    className="absolute top-1/2 -right-4 -translate-y-1/2 bg-yellow-500 text-gray-900 p-2 rounded-full hover:bg-yellow-600 transition z-10"
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
    className="absolute top-1/2 -left-4 -translate-y-1/2 bg-yellow-500 text-gray-900 p-2 rounded-full hover:bg-yellow-600 transition z-10"
  >
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.707 4.293a1 1 0 000 1.414L12.586 9H3a1 1 0 100 2h9.586l-2.879 2.879a1 1 0 001.414 1.414l5-5a1 1 0 000-1.414l-5-5a1 1 0 00-1.414 0z" />
    </svg>
  </button>
);

/* --------------------------  DATA SLUŽEB  -------------------------- */
const services = [
  { id: 1, title: "Ruční výroba šperků",          img: "/imgs/services/vyroba.jpg" },
  { id: 2, title: "Výměna baterií v hodinkách",   img: "/imgs/services/baterie.jpg" },
  { id: 3, title: "Výkup zlata a stříbra",        img: "/imgs/services/vykup.jpg" },
  { id: 4, title: "Dárkové poukazy",              img: "/imgs/services/poukaz.jpg" },
  { id: 5, title: "Profesionální opravy šperků",  img: "/imgs/services/opravy.jpg" },
  { id: 6, title: "Nastřelování náušnic",         img: "/imgs/services/nastrel.jpg" },
];

/* --------------------------  NASTAVENÍ SLIDERU  -------------------------- */
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 640,  settings: { slidesToShow: 1 } },
  ],
};

/* ======================================================================= */
export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-gray-300">
      <Navbar />

      {/* HERO OBRÁZEK */}
      <section className="relative w-full h-[45vh] sm:h-[55vh]">
        <Image
          src="/imgs/services-hero.jpg"
          alt="Naše služby"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <h1 className="absolute inset-x-0 bottom-6 text-center text-4xl sm:text-5xl font-bold text-yellow-500 drop-shadow-lg">
          Naše služby
        </h1>
      </section>

      {/* SLIDER SLUŽEB */}
      <section className="py-16 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-yellow-500 mb-8">
            Luxusní péče o Váš šperk
          </h2>

          <Slider {...sliderSettings}>
            {services.map(({ id, title, img }) => (
              <div key={id} className="px-4">
                <div className="
                  bg-gray-900 border border-yellow-500 rounded-lg overflow-hidden shadow-lg
                  hover:shadow-2xl transition-shadow
                ">
                  <Image
                    src={img}
                    alt={title}
                    width={400}
                    height={260}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4 text-center">
                    <h3 className="text-xl font-semibold text-yellow-500">{title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* TEXTOVÝ BLOK */}
      <section className="max-w-3xl mx-auto w-full px-4 pb-16 text-center space-y-6">
        <p className="text-lg sm:text-xl leading-relaxed">
          V Zlatnictví Perla věříme, že každý šperk si zaslouží péči, která podtrhne jeho
          jedinečnost. Proto nabízíme kompletní servis – od ruční výroby
          originálních klenotů, přes precizní opravy a revitalizaci rodinných
          pokladů, až po výkup zlata a stříbra za férové ceny. Vaše hodinky znovu
          ožijí díky rychlé výměně baterií, a chcete‑li obdarovat své blízké,
          připravíme elegantní dárkový poukaz, který nikdy nezklame.
        </p>
        <p className="text-lg sm:text-xl leading-relaxed">
          Každý krok provádíme s důrazem na detail, zkušeností
          zlatnických mistrů a respektem k tradicím. Přijďte se přesvědčit – vaše
          spokojenost je pro nás tou nejcennější odměnou.
        </p>
      </section>

      <Footer />
    </div>
  );
}
