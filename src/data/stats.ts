export type Stat = {
  value: string
  numericValue?: number
  suffix?: string
  label: string
}

export const stats: Stat[] = [
  {
    value: '25+',
    numericValue: 25,
    suffix: '+',
    label: 'Years of Combined Experience',
  },
  {
    value: '100+',
    numericValue: 100,
    suffix: '+',
    label: 'Projects Supported',
  },
  {
    value: '5',
    numericValue: 5,
    label: 'Core Service Areas',
  },
  {
    value: 'NYC',
    label: 'Based & Local',
  },
]
