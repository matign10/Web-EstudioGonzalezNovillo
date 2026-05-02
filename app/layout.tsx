import type { Metadata } from "next";
import { Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-poppins",
  display: "swap"
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-display",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Estudio González Novillo | Abogados Penalistas en Buenos Aires",
  description: "Estudio jurídico especializado en derecho penal en CABA, Buenos Aires y todo el país. Defensa penal, querella, delitos económicos, estafas y violencia de género. Más de 20 años de experiencia.",
  keywords: [
    "abogado penalista Buenos Aires",
    "abogado penal CABA",
    "defensa penal Argentina",
    "querellante",
    "delitos económicos",
    "estafas y fraudes",
    "abogado penal tributario",
    "violencia de género defensa",
    "estudio jurídico penal",
    "González Novillo abogados"
  ],
  authors: [{ name: "Estudio González Novillo" }],
  creator: "Estudio González Novillo",
  publisher: "Estudio González Novillo",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://gonzaleznovillo.com",
    siteName: "Estudio González Novillo",
    title: "Estudio González Novillo | Abogados Penalistas en Buenos Aires",
    description: "Defensa penal y representación de víctimas en CABA, Buenos Aires y todo el país. Delitos económicos, estafas, violencia de género. Más de 20 años de experiencia.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Estudio González Novillo - Abogados Penalistas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Estudio González Novillo | Abogados Penalistas",
    description: "Defensa penal y representación de víctimas en Buenos Aires y todo el país.",
    images: ["/images/og-image.jpg"],
  },
  alternates: {
    canonical: "https://gonzaleznovillo.com",
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "Estudio González Novillo",
    "description": "Estudio jurídico especializado en derecho penal. Defensa de imputados y representación de víctimas en causas penales.",
    "url": "https://gonzaleznovillo.com",
    "telephone": "+54 9 11 5476 3721",
    "email": "gonzaleznovilloabogados@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Uruguay 763",
      "addressLocality": "Ciudad Autónoma de Buenos Aires",
      "addressRegion": "Buenos Aires",
      "postalCode": "C1013",
      "addressCountry": "AR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -34.5998269,
      "longitude": -58.3891075
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Ciudad Autónoma de Buenos Aires"
      },
      {
        "@type": "State",
        "name": "Buenos Aires"
      },
      {
        "@type": "Country",
        "name": "Argentina"
      }
    ],
    "priceRange": "$$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.instagram.com/gonzaleznovillo_abogados/"
    ],
    "knowsAbout": [
      "Derecho Penal",
      "Defensa Penal",
      "Querella",
      "Delitos Económicos",
      "Estafas",
      "Violencia de Género",
      "Derecho Penal Tributario"
    ],
    "founder": [
      {
        "@type": "Person",
        "name": "Jorge González Novillo",
        "jobTitle": "Socio Fundador"
      },
      {
        "@type": "Person",
        "name": "Matías González Novillo",
        "jobTitle": "Socio"
      }
    ]
  };

  return (
    <html lang="es" className={`${poppins.variable} ${playfair.variable} bg-gn-white`} suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#161616" />
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans bg-gn-white text-gn-black" suppressHydrationWarning>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
