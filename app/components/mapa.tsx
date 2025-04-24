"use client";

import React from "react";

const MapSection: React.FC = () => {
  return (
    <section id="mapa" className="py-20 bg-gradient-to-b from-neutral-900 to-neutral-800 relative overflow-hidden">
      {/* Dekorativní prvky */}
      <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-amber-600 opacity-5 blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-amber-400 opacity-5 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4">
        {/* Nadpis sekce */}
        <div className="text-center mb-16">
          <span className="text-amber-500 text-sm font-semibold tracking-wider uppercase">Navštivte nás</span>
          <h2 className="text-4xl font-bold text-white mt-2 mb-4">
            Kde nás <span className="text-amber-500">najdete</span>
          </h2>
          <div className="h-1 w-24 bg-amber-500 mx-auto rounded"></div>
          <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
            Těšíme se na vaši návštěvu v naší prodejně, kde vám nabídneme profesionální služby a široký výběr šperků.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-stretch gap-8 mb-12 relative z-10">
          {/* Google Maps iframe */}
          <div className="w-full lg:w-1/2 rounded-xl overflow-hidden shadow-2xl transition-transform duration-500 hover:shadow-amber-600/10 group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-400 opacity-50 rounded-xl transform -translate-y-1 -translate-x-1 -z-10 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></div>
            <div className="h-96 border border-neutral-700 rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2592.5339258717217!2d17.968575676853042!3d49.47442055715735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471390e09da2efa5%3A0xd55512f4aa500989!2zS8WZacW-bsOhIDMzLzQsIDc1NyAwMSBWYWxhxaFza8OpIE1lemnFmcOtxI3DrSAxLUtyw6Fzbm8gbmFkIEJlxI12b3U!5e0!3m2!1scs!2scz!4v1744906476163!5m2!1scs!2scz"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                className="rounded-xl border-0"
              ></iframe>
            </div>
          </div>
          
          {/* Foto prodejny */}
          <div className="w-full lg:w-1/2 rounded-xl overflow-hidden shadow-2xl transition-transform duration-500 hover:shadow-amber-600/10 group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-400 opacity-50 rounded-xl transform translate-y-1 translate-x-1 -z-10 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></div>
            <div className="relative h-96 border border-neutral-700 rounded-xl overflow-hidden">
              <img
                src="/imgs/prodejna1.jpg"
                alt="Foto naší prodejny"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="inline-block py-1 px-3 bg-amber-600 rounded-full text-white text-xs font-semibold mb-3">
                  ZLATNICTVÍ PERLA
                </div>
                <h3 className="text-white text-xl font-bold mb-2 drop-shadow-lg">Naše prodejna</h3>
                <p className="text-gray-200 text-sm drop-shadow-lg">Navštivte naši prodejnu a objevte krásu našich šperků osobně</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Kontaktní informace */}
        <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch mb-8">
          <div className="flex-1 bg-neutral-800 p-6 rounded-xl border border-neutral-700 hover:border-amber-500 transition-all shadow-lg transform hover:-translate-y-1">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-lg bg-amber-600/20 flex items-center justify-center text-amber-500 mr-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-amber-500 font-bold text-lg">Adresa</h4>
                <p className="text-gray-300">Křižná 33/4, 757 01 Valašské Meziříčí</p>
              </div>
            </div>
          </div>
          
          <div className="flex-1 bg-neutral-800 p-6 rounded-xl border border-neutral-700 hover:border-amber-500 transition-all shadow-lg transform hover:-translate-y-1">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-lg bg-amber-600/20 flex items-center justify-center text-amber-500 mr-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-amber-500 font-bold text-lg">Otevírací doba</h4>
                <p className="text-gray-300">Po-Pá: 9:00 - 17:00, So: 9:00 - 12:00</p>
              </div>
            </div>
          </div>
          
          <div className="flex-1 bg-neutral-800 p-6 rounded-xl border border-neutral-700 hover:border-amber-500 transition-all shadow-lg transform hover:-translate-y-1">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-lg bg-amber-600/20 flex items-center justify-center text-amber-500 mr-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h4 className="text-amber-500 font-bold text-lg">Kontakt</h4>
                <p className="text-gray-300">+420 123 456 789</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA tlačítko */}
        <div className="text-center mt-10">
          <a
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
          </a>
        </div>
      </div>
    </section>
  );
};

export default MapSection;