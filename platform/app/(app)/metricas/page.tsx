"use client"

import { useState } from "react"
import GlassCard from "@/app/components/GlassCard"
import { MOCK_USERS, MOCK_MODULES, MOCK_LABS, MOCK_RANKS, MOCK_METRIC_POINTS } from "@/lib/data"
import ProgressCircle from "@/app/components/ProgressCircle"

export default function MetricasPage() {
  const currentUser = MOCK_USERS[0]
  const currentRank = currentUser.rank
  const completedLabs = MOCK_LABS.filter(lab => !lab.locked && lab.progress > 0).length
  const totalLabs = MOCK_LABS.length
  
  const completedModules = MOCK_MODULES.filter(module => module.progress === 100).length
  const totalModules = MOCK_MODULES.length
  
  const totalXP = currentUser.xp
  const averageAccuracy = 94.2 // From the reference design
  const studyTime = 142 // hours from reference design
  
  const chartData = MOCK_METRIC_POINTS
  const maxValue = Math.max(...chartData.map(d => d.value))
  
  const getMetricWidth = (value: number) => {
    return (value / maxValue) * 100
  }

  return (
    <div className="space-y-8">
      <div className="mb-12">
        <nav className="flex items-center gap-2 text-label-md font-label-md text-on-surface-variant mb-2">
          <a className="hover:text-primary transition-colors" href="#">Dashboard</a>
          <span className="material-symbols-outlined text-[14px]">chevron_right</span>
          <span className="text-primary font-bold">Métricas de Rendimiento</span>
        </nav>
        <h2 className="font-headline-lg text-headline-lg text-deep-navy mb-1">Rendimiento del Investigador</h2>
        <p className="text-on-surface-variant font-body-md">Resumen analítico de tu progreso técnico y hitos alcanzados en la expedición.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <GlassCard className="rounded-2xl p-card-padding flex flex-col items-center justify-center relative overflow-hidden group">
          <div className="relative w-32 h-32 mb-4">
            <ProgressCircle value={averageAccuracy} size={128} color="var(--color-success-green)" strokeWidth={8} />
          </div>
          <p className="font-label-lg text-label-lg text-on-surface-variant">Precisión Media</p>
          <div className="mt-2 flex items-center gap-1 text-success-green text-label-md font-label-md">
            <span className="material-symbols-outlined text-[14px]">trending_up</span> +2.4% esta semana
          </div>
        </GlassCard>
        
        <GlassCard className="rounded-2xl p-card-padding flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start mb-4">
              <div className="w-12 h-12 rounded-xl bg-primary-container/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[28px]">stars</span>
              </div>
              <span className="text-success-green bg-success-green/10 px-2 py-1 rounded text-label-md font-label-md flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">arrow_upward</span> 12%
              </span>
            </div>
            <h3 className="font-display-hero text-[32px] font-extrabold text-deep-navy mb-1 leading-none">{totalXP}</h3>
            <p className="font-label-lg text-label-lg text-on-surface-variant">XP Total Acumulado</p>
          </div>
          <div className="h-1.5 bg-surface-container rounded-full mt-6 overflow-hidden">
            <div className="h-full bg-primary w-3/4 rounded-full"></div>
          </div>
        </GlassCard>
        
        <GlassCard className="rounded-2xl p-card-padding flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start mb-4">
              <div className="w-12 h-12 rounded-xl bg-secondary-container/10 flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined">rocket_launch</span>
              </div>
            </div>
            <h3 className="font-display-hero text-[32px] font-extrabold text-deep-navy mb-1 leading-none">{completedLabs}<span className="text-on-surface-variant/40 text-headline-sm">/{totalLabs}</span></h3>
            <p className="font-label-lg text-label-lg text-on-surface-variant">Laboratorios Completados</p>
          </div>
          <div className="flex gap-1 mt-6">
            <div className="h-1.5 flex-1 bg-secondary rounded-full"></div>
            <div className="h-1.5 flex-1 bg-secondary rounded-full"></div>
            <div className="h-1.5 flex-1 bg-secondary rounded-full"></div>
            <div className="h-1.5 flex-1 bg-secondary rounded-full"></div>
            <div className="h-1.5 flex-1 bg-surface-container rounded-full"></div>
          </div>
        </GlassCard>
        
        <GlassCard className="rounded-2xl p-card-padding flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start mb-4">
              <div className="w-12 h-12 rounded-xl bg-tertiary-container/10 flex items-center justify-center text-tertiary">
                <span className="material-symbols-outlined">timer</span>
              </div>
            </div>
            <h3 className="font-display-hero text-[32px] font-extrabold text-deep-navy mb-1 leading-none">{studyTime}h</h3>
            <p className="font-label-lg text-label-lg text-on-surface-variant">Tiempo en Laboratorios</p>
          </div>
          <div className="mt-6 flex items-center gap-2 text-on-surface-variant text-label-md font-label-md">
            <span className="material-symbols-outlined text-[16px]">schedule</span> Promedio: 4.5h / día
          </div>
        </GlassCard>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-12">
        <GlassCard className="rounded-2xl p-card-padding lg:col-span-2">
          <div className="flex justify-between items-center mb-6">
            <h4 className="font-headline-sm text-headline-sm text-deep-navy">Evolución de Habilidades</h4>
            <button className="text-primary hover:bg-primary/5 p-2 rounded-full transition-colors">
              <span className="material-symbols-outlined">more_vert</span>
            </button>
          </div>
          <div className="relative aspect-square flex items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
              <div className="w-full h-full border border-on-surface rounded-full"></div>
              <div className="absolute w-[80%] h-[80%] border border-on-surface rounded-full"></div>
              <div className="absolute w-[60%] h-[60%] border border-on-surface rounded-full"></div>
              <div className="absolute w-[40%] h-[40%] border border-on-surface rounded-full"></div>
            </div>
            <svg className="w-full h-full transform -rotate-18" viewBox="0 0 200 200">
              <polygon fill="rgba(53, 37, 205, 0.1)" points="100,20 170,70 150,160 50,160 30,70" stroke="#3525cd" stroke-width="2"></polygon>
              <circle cx="100" cy="20" fill="#3525cd" r="3"></circle>
              <circle cx="170" cy="70" fill="#3525cd" r="3"></circle>
              <circle cx="150" cy="160" fill="#3525cd" r="3"></circle>
              <circle cx="50" cy="160" fill="#3525cd" r="3"></circle>
              <circle cx="30" cy="70" fill="#3525cd" r="3"></circle>
            </svg>
            <div className="absolute top-2 left-1/2 -translate-x-1/2 font-label-md text-label-md font-bold">Python</div>
            <div className="absolute top-1/3 right-0 font-label-md text-label-md font-bold">Stats</div>
            <div className="absolute bottom-4 right-8 font-label-md text-label-md font-bold">ML</div>
            <div className="absolute bottom-4 left-8 font-label-md text-label-md font-bold">Viz</div>
            <div className="absolute top-1/3 left-0 font-label-md text-label-md font-bold">Etica</div>
          </div>
        </GlassCard>
        
        <GlassCard className="rounded-2xl p-card-padding lg:col-span-3">
          <div className="flex justify-between items-center mb-8">
            <h4 className="font-headline-sm text-headline-sm text-deep-navy">Actividad Semanal (XP)</h4>
            <div className="flex items-center gap-2 bg-surface-container-low px-3 py-1.5 rounded-lg border border-outline-variant/30">
              <span className="text-label-md font-label-md text-on-surface-variant">Últimos 7 días</span>
              <span className="material-symbols-outlined text-[16px]">expand_more</span>
            </div>
          </div>
          <div className="h-64 flex items-end justify-between gap-4 px-4">
            {chartData.map((day, index) => (
              <div key={day.date} className="flex flex-col items-center gap-3 flex-1">
                <div className="w-full bg-primary/20 hover:bg-primary/40 transition-colors rounded-t-lg relative group" style={{ height: `${getMetricWidth(day.value)}%` }}>
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-deep-navy text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    {day.value}
                  </div>
                </div>
                <span className="text-label-md font-label-md text-on-surface-variant">
                  {['L', 'M', 'X', 'J', 'V', 'S', 'D'][index]}
                </span>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
      
      <GlassCard className="rounded-2xl overflow-hidden mb-12">
        <div className="px-card-padding py-6 border-b border-glass-stroke bg-surface-container/30 flex justify-between items-center">
          <h4 className="font-headline-sm text-headline-sm text-deep-navy">Rendimiento en Laboratorios</h4>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-label-md font-label-md text-primary px-3 py-1.5 rounded-lg hover:bg-primary/5 transition-colors">
              <span className="material-symbols-outlined text-[18px]">download</span> Exportar Datos
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-surface-container-low/50">
                <th className="px-card-padding py-4 text-label-md font-label-md text-on-surface-variant uppercase tracking-wider">Laboratorio</th>
                <th className="px-4 py-4 text-label-md font-label-md text-on-surface-variant uppercase tracking-wider">Nivel Alcanzado</th>
                <th className="px-4 py-4 text-label-md font-label-md text-on-surface-variant uppercase tracking-wider">Precisión</th>
                <th className="px-4 py-4 text-label-md font-label-md text-on-surface-variant uppercase tracking-wider">Tiempo Invertido</th>
                <th className="px-card-padding py-4 text-label-md font-label-md text-on-surface-variant uppercase tracking-wider text-right">Estatus</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-glass-stroke">
              {MOCK_LABS.filter(lab => !lab.locked).map((lab) => {
                const accuracy = 98.5 - (lab.level * 1.2)
                const hours = (lab.level + 1) * 12 + 15
                
                return (
                  <tr key={lab.id} className="hover:bg-primary/5 transition-colors group">
                    <td className="px-card-padding py-5">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                          <span className="material-symbols-outlined">{lab.icon}</span>
                        </div>
                        <div>
                          <p className="font-label-lg text-label-lg text-deep-navy">{lab.name}</p>
                          <p className="text-label-md text-on-surface-variant">{lab.progress}% completado</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-5 font-body-md">Nivel {lab.level}</td>
                    <td className="px-4 py-5">
                      <div className="flex items-center gap-2">
                        <span className={`font-body-md ${accuracy > 95 ? 'text-success-green' : accuracy > 90 ? 'text-primary' : 'text-tertiary'}`}>{accuracy.toFixed(1)}%</span>
                        <div className="w-16 h-1 bg-surface-container rounded-full overflow-hidden">
                          <div className={`h-full ${accuracy > 95 ? 'bg-success-green' : accuracy > 90 ? 'bg-primary' : 'bg-tertiary'}`} style={{width: `${accuracy}%`}}></div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-5 font-body-md">{hours}h {lab.level % 2 === 0 ? '15m' : '20m'}</td>
                    <td className="px-card-padding py-5 text-right">
                      <span className={`${lab.progress === 100 ? 'bg-success-green/10 text-success-green' : 'bg-primary/10 text-primary'} px-3 py-1 rounded-full text-label-md font-label-md`}>{lab.progress === 100 ? 'Completado' : 'En Progreso'}</span>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </GlassCard>
      
      <GlassCard className="rounded-2xl p-card-padding border border-primary/20 bg-gradient-to-br from-primary/5 to-transparent relative overflow-hidden">
        <div className="absolute -right-16 -top-16 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 rounded-2xl bg-white shadow-xl flex items-center justify-center text-primary transform rotate-3">
              <span className="material-symbols-outlined text-[48px]">workspace_premium</span>
            </div>
            <div>
              <h4 className="font-headline-md text-headline-md text-deep-navy">Próximo Rango: Investigador Senior</h4>
              <p className="text-on-surface-variant font-body-md max-w-lg">Estás a solo 2,550 XP y 6 misiones avanzadas de desbloquear el nivel Senior y acceder a los laboratorios de Redes Neuronales.</p>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <div className="mb-2 text-right">
              <span className="font-headline-sm text-headline-sm text-primary">82%</span>
              <span className="font-label-lg text-label-lg text-on-surface-variant">Completado</span>
            </div>
            <div className="w-64 h-3 bg-surface-container rounded-full overflow-hidden border border-white">
              <div className="w-[82%] h-full bg-primary rounded-full"></div>
            </div>
            <button className="mt-6 flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-label-lg text-label-lg hover:shadow-lg hover:shadow-primary/20 transition-all active:scale-95">
              Ver Roadmap Completo <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </div>
        </div>
      </GlassCard>
    </div>
  )
}