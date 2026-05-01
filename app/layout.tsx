import type { Metadata, Viewport } from "next";
import { Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-poppins",
  display: "swap",
});

// Playfair Display as Chronicle Display alternative (similar elegant serif)
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const SITE_URL = "https://gonzaleznovillo.com.ar";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Estudio González Novillo | Abogados Penalistas en Buenos Aires",
    template: "%s | Estudio González Novillo",
  },
  description:
    "Estudio jurídico especializado en derecho penal y áreas conexas en Buenos Aires. Más de 20 años defendiendo imputados y representando víctimas en causas penales, delitos económicos, tributarios e informáticos.",
  applicationName: "Estudio González Novillo",
  authors: [{ name: "Estudio González Novillo" }],
  creator: "Estudio González Novillo",
  publisher: "Estudio González Novillo",
  keywords: [
    "abogado penalista Buenos Aires",
    "abogado penal CABA",
    "estudio jurídico penal Argentina",
    "defensa penal",
    "querella particular",
    "representación de víctimas",
    "delitos económicos",
    "delitos tributarios",
    "derecho penal económico",
    "derecho penal tributario",
    "delitos informáticos",
    "abogado estafas",
    "González Novillo",
    "Jorge González Novillo",
    "Matías González Novillo",
  ],
  category: "Legal Services",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: SITE_URL,
    siteName: "Estudio González Novillo",
    title: "Estudio González Novillo | Abogados Penalistas en Buenos Aires",
    description:
      "Más de 20 años defendiendo imputados y representando víctimas en causas penales, delitos económicos, tributarios e informáticos.",
    images: [
      {
        url: "/images/equipo-gn.jpg",
        width: 1200,
        height: 630,
        alt: "Equipo del Estudio González Novillo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Estudio González Novillo | Abogados Penalistas en Buenos Aires",
    description:
      "Más de 20 años defendiendo imputados y representando víctimas en causas penales.",
    images: ["/images/equipo-gn.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/images/logo-gn.jpeg",
    shortcut: "/images/logo-gn.jpeg",
    apple: "/images/logo-gn.jpeg",
  },
};

export const viewport: Viewport = {
  themeColor: "#161616",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "@id": `${SITE_URL}#legalservice`,
  name: "Estudio González Novillo",
  alternateName: "GN Estudio González Novillo",
  description:
    "Estudio jurídico especializado en derecho penal y áreas conexas. Defensa de imputados y representación de víctimas en causas penales, delitos económicos, tributarios e informáticos.",
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo-gn.jpeg`,
  image: `${SITE_URL}/images/equipo-gn.jpg`,
  email: "gonzaleznovilloabogados@gmail.com",
  telephone: "+54-9-11-5476-3721",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Uruguay 763",
    postalCode: "C1015",
    addressLocality: "Ciudad Autónoma de Buenos Aires",
    addressRegion: "CABA",
    addressCountry: "AR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -34.5998269,
    longitude: -58.3891075,
  },
  areaServed: [
    { "@type": "City", name: "Buenos Aires" },
    { "@type": "Country", name: "Argentina" },
  ],
  sameAs: ["https://www.instagram.com/gonzaleznovillo_abogados/"],
  knowsAbout: [
    "Derecho Penal",
    "Defensa Penal",
    "Representación de Víctimas",
    "Delitos Económicos",
    "Delitos Tributarios",
    "Derecho Penal Económico",
    "Derecho Penal Tributario",
    "Delitos Informáticos",
    "Querella Particular",
  ],
  founder: [
    {
      "@type": "Person",
      name: "Jorge González Novillo",
      jobTitle: "Socio fundador",
    },
    {
      "@type": "Person",
      name: "Matías González Novillo",
      jobTitle: "Socio",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es-AR"
      className={`${poppins.variable} ${playfair.variable} bg-gn-white`}
      suppressHydrationWarning
    >
      <body className="font-sans bg-gn-white text-gn-black" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
