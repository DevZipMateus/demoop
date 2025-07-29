
import * as React from "react"
import { cn } from "@/lib/utils"

// Completely standalone tooltip implementation with zero external dependencies
const TooltipProvider = ({ children, delayDuration, skipDelayDuration, disableHoverableContent, ...props }: { 
  children: React.ReactNode; 
  delayDuration?: number;
  skipDelayDuration?: number;
  disableHoverableContent?: boolean;
  [key: string]: any;
}) => {
  // Add safety check for React hooks availability
  if (!React || typeof React.useState !== 'function') {
    console.warn('React hooks not available in TooltipProvider, returning children only');
    return <>{children}</>;
  }
  
  // Simple pass-through provider with no state management
  return <div {...props}>{children}</div>;
};

const Tooltip = ({ children, open, defaultOpen, onOpenChange, ...props }: { 
  children: React.ReactNode; 
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  [key: string]: any;
}) => {
  // Add safety check for React hooks availability
  if (!React || typeof React.useState !== 'function') {
    console.warn('React hooks not available in Tooltip, returning children only');
    return <>{children}</>;
  }
  
  // Simple container component
  return <div {...props}>{children}</div>;
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
    alignOffset?: number;
    avoidCollisions?: boolean;
    collisionBoundary?: Element | null | Array<Element | null>;
    collisionPadding?: number | Partial<Record<"top" | "right" | "bottom" | "left", number>>;
    arrowPadding?: number;
    sticky?: "partial" | "always";
    hideWhenDetached?: boolean;
  }
>(({ className, children, sideOffset, side, align, alignOffset, avoidCollisions, collisionBoundary, collisionPadding, arrowPadding, sticky, hideWhenDetached, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "hidden absolute z-50 rounded-md border bg-white dark:bg-gray-800 px-3 py-1.5 text-sm shadow-md",
      className
    )}
    {...props}
  >
    {children}
  </div>
));
TooltipContent.displayName = "TooltipContent";

export { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent };
