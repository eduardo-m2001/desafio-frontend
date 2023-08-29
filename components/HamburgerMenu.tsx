import { useState } from 'react';
import Link from 'next/link';

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="absolute top-4 right-4 z-50">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="text-blue-500 text-2xl bg-white p-2 rounded-full hover:bg-blue-100 transition"
      >
        ☰
      </button>

      {isOpen && (
        <div className="mt-2 w-64 border rounded-lg bg-white shadow-lg">
          <Link href="/">
            <div className="block p-4 text-lg hover:bg-blue-500 hover:text-white transition cursor-pointer" onClick={() => setIsOpen(false)}>Início</div>
          </Link>
          <Link href="/clima">
            <div className="block p-4 text-lg hover:bg-blue-500 hover:text-white transition cursor-pointer" onClick={() => setIsOpen(false)}>Clima</div>
          </Link>
          <Link href="/busca-cep">
            <div className="block p-4 text-lg hover:bg-blue-500 hover:text-white transition cursor-pointer" onClick={() => setIsOpen(false)}>Buscar CEP</div>
          </Link>
          <Link href="/contato">
            <div className="block p-4 text-lg hover:bg-blue-500 hover:text-white transition cursor-pointer" onClick={() => setIsOpen(false)}>Contato</div>
          </Link>
        </div>
      )}
    </div>
  );
}

export default HamburgerMenu;