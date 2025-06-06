"use client"

import Link from "next/link"
import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

type ButtonVariant = "primary" | "secondary" | "accent" | "outline"
type ButtonSize = "sm" | "md" | "lg"

interface ButtonProps {
  children: ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  href?: string
  tel?: string
  className?: string
  onClick?: () => void
  type?: "button" | "submit" | "reset"
  external?: boolean
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  tel,
  className,
  onClick,
  type = "button",
  external = false,
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"

  const variantClasses = {
    primary: "bg-teal-500 text-white hover:bg-teal-600 shadow-sm",
    secondary: "bg-white text-blue-500 hover:bg-blue-500 hover:text-white shadow-sm border border-blue-500",
    accent: "bg-blue-500 text-white hover:bg-blue-600 shadow-sm",
    outline: "border-2 border-white bg-transparent text-white hover:bg-white hover:text-teal-500 shadow-sm",
  }

  const sizeClasses = {
    sm: "text-sm h-9 px-3 py-2",
    md: "text-sm h-10 px-4 py-2",
    lg: "text-base h-12 px-6 py-3",
  }

  const classes = cn(baseClasses, variantClasses[variant], sizeClasses[size], className)

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
        </a>
      )
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  if (tel) {
    return (
      <a href={`tel:${tel}`} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  )
}
