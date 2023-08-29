import { useRef, useState } from 'react';
import HamburgerMenu from '../components/HamburgerMenu';

function Contato() {
  const nomeRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const mensagemRef = useRef<HTMLTextAreaElement>(null);
  const arquivoRef = useRef<HTMLInputElement>(null);

  const [forceUpdate, setForceUpdate] = useState(0);

  const limparCampos = () => {
    if (nomeRef.current) nomeRef.current.value = "";
    if (emailRef.current) emailRef.current.value = "";
    if (mensagemRef.current) mensagemRef.current.value = "";
    if (arquivoRef.current) arquivoRef.current.value = "";
    setForceUpdate(prev => prev + 1); 
  };

  const enviarFormulario = () => {
    const dados = {
      nome: nomeRef.current?.value,
      email: emailRef.current?.value,
      mensagem: mensagemRef.current?.value,
      arquivo: arquivoRef.current?.files?.[0] ? arquivoRef.current.files[0].name : null
    };
    console.log(dados);

    limparCampos();
    alert("Formulário enviado com sucesso!");
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
            rows={5}
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
