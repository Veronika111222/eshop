"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";


export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-[#111111] dark:bg-[#eef14d] dark:bg-grid-[#eef14d]/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
        font-bold 
        font-weight="700"
        text-3xl 
        font-size= "0.875rem"
      />
    </div>
  );
}
const testimonials = [
  {
    quote:
      "Provádíme výměnu baterií u hodinek na počkání nebo do druhého dne.",
    name: "Výměna bateríí",
    title: "Cena 95Kč",
  },
  {
    quote:
      "Nabízíme výkup zlata a stříbra. Aktuální cena výkupu na dotaz v prodejně nebo telefonicky.",
    name: "Výkup zlata a stříbra",
    title: "",
  },
  {
    quote: "Nabízíme dárkové poukazy, které si obdarovaní mohou vyměnit za šperky dle vlastního výběru.",
    name: "Dárkové poukazy",
    title: "",
  },
  {
    quote:
      "Naši zkušení zlatníci opraví Vaše šperky, upraví vellikost prstenů a obnoví jejich lesk díky profesionální renovaci.",
    name: "Opravy a čištění šperků",
    title: "Letování zlatých šperků cena: 220Kč",
  },
  {
    quote:
      "Rádi Vám vyrobíme šperky na míru, které dokonale odpovídají Vašim představám.",
    name: "Šperky na míru",
    title: "",
  },
  {
    quote:
      "Rádi Vám vyrobíme šperky na míru, které dokonale odpovídají Vašim představám.",
    name: "Nastřelení náušnic",
    title: "Cena jedné nastřelené naušnice:200Kč",
  },
];
