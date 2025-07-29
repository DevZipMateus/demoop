
import * as React from "react"
import { cn } from "@/lib/utils"

// Simple fallback tooltip components
const FallbackTooltipProvider = ({ 
  children,
  delayDuration,
  ...props 
}: { 
  children: React.ReactNode;
  delayDuration?: number;
  [key: string]: any;
}) => {
  return <div {...props}>{children}</div>;
};

const FallbackTooltip = ({ children, ...props }: { children: React.ReactNode; [key: string]: any }) => {
  return <div {...props}>{children}</div>;
};

const FallbackTooltipTrigger = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { asChild?: boolean }
>(({ children, asChild, className, ...props }, ref) => (
  <div ref={ref} className={className} {...props}>
    {children}
  </div>
));
FallbackTooltipTrigger.displayName = "FallbackTooltipTrigger";

const FallbackTooltipContent = React.forwardRef<
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
      "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md opacity-0 pointer-events-none",
      className
    )}
    {...props}
  >
    {children}
  </div>
));
FallbackTooltipContent.displayName = "FallbackTooltipContent";

// Initialize with fallback components by default
export const TooltipProvider = FallbackTooltipProvider;
export const Tooltip = FallbackTooltip;
export const TooltipTrigger = FallbackTooltipTrigger;
export const TooltipContent = FallbackTooltipContent;
