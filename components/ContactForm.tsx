'use client';

import { useState, useEffect } from 'react';
import { User, Mail, MessageSquare, FileText, Send, CheckCircle, AlertCircle } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const [focusedField, setFocusedField] = useState<string | null>(null);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (status === 'success') {
      timeoutId = setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 5000);
    }
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [status]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      let data;
      try {
        data = await response.json();
      } catch (error) {
        throw new Error('Error al procesar la respuesta del servidor');
      }

      if (!response.ok) {
        throw new Error(data.error || 'Error al enviar el mensaje');
      }

      setStatus('success');
      setMessage('Mensaje enviado correctamente. Nos pondremos en contacto contigo pronto.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error: any) {
      setStatus('error');
      setMessage(error.message || 'Error al enviar el mensaje. Por favor, intenta nuevamente.');
      console.error('Error en el formulario:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const inputClasses = (fieldName: string) => `
    w-full px-4 py-4 pl-12 border transition-all duration-300 bg-white
    ${focusedField === fieldName
      ? 'border-gn-black ring-1 ring-gn-black/10'
      : 'border-gn-gray/30 hover:border-gn-gray'
    }
    focus:outline-none focus:border-gn-black focus:ring-1 focus:ring-gn-black/10
  `;

  const iconClasses = (fieldName: string) => `
    absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors duration-300
    ${focusedField === fieldName ? 'text-gn-black' : 'text-gn-gray'}
  `;

  return (
    <form onSubmit={handleSubmit} className="bg-gn-white border border-gn-gray/20 p-8">
      <h3 className="text-xl font-display text-gn-black mb-6">
        Envíenos un mensaje
      </h3>

      {message && (
        <div className={`p-4 mb-6 flex items-start gap-3 ${
          status === 'success'
            ? 'bg-green-50 text-green-700 border border-green-200'
            : status === 'error'
            ? 'bg-red-50 text-red-700 border border-red-200'
            : 'bg-blue-50 text-blue-700 border border-blue-200'
        }`}>
          {status === 'success' ? (
            <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
          ) : (
            <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
          )}
          <p className="text-sm">{message}</p>
        </div>
      )}

      <div className="space-y-4">
        <div className="relative">
          <User className={iconClasses('name')} />
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onFocus={() => setFocusedField('name')}
            onBlur={() => setFocusedField(null)}
            required
            placeholder="Nombre completo"
            className={inputClasses('name')}
          />
        </div>

        <div className="relative">
          <Mail className={iconClasses('email')} />
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onFocus={() => setFocusedField('email')}
            onBlur={() => setFocusedField(null)}
            required
            placeholder="Correo electrónico"
            className={inputClasses('email')}
          />
        </div>

        <div className="relative">
          <FileText className={iconClasses('subject')} />
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            onFocus={() => setFocusedField('subject')}
            onBlur={() => setFocusedField(null)}
            required
            placeholder="Asunto"
            className={inputClasses('subject')}
          />
        </div>

        <div className="relative">
          <MessageSquare className={`absolute left-4 top-4 w-4 h-4 transition-colors duration-300 ${
            focusedField === 'message' ? 'text-gn-black' : 'text-gn-gray'
          }`} />
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            onFocus={() => setFocusedField('message')}
            onBlur={() => setFocusedField(null)}
            rows={5}
            required
            placeholder="Su mensaje..."
            className={`
              w-full px-4 py-4 pl-12 border transition-all duration-300 bg-white resize-none
              ${focusedField === 'message'
                ? 'border-gn-black ring-1 ring-gn-black/10'
                : 'border-gn-gray/30 hover:border-gn-gray'
              }
              focus:outline-none focus:border-gn-black focus:ring-1 focus:ring-gn-black/10
            `}
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={status === 'loading'}
          className={`
            w-full py-4 px-6 font-medium text-sm tracking-wide
            flex items-center justify-center gap-2
            transition-all duration-300
            ${status === 'loading'
              ? 'bg-gn-gray text-gn-white cursor-not-allowed'
              : 'bg-gn-black text-gn-white hover:bg-gn-gray'
            }
          `}
        >
          {status === 'loading' ? (
            <>
              <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Enviando...
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              Enviar mensaje
            </>
          )}
        </button>
      </div>
    </form>
  );
}
