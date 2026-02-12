import * as React from "react";
import { cn } from "@/lib/utils";

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "destructive";
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <div
        ref={ref}
        role="alert"
        className={cn(
          "flex w-full gap-3 rounded-lg border px-4 py-3 text-sm",
          variant === "default" &&
            "border-[var(--color-border-primary)] bg-[var(--color-bg-light)] text-[var(--color-text-charcoal)]",
          variant === "destructive" &&
            "border-[var(--color-border-red)] bg-[var(--color-bg-linear-red)] text-[var(--color-status-error)]",
          className
        )}
        {...props}
      />
    );
  }
);

Alert.displayName = "Alert";

export { Alert };

