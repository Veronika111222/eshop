// app/oteviraci-doba/page.tsx
"use client";

import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function OpeningHoursPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-300">
      {/* Navigační lišta */}
      <Navbar />

      {/* Hlavní obsah – vycentrováno s flexboxem */}
      <main className="flex-grow flex flex-col items-center justify-center px-4 py-16">
        <h1 className="text-4xl font-bold text-yellow-500 mb-10">
          Otevírací doba
        </h1>

        <ul className="space-y-3 text-lg md:text-xl text-center">
          <li>Pondělí: 09:00 – 17:00</li>
          <li>Úterý: 09:00 – 17:00</li>
          <li>Středa: 09:00 – 17:00</li>
          <li>Čtvrtek: 09:00 – 17:00</li>
          <li>Pátek: 09:00 – 17:00</li>
          <li>Sobota: Zavřeno</li>
          <li>Neděle: Zavřeno</li>
        </ul>
      </main>

      {/* Patička */}
      <Footer />
    </div>
  );
}

