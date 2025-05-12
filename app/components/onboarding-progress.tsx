interface OnboardingProgressProps {
  currentStep: number
  totalSteps: number
}

export function OnboardingProgress({ currentStep, totalSteps }: OnboardingProgressProps) {
  return (
    <div className="w-full flex justify-center mb-8">
      <div className="flex items-center space-x-2">
        {Array.from({ length: totalSteps }).map((_, index) => (
          <div
            key={index}
            className={`h-2 w-16 rounded-full ${index < currentStep ? "bg-black" : "bg-gray-200"}`}
            aria-hidden="true"
          />
        ))}
      </div>
    </div>
  )
}
