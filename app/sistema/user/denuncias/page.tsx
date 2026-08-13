// app/denuncias/page.tsx
'use client';

import React, { useState } from 'react';
import { Send } from 'lucide-react';

export default function Denuncias() {
  const [anonimo, setAnonimo] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Denúncia enviada ${anonimo ? 'anonimamente' : 'com identificação'}!`);
  };

  return (
    <main className="flex-1 flex flex-col items-center justify-center w-full max-w-2xl mx-auto z-10 pb-10">
      <div className="w-full text-center md:text-left mb-6 px-2">
        <h4 className="text-[#1d4ed8] font-bold tracking-widest text-sm uppercase mb-1">Privacidade</h4>
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight mb-2">CANAL DE DENÚNCIAS</h1>
        <p className="text-gray-600 font-medium">Espaço seguro e confidencial. Sua denúncia será analisada com responsabilidade</p>
      </div>

      <div className="w-full bg-[#f4f7fc] backdrop-blur-sm rounded-3xl p-6 md:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-white/60">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-8">Denúncia</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-800 ml-1">Categoria</label>
              <select className="w-full px-4 py-3 bg-white/80 border border-gray-200 rounded-xl text-gray-700 outline-none focus:border-[#1d4ed8] focus:ring-2 focus:ring-[#1d4ed8]/20 transition-all appearance-none cursor-pointer" required defaultValue="">
                <option value="" disabled>Selecione</option>
                <option value="agressao">Agressão</option>
                <option value="assedio">Assédio</option>
                <option value="fraude">Fraude</option>
                <option value="outro">Outro</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-800 ml-1">Data do ocorrido</label>
              <input type="date" className="w-full px-4 py-3 bg-white/80 border border-gray-200 rounded-xl text-gray-700 outline-none focus:border-[#1d4ed8] focus:ring-2 focus:ring-[#1d4ed8]/20 transition-all cursor-pointer" required />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-800 ml-1">Descrição</label>
            <textarea placeholder="Descreva o ocorrido com o máximo de detalhes possível" rows={5} required className="w-full px-4 py-4 bg-white/80 border border-gray-200 rounded-2xl text-gray-700 placeholder-gray-400 outline-none focus:border-[#1d4ed8] focus:ring-2 focus:ring-[#1d4ed8]/20 transition-all resize-none"></textarea>
          </div>

          <div className="flex flex-col gap-1 mt-2">
            <div className="flex items-center gap-3">
              <label className="text-sm font-semibold text-gray-800 cursor-pointer select-none" onClick={() => setAnonimo(!anonimo)}>
                Enviar anônimamente
              </label>

              <button type="button" onClick={() => setAnonimo(!anonimo)} className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${anonimo ? 'bg-[#1d4ed8]' : 'bg-gray-300'}`}>
                <span className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${anonimo ? 'translate-x-5' : 'translate-x-0'}`} />
              </button>
            </div>
            <p className="text-xs text-gray-500 font-medium">Recomendado. Seus dados não serão associados a denúncia</p>
          </div>

          <div className="pt-4 flex justify-center">
            <button type="submit" className="flex items-center gap-2 bg-[#1d4ed8] hover:bg-[#153eb0] text-white font-semibold py-3 px-8 rounded-full transition-all active:scale-[0.98] shadow-lg shadow-blue-900/20">
              Enviar Denúncia
              <Send size={16} />
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}