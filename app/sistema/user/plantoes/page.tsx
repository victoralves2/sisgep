"use client";

import { useState } from "react";
import {
  Calendar,
  ChevronDown,
} from "lucide-react";

interface Plantao {
  id: number;
  dia: string;
  horario: string;
  responsavel: string;
}

export default function PlantoesPage() {
  const [abaSelecionada, setAbaSelecionada] = useState<
    "escala" | "enviadas" | "recebidas"
  >("escala");

  const plantoes: Plantao[] = [
    {
      id: 1,
      dia: "Seg - 27/07",
      horario: "09h - 11h",
      responsavel: "Ana Araújo",
    },
    {
      id: 2,
      dia: "Seg - 27/07",
      horario: "09h - 11h",
      responsavel: "Arthur Souza",
    },
    {
      id: 3,
      dia: "Seg - 27/07",
      horario: "11h - 13h",
      responsavel: "Beatriz Almeida",
    },
    {
      id: 4,
      dia: "Seg - 27/07",
      horario: "11h - 13h",
      responsavel: "João Aguiar",
    },
    {
      id: 5,
      dia: "Seg - 27/07",
      horario: "14h - 16h",
      responsavel: "Pedro Bento",
    },
    {
      id: 6,
      dia: "Seg - 27/07",
      horario: "14h - 16h",
      responsavel: "Lucio Silva",
    },
    {
      id: 7,
      dia: "Seg - 27/07",
      horario: "16h - 18h",
      responsavel: "Carla Magalhães",
    },
    {
      id: 8,
      dia: "Seg - 27/07",
      horario: "16h - 18h",
      responsavel: "Felipe Neto",
    },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden pt-24 bg-gradient-to-br from-[#dce7fb] via-[#edf4ff] to-[#cfdcff]">

      {/* Fundo */}

      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg
          className="w-full h-full"
          viewBox="0 0 1600 900"
          preserveAspectRatio="none"
        >
          <path
            d="M0 200 C400 0 700 350 1600 120"
            fill="none"
            stroke="#4b73ff"
            strokeWidth="2"
          />

          <path
            d="M0 430 C500 150 900 650 1600 420"
            fill="none"
            stroke="#4b73ff"
            strokeWidth="2"
          />

          <path
            d="M0 680 C500 400 1000 950 1600 700"
            fill="none"
            stroke="#4b73ff"
            strokeWidth="2"
          />
        </svg>
      </div>

      <section className="relative z-10 max-w-7xl mx-auto px-6 py-10">

        {/* Cabeçalho */}

        <span className="text-blue-700 font-semibold tracking-wider">
          ESCALA
        </span>

        <h1 className="text-5xl font-black mt-2">
          PLANTÕES
        </h1>

        <p className="text-gray-600 mt-2">
          Sua escala e interação com o calendário.
        </p>

        {/* Tabs */}

        <div className="mt-8 flex gap-3">

          <button
            onClick={() => setAbaSelecionada("escala")}
            className={`px-6 py-3 rounded-full transition font-semibold ${
              abaSelecionada === "escala"
                ? "bg-blue-700 text-white"
                : "bg-white/70 hover:bg-white"
            }`}
          >
            Escala
          </button>

        </div>

        {/* Seus Plantões */}

        <div className="mt-10">

          <h2 className="text-3xl font-semibold mb-5">
            Seus plantões
          </h2>

          <div className="rounded-3xl bg-white/70 backdrop-blur-xl border border-white/40 shadow-lg p-6">

            <div className="grid md:grid-cols-2 gap-6">

              <div className="flex items-center justify-center rounded-2xl bg-slate-100 py-5">

                <span className="text-2xl font-medium">
                  Seg - 27/07
                </span>

                <span className="mx-8 text-gray-400">
                  |
                </span>

                <span className="text-2xl">
                  11h - 13h
                </span>

              </div>

              <div className="flex items-center justify-center rounded-2xl bg-slate-100 py-5">

                <span className="text-2xl font-medium">
                  Qui - 30/07
                </span>

                <span className="mx-8 text-gray-400">
                  |
                </span>

                <span className="text-2xl">
                  16h - 18h
                </span>

              </div>

            </div>

          </div>

        </div>

          {/* Plantões */}

        <div className="mt-12">

          <h2 className="text-3xl font-semibold mb-5">
            Plantões
          </h2>

          <div
            className="
              bg-white/70
              backdrop-blur-xl
              rounded-[30px]
              border
              border-white/40
              shadow-lg
              overflow-hidden
            "
          >

            {/* Cabeçalho */}

            <div
              className="
                grid
                grid-cols-3
                items-center

                bg-white/60

                px-8
                py-5

                text-slate-600
                font-semibold
                text-lg
              "
            >

              <div className="flex items-center justify-center gap-2">

                Dia

                <ChevronDown
                  size={18}
                  className="text-slate-500"
                />

              </div>

              <div className="text-center">
                Horário
              </div>

              <div className="text-center">
                Responsável
              </div>

            </div>

            {/* Conteúdo */}

            <div className="p-6 space-y-3">

              {plantoes.map((plantao) => (

                <div
                  key={plantao.id}
                  className="
                    grid
                    grid-cols-3

                    items-center

                    rounded-xl

                    bg-slate-100/70

                    hover:bg-white

                    hover:shadow-md

                    transition-all
                    duration-300

                    px-6
                    py-3
                  "
                >

                  <div className="text-center text-lg">
                    {plantao.dia}
                  </div>

                  <div className="text-center text-lg">
                    {plantao.horario}
                  </div>

                  <div className="text-center text-lg">
                    {plantao.responsavel}
                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

        {/* Espaço inferior */}

        <div className="h-16" />
              {/* Rodapé */}

<footer className="relative z-10 mt-10 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-3xl bg-white/40 backdrop-blur-lg border border-white/40 py-5 px-8 flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-gray-600 text-sm">© 2026 Focus • Sistema de Plantões</p>
            <div className="flex gap-6 text-sm text-gray-500">
              <button className="hover:text-blue-700 transition">Política de Privacidade</button>
              <button className="hover:text-blue-700 transition">Termos de Uso</button>
              <button className="hover:text-blue-700 transition">Suporte</button>
            </div>
          </div>
        </div>
      </footer>
    </section>

  </main>

  );

}
