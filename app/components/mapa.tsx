// app/components/MapSection.tsx
"use client";

import React from "react";

const MapSection: React.FC = () => {
  return (
    <section id="mapa" className="py-16 bg-[#111111] important!-900">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-start gap-8">
        {/* Google Maps iframe */}
        <div className="w-full lg:w-1/2 h-64 lg:h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2592.5339258717217!2d17.968575676853042!3d49.47442055715735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471390e09da2efa5%3A0xd55512f4aa500989!2zS8WZacW-bsOhIDMzLzQsIDc1NyAwMSBWYWxhxaFza8OpIE1lemnFmcOtxI3DrSAxLUtyw6Fzbm8gbmFkIEJlxI12b3U!5e0!3m2!1scs!2scz!4v1744906476163!5m2!1scs!2scz"  
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            className="rounded-lg border-0 shadow-lg"
          ></iframe>
        </div>

        {/* Foto prodejny */}
        <div className="w-full lg:w-1/2 h-64 lg:h-96 bg-rgb(253 255 222) important!-800 rounded-lg overflow-hidden shadow-lg">
          <img
            src="/imgs/prodejna.jpg"
            alt="Foto naší prodejny"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default MapSection;
