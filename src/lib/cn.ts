export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ')
}

export function formatPhoneHref(phone: string) {
  return `tel:${phone.replace(/[^\d+]/g, '')}`
}
