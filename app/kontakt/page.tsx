// app/contact/page.tsx
"use client";

import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import MapSection from "../components/mapa";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#111111] text-gray-300">
      {/* Navigační lišta */}
      <Navbar />

      {/* Hlavní obsah */}
      <main className="flex-grow py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <h1 className="text-4xl font-bold text-center text-yellow-500">
            Kontakt
          </h1>

          {/* Grid: vlevo kontaktní info, vpravo formulář */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Levý sloupec: kontaktní údaje */}
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-yellow-500 mb-1">
                  Adresa
                </h2>
                <p>Valašské Meziříčí, Křižná 33/4,757 01</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-yellow-500 mb-1">
                  Vedoucí provozovny
                </h2>
                <p>Martin Krajíček</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-yellow-500 mb-1">
                  Telefon
                </h2>
                <p>+420 604 265 812</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-yellow-500 mb-1">
                  Email
                </h2>
                <p>zlatnictviperla@seznam.cz</p>
              </div>
            </div>
            </div>
          {/* Sekce s mapou a fotkou */}
          <MapSection />
        </div>
      </main>

      {/* Patička */}
      <Footer />
    </div>
  );
}
