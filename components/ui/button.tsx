import React from "react";

type ButtonVariant = "primary" | "ghost" | "outline";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: "sm" | "md" | "lg";
}

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-btn font-heading font-semibold tracking-wide transition-all duration-300 cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-primary/60 disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<ButtonVariant, string> = {
  primary: "glow-btn-primary text-text-primary",
  ghost: "text-text-secondary hover:text-text-primary hover:bg-white/5",
  outline:
    "border border-cyan-primary/40 text-cyan-primary hover:border-cyan-primary hover:shadow-cyan-glow",
};

const sizes: Record<Exclude<ButtonSize, undefined>, string> = {
  sm: "px-4 py-2 text-xs",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

type ButtonSize = ButtonProps["size"];

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
