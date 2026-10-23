'use client';

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import HeroPortrait from "@/components/HeroPortrait";
import PracticeAreasUnified from "@/components/PracticeAreasUnified";
import ProfessionalsGrid from "@/components/ProfessionalsGrid";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ContactForm from "@/components/ContactForm";
import PressCarousel from "@/components/PressCarousel";
import CasesCarousel from "@/components/CasesCarousel";

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
        <div className="absolute inset-0 hero-pattern z-[1]" aria-hidden="true" />
        <div className="relative z-10 max-w-screen-xl mx-auto px-4 min-h-screen flex items-center pt-32 md:pt-44 pb-24">
          <div className="grid w-full items-center gap-10 lg:grid-cols-[minmax(0,1.15fr)_280px] lg:gap-16">
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
                <div className="w-12 h-px bg-gn-gold-light" />
                <span className="text-gn-gold-light font-medium tracking-widest text-xs uppercase">Derecho penal</span>
              </motion.div>
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-display mb-6 tracking-tight leading-[1.08] text-balance"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Estudio{" "}
                <span className="italic text-gn-gold-light">González</span>{" "}
                Novillo
              </motion.h1>
              <motion.p
                className="text-lg md:text-xl mb-10 text-gn-white/80 leading-relaxed max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Defensas penales y querellas en CABA, provincia de Buenos Aires y el fuero federal. Acompañamiento directo en todas las etapas del proceso a imputados o víctimas de delitos.
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
                  className="inline-flex items-center justify-center bg-gn-white text-gn-black px-8 py-4 text-sm font-medium tracking-wide hover:bg-gn-gold-light transition-all duration-300 cursor-pointer"
                >
                  Consultanos
                </a>
                <a
                  href="#areas"
                  onClick={(e) => scrollToSection(e, '#areas')}
                  className="inline-flex items-center justify-center border border-gn-gold-light/70 text-gn-white px-8 py-4 text-sm font-medium tracking-wide hover:bg-gn-white hover:text-gn-black hover:border-gn-white transition-all duration-300 cursor-pointer"
                >
                  Nuestros Servicios
                </a>
              </motion.div>
            </motion.div>
            <HeroPortrait />
          </div>
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
            className="flex flex-col items-center text-gn-gold-light hover:text-gn-white transition-colors cursor-pointer"
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
            <span className="text-gn-gold font-medium tracking-widest text-xs uppercase">Nuestros Servicios</span>
            <h2 className="text-3xl md:text-5xl font-display text-gn-black mt-3 tracking-tight">
              Áreas de Práctica
            </h2>
            <div className="section-divider" />
            <p className="mx-auto mt-8 max-w-3xl text-base md:text-lg leading-relaxed text-gn-stone">
              El estudio se dedica al derecho penal. Intervenimos en la defensa de personas imputadas y en la representación de víctimas que se constituyen como querellantes, ante la justicia de la Ciudad Autónoma de Buenos Aires, los tribunales de la provincia de Buenos Aires y el fuero federal.
            </p>
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

      {/* Casos */}
      <section className="py-24 md:py-32 bg-gn-charcoal" id="casos">
        <div className="max-w-screen-xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-gn-gold-light font-medium tracking-widest text-xs uppercase">Resultados</span>
            <h2 className="text-3xl md:text-5xl font-display text-gn-white mt-3 tracking-tight">
              Casos
            </h2>
            <div className="w-16 h-px bg-gn-gold-light mx-auto mt-4" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <CasesCarousel dark />
          </motion.div>
        </div>
      </section>

      {/*
        PLACEHOLDERS — no reemplazar por contenido inventado.
        Cuando el estudio envíe el material, sustituir solo los textos
        marcados entre corchetes.
        - Caso destacado: caso y resultado provistos por el estudio.
        - Testimonio de cliente: cita textual provista por el estudio.
      */}
      <section
        className="py-20 md:py-24 bg-gn-sand border-y border-dashed border-gn-burgundy/40"
        id="pendientes"
        aria-label="Bloques pendientes de contenido del estudio"
      >
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-gn-burgundy font-medium tracking-widest text-xs uppercase">Pendiente de publicación</span>
            <h2 className="text-3xl md:text-4xl font-display text-gn-black mt-3 tracking-tight">
              Material a completar por el estudio
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gn-stone">
              Estos recuadros están reservados. No contienen un caso ni un testimonio reales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <article className="border border-dashed border-gn-burgundy/60 bg-gn-white p-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gn-burgundy">
                Pendiente · no es un dato real
              </p>
              <h3 className="mt-4 font-display text-2xl text-gn-black">Caso destacado</h3>
              <p className="mt-4 leading-relaxed text-gn-stone">
                [PENDIENTE: caso destacado provisto por el estudio]
              </p>
              <p className="mt-6 text-xs uppercase tracking-wider text-gn-stone/80">
                Resultado: [PENDIENTE: resultado provisto por el estudio]
              </p>
            </article>

            <article className="border border-dashed border-gn-burgundy/60 bg-gn-white p-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gn-burgundy">
                Pendiente · no es un dato real
              </p>
              <h3 className="mt-4 font-display text-2xl text-gn-black">Testimonio de cliente</h3>
              <blockquote className="mt-4 border-l-2 border-gn-burgundy/40 pl-4 font-display text-xl italic leading-relaxed text-gn-stone">
                [PENDIENTE: testimonio de cliente provisto por el estudio]
              </blockquote>
            </article>
          </div>
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
            <span className="text-gn-gold font-medium tracking-widest text-xs uppercase">Repercusión</span>
            <h2 className="text-3xl md:text-5xl font-display text-gn-black mt-3 tracking-tight">
              Prensa
            </h2>
            <div className="section-divider" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <PressCarousel />
          </motion.div>
        </div>
      </section>

      {/* Nosotros */}
      <section className="py-24 md:py-32 bg-gn-sand" id="nosotros">
        <div className="max-w-screen-xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-gn-gold font-medium tracking-widest text-xs uppercase">Conózcanos</span>
            <h2 className="text-3xl md:text-5xl font-display text-gn-black mt-3 tracking-tight">
              Nosotros
            </h2>
            <div className="section-divider" />
          </motion.div>

          {/* Quiénes Somos - intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto mb-16 md:mb-20"
          >
            <h3 className="text-2xl font-display text-gn-black mb-6 text-center">
              Quiénes Somos
            </h3>
            <p className="text-gn-stone mb-6 leading-relaxed">
              Somos un estudio jurídico con sede en la Ciudad Autónoma de Buenos Aires, especializado en derecho penal, con más de 20 años de trayectoria. La práctica tiene dos ejes: la defensa de personas imputadas y la representación de víctimas que impulsan la causa como querellantes.
            </p>
            <p className="text-gn-stone mb-6 leading-relaxed">
              Actuamos en la Ciudad Autónoma de Buenos Aires, en la provincia de Buenos Aires y en el fuero federal en todo el país. El acompañamiento recorre las etapas del proceso penal: el inicio de la investigación, las medidas cautelares, las audiencias, las declaraciones y, cuando el caso lo requiere, el juicio.
            </p>
            <p className="text-gn-stone mb-6 leading-relaxed">
              El estudio lo integran Jorge González Novillo, socio fundador, y Matías González Novillo, socio. Debajo figuran la formación y la trayectoria de cada uno.
            </p>
            <p className="text-gn-stone mb-6 leading-relaxed">
              Entendemos que detrás de cada causa hay una persona y un conflicto con más de una arista. Por eso no lo miramos solo desde el tipo penal. Cuando hace falta, coordinamos la estrategia con estudios de confianza en materia civil, comercial y laboral, de modo que la respuesta abarque el problema y no únicamente el expediente.
            </p>
            <p className="text-gn-stone leading-relaxed">
              Nos guían el compromiso, la claridad y un trato cercano. Sabemos que cada causa afecta la vida de quien nos confía su defensa, y también la de quien acude como víctima, y así lo tomamos.
            </p>
          </motion.div>

          {/* El equipo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="text-xl md:text-2xl font-display text-gn-black tracking-tight">
              El equipo
            </h3>
          </motion.div>

          <ProfessionalsGrid />
        </div>
      </section>

      {/* Contacto */}
      <section className="py-24 md:py-32 bg-gn-white border-t border-gn-stone/15" id="contacto">
        <div className="max-w-screen-xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-gn-gold font-medium tracking-widest text-xs uppercase">Hablemos</span>
            <h2 className="text-3xl md:text-5xl font-display text-gn-black mt-3 tracking-tight">
              Contacto
            </h2>
            <div className="section-divider" />
          </motion.div>

          {/* Contact Info and Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-gn-white border border-gn-stone/15 p-8 h-full">
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
                      <a
                        href="https://maps.google.com/?q=Uruguay+763,+CABA,+Argentina"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gn-black text-sm font-medium underline underline-offset-2 hover:text-gn-gold transition-colors"
                      >
                        Uruguay 763, C1013<br />CABA, Argentina
                      </a>
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
                      <a href="https://wa.me/message/7BQRXOHREOF4L1" target="_blank" rel="noopener noreferrer" className="text-gn-black text-sm font-medium underline underline-offset-2 hover:text-gn-gold transition-colors">
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
                      <a href="mailto:estudio@gonzaleznovilloabogados.com" className="text-gn-black text-sm font-medium underline underline-offset-2 hover:text-gn-gold transition-colors break-all">
                        estudio@gonzaleznovilloabogados.com
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
                      <a href="https://www.instagram.com/gonzaleznovillo_abogados/" target="_blank" rel="noopener noreferrer" className="text-gn-black text-sm font-medium underline underline-offset-2 hover:text-gn-gold transition-colors">
                        @gonzaleznovillo_abogados
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <ContactForm />
            </motion.div>
          </div>


        </div>
      </section>

      <Footer />
      <ScrollToTop />
      <FloatingWhatsApp />
    </main>
  );
}
