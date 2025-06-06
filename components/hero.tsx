import { cn } from "@/lib/utils"

interface HeroProps {
  title: string
  subtitle?: string
  backgroundImage?: string
  className?: string
}

export function Hero({ title, subtitle, backgroundImage, className }: HeroProps) {
  const bgStyle = backgroundImage
    ? {
        backgroundImage: `linear-gradient(to right, rgba(20, 184, 166, 0.9), rgba(59, 130, 246, 0.9)), url(${backgroundImage})`,
      }
    : {}

  return (
    <div
      className={cn("relative bg-gradient-to-r from-teal-500 to-blue-500 bg-cover bg-center py-24 md:py-32", className)}
      style={bgStyle}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">{title}</h1>
        {subtitle && <p className="text-lg md:text-xl text-white max-w-2xl mx-auto">{subtitle}</p>}
      </div>
    </div>
  )
}
