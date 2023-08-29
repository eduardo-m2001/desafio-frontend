import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-blue-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md space-y-4 text-center">
        <h1 className="text-2xl font-semibold mb-4">Seja bem-vindo(a)!</h1>
        <p>Escolha uma das opções abaixo:</p>

        <ul className="space-y-4 mt-6">
          <li>
            <Link href="/clima" className="block px-4 py-2 w-full bg-blue-500 text-white rounded hover:bg-blue-600">
              Ver o Clima
            </Link>
          </li>
          <li>
            <Link href="/busca-cep" className="block px-4 py-2 w-full bg-blue-500 text-white rounded hover:bg-blue-600">
              Buscar CEP
            </Link>
          </li>
          <li>
            <Link href="/contato" className="block px-4 py-2 w-full bg-blue-500 text-white rounded hover:bg-blue-600">
              Formulário de Contato
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}