// app/oteviraci-doba/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Otevírací doba | Zlatnictví Perla | Valašské Meziříčí",
  description: "Otevírací doba Zlatnictví Perla ve Valašském Meziříčí - Po-Pá 9:00-17:00, So-Ne zavřeno. Nabízíme šperky, snubní a zásnubní prsteny, opravy hodinek, nastřelování naušnic, výrobu šperků na míru.",
  keywords: "otevírací doba zlatnictví, Perla otevírací hodiny, provozní doba zlatnictví, zlatnictví Valašské Meziříčí, šperky, snubní prsteny, zásnubní prsteny, zlaté šperky, stříbrné šperky, náramky, prsteny, nastřelování naušnic, oprava šperků, výměna baterií v hodinkách, řetízky, diamanty, přírodní kameny, šperky na míru, dětské naušnice, křtiny, narozeniny, svátky, výročí, přívěsky, klenotnictví otevírací doba, hodinky oprava kdy otevřeno, zlatnická dílna Valašské Meziříčí, zlatnictví Křižná, Martin Krajíček zlatník, kdy je otevřené zlatnictví, rodinné zlatnictví, zlatnické práce, prodej zlata, zlaté mince, nákup šperků Valašské Meziříčí, zlatnické služby, zakázková výroba šperků, gravírování, rhodiování, brilianty, polodrahokamy, chirurgická ocel, pozlacené šperky, stříbření, zlaté hodinky, dárky k výročí, svatební šperky, výkup zlata, čištění šperků",
  alternates: {
    canonical: "/oteviraci-doba",
  },
  openGraph: {
    title: "Otevírací doba | Zlatnictví Perla | Valašské Meziříčí",
    description: "Zlatnictví Perla ve Valašském Meziříčí má otevřeno každý všední den od 9:00 do 17:00. O víkendu máme zavřeno. Nabízíme šperky, snubní prsteny, opravy a servis. Adresa: Křižná 33/4, Valašské Meziříčí.",
    url: "https://www.zlatnictviperla.cz/oteviraci-doba",
    images: [
      {
        url: "https://www.zlatnictviperla.cz/images/oteviraci-doba-og.jpg",
        width: 1200,
        height: 630,
        alt: "Otevírací doba Zlatnictví Perla ve Valašském Meziříčí",
      },
    ],
    locale: "cs_CZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Otevírací doba | Zlatnictví Perla | Valašské Meziříčí",
    description: "Zlatnictví Perla ve Valašském Meziříčí má otevřeno každý všední den od 9:00 do 17:00. Nabízíme šperky, snubní prsteny a opravy.",
    images: ["https://www.zlatnictviperla.cz/images/oteviraci-doba-twitter.jpg"],
  },
  // Strukturovaná data pro tuto konkrétní stránku
  other: {
    "script:jsonld": JSON.stringify([
      {
        "@context": "https://schema.org",
        "@type": "JewelryStore",
        "name": "Zlatnictví Perla",
        "url": "https://www.zlatnictviperla.cz",
        "logo": "https://www.zlatnictviperla.cz/images/logo.png",
        "image": "https://www.zlatnictviperla.cz/images/storefront.jpg",
        "description": "Rodinné zlatnictví Perla ve Valašském Meziříčí nabízí široký výběr zlatých a stříbrných šperků, snubních a zásnubních prstenů, náramků, řetízků a přívěsků. Provádíme také opravy šperků, výměnu baterií v hodinkách a nastřelování náušnic.",
        "telephone": "+420604265812",
        "priceRange": "$$",
        "currenciesAccepted": "CZK",
        "paymentAccepted": "Cash, Credit Card",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Křižná 33/4",
          "addressLocality": "Valašské Meziříčí",
          "postalCode": "757 01",
          "addressCountry": "CZ",
          "addressRegion": "Zlínský kraj"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "49.471234", // Nahraďte přesnými souřadnicemi
          "longitude": "17.971234" // Nahraďte přesnými souřadnicemi
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday"],
            "opens": "09:00",
            "closes": "17:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Tuesday"],
            "opens": "09:00",
            "closes": "17:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Wednesday"],
            "opens": "09:00",
            "closes": "17:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Thursday"],
            "opens": "09:00",
            "closes": "17:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Friday"],
            "opens": "09:00",
            "closes": "17:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Saturday", "Sunday"],
            "opens": "00:00",
            "closes": "00:00" // Značí zavřeno
          }
        ],
        "sameAs": [
          "https://www.facebook.com/zlatnictviperlacr", // Nahraďte skutečnými URL
          "https://www.instagram.com/zlatnictviperla" // Nahraďte skutečnými URL
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+420604265812",
          "contactType": "customer service",
          "availableLanguage": ["Czech", "English"]
        },
        "employee": {
          "@type": "Person",
          "name": "Martin Krajíček",
          "jobTitle": "Vedoucí provozovny"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Šperky a služby",
          "itemListElement": [
            {
              "@type": "OfferCatalog",
              "name": "Šperky",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Product",
                    "name": "Snubní prsteny"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Product",
                    "name": "Zásnubní prsteny"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Product",
                    "name": "Zlaté náramky"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Product",
                    "name": "Stříbrné řetízky"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Product",
                    "name": "Dětské náušnice"
                  }
                }
              ]
            },
            {
              "@type": "OfferCatalog",
              "name": "Služby",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Oprava šperků"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Výměna baterií v hodinkách"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Nastřelování náušnic"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Výroba šperků na míru"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Gravírování"
                  }
                }
              ]
            }
          ]
        },
        "areaServed": {
          "@type": "GeoCircle",
          "geoMidpoint": {
            "@type": "GeoCoordinates",
            "latitude": "49.471234", // Nahraďte přesnými souřadnicemi
            "longitude": "17.971234" // Nahraďte přesnými souřadnicemi
          },
          "geoRadius": "50000"
        },
        "knowsAbout": ["šperky", "snubní prsteny", "zásnubní prsteny", "opravy šperků", "výroba šperků na míru", "diamanty", "drahé kovy", "zlatnictví"]
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Hlavní stránka",
            "item": "https://www.zlatnictviperla.cz"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Otevírací doba",
            "item": "https://www.zlatnictviperla.cz/oteviraci-doba"
          }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Jaká je otevírací doba Zlatnictví Perla ve Valašském Meziříčí?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Zlatnictví Perla má otevřeno každý všední den (pondělí až pátek) od 9:00 do 17:00 hodin. O víkendu (sobota a neděle) je zavřeno."
            }
          },
          {
            "@type": "Question",
            "name": "Kde se nachází Zlatnictví Perla?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Zlatnictví Perla najdete na adrese Křižná 33/4, 757 01 Valašské Meziříčí."
            }
          },
          {
            "@type": "Question",
            "name": "Jaké služby nabízí Zlatnictví Perla?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Zlatnictví Perla nabízí prodej zlatých a stříbrných šperků, snubních a zásnubních prstenů, náramků, řetízků a přívěsků. Dále poskytujeme služby jako oprava šperků, výměna baterií v hodinkách, nastřelování náušnic a výroba šperků na míru."
            }
          }
        ]
      }
    ])
  }
};