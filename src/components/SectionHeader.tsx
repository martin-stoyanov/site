interface SectionHeaderProps {
  children: React.ReactNode
  color?: string
}

export function SectionHeader({ children, color = 'white' }: SectionHeaderProps) {
  return (
    <h2
      className="font-mono text-3xl sm:text-2xl grid place-items-center min-w-max"
      style={{ color }}
    >
      {children}
    </h2>
  )
}
