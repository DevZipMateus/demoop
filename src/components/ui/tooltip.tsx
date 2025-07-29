
import * as React from "react"
import { cn } from "@/lib/utils"

// Completely standalone tooltip implementation with zero external dependencies
const TooltipProvider = ({ children, ...props }: { 
  children: React.ReactNode; 
  [key: string]: any;
}) => {
  // Simple pass-through provider with no state management
  return <div {...props}>{children}</div>;
};

const Tooltip = ({ children, ...props }: { 
  children: React.ReactNode; 
  [key: string]: any;
}) => {
  // Simple container component
  return <div {...props}>{children}</div>;
};

const TooltipTrigger = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ children, className, ...props }, ref) => (
  <div ref={ref} className={className} {...props}>
    {children}
  </div>
));
TooltipTrigger.displayName = "TooltipTrigger";

const TooltipContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
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
