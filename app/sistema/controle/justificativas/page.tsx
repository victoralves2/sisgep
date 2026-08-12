'use client';

import React from 'react';

export default function ControleJustificativas() {
  // Dados simulados para preencher os cards, idênticos aos da imagem
  const justificativasMock = [
    { nome: 'João Marcos Silva', setor: 'Marketing', descricao: 'Lorem ipsum dolor sit amet, consectetur...', data: 'Seg - 27/07/2026', status: 'negada' },
    { nome: 'João Marcos Silva', setor: 'Marketing', descricao: 'Lorem ipsum dolor sit amet, consectetur...', data: 'Seg - 27/07/2026', status: 'em_analise' },
    { nome: 'João Marcos Silva', setor: 'Marketing', descricao: 'Lorem ipsum dolor sit amet, consectetur...', data: 'Seg - 27/07/2026', status: 'em_analise' },
    { nome: 'João Marcos Silva', setor: 'Marketing', descricao: 'Lorem ipsum dolor sit amet, consectetur...', data: 'Seg - 27/07/2026', status: 'em_analise' },
    { nome: 'João Marcos Silva', setor: 'Marketing', descricao: 'Lorem ipsum dolor sit amet, consectetur...', data: 'Seg - 27/07/2026', status: 'aprovada' },
    { nome: 'João Marcos Silva', setor: 'Marketing', descricao: 'Lorem ipsum dolor sit amet, consectetur...', data: 'Seg - 27/07/2026', status: 'aprovada' },
  ];

  // Função para retornar as cores e textos corretos das tags de status
  const formatStatus = (status: string) => {
    switch (status) {
      case 'negada':
        return { text: 'Negada', classes: 'bg-[#fca5a5] text-red-900' };
      case 'em_analise':
        return { text: 'Em análise', classes: 'bg-[#fde047] text-yellow-900' };
      case 'aprovada':
        return { text: 'Aprovada', classes: 'bg-[#86efac] text-green-900' };
      default:
        return { text: 'Desconhecido', classes: 'bg-gray-300 text-gray-800' };
    }
  };

  return (
    <main className="flex-1 flex flex-col w-full max-w-[1200px] mx-auto z-10 pb-10">
      
      {/* Cabeçalho da Página Centralizado */}
      <div className="w-full text-center mb-8 mt-2">
        <h4 className="text-gray-500 font-bold text-lg mb-1">
          Painel de Justificativas
        </h4>
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-2">
          Olá, Gepiano!
        </h1>
        <p className="text-gray-600 font-medium">
          Analise as justificativas aqui
        </p>
      </div>

      {/* Container Principal Branco/Cinza Claro */}
      <div className="w-full bg-[#f4f7fc] backdrop-blur-sm rounded-[2rem] p-6 md:p-8 lg:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-white/60 flex flex-col">
        <h2 className="text-2xl font-semibold text-center text-gray-900 mb-8">
          Justificativas
        </h2>

        {/* Área rolável (Scroll) para os cards */}
        <div className="flex-1 overflow-y-auto pr-2 md:pr-4 custom-scrollbar max-h-[500px]">
          
          {/* Grid responsivo: 1 coluna no celular, 2 no tablet, 3 no desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            
            {justificativasMock.map((justificativa, index) => {
              const status = formatStatus(justificativa.status);

              return (
                <div 
                  key={index} 
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100/80 flex flex-col gap-1 transition-all hover:shadow-md"
                >
                  {/* Linha 1: Nome e Badge de Status */}
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-[17px] font-bold text-gray-900 leading-tight">
                      {justificativa.nome}
                    </h3>
                    <span className={`text-[11px] font-bold px-3 py-1 rounded-full ${status.classes}`}>
                      {status.text}
                    </span>
                  </div>
                  
                  {/* Setor */}
                  <p className="text-sm font-bold text-gray-800 mb-1">
                    {justificativa.setor}
                  </p>
                  
                  {/* Descrição */}
                  <p className="text-sm text-gray-500 font-medium mb-4">
                    {justificativa.descricao}
                  </p>
                  
                  {/* Linha Final: Data e Botão Ler mais */}
                  <div className="mt-auto flex justify-between items-center">
                    <span className="bg-[#e0e7ff] text-[#3730a3] text-[10px] font-bold px-3 py-1 rounded-full">
                      {justificativa.data}
                    </span>
                    
                    <button className="bg-[#e2e8f0] hover:bg-[#cbd5e1] text-gray-500 hover:text-gray-700 font-bold text-[11px] px-4 py-1.5 rounded-full transition-colors tracking-wide">
                      Ler mais ...
                    </button>
                  </div>
                </div>
              );
            })}
            
          </div>
        </div>
      </div>

      {/* Estilos CSS embutidos para replicar a barra de rolagem da imagem */}
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
          border: 4px solid #f4f7fc;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: #94a3b8;
        }
      `}} />
    </main>
  );
}