import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface CardProps {
  children: ReactNode
  className?: string
  title?: string
  subtitle?: string
  icon?: ReactNode
  padding?: "sm" | "md" | "lg"
  hover?: boolean
}

export function Card({ children, className, title, subtitle, icon, padding = "md", hover = true }: CardProps) {
  const paddingMap = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  }

  return (
    <div
      className={cn(
        "bg-white rounded-lg shadow-md border border-gray-200",
        paddingMap[padding],
        hover && "transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary",
        className,
      )}
    >
      {icon && <div className="mb-4">{icon}</div>}
      {title && <h3 className="text-xl font-semibold mb-2 text-gray-700">{title}</h3>}
      {subtitle && <p className="text-gray-600 mb-4">{subtitle}</p>}
      {children}
    </div>
  )
}
