import type { Metadata } from "next";
import { Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins"
});

// Playfair Display as Chronicle Display alternative (similar elegant serif)
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display"
});

export const metadata: Metadata = {
  title: "GN Estudio González Novillo | Defensa Penal Estratégica",
  description: "Estudio González Novillo - Defensa Penal Estratégica. Asesoramiento y representación legal de alta calidad con compromiso, empatía y excelencia.",
  keywords: ["defensa penal", "abogado penal", "estudio jurídico", "González Novillo", "derecho penal", "Argentina"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${poppins.variable} ${playfair.variable} bg-gn-white`} suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#161616" />
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
