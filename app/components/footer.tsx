import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#111111] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        {/* Horní sekce s informacemi */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* zlatnictví Perla */}
          <div>
            <h3 className="text-yellow-500 font-bold text-2xl">zlatnictví Perla</h3>
            <p className="mt-4 text-sm leading-relaxed">
              Exkluzivní zlatnictví, které nabízí jedinečné šperky pro nezapomenutelné chvíle. 
              Kvalita, elegance a preciznost v každém detailu.
            </p>
          </div>
          {/* Rychlé odkazy */}
          <div>
            <h4 className="text-yellow-500 font-semibold mb-4">Rychlé odkazy</h4>
            <ul className="space-y-2">
              <li>
                <a href="/Šperky" className="hover:text-yellow-500 transition-colors text-sm">
                  Šperky
                </a>
              </li>
              <li>
                <a href="/Služby" className="hover:text-yellow-500 transition-colors text-sm">
                  Služby
                </a>
              </li>
              <li>
                <a href="/kontakt" className="hover:text-yellow-500 transition-colors text-sm">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>
          {/* Otevírací doba */}
          <div>
            <h4 className="text-yellow-500 font-semibold mb-4">Otevírací doba</h4>
            <ul className="space-y-2 text-sm">
              <li>po-pa: 9:00 - 17:00</li>
              <li>so- zavřeno</li>
              <li>ne- zavřeno</li>
            </ul>
          </div>
          {/* Kontaktní informace */}
          <div>
            <h4 className="text-yellow-500 font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-2 text-sm">
              <li>Adresa: Valašské Mezižíčí, Křižná 33/4</li>
              <li>Telefon: +420 604 265 812</li>
              <li>Odpovědný vedoucí: Martin Krajíček</li>
              <li>IČ: 87910675   DIČ:CZ8411285861</li>
            </ul>
          </div>
        </div>
        {/* Spodní sekce se sociálními ikonami a právními informacemi */}
        <div className="mt-8 border-t border-gray-700 pt-4 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} zlatnictvíPerla. Všechna práva vyhrazena.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            {/* Facebook */}
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-yellow-500 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24H12.82v-9.294H9.692V11.08h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.312h3.587l-.467 3.627h-3.12V24h6.116C23.407 24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.675 0z" />
              </svg>
            </a>
            {/* Instagram */}
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-yellow-500 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.996.24 2.464.403a4.93 4.93 0 0 1 1.675 1.098 4.93 4.93 0 0 1 1.098 1.675c.163.468.349 1.294.403 2.464.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.996-.403 2.464a4.93 4.93 0 0 1-1.098 1.675 4.93 4.93 0 0 1-1.675 1.098c-.468.163-1.294.349-2.464.403-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.996-.24-2.464-.403a4.93 4.93 0 0 1-1.675-1.098 4.93 4.93 0 0 1-1.098-1.675c-.163-.468-.349-1.294-.403-2.464C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.054-1.17.24-1.996.403-2.464a4.93 4.93 0 0 1 1.098-1.675 4.93 4.93 0 0 1 1.675-1.098c.468-.163 1.294-.349 2.464-.403C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.07 5.775.127 4.68.358 3.757.82 2.835 1.283 2.04 1.875 1.307 2.608.575 3.34.983 4.135 1.445 5.057c.461.924.692 2.019.75 3.296.057 1.28.07 1.689.07 4.948s-.013 3.668-.07 4.948c-.058 1.277-.289 2.372-.75 3.296-.462.924-.87 1.72-1.603 2.453-.732.732-1.529 1.14-2.453 1.603C.358 23.32.127 24.415.07 25.691.013 26.971 0 27.38 0 30.639s.013 3.668.07 4.948c.058 1.277.289 2.372.75 3.296.461.924.87 1.72 1.603 2.453.732.732 1.529 1.14 2.453 1.603.924.461 2.019.692 3.296.75 1.28.057 1.689.07 4.948.07s3.668-.013 4.948-.07c1.277-.058 2.372-.289 3.296-.75.924-.462 1.72-.87 2.453-1.603.732-.732 1.14-1.529 1.603-2.453.461-.924.692-2.019.75-3.296.057-1.28.07-1.689.07-4.948s-.013-3.668-.07-4.948c-.058-1.277-.289-2.372-.75-3.296-.462-.924-.87-1.72-1.603-2.453-.732-.732-1.529-1.14-2.453-1.603-.924-.461-2.019-.692-3.296-.75C15.668.013 15.259 0 12 0z" />
                <path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zM18.406 4.594a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />
              </svg>
            </a>
            {/* Twitter */}
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-yellow-500 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.643 4.937a9.659 9.659 0 0 1-2.828.775 4.958 4.958 0 0 0 2.165-2.724 9.868 9.868 0 0 1-3.127 1.184 4.932 4.932 0 0 0-8.39 4.49 13.978 13.978 0 0 1-10.15-5.146 4.822 4.822 0 0 0-.667 2.479 4.93 4.93 0 0 0 2.188 4.106 4.904 4.904 0 0 1-2.229-.616c-.054 2.28 1.581 4.415 3.949 4.89a4.935 4.935 0 0 1-2.224.084 4.935 4.935 0 0 0 4.604 3.417A9.867 9.867 0 0 1 0 19.539a13.945 13.945 0 0 0 7.548 2.212c9.056 0 14.01-7.496 14.01-13.986 0-.21 0-.423-.015-.635a10.025 10.025 0 0 0 2.46-2.548l-.047-.02z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
