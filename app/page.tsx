'use client';

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import BackgroundImage from "@/components/BackgroundVideo";
import PracticeAreasUnified from "@/components/PracticeAreasUnified";
import ProfessionalsGrid from "@/components/ProfessionalsGrid";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Smooth scroll function
const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
  e.preventDefault();
  const element = document.querySelector(targetId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden bg-gn-black">
        <BackgroundImage />
        <div className="absolute inset-0 hero-pattern z-[1]" />
        <div className="relative z-10 max-w-screen-xl mx-auto px-4 h-screen flex items-center">
          <motion.div
            className="max-w-2xl text-gn-white"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-12 h-[1px] bg-gn-gray" />
              <span className="text-gn-gray font-medium tracking-widest text-xs uppercase">Derecho penal y áreas conexas</span>
            </motion.div>
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-display mb-6 tracking-tight leading-[1.1] text-balance"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Estudio{" "}
              <span className="text-gn-gray">González</span>{" "}
              Novillo
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl mb-10 text-gn-gray leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Asesoramos y representamos a imputados y víctimas en causas penales de distinta complejidad.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <a
                href="#contacto"
                onClick={(e) => scrollToSection(e, '#contacto')}
                className="inline-flex items-center justify-center bg-gn-white text-gn-black px-8 py-4 text-sm font-medium tracking-wide hover:bg-gn-gray hover:text-gn-white transition-all duration-300 cursor-pointer"
              >
                Consultanos
              </a>
              <a
                href="#areas"
                onClick={(e) => scrollToSection(e, '#areas')}
                className="inline-flex items-center justify-center border border-gn-gray text-gn-white px-8 py-4 text-sm font-medium tracking-wide hover:bg-gn-white hover:text-gn-black hover:border-gn-white transition-all duration-300 cursor-pointer"
              >
                Nuestros Servicios
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <a
            href="#areas"
            onClick={(e) => scrollToSection(e, '#areas')}
            className="flex flex-col items-center text-gn-gray hover:text-gn-white transition-colors cursor-pointer"
          >
            <span className="text-xs tracking-widest uppercase mb-2">Explorar</span>
            <ChevronDown className="w-5 h-5 animate-bounce-slow" />
          </a>
        </motion.div>
      </section>



      {/* Áreas de Práctica */}
      <section className="py-24 md:py-32 bg-gn-white" id="areas">
        <div className="max-w-screen-xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-gn-gray font-medium tracking-widest text-xs uppercase">Nuestros Servicios</span>
            <h2 className="text-3xl md:text-5xl font-display text-gn-black mt-3 tracking-tight">
              Áreas de Práctica
            </h2>
            <div className="section-divider" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <PracticeAreasUnified />
          </motion.div>
        </div>
      </section>

      {/* Profesionales Destacados */}
      <section className="py-24 md:py-32 bg-gn-white border-t border-gn-gray/20" id="profesionales">
        <div className="max-w-screen-xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-gn-gray font-medium tracking-widest text-xs uppercase">Equipo Legal</span>
            <h2 className="text-3xl md:text-5xl font-display text-gn-black mt-3 tracking-tight">
              Nuestros Profesionales
            </h2>
            <div className="section-divider" />
          </motion.div>

          <ProfessionalsGrid />
        </div>
      </section>

      {/* Prensa */}
      <section className="py-24 md:py-32 bg-gn-white" id="prensa">
        <div className="max-w-screen-xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-gn-gray font-medium tracking-widest text-xs uppercase">Repercusión</span>
            <h2 className="text-3xl md:text-5xl font-display text-gn-black mt-3 tracking-tight">
              Prensa
            </h2>
            <div className="section-divider" />
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              {
                source: "Perfil",
                title: "Habló el abogado de Florencia Cocucci, la supuesta novia de Nisman: \"Está aterrada\"",
                url: "https://www.perfil.com/noticias/politica/hablo-el-abogado-de-florencia-cocucci-la-supuesta-novia-de-nisman-esta-aterrada-0303-0051.phtml"
              },
              {
                source: "Diario Popular",
                title: "Abogado de Larsson: \"La denuncia es por extorsión y no por abuso\"",
                url: "https://www.diariopopular.com.ar/espectaculos/abogado-larsson-la-denuncia-es-extorsion-y-no-abuso-n136219"
              },
              {
                source: "Infobae",
                title: "Los detalles de la segunda denuncia penal a Marcelo Moretti, presentada por un dirigente de San Lorenzo que estuvo en su espacio",
                url: "https://www.infobae.com/deportes/2025/04/23/los-detalles-de-la-segunda-denuncia-penal-a-marcelo-moretti-presentada-por-un-dirigente-de-san-lorenzo-que-estuvo-en-su-espacio/"
              }
            ].map((noticia, i) => (
              <motion.a
                key={i}
                href={noticia.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeInUp}
                className="group block"
              >
                <div className="h-full bg-gn-white border border-gn-gray/20 p-6 transition-all duration-300 hover:border-gn-black hover:shadow-lg">
                  <span className="inline-block px-3 py-1 bg-gn-black text-gn-white text-xs font-medium tracking-wide mb-4">
                    {noticia.source}
                  </span>
                  <h3 className="text-lg font-display text-gn-black group-hover:text-gn-gray transition-colors leading-snug">
                    {noticia.title}
                  </h3>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Nosotros */}
      <section className="py-24 md:py-32 bg-gn-white border-t border-gn-gray/20" id="nosotros">
        <div className="max-w-screen-xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-gn-gray font-medium tracking-widest text-xs uppercase">Conózcanos</span>
            <h2 className="text-3xl md:text-5xl font-display text-gn-black mt-3 tracking-tight">
              Nosotros
            </h2>
            <div className="section-divider" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/equipo-gn.jpg"
                  alt="Equipo GN Estudio González Novillo"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-l border-t border-gn-gray/30" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r border-b border-gn-gray/30" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-display text-gn-black mb-4">
                Quiénes Somos
              </h3>
              <p className="text-gn-gray mb-6 leading-relaxed">
                Somos un estudio jurídico con sede en la Ciudad de Buenos Aires, especializado en derecho penal y áreas conexas. Con más de 20 años de trayectoria, trabajamos tanto en la defensa de imputados como en la representación de víctimas, en causas que van desde delitos económicos hasta conflictos familiares con aristas penales.
              </p>
              <p className="text-gn-gray mb-6 leading-relaxed">
                Nuestro enfoque es integral: cuando un caso lo requiere, coordinamos la estrategia penal con acciones civiles, laborales o societarias. Entendemos que el conflicto tiene distintas aristas y por eso buscamos soluciones que resuelvan el problema de fondo.
              </p>
              <p className="text-gn-gray leading-relaxed">
                Trabajamos con compromiso, claridad y un trato cercano. Sabemos que cada caso afecta la vida de una persona, y eso guía nuestra forma de trabajar.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section className="py-24 md:py-32 bg-gn-white border-t border-gn-gray/20" id="contacto">
        <div className="max-w-screen-xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-gn-gray font-medium tracking-widest text-xs uppercase">Hablemos</span>
            <h2 className="text-3xl md:text-5xl font-display text-gn-black mt-3 tracking-tight">
              Contacto
            </h2>
            <div className="section-divider" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-gn-white border border-gn-gray/20 p-8 h-full">
                <h3 className="text-xl font-display text-gn-black mb-6">
                  Información de Contacto
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gn-black flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-gn-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-gn-black mb-1">Dirección</h4>
                      <p className="text-gn-gray text-sm">
                        Uruguay 763, C1013<br />CABA, Argentina
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gn-black flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-gn-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-gn-black mb-1">Teléfono/WhatsApp</h4>
                      <a href="https://wa.me/message/7BQRXOHREOF4L1" target="_blank" rel="noopener noreferrer" className="text-gn-black text-sm font-medium underline underline-offset-2 hover:text-gn-gray transition-colors">
                        +54 9 11 5476 3721
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gn-black flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-gn-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-gn-black mb-1">Email</h4>
                      <a href="mailto:gonzaleznovilloabogados@gmail.com" className="text-gn-gray text-sm hover:text-gn-black transition-colors">
                        gonzaleznovilloabogados@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gn-black flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-gn-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="2" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" strokeWidth="2" />
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-gn-black mb-1">Instagram</h4>
                      <a href="https://www.instagram.com/gonzaleznovillo_abogados/" target="_blank" rel="noopener noreferrer" className="text-gn-black text-sm font-medium underline underline-offset-2 hover:text-gn-gray transition-colors">
                        @gonzaleznovillo_abogados
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-full h-full min-h-[400px] overflow-hidden border border-gn-gray/20">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3284.1714080357265!2d-58.3891075!3d-34.5998269!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccac76e4be365%3A0xb3558178c7ed599b!2sUruguay%20763%2C%20C1015ABO%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1777664996811!5m2!1ses!2sar" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, minHeight: '400px' }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación del Estudio González Novillo"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </main>
  );
}
