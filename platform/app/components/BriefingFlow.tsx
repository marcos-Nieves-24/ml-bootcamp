"use client"

import React, { useReducer, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import ParticleBackground from '@/app/components/ParticleBackground'
import StepCounter from '@/app/components/StepCounter'
import Step1_Branding from '@/app/components/Step1_Branding'
import Step2_Identity from '@/app/components/Step2_Identity'
import Step3_Quiz from '@/app/components/Step3_Quiz'
import Step4_Profile from '@/app/components/Step4_Profile'
import ConfettiOverlay from '@/app/components/ConfettiOverlay'

type Step = 1 | 2 | 3 | 4

interface FlowState {
  currentStep: Step
  alias: string
  intentions: string[]
  xpAwarded: number
  quizAnswerIndex: number | null
  quizIsCorrect: boolean | null
  showConfetti: boolean
}

type FlowAction = 
  | { type: 'GO_TO_STEP'; step: Step }
  | { type: 'SET_STEP_2'; alias: string; intentions: string[] }
  | { type: 'SET_STEP_3_RESULT'; answerIndex: number; isCorrect: boolean; xpAwarded: number }
  | { type: 'SHOW_CONFETTI' }
  | { type: 'HIDE_CONFETTI' }

function flowReducer(state: FlowState, action: FlowAction): FlowState {
  switch (action.type) {
    case 'GO_TO_STEP':
      return { ...state, currentStep: action.step }
    case 'SET_STEP_2':
      return { ...state, alias: action.alias, intentions: action.intentions }
    case 'SET_STEP_3_RESULT':
      return {
        ...state,
        quizAnswerIndex: action.answerIndex,
        quizIsCorrect: action.isCorrect,
        xpAwarded: action.xpAwarded,
        showConfetti: true
      }
    case 'SHOW_CONFETTI':
      return { ...state, showConfetti: true }
    case 'HIDE_CONFETTI':
      return { ...state, showConfetti: false }
    default:
      return state
  }
}

interface BriefingFlowProps {
  onComplete: (userData: { name: string; email: string; password: string }) => void
}

export default function BriefingFlow({ onComplete }: BriefingFlowProps) {
  const router = useRouter()
  const [state, dispatch] = useReducer(flowReducer, {
    currentStep: 1,
    alias: '',
    intentions: [],
    xpAwarded: 0,
    quizAnswerIndex: null,
    quizIsCorrect: null,
    showConfetti: false
  })
  
  const renderStep = () => {
    switch (state.currentStep) {
      case 1:
        return (
          <Step1_Branding
            onStart={() => dispatch({ type: 'GO_TO_STEP', step: 2 })}
            onLogin={() => router.push('/login')}
          />
        )
      case 2:
        return (
          <Step2_Identity
            alias={state.alias}
            intentions={state.intentions}
            onAliasChange={(alias) => dispatch({ type: 'SET_STEP_2', alias, intentions: state.intentions })}
            onIntentionsChange={(intentions) => dispatch({ type: 'SET_STEP_2', alias: state.alias, intentions })}
            onBack={() => dispatch({ type: 'GO_TO_STEP', step: 1 })}
            onContinue={() => dispatch({ type: 'GO_TO_STEP', step: 3 })}
          />
        )
      case 3:
        return (
          <Step3_Quiz
            onAnswer={(result) => dispatch({ type: 'SET_STEP_3_RESULT', ...result })}
            onBack={() => dispatch({ type: 'GO_TO_STEP', step: 2 })}
          />
        )
      case 4:
        return (
          <Step4_Profile
            alias={state.alias}
            intentions={state.intentions}
            xpAwarded={state.xpAwarded}
            onRegister={onComplete}
            onGoogleOAuth={() => signIn('google', { callbackUrl: '/dashboard' })}
            onLogin={() => router.push('/login')}
          />
        )
    }
  }
  
  useEffect(() => {
    if (state.showConfetti) {
      const timer = setTimeout(() => {
        dispatch({ type: 'HIDE_CONFETTI' })
        dispatch({ type: 'GO_TO_STEP', step: 4 })
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [state.showConfetti])
  
  return (
    <div className="relative min-h-screen overflow-hidden">
      <ParticleBackground />
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-8">
        {state.currentStep > 1 && (
          <StepCounter 
            currentStep={state.currentStep} 
            labels={['Briefing', 'Identidad', 'Quiz', 'Perfil']} 
          />
        )}
        
        <div className="animate-fadeInUp w-full max-w-lg mx-auto">
          {renderStep()}
        </div>
      </div>
      
      <ConfettiOverlay active={state.showConfetti} duration={3000} />
    </div>
  )
}