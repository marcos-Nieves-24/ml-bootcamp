"use client"

import React from "react"
import StitchCard from "@/app/components/StitchCard"
import Badge from "@/app/components/Badge"
import ProgressRing from "@/app/components/ProgressRing"
import StitchBtn from "@/app/components/StitchBtn"

export default function ComunidadPage() {
  return (
    <div className="space-y-8">
      {/* Header Section */}
      <StitchCard className="relative overflow-hidden rounded-3xl p-12" hover={false}>
        <div className="absolute inset-0 bg-white/50 backdrop-blur-sm z-0"></div>
        <div className="relative z-10 max-w-2xl">
          <h1 className="font-display-hero text-headline-lg text-on-surface mb-4">Comunidad de Investigadores</h1>
          <p className="font-body-lg text-on-surface-variant leading-relaxed">
            Colabora con mentes brillantes de todo el mundo. Resuelve dudas complejas, participa en desafíos globales y forma equipos de élite para acelerar tu crecimiento en Machine Learning.
          </p>
          <div className="mt-8 flex gap-4">
            <StitchBtn>
              <span className="material-symbols-outlined">campaign</span>
              Ver Anuncios
            </StitchBtn>
            <button className="px-8 py-3 rounded-full border border-primary/20 text-primary font-label-lg hover:bg-primary/5 transition-colors">
              Explorar Guías
            </button>
          </div>
        </div>
        {/* Decorative Element */}
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
          <span className="material-symbols-outlined text-[240px] text-primary rotate-12">groups</span>
        </div>
      </StitchCard>

      <div className="grid grid-cols-12 gap-gutter">
        {/* Left Column: Primary Content */}
        <div className="col-span-8 flex flex-col gap-gutter">
          {/* Global Challenges */}
          <section>
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-headline-md text-deep-navy flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">emoji_events</span>
                Desafíos Globales
              </h2>
              <a className="text-primary font-label-lg hover:underline" href="#">Ver todos</a>
            </div>
            <div className="grid grid-cols-2 gap-base">
              {/* Challenge Card 1 */}
              <StitchCard className="rounded-2xl p-6 border-l-4 border-l-xp-blue hover:bg-white/85 transition-all">
                <div className="flex justify-between items-start mb-4">
                  <span className="bg-xp-blue/10 text-xp-blue px-3 py-1 rounded-full text-label-md font-bold">ACTIVO</span>
                  <div className="text-right">
                    <p className="text-label-md text-on-surface-variant">Termina en:</p>
                    <p className="font-code-sm text-primary font-bold">14:22:05</p>
                  </div>
                </div>
                        <h3 className="font-headline-sm text-on-surface mb-2">Nexus Biotech AI Hack</h3>
                <p className="font-body-md text-on-surface-variant mb-4 line-clamp-2">Optimización de diagnósticos mediante redes neuronales convolucionales.</p>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-1 text-tertiary">
                    <span className="material-symbols-outlined text-[18px]">military_tech</span>
                    <span className="text-label-md">Badge Oro</span>
                  </div>
                  <div className="flex items-center gap-1 text-primary">
                    <span className="material-symbols-outlined text-[18px]">bolt</span>
                    <span className="text-label-md">+5,000 XP</span>
                  </div>
                </div>
                <StitchBtn className="w-full">
                  Participar
                </StitchBtn>
              </StitchCard>

              {/* Challenge Card 2 */}
              <StitchCard className="rounded-2xl p-6 border-l-4 border-l-success-green hover:bg-white/85 transition-all">
                <div className="flex justify-between items-start mb-4">
                  <span className="bg-success-green/10 text-success-green px-3 py-1 rounded-full text-label-md font-bold">PRÓXIMO</span>
                  <div className="text-right">
                    <p className="text-label-md text-on-surface-variant">Inicia en:</p>
                    <p className="font-code-sm text-on-surface-variant">2d 04h</p>
                  </div>
                </div>
                        <h3 className="font-headline-sm text-on-surface mb-2">Predictive Finance Summit</h3>
                <p className="font-body-md text-on-surface-variant mb-4 line-clamp-2">Modelado de series temporales para predicción de mercados emergentes.</p>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-1 text-tertiary">
                    <span className="material-symbols-outlined text-[18px]">workspace_premium</span>
                    <span className="text-label-md">Certificado</span>
                  </div>
                  <div className="flex items-center gap-1 text-primary">
                    <span className="material-symbols-outlined text-[18px]">bolt</span>
                    <span className="text-label-md">+3,500 XP</span>
                  </div>
                </div>
                <button className="w-full py-3 rounded-xl border border-outline-variant text-on-surface-variant font-label-lg cursor-not-allowed" disabled>
                  Inscribirse
                </button>
              </StitchCard>
            </div>
          </section>

          {/* Forum Questions */}
          <section>
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-headline-md text-deep-navy flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">forum</span>
                Foro de Consultas
              </h2>
              <button className="bg-primary px-6 py-2 rounded-full text-white font-label-lg flex items-center gap-2 hover:shadow-md transition-shadow">
                <span className="material-symbols-outlined">add</span> Preguntar
              </button>
            </div>
            <div className="flex flex-col gap-base">
              {/* Question Card 1 */}
              <StitchCard className="p-6 rounded-2xl flex gap-6 items-start hover:bg-white/85 transition-all">
                <div className="flex flex-col items-center gap-1 px-3 py-2 bg-surface-container-low rounded-xl min-w-[64px]">
                  <span className="material-symbols-outlined text-primary">expand_less</span>
                  <span className="font-bold text-deep-navy">24</span>
                  <span className="material-symbols-outlined text-outline">expand_more</span>
                </div>
                <div className="flex-grow">
                  <div className="flex items-center gap-2 mb-2">
                    <img className="w-6 h-6 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8T2gs9HjTNyEMirNm6rWBPFvnilt6SAt5j9iacuWzuJlE0xhw4u6rUSPP17XUrc5J74meV7vKA55W14hpk1qzYXz7U7nlJSGt2bpDdZMpvhqxpZBKIg-PVKeksGhCr0fesKnznfd0fNPtrUxyWOVra-ePhRO2zmSCDtY3gh4MTbTug9m9HJS0Q0cAx0ERVLx3r9JjN6Ygsw3gjQ25UUUvRfKXy0citdl-xbKTzDosdPM9pK4EXBNX" alt="Avatar" />
                    <span className="text-label-md text-on-surface-variant">@lucas_dev • hace 2 horas</span>
                  </div>
                  <h3 className="font-headline-sm text-deep-navy mb-3 hover:text-primary cursor-pointer transition-colors">¿Cómo optimizar el hiperparámetro de regularización en modelos de Ridge Regression?</h3>
                  <div className="flex gap-2 mb-4">
                    <span className="px-2 py-1 rounded bg-surface-container text-label-md text-outline">#Python</span>
                    <span className="px-2 py-1 rounded bg-surface-container text-label-md text-outline">#LinearRegression</span>
                    <span className="px-2 py-1 rounded bg-surface-container text-label-md text-outline">#Mathematics</span>
                  </div>
                  <div className="flex items-center gap-6 text-on-surface-variant">
                    <span className="flex items-center gap-1 text-label-md">
                      <span className="material-symbols-outlined text-[18px]">chat_bubble</span> 12 respuestas
                    </span>
                    <span className="flex items-center gap-1 text-label-md">
                      <span className="material-symbols-outlined text-[18px]">visibility</span> 450 vistas
                    </span>
                  </div>
                </div>
              </StitchCard>

              {/* Question Card 2 */}
              <StitchCard className="p-6 rounded-2xl flex gap-6 items-start opacity-80 hover:opacity-100 transition-all">
                <div className="flex flex-col items-center gap-1 px-3 py-2 bg-surface-container-low rounded-xl min-w-[64px]">
                  <span className="material-symbols-outlined text-primary">expand_less</span>
                  <span className="font-bold text-deep-navy">8</span>
                  <span className="material-symbols-outlined text-outline">expand_more</span>
                </div>
                <div className="flex-grow">
                  <div className="flex items-center gap-2 mb-2">
                    <img className="w-6 h-6 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAo9ewSx6cAckuXzuqakf_0pf6zwqFXsVGgtRRfAQScjYl0Xfwouf9dksTc8QmE88BQU7y6daSsYr_ibeF5EY_S1XLSVI7bnqkv-Xlh0cT_FPDGAtwVk2KaEiGgC5SgW6_1rVRrU_JqG9g2nd5Iim8LEWzRgSfZfcG6uVTcJfafWSzUGp9kP2eDy0pOaI2-nsKOf7Luw1PRcYockEpcvDB6jo3yuUw7xcKQrdzxq0LbXm0sTHO-vNMT" alt="Avatar" />
                    <span className="text-label-md text-on-surface-variant">@elena_ai • hace 5 horas</span>
                  </div>
                  <h3 className="font-headline-sm text-deep-navy mb-3 hover:text-primary cursor-pointer transition-colors">Error de convergencia en Redes Neuronales Recurrentes (RNN)</h3>
                  <div className="flex gap-2 mb-4">
                    <span className="px-2 py-1 rounded bg-surface-container text-label-md text-outline">#DeepLearning</span>
                    <span className="px-2 py-1 rounded bg-surface-container text-label-md text-outline">#PyTorch</span>
                  </div>
                  <div className="flex items-center gap-6 text-on-surface-variant">
                    <span className="flex items-center gap-1 text-label-md">
                      <span className="material-symbols-outlined text-[18px]">chat_bubble</span> 3 respuestas
                    </span>
                    <span className="flex items-center gap-1 text-label-md">
                      <span className="material-symbols-outlined text-[18px]">visibility</span> 120 vistas
                    </span>
                  </div>
                </div>
              </StitchCard>
            </div>
          </section>

          {/* Research Teams */}
          <section>
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-headline-md text-deep-navy flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">science</span>
                Equipos de Investigación
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-gutter">
              {/* Team Card 1 */}
              <StitchCard className="rounded-2xl p-6 relative group hover:bg-white/85 transition-all">
                <div className="absolute top-4 right-4 text-primary opacity-30 group-hover:opacity-100 transition-opacity">
                  <span className="material-symbols-outlined text-[32px]">science</span>
                </div>
                <h3 className="font-headline-sm text-deep-navy mb-1">Biotech Diagnosis Team</h3>
                <p className="text-label-md text-on-surface-variant mb-4">Proyecto: Clasificación de Imágenes Celulares</p>
                <div className="mb-4">
                  <p className="text-label-md font-bold mb-2 text-deep-navy">Requisitos:</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-primary border border-primary/20 px-2 py-1 rounded">OpenCV</span>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-primary border border-primary/20 px-2 py-1 rounded">FastAI</span>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-6">
                  <div className="flex -space-x-2">
                    <img className="w-8 h-8 rounded-full border-2 border-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEW9xiBY_YgA4_UUAMuBH3DilmcCFqPQDNT2ipCDBM1zhrJegHkhXnKkLfEB_9FLT67QaPZ_RBEXxq1H7nR4v7N3ao_rsyUjSAEDfP4kcuHq3e3thjYWvaGpq1R2f9EYxlU7autlCLDbJjXRD3SqP6tBHINS9cEuBdUiGupJNBLYiE4Zzu-k8VeNZWXAf5RV1XLHtxwfvqWD6r5Toc7dN7l9LpgFki1DrM-w6fuBbIb3J52dTIDHqY" alt="Avatar 1" />
                    <img className="w-8 h-8 rounded-full border-2 border-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4WE6rcbeV8TZdBKurj6i0uqg5JMC0LPu8Wi_1kV2CLybIcUCeF0fEx5C1ew0JnDW1tlZ1mfqei1dwM8X8BYA7fG-URli0C02hNlOWQSr9h2NbX7mqMAFKJWGUzN30mOpCOweRDipqIaAjoteLseFWo-bD3xXRcU_DQtrBJsBINI8OAjTUkMlZFrTkFuUFjGJzuZq3dnZjJBGmE7h1oKqfCpk49Fo5VQSnNJVIAJOaRtvspSq6HkTQ" alt="Avatar 2" />
                    <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-[10px] font-bold border-2 border-white">+3</div>
                  </div>
                  <button className="px-4 py-2 rounded-lg bg-surface-container text-deep-navy font-label-lg hover:bg-primary hover:text-white transition-all">Unirse</button>
                </div>
              </StitchCard>

              {/* Team Card 2 */}
              <StitchCard className="rounded-2xl p-6 relative group hover:bg-white/85 transition-all">
                <div className="absolute top-4 right-4 text-secondary opacity-30 group-hover:opacity-100 transition-opacity">
                  <span className="material-symbols-outlined text-[32px]">dataset</span>
                </div>
                <h3 className="font-headline-sm text-deep-navy mb-1">NLP Sentiment Global</h3>
                <p className="text-label-md text-on-surface-variant mb-4">Proyecto: Análisis de sentimientos multilingüe</p>
                <div className="mb-4">
                  <p className="text-label-md font-bold mb-2 text-deep-navy">Requisitos:</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-secondary border border-secondary/20 px-2 py-1 rounded">Transformers</span>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-secondary border border-secondary/20 px-2 py-1 rounded">BERT</span>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-6">
                  <div className="flex -space-x-2">
                    <img className="w-8 h-8 rounded-full border-2 border-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_u2Xyo1aX2-8CQ2RRlXpZop2ZWnkoMoVpqTwTQoz59TNEPGMX8DH1-TGU4j_dZ5sLUCwFUrwEYeTed2GsuzdiXIqR3s-AhGn0M-TupkL6O1cghvvfcxmnuDaKO5zTWEECefLkAw_pX4A7dITjoBCr2Up6UNl3mVDf4miJhlgpON3ossqEDKt4CxpASC47bZ-cpRDQhcubfflawlevY9GD59scBl8KwAyAWoiXsC5o2QKIRDfaYSyY" alt="Avatar 3" />
                    <img className="w-8 h-8 rounded-full border-2 border-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBudJBy3CioX8VmiMXb5OTiI8SrP6AJ3BoPyJjOxy-3zLnViURgVKX5on0Wyu9TXvXeuRoklS4F-W756GYk4MCpliGe8tgO4ujRgQcOugHi4E2UwZxTBJg_VABFdExUbGbAV0GTL2QWPnNOz8EYBwMiN-Rqc3YlVsNm-m6k4ykCSyYSkcjic5SCj1ov911NCFwwmO97H-u2go6-Cj_ahAdrw26pCjg0KOfjfUmzoPA0ck78l_jJ8I3D" alt="Avatar 4" />
                    <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-[10px] font-bold border-2 border-white">+1</div>
                  </div>
                  <button className="px-4 py-2 rounded-lg bg-surface-container text-deep-navy font-label-lg hover:bg-secondary hover:text-white transition-all">Unirse</button>
                </div>
              </StitchCard>
            </div>
          </section>
        </div>

        {/* Right Column: Sidebar Panels */}
        <div className="col-span-4 flex flex-col gap-gutter">
          {/* Weekly Ranking Panel */}
          <aside className="glass-card rounded-3xl p-6">
            <h3 className="font-headline-sm text-deep-navy mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">trophy</span>
              Ranking de la Semana
            </h3>
            <div className="space-y-4">
              {/* Rank Item 1 */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-surface-container-low border border-glass-stroke hover:bg-white transition-all">
                <div className="w-8 h-8 rounded-full bg-xp-blue/10 flex items-center justify-center text-xp-blue font-bold">1</div>
                <img className="w-10 h-10 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVf21JqG8MOVG7Bw-tlRr3F7S_np7B6dP_rI4XHdzpJK3233R9Cfp7tOcXGuMU-bHEu2rrPAktt7uXXx2eJgKVAGODY4v0jlV67aJvl7G3kGItGqxPICnogVeFh-Kl5QCYXuGfRraSDBcr0pkhk70C988LODqd1EFQGTmfbPTy6bDXBJHZ0hUUXNeCn6DPI_h8eR0uBtEnKF_UDav_GGScpko3A_bL9HjEd_TyPgEfHevLexEwKyzW" alt="User 1" />
                <div className="flex-1">
                  <p className="font-label-lg text-deep-navy">Investigador Nexus</p>
                  <p className="text-label-md text-on-surface-variant">12,450 XP</p>
                </div>
                <span className="material-symbols-outlined text-tertiary-fixed-dim">workspace_premium</span>
              </div>
              
              {/* Rank Item 2 */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-surface-container-low border border-glass-stroke hover:bg-white transition-all">
                <div className="w-8 h-8 rounded-full bg-outline-variant/10 flex items-center justify-center text-outline-variant font-bold">2</div>
                <img className="w-10 h-10 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4WE6rcbeV8TZdBKurj6i0uqg5JMC0LPu8Wi_1kV2CLybIcUCeF0fEx5C1ew0JnDW1tlZ1mfqei1dwM8X8BYA7fG-URli0C02hNlOWQSr9h2NbX7mqMAFKJWGUzN30mOpCOweRDipqIaAjoteLseFWo-bD3xXRcU_DQtrBJsBINI8OAjTUkMlZFrTkFuUFjGJzuZq3dnZjJBGmE7h1oKqfCpk49Fo5VQSnNJVIAJOaRtvspSq6HkTQ" alt="User 2" />
                <div className="flex-1">
                  <p className="font-label-lg text-deep-navy">Data Scientist</p>
                  <p className="text-label-md text-on-surface-variant">11,800 XP</p>
                </div>
                <span className="material-symbols-outlined text-tertiary">military_tech</span>
              </div>
              
              {/* Rank Item 3 */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-surface-container-low border border-glass-stroke hover:bg-white transition-all">
                <div className="w-8 h-8 rounded-full bg-tertiary-fixed/10 flex items-center justify-center text-tertiary-fixed font-bold">3</div>
                <img className="w-10 h-10 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAzsBBWeGv4H0t0r_Fz_MPN__4qs9s6BxShViduR907SkbQ--QvhIFV_MVKV0MDOAwDlamrTyDo3Wd7tayiucExAZRiPxqZNFmGzOiZBN7EMu1gCRF0Vh-sVW77qjuQrddInhVkz2MQ-3Y05D6hem7nj2p6szVhVYSe0rChw1r_TnewPHHnP-2Ykav96_E5VL28Cz_LYZvT9Kp0-UZ7gPSBmMJ7ui-bdgOxlGBdPLwrH7y5nHvS5bU" alt="User 3" />
                <div className="flex-1">
                  <p className="font-label-lg text-deep-navy">ML Engineer</p>
                  <p className="text-label-md text-on-surface-variant">11,250 XP</p>
                </div>
                <span className="material-symbols-outlined text-tertiary-fixed-dim">workspace_premium</span>
              </div>
            </div>
          </aside>

          {/* Upcoming Events Calendar */}
          <aside className="glass-card rounded-3xl p-6">
            <h3 className="font-headline-sm text-deep-navy mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">calendar_month</span>
              Eventos Próximos
            </h3>
            <div className="space-y-4">
              {/* Event 1 */}
              <div className="flex gap-4 p-4 rounded-2xl bg-surface-container-low border border-glass-stroke group cursor-pointer hover:bg-white transition-all">
                <div className="bg-primary/10 text-primary p-3 rounded-xl flex flex-col items-center justify-center min-w-[56px] h-[56px]">
                  <span className="font-bold text-headline-sm">24</span>
                  <span className="text-[10px] font-bold uppercase">OCT</span>
                </div>
                <div>
                  <h4 className="font-label-lg text-deep-navy group-hover:text-primary transition-colors">Webinar: Reinforcement Learning</h4>
                  <p className="text-label-md text-on-surface-variant flex items-center gap-1 mt-1">
                    <span className="material-symbols-outlined text-[14px]">schedule</span> 18:00 (GMT-5)
                  </p>
                </div>
              </div>

              {/* Event 2 */}
              <div className="flex gap-4 p-4 rounded-2xl bg-surface-container-low border border-glass-stroke group cursor-pointer hover:bg-white transition-all">
                <div className="bg-secondary/10 text-secondary p-3 rounded-xl flex flex-col items-center justify-center min-w-[56px] h-[56px]">
                  <span className="font-bold text-headline-sm">27</span>
                  <span className="text-[10px] font-bold uppercase">OCT</span>
                </div>
                <div>
                  <h4 className="font-label-lg text-deep-navy group-hover:text-secondary transition-colors">Sesión de Estudio: Transformers</h4>
                  <p className="text-label-md text-on-surface-variant flex items-center gap-1 mt-1">
                    <span className="material-symbols-outlined text-[14px]">schedule</span> 20:30 (GMT-5)
                  </p>
                </div>
              </div>
            </div>
            <button className="w-full mt-6 py-3 rounded-xl border-2 border-dashed border-outline-variant text-on-surface-variant font-label-lg hover:border-primary hover:text-primary transition-all">
              + Añadir a mi calendario
            </button>
          </aside>
        </div>
      </div>
    </div>
  )
}