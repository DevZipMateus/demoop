
import * as React from "react"
import { cn } from "@/lib/utils"

// Safe tooltip implementation without any external dependencies
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
  
  return <>{children}</>;
};

const Tooltip = ({ children, open, defaultOpen, onOpenChange, ...props }: { 
  children: React.ReactNode; 
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  [key: string]: any;
}) => {
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
