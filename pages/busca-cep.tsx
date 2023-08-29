import { useState } from 'react';
import HamburgerMenu from '../components/HamburgerMenu';

function BuscaCEP() {
  const [endereco, setEndereco] = useState('');
  const [resultados, setResultados] = useState([]);

  const buscarCEP = async () => {
    if (!endereco) return;

    const response = await fetch(`https://viacep.com.br/ws/${endereco}/json/`);
    const data = await response.json();

    if (data.erro) {
      setResultados([]);
    } else {
      setResultados([data]);
    }
  };

  return (
    <div className="min-h-screen bg-blue-100 flex items-center justify-center relative">
      <HamburgerMenu />
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md space-y-4">
        <h1 className="text-2xl font-semibold mb-4 text-center">Busca de CEP</h1>
        <div className="flex space-x-4 mb-6">
          <input
            className="flex-grow p-2 rounded border"
            type="text"
            placeholder="Digite o endereço..."
            value={endereco}
            onChange={(e) => setEndereco(e.target.value)}
          />
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded"
            onClick={buscarCEP}
          >
            Buscar
          </button>
        </div>

        {resultados.length > 0 ? (
          <ul className="space-y-2">
            {resultados.map((res, index) => (
              <li key={index} className="border p-4 rounded space-y-2">
                <p><strong>Rua:</strong> {res.logradouro}</p>
                <p><strong>Bairro:</strong> {res.bairro}</p>
                <p><strong>Cidade:</strong> {res.localidade}</p>
                <p><strong>Estado:</strong> {res.uf}</p>
              </li>
            ))}
          </ul>
        ) : (
          endereco && <p className="text-center text-gray-500">Nenhum resultado encontrado.</p>
        )}
      </div>
    </div>
  );
}

export default BuscaCEP;
