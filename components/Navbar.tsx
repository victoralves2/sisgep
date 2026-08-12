'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  ChartNoAxesCombined,
  Calendar,
  MessageSquareText,
  AlertCircle,
  Bell,
  LogOut,
  Menu,
  X
} from 'lucide-react';

export default function Navbar() {
  const [menuAberto, setMenuAberto] = useState(false);
  const pathname = usePathname();

  // 1. Verifica se o usuário está na área de controle (admin)
  // O uso de '|| ""' previne erros caso pathname seja null durante a renderização no servidor
  const isAdmin = (pathname || "").startsWith('/sistema/controle');

  // 2. Links para o USUÁRIO COMUM
  const linksUsuario = [
    { name: 'Métricas', href: '/sistema/dashboard', icon: ChartNoAxesCombined },
    { name: 'Plantões', href: '/sistema/plantoes', icon: Calendar },
    { name: 'Justificativas', href: '/sistema/justificativas', icon: MessageSquareText },
    { name: 'Denúncias', href: '/sistema/denuncias', icon: AlertCircle },
  ];

  // 3. Links para o ADMINISTRADOR (Controle)
  // Ajuste estes links conforme for criando as outras páginas de controle!
  const linksControle = [
    { name: 'Métricas', href: '/sistema/controle/dashboard', icon: ChartNoAxesCombined },
    { name: 'Plantões', href: '/sistema/controle/plantoes', icon: Calendar },
    { name: 'Justificativas', href: '/sistema/controle/justificativas', icon: MessageSquareText },
    { name: 'Denúncias', href: '/sistema/controle/denuncias', icon: AlertCircle },
  ];

  // 4. Se for admin, carrega os links de controle. Se não, carrega os links normais.
  const menuLinks = isAdmin ? linksControle : linksUsuario;

  return (
    <header className="relative w-full bg-[#e8eff9]/80 backdrop-blur-md rounded-full border border-white/50 shadow-sm flex items-center justify-between px-6 py-3 mb-10 z-50">
      
      {/* Lado Esquerdo: Botão Mobile + Logo */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => setMenuAberto(!menuAberto)}
          className="lg:hidden text-gray-700 hover:text-[#1d4ed8] transition-colors focus:outline-none"
        >
          {menuAberto ? <X size={26} /> : <Menu size={26} />}
        </button>

        <div className="flex items-center gap-3 cursor-pointer">
          <Image
            src="/logo2.png"
            alt="Logo Focus"
            width={28}
            height={28}
            className="object-contain w-auto h-auto"
          />
          <div className="flex flex-col leading-none">
            <span className="text-sm font-bold text-gray-800 tracking-wide">FOCUS</span>
            <span className="text-[10px] font-semibold text-gray-500 tracking-widest">CONSULTORIA</span>
          </div>
        </div>
      </div>

      {/* Centro: Links de Navegação (Desktop) */}
      <nav className="hidden lg:flex items-center gap-2 text-sm font-medium text-gray-600">
        {menuLinks.map((link) => {
          const Icon = link.icon;
          
          // Lógica mantida: Funciona perfeitamente com as novas rotas dinâmicas
          const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`);

          return (
            <Link
              key={link.name}
              href={link.href}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full transition-all duration-300 ${
                isActive
                  ? 'bg-[#1d4ed8] text-white shadow-md px-5'
                  : 'hover:bg-white/50 hover:text-blue-600'
              }`}
            >
              <Icon size={16} /> {link.name}
            </Link>
          );
        })}
      </nav>

      {/* Lado Direito: Usuário e Ações */}
      <div className="flex items-center gap-4">
        <button className="text-gray-600 hover:text-gray-900 transition-colors">
          <Bell size={20} />
        </button>
        <div className="flex items-center gap-2 border-l border-gray-300/50 pl-4">
          <div className="w-8 h-8 rounded-full bg-[#1d4ed8] text-white flex items-center justify-center text-xs font-bold shadow-sm">
            AC
          </div>
          <span className="text-sm font-semibold text-gray-700 hidden md:block">Ana</span>
        </div>
        <button className="text-gray-600 hover:text-gray-900 transition-colors ml-2 hidden md:block">
          <LogOut size={20} />
        </button>
      </div>

      {/* Menu Mobile */}
      {menuAberto && (
        <div className="absolute top-[110%] left-0 w-64 bg-[#dbe4f4] rounded-2xl p-4 shadow-xl border border-white/50 flex flex-col gap-2 lg:hidden animate-in slide-in-from-top-2 duration-200">
          {menuLinks.map((link) => {
            const Icon = link.icon;
            
            const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`);

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMenuAberto(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                  isActive
                    ? 'bg-white/60 text-gray-900 shadow-sm font-bold border border-white'
                    : 'text-gray-700 hover:bg-white/40 font-semibold'
                }`}
              >
                <Icon size={22} className={isActive ? "text-[#1d4ed8]" : "text-gray-600"} />
                <span className="text-base">{link.name}</span>
              </Link>
            );
          })}
          <hr className="border-gray-300/50 my-2" />
          <button className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-red-50 hover:text-red-500 font-semibold transition-all">
            <LogOut size={22} />
            <span className="text-base">Sair da conta</span>
          </button>
        </div>
      )}
    </header>
  );
}