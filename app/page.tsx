"use client"
import React from 'react';
import Navbar from './components/navbar';
import LandigPage from './components/landigpage';
import Footer from './components/footer';
import  { InfiniteMovingCardsDemo } from './components/nabidka';
import Prilezitosti from "./components/prilezitosti";
import Mapa from "./components/mapa";

export default function Page() {
  return (
    <>
      <Navbar /> 
      <LandigPage />
      < InfiniteMovingCardsDemo/>
      <Prilezitosti/>
      <Mapa />
      <Footer />
    </>
  );
}