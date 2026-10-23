/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Identidad sobria: navy, marfil cálido y acentos contenidos.
        // gn-black conserva el nombre histórico y ahora es el navy principal,
        // para que los componentes existentes acompañen la paleta.
        'gn-black': '#101A2A',
        'gn-navy': '#101A2A',
        'gn-charcoal': '#1E2C40',
        'gn-gray': '#C3B6A4',
        'gn-stone': '#4A433C',
        'gn-white': '#F4EFE6',
        'gn-ivory': '#F4EFE6',
        'gn-sand': '#E8E0D2',
        'gn-gold': '#7A5E32',
        'gn-gold-light': '#D4BC8A',
        'gn-burgundy': '#6E3038',
      },
      fontFamily: {
        'display': ['var(--font-display)', 'Georgia', 'serif'],
        'sans': ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
