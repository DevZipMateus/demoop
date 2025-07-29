
import * as React from "react"
import { cn } from "@/lib/utils"

// Completely custom tooltip implementation without any Radix UI dependency
const TooltipProvider = ({ children, ...props }: { children: React.ReactNode; [key: string]: any }) => {
  return <>{children}</>;
};

const Tooltip = ({ children, ...props }: { children: React.ReactNode; [key: string]: any }) => {
  return <>{children}</>;
};

const TooltipTrigger = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { asChild?: boolean }
>(({ children, asChild, className, ...props }, ref) => (
  <div ref={ref} className={className} {...props}>
    {children}
  </div>
));
TooltipTrigger.displayName = "TooltipTrigger";

const TooltipContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { 
    sideOffset?: number;
    side?: "top" | "right" | "bottom" | "left";
    align?: "start" | "center" | "end";
  }
>(({ className, children, sideOffset, side, align, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "hidden", // Hide tooltip content by default since we're not implementing hover logic
      className
    )}
    {...props}
  >
    {children}
  </div>
));
TooltipContent.displayName = "TooltipContent";

export { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent };
