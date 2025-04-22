// app/components/prilezitosti.tsx
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
      bg-yellow-500 text-[#FCFAEE]-900
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
      bg-yellow-500 text-[#FCFAEE]-900
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

// Šperky pro každou příležitost
const occasions = [
  {
    id: 1,
    title: "Narození děťátka",
    image: "/imgs/narozeni 2.jpg",
    desc: "Oslavte příchod nového života něčím nezapomenutelným.",
  },
  {
    id: 2,
    title: "Křest",
    image: "/imgs/occasions/christening.jpg",
    desc: "Jemné a elegantní šperky vhodné k této slavnostní události.",
  },
  {
    id: 3,
    title: "Narozeniny a svátky",
    image: "/imgs/promoce.jpg",
    desc: "Darujte radost – každý kousek je připraven oslavit váš den.",
  },
  {
    id: 4,
    title: "Promoce",
    image: "/imgs/soupravky 2.jpg",
    desc: "Perla úspěchu – šperky jako symbol dosaženého cíle.",
  },
  {
    id: 5,
    title: "Svatební šperky",
    image: "/imgs/svatebni sperky.jpg",
    desc: "Věčné ano si zaslouží šperk, který zůstane navždy.",
  },
];

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

const OccasionsSection: React.FC = () => (
  <section id="prilezitosti" className="py-16 bg-[#111111] important!-900">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center text-yellow-500 mb-10">
        Šperky pro každou příležitost
      </h2>
      <Slider {...sliderSettings}>
        {occasions.map(({ id, title, image, desc }) => (
          <div key={id} className="px-4">
            <div className="
                bg-[#FCFAEE]-900 border border-yellow-500
                rounded-lg overflow-hidden gray-lg
                hover:gray-2xl transition-gray
              ">
              <div className="relative h-56">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30" />
              </div>
              <div className="p-4">
                <h3 className="text-2xl font-bold text-yellow-500 mb-2">
                  {title}
                </h3>
                <p className="text--300 text-sm">{desc}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  </section>
);

export default OccasionsSection;
