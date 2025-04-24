"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Detekce scrollování pro změnu pozadí navbaru
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Animační varianty pro mobilní menu
  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: [0.04, 0.62, 0.23, 0.98],
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: [0.04, 0.62, 0.23, 0.98],
        when: "beforeChildren",
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  };

  // Animační varianty pro položky menu
  const itemVariants = {
    closed: {
      opacity: 0,
      y: -10,
      transition: { duration: 0.2 }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  // Seznam položek menu
  const menuItems = [
    { name: "Domů", href: "/" },
    { name: "Otevírací doba", href: "/oteviracidoba" },
    { name: "Kontakt", href: "/kontakt" },
    { name: "Služby", href: "/sluzby" },
    { name: "Produkty", href: "/produkty" },
  ];

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 overflow-hidden"
      style={{
        backgroundColor: scrolled ? "rgba(17, 17, 17, 0.95)" : "#111111",
        backdropFilter: scrolled ? "blur(8px)" : "none"
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo vlevo */}
          <motion.div 
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Link href="/" className="flex items-center gap-2">
  {/* hlavička má ± 48 px, proto volím 40 px */}
  <div className="relative w-28 h-28 lg:w-28 lg:h-28">
    <Image
      src="/imgs/logoperla.png"
      alt="Zlatnictví Perla"
      fill
      sizes="120px"
      className="object-contain" 
      priority
    />
  </div>
</Link>

          </motion.div>

          {/* Desktop menu */}
          <div className="hidden md:block">
            <ul className="flex items-center space-x-1">
              {menuItems.map((item, index) => (
                <motion.li key={index} whileHover={{ y: -2 }}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-amber-500 px-3 py-2 rounded-md text-sm font-medium relative group"
                  >
                    {item.name}
                    <motion.span 
                      className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 group-hover:w-full transition-all duration-300"
                      whileHover={{ width: "100%" }}
                    />
                  </Link>
                </motion.li>
              ))}
              <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/kontakt"
                  className="ml-2 bg-amber-600 hover:bg-amber-700 text-white px-3 py-1.5 rounded-md text-sm font-medium transition-colors"
                >
                  Navštívit nás
                </Link>
              </motion.li>
            </ul>
          </div>

          {/* Mobilní menu tlačítko */}
          <div className="md:hidden">
            <motion.button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-amber-500 hover:text-amber-400 focus:outline-none"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Menu"
            >
              <span className="sr-only">Otevřít hlavní menu</span>
              <div className="w-6 h-5 flex flex-col justify-between overflow-hidden">
                <motion.span 
                  className="w-full h-0.5 bg-amber-500 rounded-full"
                  animate={{ 
                    rotate: isOpen ? 45 : 0,
                    y: isOpen ? 8 : 0
                  }}
                />
                <motion.span 
                  className="w-full h-0.5 bg-amber-500 rounded-full"
                  animate={{ 
                    opacity: isOpen ? 0 : 1,
                    x: isOpen ? 20 : 0
                  }}
                />
                <motion.span 
                  className="w-full h-0.5 bg-amber-500 rounded-full"
                  animate={{ 
                    rotate: isOpen ? -45 : 0,
                    y: isOpen ? -8 : 0
                  }}
                />
              </div>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobilní menu s animací */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="md:hidden overflow-hidden bg-[#111111] w-full"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <div className="px-4 py-3 space-y-1 border-t border-neutral-800">
              {menuItems.map((item, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                >
                  <Link
                    href={item.href}
                    className="block text-gray-300 hover:text-amber-500 px-3 py-2 rounded-md text-base font-medium transition-colors items-center"
                    onClick={() => setIsOpen(false)}
                  >
                    <span>{item.name}</span>
                    <motion.span 
                      className="ml-auto opacity-0 group-hover:opacity-100"
                      whileHover={{ x: 3 }}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </motion.span>
                  </Link>
                </motion.div>
              ))}
              
              {/* Sociální média - zjednodušeno */}
              <motion.div 
                className="pt-3 mt-3 border-t border-neutral-700 flex justify-center space-x-6"
                variants={itemVariants}
              >
                <motion.a 
                  href="#" 
                  className="text-amber-500 hover:text-amber-400"
                  whileHover={{ y: -3 }}
                >
                  <span className="sr-only">Facebook</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </motion.a>
                <motion.a 
                  href="#" 
                  className="text-amber-500 hover:text-amber-400"
                  whileHover={{ y: -3 }}
                >
                  <span className="sr-only">Instagram</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </motion.a>
              </motion.div>
              
              {/* Kontaktní informace - zjednodušeno */}
              <motion.div 
                className="pt-3 mt-3 border-t border-neutral-700 px-3"
                variants={itemVariants}
              >
                <p className="text-amber-500 font-semibold mb-1 text-sm">Rychlý kontakt</p>
                <p className="text-gray-300 text-xs flex items-center mb-1">
                  <svg className="w-3 h-3 mr-2 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +420 123 456 789
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;