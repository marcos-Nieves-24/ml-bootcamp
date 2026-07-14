"use client"
import React from 'react'
import { Check } from 'lucide-react'

interface StepCounterProps {
  currentStep: 1 | 2 | 3 | 4
  labels: string[]
}

export default function StepCounter({ currentStep, labels }: StepCounterProps) {
  // Validate currentStep
  if (![1, 2, 3, 4].includes(currentStep)) {
    console.error('StepCounter: currentStep must be 1, 2, 3, or 4')
    return null
  }
  
  // Validate labels length
  if (labels.length !== 4) {
    console.error('StepCounter: labels must be an array of exactly 4 strings')
    return null
  }
  
  const steps = [1, 2, 3, 4]
  
  const getStepStatus = (step: number) => {
    if (step < currentStep) return 'completed'
    if (step === currentStep) return 'active'
    return 'upcoming'
  }
  
  return (
    <div className="relative w-full max-w-2xl mx-auto py-8">
      {/* Connecting line */}
      <div className="absolute top-8 left-0 right-0 h-0.5 bg-gray-200 z-0">
        <div 
          className="h-full bg-primary transition-all duration-700 ease-out"
          style={{ width: `${((currentStep - 1) / 3) * 100}%` }}
        />
      </div>
      
      {/* Steps */}
      <div className="relative flex justify-between z-10">
        {steps.map((step) => {
          const status = getStepStatus(step)
          const isActive = status === 'active'
          const isCompleted = status === 'completed'
          
          return (
            <div key={step} className="flex flex-col items-center">
              {/* Step dot */}
              <div 
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110
                  ${isActive ? 'bg-primary text-white shadow-lg scale-125' : 
                    isCompleted ? 'bg-green-500 text-white' : 
                    'bg-gray-300 text-gray-500'}
                `}
              >
                {isCompleted ? (
                  <Check className="w-5 h-5" />
                ) : (
                  <span className="text-sm font-semibold">
                    {step}
                  </span>
                )}
              </div>
              
              {/* Label */}
              <div className="mt-2 text-center">
                <p 
                  className={`text-sm font-medium transition-colors
                    ${isActive ? 'text-primary font-bold' : 
                      isCompleted ? 'text-green-600' : 
                      'text-gray-500'}
                  `}
                >
                  {labels[step - 1]}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
