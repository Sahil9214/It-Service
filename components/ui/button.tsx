import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-lg text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-[var(--color-bg-cream)] disabled:opacity-60 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--color-button-primary)] text-white shadow-[0_4px_12px_var(--color-shadow-primary-light)] hover:bg-[var(--color-button-primary-hover)]",
        secondary:
          "bg-[var(--color-secondary)] text-[var(--color-charcoal-black)] hover:bg-[var(--color-secondary)]/90",
        outline:
          "border border-[var(--color-border-primary)] bg-white text-[var(--color-text-charcoal)] hover:bg-[var(--color-bg-light)]",
        ghost:
          "text-[var(--color-text-charcoal)] hover:bg-[var(--color-bg-primary-tint)]",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3 text-xs",
        lg: "h-11 px-6 text-base",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };

