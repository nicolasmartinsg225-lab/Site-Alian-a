import {
  Activity,
  ClipboardCheck,
  Droplets,
  Factory,
  FileText,
  Gauge,
  Hammer,
  Layers,
  ShieldCheck,
  Stamp,
  Target,
  Wrench,
  type LucideProps,
} from 'lucide-react'

const ICONS = {
  Activity,
  ClipboardCheck,
  Droplets,
  Factory,
  FileText,
  Gauge,
  Hammer,
  Layers,
  ShieldCheck,
  Stamp,
  Target,
  Wrench,
} as const

export type IconName = keyof typeof ICONS

export function Icon({ name, ...props }: { name: IconName } & LucideProps) {
  const Cmp = ICONS[name]
  return <Cmp {...props} />
}
