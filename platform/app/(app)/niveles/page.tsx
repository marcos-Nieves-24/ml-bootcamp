"use client"

import { useState } from "react"
import StitchCard from "@/app/components/StitchCard"
import ProgressRing from "@/app/components/ProgressRing"
import Badge from "@/app/components/Badge"
import { MOCK_RANKS, MOCK_USERS } from "@/lib/data"

export default function NivelesPage() {
  const currentUser = MOCK_USERS[0]
  const currentRank = currentUser.rank
  const currentLevel = currentUser.level
  const currentXP = currentUser.xp
  const nextLevelXP = currentLevel < 8 ? 1000 * currentLevel : 0
  const XPProgress = currentLevel < 8 ? (currentXP / nextLevelXP) * 100 : 100

  const getRankStatus = (rank: any) => {
    if (rank.id === currentRank.id) return "actual"
    const rankIndex = MOCK_RANKS.findIndex(r => r.id === rank.id)
    const currentRankIndex = MOCK_RANKS.findIndex(r => r.id === currentRank.id)
    return rankIndex < currentRankIndex ? "earned" : "locked"
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h1 className="font-headline-lg text-headline-lg text-deep-navy">Niveles</h1>
          <p className="font-body-md text-on-surface-variant mt-2">Tu progreso como investigador en Nexus Institute</p>
        </div>
        
        <StitchCard className="p-6 rounded-2xl flex items-center gap-6 pr-8 shadow-sm">
          <div className="relative w-16 h-16 flex items-center justify-center">
            <ProgressRing value={XPProgress} size={64} strokeWidth={4} label={currentLevel.toString()} />
          </div>
          <div>
            <span className="text-xs uppercase font-bold text-on-surface-variant tracking-wider">Nivel Actual</span>
            <h3 className="font-headline-sm text-headline-sm">{currentRank.name}</h3>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-label-md font-bold text-primary">{currentXP} / {nextLevelXP} XP</span>
              <div className="w-24 h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
                <div className="w-[63%] h-full bg-primary-container"></div>
              </div>
            </div>
          </div>
        </StitchCard>
      </div>
      
      <div className="relative">
        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 timeline-line z-0"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4 relative z-10">
          {MOCK_RANKS.map((rank) => {
            const status = getRankStatus(rank)
            const isCurrent = status === "actual"
            
            return (
              <StitchCard 
                key={rank.id}
                className={`rounded-2xl p-6 text-center border-success-green/20 ${isCurrent ? 'ring-2 ring-primary border-primary active-level-glow relative shadow-lg' : ''} ${status === 'locked' ? 'opacity-60' : ''}`}
                hover={status !== 'locked'}
              >
                {isCurrent && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-on-primary text-[10px] font-bold rounded-full uppercase tracking-widest">Actual</div>
                )}
                <span className={`block ${isCurrent ? 'text-primary' : 'text-on-surface-variant'} font-bold text-headline-sm mb-4`}>{rank.order}</span>
                <div className={`w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full ${isCurrent ? 'bg-primary/10' : status === 'earned' ? 'bg-success-green/10' : 'bg-surface-container'}`}>
                  <span className={`material-symbols-outlined text-4xl ${isCurrent ? 'text-primary fill-icon' : status === 'earned' ? 'text-success-green' : 'text-on-surface-variant'}`}>{rank.icon}</span>
                </div>
                <h4 className={`font-bold text-headline-sm mb-2 ${isCurrent ? 'text-primary' : ''}`}>{rank.name}</h4>
                <p className="text-label-md text-on-surface-variant leading-relaxed">{rank.order < 4 ? 'Desarrollo de habilidades' : rank.order < 6 ? 'Técnicas avanzadas' : rank.order < 7 ? 'Sistemas inteligentes' : 'Investigaciones de liderazgo'}</p>
                {status === 'earned' && !isCurrent && (
                  <div className="mt-6 flex items-center justify-center gap-2 text-success-green font-bold">
                    <span className="material-symbols-outlined text-sm fill-icon">check_circle</span>
                    <span className="text-[12px]">Completado</span>
                  </div>
                )}
                {status === 'locked' && (
                  <div className="mt-6 flex items-center justify-center gap-2 text-on-surface-variant">
                    <span className="material-symbols-outlined text-sm">lock</span>
                    <span className="text-[12px]">Bloqueado</span>
                  </div>
                )}
              </StitchCard>
            )
          })}
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
        <div className="lg:col-span-2 glass-card rounded-3xl p-card-padding">
          <div className="flex items-center gap-6 mb-8">
            <div className="w-24 h-24 rounded-3xl bg-primary/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-6xl text-primary">hub</span>
            </div>
            <div>
              <span className="text-label-md font-bold text-primary uppercase tracking-widest">Nivel {currentRank.order}</span>
              <h2 className="font-headline-lg text-headline-lg">{currentRank.name}</h2>
              <p className="font-body-md text-on-surface-variant mt-2 max-w-xl">
                Estás desarrollando habilidades para crear modelos predictivos, evaluar su rendimiento y aplicarlos a problemas complejos del mundo real.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="font-bold text-headline-sm mb-4">Habilidades en desarrollo</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-surface-container rounded-full text-label-md text-on-surface-variant border border-outline-variant/30">Regresión</span>
                <span className="px-3 py-1 bg-surface-container rounded-full text-label-md text-on-surface-variant border border-outline-variant/30">Clasificación</span>
                <span className="px-3 py-1 bg-surface-container rounded-full text-label-md text-on-surface-variant border border-outline-variant/30">Árboles de decisión</span>
                <span className="px-3 py-1 bg-surface-container rounded-full text-label-md text-on-surface-variant border border-outline-variant/30">Validación de modelos</span>
                <span className="px-3 py-1 bg-surface-container rounded-full text-label-md text-on-surface-variant border border-outline-variant/30">Métricas de evaluación</span>
                <span className="px-3 py-1 bg-surface-container rounded-full text-label-md text-on-surface-variant border border-outline-variant/30">Feature Engineering</span>
              </div>
            </div>
            
            <div className="flex flex-col items-center justify-center p-6 bg-surface-container-low rounded-2xl border border-glass-stroke">
              <div className="relative w-32 h-32 flex items-center justify-center mb-4">
                <ProgressRing value={XPProgress} size={128} strokeWidth={8} label="63%" />
              </div>
              <div className="w-full space-y-3">
                <div className="flex justify-between items-center text-label-md">
                  <span className="text-on-surface-variant">XP Actual</span>
                  <span className="font-bold text-primary">{currentXP} XP</span>
                </div>
                <div className="flex justify-between items-center text-label-md">
                  <span className="text-on-surface-variant">XP para siguiente nivel</span>
                  <span className="font-bold text-on-surface">{nextLevelXP} XP</span>
                </div>
                <div className="flex justify-between items-center text-label-md">
                  <span className="text-on-surface-variant">Misiones completadas</span>
                  <span className="font-bold text-on-surface">12 / 20</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="glass-card rounded-3xl p-card-padding">
          <h4 className="font-bold text-headline-sm mb-6">Recompensas por alcanzar este nivel</h4>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary-container/10 flex items-center justify-center text-primary-container">
                <span className="material-symbols-outlined">biotech</span>
              </div>
              <div className="flex-1">
                <h5 className="font-bold text-label-lg">Nuevo Laboratorio</h5>
                <p className="text-[12px] text-on-surface-variant">Acceso al Laboratorio de Deep Learning</p>
              </div>
              <span className="material-symbols-outlined text-success-green fill-icon">check_circle</span>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-xp-blue/10 flex items-center justify-center text-xp-blue">
                <span className="material-symbols-outlined">rocket_launch</span>
              </div>
              <div className="flex-1">
                <h5 className="font-bold text-label-lg">Proyecto Avanzado</h5>
                <p className="text-[12px] text-on-surface-variant">Desbloquea proyectos más complejos</p>
              </div>
              <span className="material-symbols-outlined text-success-green fill-icon">check_circle</span>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-tertiary-fixed-dim/20 flex items-center justify-center text-tertiary">
                <span className="material-symbols-outlined">palette</span>
              </div>
              <div className="flex-1">
                <h5 className="font-bold text-label-lg">Personalización</h5>
                <p className="text-[12px] text-on-surface-variant">Nuevos temas y personalizaciones</p>
              </div>
              <span className="material-symbols-outlined text-success-green fill-icon">check_circle</span>
            </div>
            
            <div className="flex items-center gap-4 opacity-50">
              <div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center text-on-surface-variant">
                <span className="material-symbols-outlined">workspace_premium</span>
              </div>
              <div className="flex-1">
                <h5 className="font-bold text-label-lg">Título</h5>
                <p className="text-[12px] text-on-surface-variant">Especialista en Machine Learning</p>
              </div>
              <span className="material-symbols-outlined text-on-surface-variant">lock</span>
            </div>
          </div>
          
          <div className="mt-10 p-5 bg-primary/5 rounded-2xl border border-primary/10">
            <h5 className="font-bold text-label-lg mb-2 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">auto_awesome</span>
                Próximo Hito
                    </h5>
            <p className="text-label-md text-on-surface-variant">Completa 8 misiones más para desbloquear el nivel Especialista y el Laboratorio de Visión Artificial.</p>
            <button className="w-full mt-4 py-2.5 bg-primary text-on-primary rounded-xl font-bold transition-transform active:scale-95 shadow-lg shadow-primary/20">Ver Misiones</button>
          </div>
        </div>
      </div>
    </div>
  )
}