'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    consulta: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // TODO: Implement backend connection
    // For now, simulate a submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({ nombre: '', email: '', telefono: '', consulta: '' });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  return (
    <div className="bg-gn-white border border-gn-gray/20 p-8 h-full">
      <h3 className="text-xl font-display text-gn-black mb-6">
        Dejanos tu consulta
      </h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <input
            type="text"
            name="nombre"
            id="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
            placeholder=" "
            className="floating-input"
          />
          <label htmlFor="nombre" className="floating-label">
            Nombre completo *
          </label>
        </div>

        <div className="relative">
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder=" "
            className="floating-input"
          />
          <label htmlFor="email" className="floating-label">
            Email *
          </label>
        </div>

        <div className="relative">
          <input
            type="tel"
            name="telefono"
            id="telefono"
            value={formData.telefono}
            onChange={handleChange}
            placeholder=" "
            className="floating-input"
          />
          <label htmlFor="telefono" className="floating-label">
            Teléfono
          </label>
        </div>

        <div className="relative">
          <textarea
            name="consulta"
            id="consulta"
            rows={4}
            value={formData.consulta}
            onChange={handleChange}
            required
            placeholder=" "
            className="floating-input resize-none"
          />
          <label htmlFor="consulta" className="floating-label">
            Tu consulta *
          </label>
        </div>

        <motion.button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gn-black text-gn-white px-6 py-4 text-sm font-medium tracking-wide hover:bg-gn-gray transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          whileTap={{ scale: 0.98 }}
        >
          {isSubmitting ? 'Enviando...' : 'Enviar consulta'}
        </motion.button>

        {submitStatus === 'success' && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-green-600 text-sm text-center"
          >
            Mensaje enviado correctamente. Nos pondremos en contacto pronto.
          </motion.p>
        )}

        {submitStatus === 'error' && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-red-600 text-sm text-center"
          >
            Hubo un error al enviar el mensaje. Por favor, intente nuevamente.
          </motion.p>
        )}
      </form>
    </div>
  );
}
