"use client";

import React from "react";
import Link from "next/link";
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

// Šperky pro každou příležitost
const occasions = [
  {
    id: 1,
    title: "Narození děťátka",
    image: "/imgs/narozeni 2.jpg",
    desc: "Oslavte příchod nového života něčím nezapomenutelným.",
    link: "/prilezitosti/narozeni-detatka"
  },
  {
    id: 2,
    title: "Křtiny",
    image: "/imgs/krtiny.jpg",
    desc: "Jemné a elegantní šperky vhodné k této slavnostní události.",
    link: "/prilezitosti/krtiny"
  },
  {
    id: 3,
    title: "Narozeniny a svátky",
    image: "/imgs/safir.jpg",
    desc: "Darujte radost – každý kousek je připraven oslavit váš den.",
    link: "/prilezitosti/narozeniny-svatky"
  },
  {
    id: 4,
    title: "Promoce",
    image: "/imgs/soupravky 2.jpg",
    desc: "Perla úspěchu – šperky jako symbol dosaženého cíle.",
    link: "/prilezitosti/promoce"
  },
  {
    id: 5,
    title: "Svatební šperky",
    image: "/imgs/diamond.jpg",
    desc: "Věčné ano si zaslouží šperk, který zůstane navždy.",
    link: "/prilezitosti/svatebni-sperky"
  },
];

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

const OccasionsSection: React.FC = () => (
  <section id="prilezitosti" className="py-20 bg-gradient-to-b from-neutral-900 to-neutral-800 relative overflow-hidden">
    {/* Dekorativní prvky */}
    <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-amber-600 opacity-5 blur-3xl"></div>
    <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-amber-400 opacity-5 blur-3xl"></div>
    
    <div className="max-w-7xl mx-auto px-4">
      {/* Nadpis sekce */}
      <div className="text-center mb-16">
        <span className="text-amber-500 text-sm font-semibold tracking-wider uppercase">Pro každou událost</span>
        <h2 className="text-4xl font-bold text-white mt-2 mb-4">
          Šperky pro každou <span className="text-amber-500">příležitost</span>
        </h2>
        <div className="h-1 w-24 bg-amber-500 mx-auto rounded"></div>
        <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
          Životní momenty si zaslouží být připomínány něčím výjimečným. Objevte naši nabídku 
          šperků vhodných pro všechny důležité příležitosti.
        </p>
      </div>
      
      {/* Slider s příležitostmi */}
      <div className="slider-container">
        <Slider {...sliderSettings} className="occasions-slider equal-height-slides">
          {occasions.map(({ id, title, image, desc, link }) => (
            <div key={id} className="px-4 pb-10 h-full">
              <Link href={link} className="block h-full">
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
                    {/* Fixní výška obrázku */}
                    <div className="h-64 w-full overflow-hidden">
                      <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-60"></div>
                    <div className="absolute top-4 left-4">
                      <div className="bg-amber-600 text-white text-xs uppercase font-semibold py-1 px-3 rounded-full">
                        Příležitost
                      </div>
                    </div>
                  </div>
                  {/* Fixní výška textového obsahu */}
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold text-amber-500 group-hover:text-amber-400 transition-colors mb-3 min-h-[2rem]">
                      {title}
                    </h3>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors text-sm min-h-[4rem] flex-grow">
                      {desc}
                    </p>
                    <div className="mt-4 pt-4 border-t border-neutral-700">
                      <span className="inline-flex items-center text-amber-500 text-sm font-medium group-hover:text-amber-400">
                        Zobrazit kolekci
                        <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
      
      {/* CTA pod sliderem */}
      <div className="text-center mt-12">
        <Link
          href="/prilezitosti"
          className="inline-flex items-center px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-md transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          <span className="font-medium">Všechny příležitosti</span>
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
    </div>
    
    <style jsx global>{`
      .occasions-slider .slick-dots {
        bottom: -30px;
      }
      
      .occasions-slider .slick-dots li button:before {
        color: #d97706;
        opacity: 0.5;
        font-size: 10px;
      }
      
      .occasions-slider .slick-dots li.slick-active button:before {
        color: #d97706;
        opacity: 1;
      }
      
      .slider-container {
        margin-left: -16px;
        margin-right: -16px;
        padding: 10px;
      }
      
      /* Zajištění stejné výšky karet */
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
    `}</style>
  </section>
);

export default OccasionsSection;