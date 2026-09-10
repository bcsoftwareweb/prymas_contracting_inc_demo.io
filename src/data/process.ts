export type ProcessStep = {
  number: string
  title: string
  description: string
}

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Understand',
    description:
      "We begin by understanding the project's goals, scope, site conditions, and priorities.",
  },
  {
    number: '02',
    title: 'Plan',
    description: 'Develop the project approach, scope, schedule, and coordination strategy.',
  },
  {
    number: '03',
    title: 'Coordinate',
    description: 'Work closely with clients, trades, consultants, and project stakeholders.',
  },
  {
    number: '04',
    title: 'Build',
    description: 'Execute the work with attention to quality, safety, communication, and schedule.',
  },
  {
    number: '05',
    title: 'Complete',
    description: 'Deliver the finished project and ensure the final details are addressed.',
  },
]
