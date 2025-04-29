"use client";

import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

interface ArrowProps {
  onClick?: () => void;
}

const NextArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <button
    aria-label="Další"
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
      bg-amber-600 text-white
      p-3 rounded-full
      hover:bg-amber-700
      transition-all
      shadow-lg
      z-10
      opacity-90 hover:opacity-100
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
  { 
    id: 1, 
    title: "Diamantové šperky", 
    image: "/imgs/diamond2.jpg",
    description: "Ručně vyráběné šperky z nejkvalitnějších diamantů.",
    price: "",
    link: "/produkty/diamant"
  },
  { 
    id: 2, 
    title: "Přírodní perly", 
    image: "/imgs/perly4.jpg",
    description: "Elegantní perlové šperky z kvalitních přírodních perel.",
    price: "",
    link: "/produkty/perly",
  },
  { 
    id: 3, 
    title: "Přírodní kameny", 
    image: "/imgs/ametyst1.jpg",
    description: "Jedinečné šperky z vzácných přírodních kamenů.",
    price: "",
    link: "/přírodní-kameny"
  },
  { 
    id: 4, 
    title: "Snubní prsteny", 
    image: "/imgs/snubniprsteny1.jpg",
    description: "Dokonalé prsteny pro váš velký den a celý společný život.",
    price: "",
    link: "/zasnubni-snubni-prsteny"
  },
  { 
    id: 5, 
    title: "Prsteny", 
    image: "/imgs/prsten4.jpg",
    description: "Luxusní prsteny pro každou příležitost.",
    price: "",
    link: "/prsteny"
  },
   { 
    id: 5, 
    title: "Zásnubní prsteny", 
    image: "/imgs/prsten3.jpg",
    description: "Luxusní prsteny pro každou příležitost.",
    price: "",
    link: "/prsteny"
  },
  { 
    id: 6, 
    title: "Náramky", 
    image: "/imgs/naramek1.jpg",
    description: "Elegantní náramky z pravého zlata a stříbra.",
    price: "",
    link: "/naramky"
  },
  { 
    id: 7, 
    title: "Přívěsky", 
    image: "/imgs/privesky3.jpg",
    description: "Originální přívěsky pro každou osobnost.",
    price: "",
    link: "/privesky"
  },
  { 
    id: 8, 
    title: "Dětské náušnice", 
    image: "/imgs/detske nausnice 2.jpg",
    description: "Jemné náušnice vhodné i pro nejmenší.",
    price: "",
    link: "/produkty/detskenausnice"
  },
  { 
    id: 9, 
    title: "Náhrdelníky", 
    image: "/imgs/nahrdelniky.jpg",
    description: "Působivé náhrdelníky z pravého zlata a drahých kamenů.",
    price: "",
    link: "/nahrdelníky"
  },
  { 
    id: 10, 
    title: "Soupravky", 
    image: "/imgs/soupravky3.jpg",
    description: "Kompletní sady šperků pro dokonalý outfit.",
    price: "",
    link: "/soupravky"
  },
];

// Nastavení slideru
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
    { breakpoint: 640, settings: { slidesToShow: 1 } },
  ],
};

const LandingPage: React.FC = () => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  return (
    <div className="bg-neutral-900 text-gray-200">
      <main className="flex-grow">
        {/* uvod3 sekce */}
        <section
          className="relative bg-cover bg-center text-white py-32 md:py-40"
          style={{ backgroundImage: "url('/imgs/uvod3.jpg')" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50" />
          <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
            <div className="inline-block p-1 border-2 border-amber-500 rounded-lg mb-6">
              <span className="text-amber-400 text-lg font-light tracking-widest">zlatnictví Perla</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-yellow-500 drop-shadow-lg">
              Objevte luxus a eleganci
            </h1>
            <p className="mt-6 text-lg md:text-2xl max-w-3xl mx-auto font-light">
              Exkluzivní šperky pro jedinečné okamžiky, které budou ozdobou vašeho života.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#kolekce"
                className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-8 rounded-md shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                Prohlédnout kolekci
              </a>
              <Link
                href="/kontakt"
                className="inline-block bg-transparent border-2 border-white hover:border-amber-400 text-white hover:text-amber-400 font-medium py-3 px-8 rounded-md shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                Navštívit prodejnu
              </Link>
            </div>
          </div>
        </section>

        {/* Slider sekce s přesměrováním - s upravenou výškou karet */}
        <section id="kolekce" className="py-20 bg-gradient-to-b from-neutral-900 to-neutral-800">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-amber-500 text-sm font-semibold tracking-wider uppercase">Naše nabídka</span>
              <h2 className="text-4xl font-bold text-white mt-2 mb-4">
                Exkluzivní <span className="text-amber-500">kolekce</span>
              </h2>
              <div className="h-1 w-24 bg-amber-500 mx-auto rounded"></div>
              <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
                Vyberte si z našich pečlivě sestavených kolekcí, které kombinují tradiční řemeslné zpracování 
                s moderním designem a nejvyšší kvalitou materiálů.
              </p>
            </div>
            
            <div className="slider-container">
              <Slider {...sliderSettings} className="product-slider equal-height-slides">
                {products.map((product) => (
                  <div key={product.id} className="px-4 pb-10 h-full">
                    <Link 
                      href={product.link} 
                      className="block h-full"
                      onMouseEnter={() => setHoveredProduct(product.id)}
                      onMouseLeave={() => setHoveredProduct(null)}
                    >
                      <div className="
                        bg-neutral-800 
                        rounded-lg overflow-hidden 
                        shadow-lg
                        group
                        h-full
                        border border-neutral-700
                        hover:border-amber-500
                        transition-all duration-300
                        transform hover:-translate-y-2
                        flex flex-col
                      ">
                        <div className="relative overflow-hidden h-64">
                          <img
                            src={product.image}
                            alt={product.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-40"></div>
                          <div className={`
                            absolute inset-0 bg-amber-600 bg-opacity-30
                            flex items-center justify-center
                            transition-opacity duration-300
                            ${hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'}
                          `}>
                            <span className="bg-amber-600 text-white px-6 py-3 rounded-full font-semibold transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                              Zobrazit detail
                            </span>
                          </div>
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="text-xl font-bold text-amber-500 group-hover:text-amber-400 transition-colors line-clamp-1">
                              {product.title}
                            </h3>
                            <span className="text-sm font-medium text-amber-400 bg-amber-900 bg-opacity-40 px-3 py-1 rounded-full whitespace-nowrap ml-2">
                              {product.price}
                            </span>
                          </div>
                          <p className="mt-2 text-gray-400 group-hover:text-gray-300 transition-colors line-clamp-3 flex-grow">
                            {product.description}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </Slider>
            </div>
            
            <div className="text-center mt-12">
              <Link
                href="/produkty"
                className="inline-flex items-center text-amber-500 hover:text-amber-400 font-semibold group"
              >
                <span>Zobrazit všechny produkty</span>
                <svg 
                  className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" 
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
          </div>
        </section>

        {/* Přidaná sekce pro důvěryhodnost */}
        <section className="py-16 bg-neutral-900">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-lg border border-neutral-800 bg-neutral-800 hover:border-amber-500 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-600 bg-opacity-20 text-amber-500 mb-4">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Prémiová kvalita</h3>
                <p className="text-gray-400">Pouze certifikované materiály nejvyšší jakosti a precizní řemeslné zpracování.</p>
              </div>
              
              <div className="text-center p-6 rounded-lg border border-neutral-800 bg-neutral-800 hover:border-amber-500 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-600 bg-opacity-20 text-amber-500 mb-4">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">O nás</h3>
                <p className="text-gray-400">Tradice předávaná z generace na generaci již od roku 2000</p>
              </div>
              
              <div className="text-center p-6 rounded-lg border border-neutral-800 bg-neutral-800 hover:border-amber-500 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-600 bg-opacity-20 text-amber-500 mb-4">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2"></h3>
                <p className="text-gray-400">.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <style jsx global>{`
        .product-slider .slick-dots {
          bottom: -40px;
        }
        
        .product-slider .slick-dots li button:before {
          color: #d97706;
          opacity: 0.5;
          font-size: 10px;
        }
        
        .product-slider .slick-dots li.slick-active button:before {
          color: #d97706;
          opacity: 1;
        }
        
        .slider-container {
          margin-left: -16px;
          margin-right: -16px;
          padding: 10px;
        }
        
        /* Zajištění stejné výšky slidů */
        .equal-height-slides .slick-track {
          display: flex !important;
        }
        
        .equal-height-slides .slick-slide {
          height: inherit !important;
          display: flex !important;
        }
        
        .equal-height-slides .slick-slide > div {
          display: flex;
          height: 100%;
          width: 100%;
        }
        
        /* Oříznutí příliš dlouhého textu */
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default LandingPage;