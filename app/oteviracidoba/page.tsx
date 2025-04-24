"use client";

import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Image from "next/image";

export default function OpeningHoursPage() {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-900 text-gray-300">
      {/* Navigační lišta */}
      <Navbar />

      {/* Hero sekce */}
      <section className="relative w-full h-[40vh] overflow-hidden">
        {/* Hlavní obrázek */}
        <div className="absolute inset-0">
          <Image
            src="/imgs/hero.jpg" // Použijte vhodný obrázek z vaší galerie
            alt="Otevírací doba"
            fill
            className="object-cover object-center brightness-50"
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
              <span className="text-amber-400 text-sm font-light tracking-widest uppercase">Kdy nás najdete</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-2">
              <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                Otevírací doba
              </span>
            </h1>
            
            <div className="h-1 w-24 bg-amber-500 mx-auto rounded"></div>
          </div>
        </div>
      </section>

      {/* Hlavní obsah */}
      <main className="flex-grow py-20 px-4 relative">
        {/* Dekorativní prvky */}
        <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-amber-600 opacity-5 blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-amber-400 opacity-5 blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-neutral-800/30 rounded-xl p-12 md:p-16 border border-neutral-700 shadow-xl overflow-hidden">
            {/* Dekorativní prvky uvnitř boxu */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-amber-500 opacity-5 rounded-full"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-amber-500 opacity-5 rounded-full"></div>
            
            {/* Hodiny - dekorativní ikona */}
            <div className="absolute top-8 right-8 text-amber-500/30">
              <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            
            {/* Obsah s otevírací dobou */}
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-semibold text-amber-500 mb-8 text-center">
                Jsme tu pro vás
              </h2>
              
              <div className="grid gap-y-6 max-w-md mx-auto">
                {[
                  { day: "Pondělí", hours: "09:00 – 17:00", isOpen: true },
                  { day: "Úterý", hours: "09:00 – 17:00", isOpen: true },
                  { day: "Středa", hours: "09:00 – 17:00", isOpen: true },
                  { day: "Čtvrtek", hours: "09:00 – 17:00", isOpen: true },
                  { day: "Pátek", hours: "09:00 – 17:00", isOpen: true },
                  { day: "Sobota", hours: "Zavřeno", isOpen: false },
                  { day: "Neděle", hours: "Zavřeno", isOpen: false }
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b border-neutral-700/50 group">
                    <div className="flex items-center">
                      <div className={`w-3 h-3 rounded-full mr-3 ${item.isOpen ? 'bg-amber-500' : 'bg-neutral-600'}`}></div>
                      <span className="text-lg md:text-xl font-medium text-white">{item.day}</span>
                    </div>
                    <span className={`text-lg md:text-xl ${item.isOpen ? 'text-gray-300' : 'text-amber-500/70'}`}>
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 text-center">
                <p className="text-gray-400 italic">
                  V případě dotazů nás kontaktujte telefonicky na čísle <span className="text-amber-500">+420 604 265 812</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Další informace */}
        <div className="max-w-4xl mx-auto mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-neutral-800 p-6 rounded-lg border border-neutral-700 hover:border-amber-500 transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 mx-auto rounded-full bg-amber-600/20 flex items-center justify-center text-amber-500 mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-amber-500 mb-2">Adresa</h3>
              <p className="text-gray-400">Valašské Meziříčí, Křižná 33/4, 757 01</p>
            </div>
            
            <div className="bg-neutral-800 p-6 rounded-lg border border-neutral-700 hover:border-amber-500 transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 mx-auto rounded-full bg-amber-600/20 flex items-center justify-center text-amber-500 mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-amber-500 mb-2">Telefon</h3>
              <p className="text-gray-400">+420 604 265 812</p>
            </div>
            
            <div className="bg-neutral-800 p-6 rounded-lg border border-neutral-700 hover:border-amber-500 transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 mx-auto rounded-full bg-amber-600/20 flex items-center justify-center text-amber-500 mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-amber-500 mb-2">Vedoucí</h3>
              <p className="text-gray-400">Martin Krajíček</p>
            </div>
          </div>
        </div>
      </main>

      {/* Patička */}
      <Footer />
    </div>
  );
}