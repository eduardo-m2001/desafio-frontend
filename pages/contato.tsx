import { useRef } from 'react';
import HamburgerMenu from '../components/HamburgerMenu';

function Contato() {
  const nomeRef = useRef(null);
  const emailRef = useRef(null);
  const mensagemRef = useRef(null);
  const arquivoRef = useRef(null);

  const enviarFormulario = () => {
    const dados = {
      nome: nomeRef.current.value,
      email: emailRef.current.value,
      mensagem: mensagemRef.current.value,
      arquivo: arquivoRef.current.files[0] ? arquivoRef.current.files[0].name : null
    };
    console.log(dados);
  };

  return (
    <div className="min-h-screen bg-blue-100 flex items-center justify-center relative">
      <HamburgerMenu />
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md space-y-4">
        <h1 className="text-2xl font-semibold mb-4 text-center">Contato</h1>
        <div className="space-y-4">
          <input
            className="w-full p-2 rounded border"
            type="text"
            placeholder="Nome"
            ref={nomeRef}
          />
          <input
            className="w-full p-2 rounded border"
            type="email"
            placeholder="Email"
            ref={emailRef}
          />
          <textarea
            className="w-full p-2 rounded border"
            rows="5"
            placeholder="Mensagem"
            ref={mensagemRef}
          ></textarea>
          <input
            className="w-full p-2 rounded border"
            type="file"
            accept=".pdf"
            ref={arquivoRef}
          />
          <button
            className="w-full px-4 py-2 bg-blue-500 text-white rounded"
            onClick={enviarFormulario}
          >
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contato;