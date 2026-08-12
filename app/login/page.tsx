'use client'; // Obrigatório no Next.js para usar interatividade (useState)

import React, { useState } from 'react';

export default function Login() {
  // Definindo explicitamente que o estado só pode ser 'entrar' ou 'cadastrar'
  const [abaAtiva, setAbaAtiva] = useState<'entrar' | 'cadastrar'>('entrar');

  // Tipando o evento do formulário como React.FormEvent
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(`${abaAtiva === 'entrar' ? 'Login' : 'Cadastro'} realizado com sucesso!`);
  };

  return (
    // Adicionado flex-col para mobile e md:flex-row para desktop
    <div 
      className="relative min-h-screen w-full flex flex-col md:flex-row items-center justify-center md:justify-end md:pr-60 p-4 font-sans bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/fundonovo.png')" }}
    >
      {/*Logo da Focus*/}
      <img 
        src="/logo.png" 
        alt="Logo Focus Consultoria" 
        className="w-32 md:w-48 mb-8 md:mb-0 md:absolute md:top-12 md:left-12 z-20 object-contain"
      />
     {/* Container de texto */}
      {/* Mudamos mb-10 para mb-6 para subir o formulário de login */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left md:absolute md:bottom-12 md:left-16 max-w-lg mb-6 md:mb-0 z-10">
        
        {/* Título Principal: text-3xl virou text-2xl no mobile */}
        <h2 className="text-2xl md:text-4xl font-bold text-black tracking-tight leading-none">
          Sistema de Gestão
        </h2>
        <h3 className="text-2xl md:text-4xl font-bold text-[#0038cb] tracking-tight mt-1 leading-tight">
          Estratégica de Pessoas
        </h3>
        
        {/* Descrição */}
        <p className="text-sm md:text-base text-gray-700 mt-4 font-medium leading-relaxed max-w-md">
          Gerencie métricas, plantões, justificativas e muito mais em um só lugar.
        </p>
      </div>


      {/* Container da direita: formulário de login (mantido igual, apenas o z-index por segurança) */}
      <div className="w-full max-w-sm flex flex-col gap-6 z-10">
          
          {/*Bloco de título e subtítulo*/}
          <div className="text-left px-1">
              {/* text-3xl virou text-2xl md:text-3xl para ficar menor no celular */}
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
                Bem vindo/a Shark 🦈
              </h1> 
              <p className="text-sm text-gray-600 mt-1.5 font-medium">
                Entre na sua conta para continuar
              </p>
          </div>

          {/* Card Principal com Glassmorphism (Efeito de Vidro) */}
          <div className="w-full max-w-sm bg-[#e3ecfa]/80 backdrop-blur-md rounded-2xl p-6 shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-white/40">
            
            {/* Abas Superiores */}
            <div className="flex bg-[#eef4ff] rounded-xl p-1 mb-6 shadow-inner border border-gray-200/50">
              <button
                type="button"
                onClick={() => setAbaAtiva('entrar')}
                className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all duration-200 cursor-pointer select-none ${
                  abaAtiva === 'entrar'
                    ? 'bg-[#0038cb] text-white shadow-md'
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                Entrar
              </button>
              
              <button
                type="button"
                onClick={() => setAbaAtiva('cadastrar')}
                className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all duration-200 cursor-pointer select-none ${
                  abaAtiva === 'cadastrar'
                    ? 'bg-[#0038cb] text-white shadow-md'
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                Cadastrar
              </button>
            </div>

            {/* Formulário */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Campo Email */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-gray-800 px-1">Email Corporativo</label>
                <input 
                  type="email" 
                  placeholder="seu.nome@focus.com" 
                  required
                  className="w-full px-4 py-3 bg-[#e3ecfa]/60 border border-gray-300/40 rounded-xl text-gray-700 placeholder-gray-400 outline-none focus:border-[#0038cb] focus:bg-white transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.04)]"
                />
              </div>

              {/* Campo Senha */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-gray-800 px-1">Senha</label>
                <input 
                  type="password" 
                  placeholder="********" 
                  required
                  className="w-full px-4 py-3 bg-[#e3ecfa]/60 border border-gray-300/40 rounded-xl text-gray-700 placeholder-gray-400 outline-none focus:border-[#0038cb] focus:bg-white transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.04)]"
                />
              </div>

              {/* CAMPOS EXTRAS */}
              {abaAtiva === 'cadastrar' && (
                <div className="space-y-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-gray-800 px-1">Nome Completo</label>
                    <input 
                      type="text" 
                      placeholder="Digite seu nome completo" 
                      required
                      className="w-full px-4 py-3 bg-[#e3ecfa]/60 border border-gray-300/40 rounded-xl text-gray-700 placeholder-gray-400 outline-none focus:border-[#0038cb] focus:bg-white transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.04)]"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-gray-800 px-1">Cargo</label>
                    <input 
                      type="text" 
                      placeholder="ex: Diretor" 
                      required
                      className="w-full px-4 py-3 bg-[#e3ecfa]/60 border border-gray-300/40 rounded-xl text-gray-700 placeholder-gray-400 outline-none focus:border-[#0038cb] focus:bg-white transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.04)]"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-gray-800 px-1">Setor</label>
                    <input 
                      type="text" 
                      placeholder="ex: Marketing" 
                      required
                      className="w-full px-4 py-3 bg-[#e3ecfa]/60 border border-gray-300/40 rounded-xl text-gray-700 placeholder-gray-400 outline-none focus:border-[#0038cb] focus:bg-white transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.04)]"
                    />
                  </div>
                </div>
              )}

              {/* Botão de Enviar */}
              <button
                type="submit"
                className="w-full py-3 bg-[#0038cb] hover:bg-[#002eb0] active:scale-[0.99] text-white font-semibold rounded-xl transition-all shadow-[0_4px_12px_rgba(0,56,203,0.25)] mt-2 cursor-pointer capitalize"
              >
                {abaAtiva}
              </button>
            </form>

            {/* Contas de Demonstração */}
            {abaAtiva === 'entrar' && (
              <div className="mt-5 p-3 bg-[#e3ecfa]/50 border border-gray-300/30 rounded-xl text-xs text-gray-500 shadow-inner">
                <p className="font-semibold text-gray-700 mb-1">Contas de demonstração</p>
                <p><span className="font-medium text-gray-600">Admin:</span> admin@focus.com / admin123</p>
                <p><span className="font-medium text-gray-600">Membro:</span> ana@focus.com / 123456</p>
              </div>
            )}
          </div>
      </div>
    </div>
  );
}