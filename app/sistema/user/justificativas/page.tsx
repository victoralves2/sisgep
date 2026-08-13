"use client";
import Image from "next/image";
import { useState, type ReactElement } from "react";
import {
  Bell,
  LogOut,
  Send,
  Paperclip,
  Calendar,
  ChevronDown,
  FileText,
  Clock,
  CheckCircle2,
  XCircle,
  ChartNoAxesCombined,
  MessageSquareText,
  AlertCircle,
} from "lucide-react";

interface Justificativa {
  id: number;
  tipo: string;
  data: string;
  status: "Aprovada" | "Pendente" | "Reprovada";
  descricao: string;
}

export default function Justificativas() {
  const [justificativas] = useState<Justificativa[]>([
    {
      id: 1,
      tipo: "Atraso",
      data: "18/07/2026",
      status: "Aprovada",
      descricao: "Cheguei atrasado devido ao trânsito.",
    },
    {
      id: 2,
      tipo: "Ausência",
      data: "15/07/2026",
      status: "Pendente",
      descricao: "Consulta médica.",
    },
    {
      id: 3,
      tipo: "Saída Antecipada",
      data: "10/07/2026",
      status: "Reprovada",
      descricao: "Compromisso pessoal.",
    },
  ]);

  const statusColor = (status: Justificativa["status"]): string => {
    switch (status) {
      case "Aprovada":
        return "bg-green-100 text-green-700";
      case "Pendente":
        return "bg-yellow-100 text-yellow-700";
      default:
        return "bg-red-100 text-red-700";
    }
  };

  const statusIcon = (status: Justificativa["status"]): ReactElement => {
    switch (status) {
      case "Aprovada":
        return <CheckCircle2 size={16} />;
      case "Pendente":
        return <AlertCircle size={16} />;
      default:
        return <XCircle size={16} />;
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden pt-24 bg-gradient-to-br from-[#dce7fb] via-[#edf4ff] to-[#cfdcff]">
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-10">
        <span className="text-blue-700 font-semibold tracking-wider">PAINEL DE JUSTIFICATIVAS</span>
        <h1 className="text-5xl md:text-6xl font-black mt-2">Olá, Ana 👋</h1>
        <p className="text-gray-600 mt-3 text-lg">Acompanhe suas justificativas e envie novas solicitações.</p>

        <div className="grid lg:grid-cols-2 gap-8 mt-10">
          <div className="bg-white/55 backdrop-blur-xl rounded-[32px] shadow-xl border border-white/40 p-8">
            <h2 className="text-3xl font-bold text-center text-slate-700 mb-8">Nova Justificativa</h2>
            <div className="mb-6">
              <label className="block text-sm font-semibold mb-2 text-gray-600">Tipo</label>
              <div className="relative">
                <select className="w-full appearance-none rounded-full bg-white px-5 py-3 shadow-sm border border-gray-200 outline-none focus:border-blue-500">
                  <option>Atraso</option>
                  <option>Ausência</option>
                  <option>Saída Antecipada</option>
                  <option>Outro</option>
                </select>
                
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-semibold mb-2 text-gray-600">Data</label>
              <div className="relative">
                <input type="date" className="w-full rounded-full bg-white px-5 py-3 shadow-sm border border-gray-200 outline-none focus:border-blue-500" />
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-semibold mb-2 text-gray-600">Descrição</label>
              <textarea
                rows={7}
                placeholder="Digite aqui sua justificativa..."
                className="w-full rounded-3xl bg-white p-5 shadow-sm border border-gray-200 resize-none outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-8">
              <label className="block text-sm font-semibold mb-3 text-gray-600">Anexo</label>
              <label className="inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 shadow cursor-pointer hover:shadow-md transition">
                <Paperclip size={18} />
                Selecionar Arquivo
                <input type="file" hidden />
              </label>
            </div>
            <button className="w-full rounded-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-4 flex items-center justify-center gap-3 transition">
              <Send size={18} />
              Enviar Justificativa
            </button>
          </div>

          <div className="bg-white/55 backdrop-blur-xl rounded-[32px] shadow-xl border border-white/40 p-8">
            <h2 className="text-3xl font-bold text-center text-slate-700 mb-8">Minhas Justificativas</h2>
            <div className="space-y-5">
              {justificativas.map((item: Justificativa) => (
                <div key={item.id} className="bg-white rounded-3xl p-5 shadow-sm hover:shadow-lg transition">
                  <div className="flex justify-between items-start gap-3">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="bg-blue-100 text-blue-700 rounded-full p-2">
                          <FileText size={18} />
                        </div>
                        <h3 className="font-semibold text-lg">{item.tipo}</h3>
                      </div>
                      <div className="flex items-center gap-2 text-gray-500 text-sm">
                        <Clock size={15} />
                        {item.data}
                      </div>
                    </div>
                    <div className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold ${statusColor(item.status)}`}>
                      {statusIcon(item.status)}
                      {item.status}
                    </div>
                  </div>
                  <div className="mt-5 border-t pt-4 text-gray-600">{item.descricao}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="relative z-10 mt-10 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-3xl bg-white/40 backdrop-blur-lg border border-white/40 py-5 px-8 flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-gray-600 text-sm">© 2026 Focus • Sistema de Justificativas</p>
            <div className="flex gap-6 text-sm text-gray-500">
              <button className="hover:text-blue-700 transition">Política de Privacidade</button>
              <button className="hover:text-blue-700 transition">Termos de Uso</button>
              <button className="hover:text-blue-700 transition">Suporte</button>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
