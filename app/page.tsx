'use client';

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown, Scale, Briefcase, Shield, Linkedin } from "lucide-react";
import BackgroundImage from "@/components/BackgroundVideo";
import GoogleMap from "@/components/GoogleMap";
import PracticeArea from "@/components/PracticeArea";
import ContactForm from "@/components/ContactForm";
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
              Asesoramos y representamos tanto a imputados como a víctimas en causas penales de distinta complejidad. Nuestro enfoque combina la defensa penal con el trabajo coordinado en derecho civil, societario y laboral, para resolver el conflicto desde todos los frentes y no solo desde el expediente.
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
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={fadeInUp}>
              <PracticeArea
                title="Defensa Penal"
                description="Representamos a imputados en causas penales complejas, con estrategias orientadas a resultados concretos."
                icon={<Shield className="w-10 h-10 text-gn-black" />}
                expandedContent={{
                  description: "Nuestro enfoque combina la defensa técnica con un análisis integral del conflicto, articulando acciones en sede penal, civil y societaria cuando el caso lo requiere.",
                  services: [
                    "Estafas, fraudes y delitos económicos",
                    "Extorsión y coacción",
                    "Calumnias e injurias",
                    "Denuncias falsas",
                    "Delitos contra la integridad sexual",
                    "Violencia familiar y de género (defensa de imputados)",
                    "Homicidio y lesiones",
                    "Delitos contra la propiedad"
                  ]
                }}
              />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <PracticeArea
                title="Representación de víctimas"
                description="Acompañamos a víctimas de delitos en su rol de querellante, impulsando la causa y protegiendo sus derechos."
                icon={<Scale className="w-10 h-10 text-gn-black" />}
                expandedContent={{
                  description: "Trabajamos junto a las víctimas para que tengan voz activa en el proceso penal, asegurando que sus intereses sean escuchados y defendidos.",
                  services: [
                    "Constitución como querellante",
                    "Impulso de la acción penal",
                    "Reclamos civiles derivados del delito",
                    "Acompañamiento en audiencias y declaraciones",
                    "Medidas de protección"
                  ]
                }}
              />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <PracticeArea
                title="Derecho Civil y Laboral"
                description="Trabajamos causas civiles y laborales conectadas con conflictos penales, o de manera autónoma según el caso."
                icon={<Briefcase className="w-10 h-10 text-gn-black" />}
                expandedContent={{
                  description: "Muchos conflictos penales tienen raíz o consecuencias en el ámbito civil o laboral. Los abordamos de forma coordinada para resolver el problema de fondo.",
                  services: [
                    "Daños y perjuicios",
                    "Conflictos contractuales",
                    "Despidos y reclamos laborales",
                    "Sucesiones y disputas familiares",
                    "Sociedades y conflictos entre socios"
                  ]
                }}
              />
            </motion.div>
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

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              {
                name: "Jorge González Novillo",
                role: "Socio fundador",
                specialty: "Derecho Penal y Civil",
                description: "Abogado con más de 30 años de experiencia en litigios penales y civiles complejos. Ha representado a empresarios, deportistas y figuras públicas en casos de alta exposición.",
                linkedin: "#",
                image: "/images/coco.jpg"
              },
              {
                name: "Matías González Novillo",
                role: "Socio",
                specialty: "Defensa Penal",
                description: "Abogado penalista con experiencia en delitos económicos, extorsiones y defensa de la reputación. Trabaja con foco en la estrategia integral del caso.",
                linkedin: "https://linkedin.com/in/matias-gonzalez-novillo",
                image: "/images/mati.jpg"
              }
            ].map((profesional, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="group"
              >
                <div className="bg-gn-white border border-gn-gray/20 overflow-hidden transition-all duration-300 hover:border-gn-black">
                  {/* Photo container */}
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src={profesional.image}
                      alt={profesional.name}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gn-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <a
                        href={profesional.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gn-white text-gn-black p-3 hover:bg-gn-gray transition-colors"
                        aria-label={`LinkedIn de ${profesional.name}`}
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 bg-gn-black/5 text-gn-black text-xs font-medium tracking-wide mb-3">
                      {profesional.specialty}
                    </span>
                    <h3 className="text-lg font-display text-gn-black mb-1">{profesional.name}</h3>
                    <p className="text-gn-gray text-sm font-medium mb-3">{profesional.role}</p>
                    <p className="text-sm text-gn-gray leading-relaxed line-clamp-3">{profesional.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gn-black">
        <div className="max-w-screen-xl mx-auto px-4">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {[
              { number: "20+", label: "Años de Experiencia" },
              { number: "500+", label: "Casos Resueltos" },
              { number: "98%", label: "Clientes Satisfechos" },
              { number: "4", label: "Áreas de Práctica" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-display text-gn-white mb-2">{stat.number}</div>
                <div className="text-gn-gray text-xs uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* En los medios */}
      <section className="py-24 md:py-32 bg-gn-white" id="medios">
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
              En los medios
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
                source: "Infobae",
                title: "Caso Natacha Jaitt: procesan a Morena Rial por calumnias e injurias",
                url: "https://www.infobae.com/judiciales/2024/11/14/caso-natacha-jaitt-procesan-a-morena-rial-por-calumnias-e-injurias/"
              },
              {
                source: "Infobae",
                title: "Detienen a modelo sueca acusada de extorsionar a un empresario",
                url: "https://www.infobae.com/sociedad/policiales/2024/06/04/detienen-a-alexandra-larsson-la-modelo-sueca-acusada-de-extorsionar-a-un-empresario-argentino/"
              },
              {
                source: "TN",
                title: "Detienen a modelo sueca por extorsión",
                url: "https://tn.com.ar/policiales/2024/06/04/detuvieron-a-alexandra-larsson-la-modelo-sueca-acusada-de-extorsionar-a-un-empresario/"
              },
              {
                source: "Clarín",
                title: "Fraher Group: Denuncian a desarrollador inmobiliario por estafa",
                url: "https://www.clarin.com/policiales/200-damnificados-denuncian-fraude-inmobiliario-millonario-empresa-construia-edificios-pozo_0_hSl3GKi5Wy.html"
              },
              {
                source: "TN",
                title: "Fraher Group: Más de 200 damnificados por presunta estafa inmobiliaria",
                url: "https://tn.com.ar/policiales/2024/08/22/mas-de-200-damnificados-por-una-presunta-estafa-inmobiliaria-les-prometieron-departamentos-y-nunca-entregaron/"
              },
              {
                source: "Infobae",
                title: "Fraher Group: Escándalo inmobiliario deja cientos de afectados",
                url: "https://www.infobae.com/sociedad/policiales/2024/08/22/mas-de-200-familias-denuncian-a-un-empresario-por-estafa-vendio-departamentos-en-pozo-y-nunca-los-entrego/"
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

      {/* Sobre Nosotros */}
      <section className="py-24 md:py-32 bg-gn-white border-t border-gn-gray/20" id="sobre-nosotros">
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
              Sobre Nosotros
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
                Somos un estudio jurídico con sede en la Ciudad de Buenos Aires, especializado en derecho penal y áreas conexas. Con más de 30 años de trayectoria, trabajamos tanto en la defensa de imputados como en la representación de víctimas, en causas que van desde delitos económicos hasta conflictos familiares con aristas penales.
              </p>
              <p className="text-gn-gray mb-6 leading-relaxed">
                Nuestro enfoque es integral: cuando un caso lo requiere, coordinamos la estrategia penal con acciones civiles, laborales o societarias. Creemos que el conflicto no termina en el expediente, y por eso buscamos soluciones que resuelvan el problema de fondo.
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Contact cards */}
              <div className="bg-gn-white border border-gn-gray/20 p-8">
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
                      <p className="text-gn-gray text-sm">Uruguay 763, C1013<br />CABA, Argentina</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gn-black flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-gn-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-gn-black mb-1">Teléfono</h4>
                      <a href="https://wa.me/message/7BQRXOHREOF4L1" target="_blank" rel="noopener noreferrer" className="text-gn-gray text-sm hover:text-gn-black transition-colors">
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
                      <a href="mailto:estudiolegalgn@gmail.com" className="text-gn-gray text-sm hover:text-gn-black transition-colors">
                        estudiolegalgn@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gn-black flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-gn-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-gn-black mb-1">Horario de Atención</h4>
                      <p className="text-gn-gray text-sm">Lun - Vie: 9:00 - 18:00<br />Sáb: 9:00 - 13:00</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="h-[300px] border border-gn-gray/20 overflow-hidden">
                <GoogleMap />
              </div>
            </motion.div>

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
    </main>
  );
}
