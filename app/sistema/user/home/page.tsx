"use client";
import React from 'react';
import Image from 'next/image';

import {
  TrendingUp,
  Briefcase,
  AlertCircle,
  Clock,
  Users,
  Flame,
  Calendar,
  LogOut,
  ChevronRight,
  MapPin,
  Laptop,
  ChartNoAxesCombined,
  Timeline,
  MessageSquareText,
  MessageCircleWarning,
  Bell,
} from 'lucide-react';


import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const chartData = [
  { name: 'Jan/26', valor: 18 },
  { name: 'Fev/26', valor: 23 },
  { name: 'Mar/26', valor: 14 },
  { name: 'Abr/26', valor: 20 },
  { name: 'Mai/26', valor: 11 },
];



export default function Dashboard() {
  return (
    <div className="dashboard-container pt-20">
      <div className="dashboard-content mt-8 md:mt-10 ">
        {/* --- SAUDAÇÃO --- */}
        <section className="greeting-section pt-6">
          <span className="greeting-subtitle">Painel de Desempenho</span>
          <h1 className="greeting-title">
            Olá, Ana <span className="greeting-emoji">🐬</span>
          </h1>
          <p className="greeting-desc">Acompanhe suas métricas, rankings e desempenho coletivo</p>
        </section>

        {/* --- GRID DE CARDS --- */}
        <main className="main-grid" >
          
          {/* Gráfico */}
          <section className="card-chart-container ">
            <div className="space-y-4">
              <div>
                <div className="chart-header-stats">
                  <TrendingUp size={20} />
                  <span>+4 m</span>
                </div>
                <label className="chart-stat-label">Metragem do mês: </label>
                <label className="chart-stat-date">Abr/2026</label>
              </div>
              <h2 className="chart-main-value">24 m</h2>
            </div>

            <div className="chart-wrapper">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData} margin={{ top: 5, right: 5, left: -20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 9, fill: '#94a3b8' }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 9, fill: '#94a3b8' }} />
                  <Tooltip />
                  <Line type="monotone" dataKey="valor" stroke="#1d4ed8" strokeWidth={2} dot={{ r: 4, fill: '#1d4ed8' }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </section>

          {/* Coluna Direita */}
          <div className="right-column">
            
            {/* Card Plantões */}
            <section className="card-standard">
              <div className="card-icon-box">
                <Briefcase size={20} />
              </div>
              <div className="schedules-list">
                <div className="schedule-item-top">
                  <p className="schedule-title">Seg - 26/06</p>
                  <p className="schedule-time">14h → 16h</p>
                </div>

                  

                <div className="schedule-item-bottom">
                  <p className="schedule-title">Ter - 27/06</p>
                  <p className="schedule-time">11h → 13h</p>
                </div>
              </div>
            </section>

            {/* Card Justificativas */}
            <section className="card-standard">
              <div className="card-icon-box">
                <AlertCircle size={20} />
              </div>
              <div className="justifications-list">
                <div className="justification-row">
                  <span className="justification-label">Justificativa 1</span>
                  <span className="justification-date">06/06/2026</span>
                  <span className="badge-status badge-danger">Negada</span>
                </div>
                <div className="justification-row">
                  <span className="justification-label">Justificativa 2</span>
                  <span className="justification-date">08/06/2026</span>
                  <span className="badge-status badge-warning">Em análise</span>
                </div>
                <div className="justification-row">
                  <span className="justification-label">Justificativa 3</span>
                  <span className="justification-date">15/06/2026</span>
                  <span className="badge-status badge-success">Aprovada</span>
                </div>
              </div>
            </section>

          </div>
          
        </main>

        {/*RODAPÉ */}
        <section className="timeline-section">
          
    
          <div className="event-column">
            <span className="event-column-title-gray">Evento que Passou</span>
            <div className="event-card-base event-card-passed">
              <Clock size={18} className="text-slate-500" />
              <div>
                <p className="event-title text-slate-700">EFEJ</p>
                <p className="event-date text-slate-500">15/05/2025</p>
              </div>
              <span className="event-badge-info text-slate-600">
                <MapPin size={10} /> Presencial
              </span>
            </div>
          </div>

          {/* Evento 2 */}
          <div className="event-column">
            <span className="event-column-title-blue">Novo Evento mais Recente</span>
            <div className="event-card-base event-card-recent">
              <Users size={18} />
              <div>
                <p className="event-title">Reunião Geral</p>
                <p className="event-date">22/05/2025</p>
              </div>
              <span className="event-badge-info opacity-90">
                <Laptop size={10} /> Online
              </span>
            </div>
            <div className="timeline-arrow-blue">
              <ChevronRight size={14} />
            </div>
          </div>

          {/* Evento 3 */}
          <div className="event-column">
            <span className="event-column-title-cyan">Próximo Evento</span>
            <div className="event-card-base event-card-next">
              <Flame size={18} />
              <div>
                <p className="event-title">Imersão</p>
                <p className="event-date">30/05/2025</p>
              </div>
              <span className="event-badge-info opacity-90">
                <MapPin size={10} /> Presencial
              </span>
            </div>
            <div className="timeline-arrow-cyan">
              <ChevronRight size={14} />
            </div>
          </div>

          {/* Evento 4 */}
          <div className="event-column justify-end">
            <div className="event-card-base event-card-future">
              <Calendar size={18} />
              <div>
                <p className="event-title">EFEJ</p>
                <p className="event-date">15/05/2025</p>
              </div>
              <span className="event-badge-info opacity-90">
                <MapPin size={10} /> Presencial
              </span>
            </div>
          </div>

        </section>

      </div>




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
    </div>
  );
}