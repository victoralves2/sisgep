'use client';

import React from 'react';

export default function ControleDenuncias() {
  // Dados simulados para preencher os cards, como na imagem
  const denunciasMock = Array(6).fill({
    nome: 'João Marcos Silva',
    setor: 'Marketing',
    descricao: 'Lorem ipsum dolor sit amet, consectetur...',
  });

  return (
    <main className="flex-1 flex flex-col w-full max-w-[1200px] mx-auto z-10 pb-10">
      
      {/* Cabeçalho da Página */}
      <div className="w-full text-left mb-6 px-2 mt-4">
        <h4 className="text-[#1d4ed8] font-bold tracking-widest text-sm uppercase mb-1">
          Privacidade
        </h4>
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight mb-2">
          Controle de Denúncias
        </h1>
        <p className="text-gray-600 font-medium text-sm md:text-base">
          Espaço para visualizar e avaliar denúncias realizadas por outros sharks
        </p>
      </div>

      {/* Container Principal Branco/Cinza Claro */}
      <div className="w-full bg-[#f4f7fc] backdrop-blur-sm rounded-[2rem] p-6 md:p-8 lg:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-white/60 flex flex-col">
        <h2 className="text-2xl font-semibold text-center text-gray-900 mb-8">
          Denúncias
        </h2>

        {/* Área rolável (Scroll) para os cards */}
        <div className="flex-1 overflow-y-auto pr-2 md:pr-4 custom-scrollbar max-h-[500px]">
          
          {/* Grid responsivo: 1 coluna no celular, 2 no tablet, 3 no desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            
            {denunciasMock.map((denuncia, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100/80 flex flex-col gap-1 transition-all hover:shadow-md"
              >
                <h3 className="text-[17px] font-bold text-gray-900 leading-tight">
                  {denuncia.nome}
                </h3>
                <p className="text-sm font-bold text-gray-800 mb-1">
                  {denuncia.setor}
                </p>
                
                <p className="text-sm text-gray-500 font-medium mb-3">
                  {denuncia.descricao}
                </p>
                
                <div className="mt-auto flex justify-end">
                  {/* BOTÃO ATUALIZADO AQUI */}
                  <button className="bg-[#e2e8f0] hover:bg-[#cbd5e1] text-gray-500 hover:text-gray-700 font-bold text-[11px] px-4 py-1.5 rounded-full transition-colors tracking-wide">
                    Ler mais ...
                  </button>
                </div>
              </div>
            ))}
            
          </div>
        </div>
      </div>

      {/* Estilos CSS customizados embutidos para a barra de rolagem parecida com a imagem */}
      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 14px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #cbd5e1;
          border-radius: 20px;
          border: 4px solid #f4f7fc; /* Cria um "padding" interno na barra */
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: #94a3b8;
        }
      `}} />
    </main>
  );
}