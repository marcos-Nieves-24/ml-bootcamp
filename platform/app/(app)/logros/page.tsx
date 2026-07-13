"use client"

import { useState } from "react"
import GlassCard from "@/app/components/GlassCard"
import Badge from "@/app/components/Badge"
import { MOCK_ACHIEVEMENTS, MOCK_USERS } from "@/lib/data"
import ProgressCircle from "@/app/components/ProgressCircle"

export default function LogrosPage() {
  const currentUser = MOCK_USERS[0]
  const unlockedAchievements = MOCK_ACHIEVEMENTS.filter(a => a.unlockedAt)
  const allAchievements = MOCK_ACHIEVEMENTS
  const inProgressAchievements = allAchievements.filter(a => 
    !a.unlockedAt && !a.id.startsWith('unlock') // Placeholder for in-progress logic
  )
  const lockedAchievements = allAchievements.filter(a => 
    !a.unlockedAt && a.id.startsWith('unlock') // Placeholder for locked logic
  )
  
  const getCategory = (achievement: any) => {
    if (achievement.id === 'explorer' || achievement.id === 'quick-learner' || achievement.id === 'outlier-detective') return 'Exploración'
    if (achievement.id === 'python-master') return 'Maestría Técnica'
    return 'Impacto Real'
  }
  
  const getFilteredAchievements = (category: string) => {
    const filtered = allAchievements.filter(a => {
      const cat = getCategory(a)
      if (category === 'all') return true
      return cat === category
    })
    
    // Mark some as earned for demo
    return filtered.map(a => ({
      ...a,
      earned: unlockedAchievements.some(ua => ua.id === a.id),
      locked: lockedAchievements.some(lq => lq.id === a.id)
    }))
  }

  const categories = ['Exploración', 'Maestría Técnica', 'Impacto Real']
  
  return (
    <div className="space-y-8">
      <header className="mb-section-gap">
        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-2">Logros</h2>
        <p className="text-body-lg text-on-surface-variant">Tu vitrina de éxitos y hitos alcanzados en Nexus Institute.</p>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter mb-12">
        <GlassCard className="p-card-padding rounded-2xl flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <span className="material-symbols-outlined text-2xl">stars</span>
          </div>
          <div>
            <p className="text-label-md text-on-surface-variant uppercase tracking-wider">Desbloqueados</p>
            <p className="font-headline-md text-headline-md text-on-surface">{unlockedAchievements.length} / {allAchievements.length}</p>
          </div>
        </GlassCard>
        
        <GlassCard className="p-card-padding rounded-2xl flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-tertiary-fixed-dim/20 flex items-center justify-center text-tertiary">
            <span className="material-symbols-outlined text-2xl">workspace_premium</span>
          </div>
          <div>
            <p className="text-label-md text-on-surface-variant uppercase tracking-wider">Más Raro</p>
            <p className="font-headline-md text-headline-md text-on-surface">Architect</p>
          </div>
        </GlassCard>
        
        <GlassCard className="p-card-padding rounded-2xl flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-xp-blue/10 flex items-center justify-center text-xp-blue">
            <span className="material-symbols-outlined text-2xl">military_tech</span>
          </div>
          <div>
            <p className="text-label-md text-on-surface-variant uppercase tracking-wider">Puntos Totales</p>
            <p className="font-headline-md text-headline-md text-on-surface">{unlockedAchievements.reduce((sum, a) => sum + (a.xpReward || 0), 0)} AP</p>
          </div>
        </GlassCard>
      </div>
      
      <div className="space-y-12">
        {categories.map(category => {
          const achievements = getFilteredAchievements(category)
          const earnedCount = achievements.filter(a => a.earned).length
          const totalCount = achievements.length
          
          return (
            <section key={category}>
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-headline-sm text-headline-sm flex items-center gap-2 text-on-surface">
                  <span className="material-symbols-outlined text-primary">{
                    category === 'Exploración' ? 'explore' :
                    category === 'Maestría Técnica' ? 'terminal' :
                    'public'
                  }</span> {category}
                </h3>
                <span className="text-label-md text-on-surface-variant">{earnedCount} de {totalCount} completados</span>
              </div>
              
              <div className="achievement-grid">
                {achievements.map(achievement => {
                  const isEarned = achievement.earned
                  const isLocked = achievement.locked
                  
                  return (
                    <GlassCard 
                      key={achievement.id}
                      className={`p-6 rounded-2xl border-l-4 group ${isEarned ? 'border-success-green' : isLocked ? 'border-on-surface-variant opacity-60' : 'border-primary'} hover:bg-white/80 transition-all ${!isLocked ? 'cursor-pointer' : ''}`}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className={`w-14 h-14 rounded-xl ${isEarned ? 'bg-gradient-to-br from-primary to-secondary p-[2px]' : isLocked ? 'bg-surface-container' : 'bg-gradient-to-br from-primary to-secondary p-[2px]'}`}>
                          <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center">
                            <span className="material-symbols-outlined text-3xl text-primary">{
                              achievement.icon
                            }</span>
                          </div>
                        </div>
                        {isEarned && (
                          <span className="text-code-sm text-success-green font-bold">12 OCT 2023</span>
                        )}
                        {isLocked && (
                          <span className="material-symbols-outlined text-on-surface-variant">lock</span>
                        )}
                      </div>
                      <h4 className="font-headline-sm text-headline-sm text-on-surface mb-1">{achievement.title}</h4>
                      <p className="text-label-md text-on-surface-variant line-clamp-2">{achievement.description}</p>
                      {achievement.xpReward && (
                        <div className="mt-3">
                          <span className={`text-xs font-bold ${isEarned ? 'text-success-green' : isLocked ? 'text-on-surface-variant' : 'text-primary'}`}>+{achievement.xpReward} XP</span>
                        </div>
                      )}
                    </GlassCard>
                  )
                })}
              </div>
            </section>
          )
        })}
      </div>
      
      <aside className="w-80 space-y-gutter shrink-0">
        <section className="glass-card p-card-padding rounded-3xl text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary-container"></div>
          <h4 className="text-label-md font-bold text-on-surface-variant uppercase mb-6">Insignia Destacada</h4>
          <div className="relative w-48 h-48 mx-auto mb-6 flex items-center justify-center">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl opacity-30 animate-pulse"></div>
            <div className="relative w-40 h-40 bg-gradient-to-br from-white to-surface-container rounded-[2rem] rotate-45 border-4 border-primary/20 shadow-2xl flex items-center justify-center group-hover:rotate-[50deg] transition-transform duration-500">
              <div className="-rotate-45 flex flex-col items-center">
                <span className="material-symbols-outlined text-6xl text-primary">emoji_events</span>
              </div>
            </div>
          </div>
          <h5 className="text-headline-md font-headline-md text-on-surface mb-1">Maestro de Datos</h5>
          <p className="text-label-md text-on-surface-variant mb-4">Otorgado por completar el Laboratory: Exploratory Data Analysis con un score de 100%.</p>
          <button className="w-full py-2 bg-primary/10 text-primary font-bold rounded-xl text-label-lg hover:bg-primary transition-colors hover:text-white">Compartir Logro</button>
        </section>
        
        <section className="glass-card p-card-padding rounded-3xl">
          <h4 className="text-label-md font-bold text-on-surface-variant uppercase mb-6">Próximo Desafío</h4>
          <div className="flex gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-primary">neurology</span>
            </div>
            <div className="flex-1">
              <h5 className="font-bold text-on-surface mb-1 leading-tight">Cerebro de Enjambre</h5>
              <p className="text-label-md text-on-surface-variant leading-tight">Usa un algoritmo de Ensemble Learning en un proyecto.</p>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-label-md font-bold">
              <span className="text-primary">85%</span>
              <span className="text-on-surface-variant">17/20 pasos</span>
            </div>
            <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden">
              <div className="h-full bg-primary rounded-full transition-all duration-500" style={{width: '85%'}}></div>
            </div>
            <p className="text-label-md text-on-surface-variant pt-2 italic">Estás a 3 submisiones de desbloquear este logro.</p>
          </div>
        </section>
        
        <div className="p-6 bg-secondary/5 rounded-3xl border border-secondary/10 flex gap-3">
          <span className="material-symbols-outlined text-secondary">lightbulb</span>
          <p className="text-label-md text-on-secondary-fixed-variant leading-relaxed">
            <span className="font-bold">Tip de Investigador:</span> Participar en los hilos de la comunidad te ayuda a desbloquear logros de la categoría "Comunidad" más rápido.
          </p>
        </div>
      </aside>
    </div>
  )
}