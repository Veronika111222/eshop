"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-[#111111] ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo vlevo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/imgs/logo-perla.jpg"         // <-- sem dáte svou logo image
                alt="Zlatnictví Perla"
                width={70}              // šířka loga
                height={70}             // výška loga
                className="object-contain"
              />
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                href="/oteviracidoba"
                className="text-gray-300 hover:text-yellow-500 px-3 py-2 rounded-md text-sm font-medium"
              >
                Otevírací doba
              </Link>
              <Link
                href="/kontakt"
                className="text-gray-300 hover:text-yellow-500 px-3 py-2 rounded-md text-sm font-medium"
              >
                Kontakt
              </Link>
              <Link
                href="/služby"
                className="text-gray-300 hover:text-yellow-500 px-3 py-2 rounded-md text-sm font-medium"
              >
                Služby
              </Link>
              <Link
                href="/produkty"
                className="text-gray-300 hover:text-yellow-500 px-3 py-2 rounded-md text-sm font-medium"
              >
                Produkty
              </Link>
            </div>
          </div>

          {/* Mobilní menu tlačítko */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="bg-[#8F1736] inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-yellow-500 hover:bg-[#7a132c] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#8F1736] focus:ring-white"
            >
              <span className="sr-only">Otevřít hlavní menu</span>
              {isOpen ? (
                <svg className="h-6 w-6" /* X-icon */>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg className="h-6 w-6" /* hamburger-icon */>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobilní menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/oteviracidoba"
              className="block text-gray-300 hover:text-yellow-500 px-3 py-2 rounded-md text-base font-medium"
            >
              Otevírací doba
            </Link>
            <Link
              href="/kontakt"
              className="block text-gray-300 hover:text-yellow-500 px-3 py-2 rounded-md text-base font-medium"
            >
              Kontakt
            </Link>
            <Link
              href="/produkty"
              className="block text-gray-300 hover:text-yellow-500 px-3 py-2 rounded-md text-base font-medium"
            >
              Produkty
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
