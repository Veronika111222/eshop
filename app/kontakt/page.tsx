"use client";

import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import MapSection from "../components/mapa";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-900 text-gray-300">
      {/* Navigační lišta */}
      <Navbar />
      
      {/* Hlavní obsah */}
      <main className="flex-grow pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 space-y-16">
          {/* Nadpis sekce s dekorativními prvky */}
          <div className="text-center relative mb-20">
            {/* Dekorativní prvky */}
            <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-amber-600 opacity-5 blur-3xl"></div>
            <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-amber-400 opacity-5 blur-3xl"></div>
            
            <span className="text-amber-500 text-sm font-semibold tracking-wider uppercase">Kontaktujte nás</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
              Jsme tu <span className="text-amber-500">pro vás</span>
            </h1>
            <div className="h-1 w-24 bg-amber-500 mx-auto rounded"></div>
            <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
              Rádi vám pomůžeme s výběrem šperku, opravou nebo jakýmkoli dotazem. Neváhejte nás navštívit.
            </p>
          </div>
          
          {/* Grid: kontaktní informace */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            {/* Levý sloupec: kontaktní údaje */}
            <div className="space-y-8">
              <div className="bg-neutral-800 rounded-xl p-8 border border-neutral-700 shadow-lg transition-all duration-300 hover:border-amber-500 transform hover:-translate-y-1">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-lg bg-amber-600/20 flex items-center justify-center text-amber-500 flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-amber-500 mb-3">
                      Adresa
                    </h2>
                    <p className="text-gray-300">Valašské Meziříčí</p>
                    <p className="text-gray-300">Křižná 33/4, 757 01</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-neutral-800 rounded-xl p-8 border border-neutral-700 shadow-lg transition-all duration-300 hover:border-amber-500 transform hover:-translate-y-1">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-lg bg-amber-600/20 flex items-center justify-center text-amber-500 flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-amber-500 mb-3">
                      Vedoucí provozovny
                    </h2>
                    <p className="text-gray-300">Martin Krajíček</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-neutral-800 rounded-xl p-8 border border-neutral-700 shadow-lg transition-all duration-300 hover:border-amber-500 transform hover:-translate-y-1">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-lg bg-amber-600/20 flex items-center justify-center text-amber-500 flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-amber-500 mb-3">
                      Telefon
                    </h2>
                    <p className="text-gray-300">+420 604 265 812</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Pravý sloupec: Otevírací hodiny a další informace */}
            <div className="space-y-8">
              <div className="bg-neutral-800 rounded-xl p-8 border border-neutral-700 shadow-lg transition-all duration-300 hover:border-amber-500 transform hover:-translate-y-1">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-lg bg-amber-600/20 flex items-center justify-center text-amber-500 flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="w-full">
                    <h2 className="text-xl font-semibold text-amber-500 mb-3">
                      Otevírací doba
                    </h2>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Pondělí</span>
                        <span className="text-gray-300">9:00 - 17:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Úterý</span>
                        <span className="text-gray-300">9:00 - 17:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Středa</span>
                        <span className="text-gray-300">9:00 - 17:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Čtvrtek</span>
                        <span className="text-gray-300">9:00 - 17:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Pátek</span>
                        <span className="text-gray-300">9:00 - 17:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Sobota</span>
                        <span className="text-gray-300">Zavřeno</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Neděle</span>
                        <span className="text-gray-300">Zavřeno</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-neutral-800 rounded-xl p-8 border border-neutral-700 shadow-lg transition-all duration-300 hover:border-amber-500 transform hover:-translate-y-1">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-lg bg-amber-600/20 flex items-center justify-center text-amber-500 flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-amber-500 mb-3">
                      Důležité informace
                    </h2>
                    <p className="text-gray-300 mb-2">
                      IČO: 12345678
                    </p>
                    <p className="text-gray-300">
                      Přijímáme platební karty i hotovost.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Sekce s mapou a fotkou */}
        <div className="mt-16">
          <MapSection />
        </div>
      </main>
      
      {/* Patička */}
      <Footer />
    </div>
  );
}