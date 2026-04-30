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
              <span className="text-gn-gray font-medium tracking-widest text-xs uppercase">Defensa Penal Estratégica</span>
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
              Representación legal de alta calidad con compromiso, empatía y excelencia profesional.
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
                Consulta Gratuita
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
                description="Defensa penal estratégica con enfoque en resultados y protección de sus derechos fundamentales."
                icon={<Shield className="w-10 h-10 text-gn-black" />}
                expandedContent={{
                  description: "Ofrecemos una defensa penal robusta y profesional, garantizando el debido proceso y la protección de sus derechos fundamentales en todas las instancias.",
                  services: [
                    "Defensa en juicios penales",
                    "Recursos y apelaciones",
                    "Delitos económicos",
                    "Delitos contra la propiedad",
                    "Asesoramiento preventivo"
                  ]
                }}
              />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <PracticeArea
                title="Derecho Civil"
                description="Asesoramiento integral en derecho civil, contratos, familia y sucesiones."
                icon={<Scale className="w-10 h-10 text-gn-black" />}
                expandedContent={{
                  description: "Nuestro equipo especializado ofrece una amplia gama de servicios para proteger sus derechos y resolver conflictos de manera efectiva.",
                  services: [
                    "Contratos y negociaciones",
                    "Derecho de familia",
                    "Sucesiones y herencias",
                    "Responsabilidad civil",
                    "Derechos reales"
                  ]
                }}
              />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <PracticeArea
                title="Derecho Laboral"
                description="Solución integral en materia laboral y relaciones de trabajo."
                icon={<Briefcase className="w-10 h-10 text-gn-black" />}
                expandedContent={{
                  description: "Brindamos asesoramiento completo en materia laboral, protegiendo los derechos tanto de empleadores como de trabajadores.",
                  services: [
                    "Negociaciones colectivas",
                    "Despidos y liquidaciones",
                    "Accidentes laborales",
                    "Discriminación laboral",
                    "Convenios colectivos"
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
                name: "Matías González Novillo",
                role: "Director",
                specialty: "Defensa Penal",
                description: "Especialista en defensa penal estratégica. Brinda asesoramiento integral con amplia experiencia en litigios complejos.",
                linkedin: "https://linkedin.com/in/matias-gonzalez-novillo",
                image: "/images/mati.jpg"
              },
              {
                name: "Jorge González Novillo",
                role: "Abogado Senior",
                specialty: "Derecho Civil",
                description: "Abogado con amplia trayectoria en derecho civil y comercial. Especialista en negociaciones y resolución de conflictos.",
                linkedin: "#",
                image: "/images/coco.jpg"
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

      {/* Sobre Nosotros */}
      <section className="py-24 md:py-32 bg-gn-white" id="sobre-nosotros">
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
                Nuestra Misión
              </h3>
              <p className="text-gn-gray mb-8 leading-relaxed">
                Ofrecer asesoramiento y representación legal de alta calidad a quienes lo necesiten, asegurando que reciban la compensación y el apoyo que merecen. Nos comprometemos a luchar incansablemente por los derechos de nuestros clientes, actuando con profesionalismo, ética y dedicación siempre.
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
            <span className="text-gn-gray font-medium tracking-widest text-xs uppercase">Comuníquese</span>
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
                      <a href="tel:+123456789" className="text-gn-gray text-sm hover:text-gn-black transition-colors">
                        +123 456 789
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
                      <a href="mailto:contacto@estudiogn.com" className="text-gn-gray text-sm hover:text-gn-black transition-colors">
                        contacto@estudiogn.com
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
