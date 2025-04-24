import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 relative">
      {/* Dekorativní prvky */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-700 via-amber-500 to-amber-700"></div>
      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-24 h-24 rounded-full bg-neutral-900 flex items-center justify-center z-10 border-4 border-black shadow-xl">
        {/* Nyní použijeme pouze ikonu perly bez žlutého pozadí */}
        <svg 
          width="44" 
          height="44" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-lg"
        >
          {/* Základní struktura perly */}
          <circle cx="12" cy="12" r="10" fill="url(#pearlGradient)" />
          
          {/* Vnitřní struktura perly */}
          <circle cx="12" cy="12" r="7" fill="white" fillOpacity="0.6" />
          
          {/* Lesk perly - světlejší vrchol */}
          <circle cx="9" cy="9" r="3.5" fill="white" fillOpacity="0.9" />
          
          {/* Malý druhotný lesk */}
          <circle cx="14" cy="7" r="1.5" fill="white" fillOpacity="0.8" />
          
          {/* Jemný okraj pro zdůraznění 3D efektu */}
          <circle 
            cx="12" 
            cy="12" 
            r="9.5" 
            stroke="white" 
            strokeOpacity="0.6" 
            strokeWidth="0.7"
            fill="none"
          />
          
          {/* Gradient pro perlu */}
          <defs>
            <radialGradient
              id="pearlGradient"
              cx="9"
              cy="9"
              r="12"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="white" stopOpacity="0.95" />
              <stop offset="65%" stopColor="white" stopOpacity="0.8" />
              <stop offset="100%" stopColor="white" stopOpacity="0.65" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      
      <div className="pt-20 pb-10 relative overflow-hidden">
        {/* Vektorové grafické prvky v pozadí */}
        <div className="absolute -top-10 -left-10 w-64 h-64 rounded-full bg-amber-700 opacity-5 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-amber-500 opacity-5 blur-3xl"></div>
        <div className="absolute top-40 right-20 w-20 h-20 bg-amber-700 opacity-5 rotate-45"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-amber-500 opacity-5 rotate-12"></div>
        
        <div className="max-w-7xl mx-auto px-6">
          {/* Hlavní část footeru */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Logo a motto - zabírá 5 z 12 sloupců */}
            <div className="lg:col-span-5">
              <div className="flex items-center mb-6">
                <div className="mr-3 w-10 h-10 flex items-center justify-center bg-transparent">
                  {/* SVG ikona perly - menší verze pro logo, bez žlutého pozadí */}
                  <svg 
                    width="32" 
                    height="32" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12" cy="12" r="10" fill="url(#pearlGradientSmall)" />
                    <circle cx="12" cy="12" r="7" fill="white" fillOpacity="0.6" />
                    <circle cx="9" cy="9" r="3" fill="white" fillOpacity="0.9" />
                    <circle cx="14" cy="7" r="1.5" fill="white" fillOpacity="0.8" />
                    <circle 
                      cx="12" 
                      cy="12" 
                      r="9.5" 
                      stroke="white" 
                      strokeOpacity="0.6" 
                      strokeWidth="0.7"
                      fill="none"
                    />
                    <defs>
                      <radialGradient
                        id="pearlGradientSmall"
                        cx="9"
                        cy="9"
                        r="12"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0%" stopColor="white" stopOpacity="0.95" />
                        <stop offset="65%" stopColor="white" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="white" stopOpacity="0.65" />
                      </radialGradient>
                    </defs>
                  </svg>
                </div>
                <h3 className="text-2xl font-serif tracking-wider text-white">
                  ZLATNICTVÍ <span className="text-amber-500">PERLA</span>
                </h3>
              </div>
              
              <p className="text-gray-400 leading-relaxed mb-8 border-l-2 border-amber-600 pl-4 italic">
                &quot;Exkluzivní zlatnictví nabízející jedinečné šperky pro nezapomenutelné chvíle. 
                Každý náš kus vypráví příběh elegance, kvality a preciznosti.&quot;
              </p>
              
              <div className="flex space-x-3">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="group relative w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center overflow-hidden transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-600 to-amber-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <svg className="w-4 h-4 text-gray-400 group-hover:text-white relative z-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24H12.82v-9.294H9.692V11.08h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.312h3.587l-.467 3.627h-3.12V24h6.116C23.407 24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.675 0z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="group relative w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center overflow-hidden transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-600 to-amber-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <svg className="w-4 h-4 text-gray-400 group-hover:text-white relative z-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.996.24 2.464.403a4.93 4.93 0 0 1 1.675 1.098 4.93 4.93 0 0 1 1.098 1.675c.163.468.349 1.294.403 2.464.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.996-.403 2.464a4.93 4.93 0 0 1-1.098 1.675 4.93 4.93 0 0 1-1.675 1.098c-.468.163-1.294.349-2.464.403-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.996-.24-2.464-.403a4.93 4.93 0 0 1-1.675-1.098 4.93 4.93 0 0 1-1.098-1.675c-.163-.468-.349-1.294-.403-2.464C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.054-1.17.24-1.996.403-2.464a4.93 4.93 0 0 1 1.098-1.675 4.93 4.93 0 0 1 1.675-1.098c.468-.163 1.294-.349 2.464-.403C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.07 5.775.127 4.68.358 3.757.82 2.835 1.283 2.04 1.875 1.307 2.608.575 3.34.983 4.135 1.445 5.057c.461.924.692 2.019.75 3.296.057 1.28.07 1.689.07 4.948s-.013 3.668-.07 4.948c-.058 1.277-.289 2.372-.75 3.296-.462.924-.87 1.72-1.603 2.453-.732.732-1.529 1.14-2.453 1.603C.358 23.32.127 24.415.07 25.691.013 26.971 0 27.38 0 30.639s.013 3.668.07 4.948c.058 1.277.289 2.372.75 3.296.461.924.87 1.72 1.603 2.453.732.732 1.529 1.14 2.453 1.603.924.461 2.019.692 3.296.75 1.28.057 1.689.07 4.948.07s3.668-.013 4.948-.07c1.277-.058 2.372-.289 3.296-.75.924-.462 1.72-.87 2.453-1.603.732-.732 1.14-1.529 1.603-2.453.461-.924.692-2.019.75-3.296.057-1.28.07-1.689.07-4.948s-.013-3.668-.07-4.948c-.058-1.277-.289-2.372-.75-3.296-.462-.924-.87-1.72-1.603-2.453-.732-.732-1.529-1.14-2.453-1.603-.924-.461-2.019-.692-3.296-.75C15.668.013 15.259 0 12 0z" />
                    <path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zM18.406 4.594a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Sloupce s odkazy a kontakty */}
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Rychlé odkazy */}
              <div>
                <h4 className="text-white font-medium text-lg mb-5 flex items-center">
                  <span className="w-5 h-5 rounded-sm bg-amber-600 mr-3 transform rotate-45"></span>
                  Objevujte
                </h4>
                <ul className="space-y-3 text-sm">
                  <li>
                    <a href="/sperky" className="group inline-flex items-center text-gray-400 hover:text-amber-400 transition-colors">
                      <span className="w-0 group-hover:w-3 overflow-hidden transition-all duration-300 mr-0 group-hover:mr-2">
                        <svg className="w-3 h-3 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      Šperky
                    </a>
                  </li>
                  <li>
                    <a href="/sluzby" className="group inline-flex items-center text-gray-400 hover:text-amber-400 transition-colors">
                      <span className="w-0 group-hover:w-3 overflow-hidden transition-all duration-300 mr-0 group-hover:mr-2">
                        <svg className="w-3 h-3 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      Služby
                    </a>
                  </li>
                  <li>
                    <a href="/kontakt" className="group inline-flex items-center text-gray-400 hover:text-amber-400 transition-colors">
                      <span className="w-0 group-hover:w-3 overflow-hidden transition-all duration-300 mr-0 group-hover:mr-2">
                        <svg className="w-3 h-3 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      Kontakt
                    </a>
                  </li>
                </ul>
              </div>
              
              {/* Otevírací doba */}
              <div>
                <h4 className="text-white font-medium text-lg mb-5 flex items-center">
                  <span className="w-5 h-5 rounded-sm bg-amber-600 mr-3 transform rotate-45"></span>
                  Navštivte nás
                </h4>
                <div className="bg-neutral-900/80 rounded-lg p-4 border border-neutral-800 backdrop-blur-sm">
                  <div className="text-xs text-amber-500 uppercase tracking-wider mb-3">Otevírací doba</div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between text-gray-400">
                      <span>Pondělí - Pátek</span>
                      <span className="text-white">9:00 - 17:00</span>
                    </div>
                    <div className="flex justify-between text-gray-400">
                      <span>Sobota</span>
                      <span className="text-amber-500/70">Zavřeno</span>
                    </div>
                    <div className="flex justify-between text-gray-400">
                      <span>Neděle</span>
                      <span className="text-amber-500/70">Zavřeno</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Kontakt */}
              <div>
                <h4 className="text-white font-medium text-lg mb-5 flex items-center">
                  <span className="w-5 h-5 rounded-sm bg-amber-600 mr-3 transform rotate-45"></span>
                  Kontakt
                </h4>
                <ul className="space-y-4 text-sm">
                  <li>
                    <div className="text-gray-400 flex">
                      <div className="mr-3 mt-1 text-amber-500">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-white">Adresa</div>
                        <div>Valašské Meziříčí</div>
                        <div>Křižná 33/4, 757 01</div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="text-gray-400 flex">
                      <div className="mr-3 mt-1 text-amber-500">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-white">Telefon</div>
                        <div>+420 604 265 812</div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Spodní část - copyright */}
          <div className="mt-16 pt-8 border-t border-neutral-800/50 flex flex-col md:flex-row justify-between items-center">
            <div className="text-xs text-gray-500 text-center md:text-left mb-4 md:mb-0">
              <div>IČ: 87910675 | DIČ: CZ8411285861 | Odpovědný vedoucí: Martin Krajíček</div>
              <div className="mt-1">&copy; {new Date().getFullYear()} Zlatnictví Perla. Všechna práva vyhrazena.</div>
            </div>
            
            <div className="flex items-center">
              <svg className="w-5 h-5 text-amber-600 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <span className="text-xs text-gray-400">Ručíme za kvalitu a originalitu našich šperků</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;