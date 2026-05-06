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
    setSubmitStatus('idle');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        console.error('[v0] API error:', data);
        throw new Error(data.error || 'Error al enviar');
      }

      setSubmitStatus('success');
      setFormData({ nombre: '', email: '', telefono: '', consulta: '' });
    } catch (err) {
      console.error('[v0] Form submission error:', err);
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
            className="peer w-full px-4 pt-6 pb-2 border border-gn-gray bg-white focus:outline-none focus:border-gn-black focus:ring-1 focus:ring-gn-black/20 transition-all duration-300"
          />
          <label htmlFor="nombre" className="absolute left-4 top-4 text-gn-gray transition-all duration-300 pointer-events-none peer-focus:text-xs peer-focus:top-2 peer-focus:text-gn-black peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:top-2">
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
            className="peer w-full px-4 pt-6 pb-2 border border-gn-gray bg-white focus:outline-none focus:border-gn-black focus:ring-1 focus:ring-gn-black/20 transition-all duration-300"
          />
          <label htmlFor="email" className="absolute left-4 top-4 text-gn-gray transition-all duration-300 pointer-events-none peer-focus:text-xs peer-focus:top-2 peer-focus:text-gn-black peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:top-2">
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
            className="peer w-full px-4 pt-6 pb-2 border border-gn-gray bg-white focus:outline-none focus:border-gn-black focus:ring-1 focus:ring-gn-black/20 transition-all duration-300"
          />
          <label htmlFor="telefono" className="absolute left-4 top-4 text-gn-gray transition-all duration-300 pointer-events-none peer-focus:text-xs peer-focus:top-2 peer-focus:text-gn-black peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:top-2">
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
            className="peer w-full px-4 pt-6 pb-2 border border-gn-gray bg-white focus:outline-none focus:border-gn-black focus:ring-1 focus:ring-gn-black/20 transition-all duration-300 resize-none"
          />
          <label htmlFor="consulta" className="absolute left-4 top-4 text-gn-gray transition-all duration-300 pointer-events-none peer-focus:text-xs peer-focus:top-2 peer-focus:text-gn-black peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:top-2">
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
