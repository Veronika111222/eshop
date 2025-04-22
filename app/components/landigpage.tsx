// app/components/landigpage.tsx
"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ArrowProps {
  onClick?: () => void;
}

const NextArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <button
    aria-label="Další"
    className="
      absolute top-1/2 right-4
      transform -translate-y-1/2
      bg-yellow-500 text-gray-900
      p-2 rounded-full
      hover:bg-yellow-600
      transition-colors
      z-10
    "
    onClick={onClick}
  >
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path d="M10.293 15.707a1 1 0 010-1.414L13.586 11H3a1 1 0 110-2h10.586l-3.293-3.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" />
    </svg>
  </button>
);

const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <button
    aria-label="Předchozí"
    className="
      absolute top-1/2 left-4
      transform -translate-y-1/2
      bg-yellow-500 text-gray-900
      p-2 rounded-full
      hover:bg-yellow-600
      transition-colors
      z-10
    "
    onClick={onClick}
  >
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.707 4.293a1 1 0 000 1.414L12.586 9H3a1 1 0 100 2h9.586l-2.879 2.879a1 1 0 001.414 1.414l5-5a1 1 0 000-1.414l-5-5a1 1 0 00-1.414 0z" />
    </svg>
  </button>
);

// Data produktů pro slider
const products = [
  { id: 1, title: "Diamantové šperky", image: "/imgs/diamanty.jpg" },
  { id: 2, title: "Přírodní perly", image: "/imgs/perly.jpg" },
  { id: 3, title: "Přírodní kameny", image: "/imgs/prirodni kameny 2.jpg" },
  { id: 4, title: "Zásnubní a Snubní prsteny", image: "/imgs/snubni prsteny 4.jpg" },
  { id: 5, title: "Prsteny", image: "/imgs/prsten.jpg" },
  { id: 6, title: "Náramky", image: "/imgs/naramky.jpg" },
  { id: 7, title: "Přívěsky", image: "/imgs/privesky.jpg" },
  { id: 8, title: "Dětské náušnice", image: "/imgs/detske nausnice 2.jpg" },
  { id: 9, title: "Náhrdelníky", image: "/imgs/nahrdelniky.jpg" },
  { id: 10, title: "Soupravky", image: "/imgs/soupravky.jpg" },
];

// Nastavení slideru
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
    { breakpoint: 640, settings: { slidesToShow: 1 } },
  ],
};

const LandingPage: React.FC = () => {
  return (
    <div className="">
      <main className="flex-grow">
        {/* Hero sekce */}
        <section
          className="relative bg-cover bg-center text-white py-20"
          style={{ backgroundImage: "url('/imgs/hero.jpg')" }}
        >
          <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold text-yellow-500 drop-shadow-lg">
              Objevte luxus a eleganci
            </h1>
            <p className="mt-4 text-lg md:text-2xl">
              Exkluzivní šperky pro jedinečné okamžiky.
            </p>
            <div className="mt-8">
              <a
                href="#kolekce"
                className="inline-block bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold py-3 px-6 rounded-md shadow"
              >
                Prohlédnout kolekci
              </a>
            </div>
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-40" />
        </section>

        {/* Slider sekce */}
        <section id="kolekce" className="py-16 bg-[#111111] important!-800">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-yellow-500 mb-8">
              Naše Kolekce
            </h2>
            <Slider {...sliderSettings}>
              {products.map((product) => (
                <div key={product.id} className="px-4">
                  <div className="
                    bg-white-900 border border-yellow-500
                    rounded-lg overflow-hidden shadow-lg
                    hover:shadow-2xl transition-shadow
                  ">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-2xl font-bold text-yellow-500">
                        {product.title}
                      </h3>
                      <p className="mt-2 text-gray-300">
                        Luxusní design s jedinečným vzhledem.
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LandingPage;
