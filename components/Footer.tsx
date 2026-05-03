'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gn-black text-gn-white">
      <div className="max-w-screen-xl mx-auto px-4 py-6">
        <p className="text-gn-gray text-xs text-center">
          {currentYear} Estudio González Novillo. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
