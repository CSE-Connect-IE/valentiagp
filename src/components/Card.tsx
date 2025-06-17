import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
  hover?: boolean;
  padding?: "sm" | "md" | "lg";
  icon?: ReactNode;
}

const Card = ({
  children,
  title,
  subtitle,
  className = "",
  hover = true,
  padding = "md",
  icon,
}: CardProps) => {
  const paddingClasses = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  const baseClasses = `
    card
    ${paddingClasses[padding]}
    ${hover ? "hover:shadow-xl hover:-translate-y-1" : ""}
    ${className}
  `
    .trim()
    .replace(/\s+/g, " ");

  return (
    <div className={baseClasses}>
      {(title || icon) && (
        <div className="flex items-center mb-4">
          {icon && <div className="mr-3 text-primary">{icon}</div>}
          <div>
            {title && (
              <h3 className="text-xl font-semibold text-gray-900 mb-1">
                {title}
              </h3>
            )}
            {subtitle && <p className="text-sm text-gray-600">{subtitle}</p>}
          </div>
        </div>
      )}
      <div className="text-gray-700">{children}</div>
    </div>
  );
};

export default Card;
