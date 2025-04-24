"use client"
import React from 'react';
import Navbar from './components/navbar';
import LandigPage from './components/landigpage';
import Footer from './components/footer';
import  Cards from './components/nabidka';
import Prilezitosti from "./components/prilezitosti";
import Mapa from "./components/mapa";

export default function Page() {
  return (
    <>
      <Navbar /> 
      <LandigPage />
      < Cards/>
      <Prilezitosti/>
      <Mapa />
      <Footer />
    </>
  );
}