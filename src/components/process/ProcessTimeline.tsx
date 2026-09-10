import { processSteps } from '../../data/process'
import { Reveal } from '../ui/Reveal'

export function ProcessTimeline() {
  return (
    <div>
      <ol className="hidden lg:grid lg:grid-cols-5">
        {processSteps.map((step, index) => (
          <li key={step.number} className="relative px-4">
            {index < processSteps.length - 1 && (
              <span
                className="absolute left-[calc(50%+28px)] right-[-50%] top-5 h-px bg-copper-500/40"
                aria-hidden="true"
              />
            )}
            <div className="relative z-10 mx-auto flex h-10 w-10 items-center justify-center border border-copper-500 bg-charcoal-950 font-display text-sm text-copper-300">
              {step.number}
            </div>
            <h3 className="mt-6 font-display text-2xl uppercase tracking-wide text-white">
              {step.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-white/65">{step.description}</p>
          </li>
        ))}
      </ol>

      <ol className="relative space-y-8 border-l border-copper-500/40 pl-8 lg:hidden">
        {processSteps.map((step) => (
          <li key={step.number} className="relative">
            <span className="absolute -left-[41px] top-0 flex h-8 w-8 items-center justify-center border border-copper-500 bg-charcoal-950 font-display text-xs text-copper-300">
              {step.number}
            </span>
            <h3 className="font-display text-2xl uppercase tracking-wide text-white">
              {step.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-white/65">{step.description}</p>
          </li>
        ))}
      </ol>
    </div>
  )
}

export function ProcessTimelineLight() {
  return (
    <div className="grid gap-8 lg:grid-cols-5">
      {processSteps.map((step, index) => (
        <Reveal key={step.number} delay={index * 80}>
          <article className="border-t border-charcoal-900/10 pt-6">
            <p className="font-display text-3xl text-copper-600">{step.number}</p>
            <h3 className="mt-3 font-display text-2xl uppercase tracking-wide text-charcoal-950">
              {step.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-charcoal-600">{step.description}</p>
          </article>
        </Reveal>
      ))}
    </div>
  )
}
