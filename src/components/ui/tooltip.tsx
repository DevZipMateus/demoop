
import * as React from "react"
import { cn } from "@/lib/utils"

// Completely standalone tooltip implementation without any Radix UI dependencies
interface TooltipContextValue {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const TooltipContext = React.createContext<TooltipContextValue | null>(null);

const TooltipProvider = ({ children, ...props }: { 
  children: React.ReactNode; 
  delayDuration?: number;
  skipDelayDuration?: number;
  disableHoverableContent?: boolean;
}) => {
  // Simple provider that just renders children without any complex state management
  return <div {...props}>{children}</div>;
};

const Tooltip = ({ children, open, defaultOpen = false, onOpenChange, ...props }: { 
  children: React.ReactNode; 
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}) => {
  const [isOpen, setIsOpen] = React.useState(defaultOpen);
  
  const contextValue: TooltipContextValue = {
    isOpen: open !== undefined ? open : isOpen,
    setIsOpen: (openState: boolean) => {
      setIsOpen(openState);
      onOpenChange?.(openState);
    }
  };

  return (
    <TooltipContext.Provider value={contextValue}>
      <div style={{ position: 'relative', display: 'inline-block' }} {...props}>
        {children}
      </div>
    </TooltipContext.Provider>
  );
};

const TooltipTrigger = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ children, className, onMouseEnter, onMouseLeave, ...props }, ref) => {
  const context = React.useContext(TooltipContext);
  
  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    context?.setIsOpen(true);
    onMouseEnter?.(e);
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    context?.setIsOpen(false);
    onMouseLeave?.(e);
  };

  return (
    <div 
      ref={ref} 
      className={className} 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </div>
  );
});
TooltipTrigger.displayName = "TooltipTrigger";

const TooltipContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { 
    side?: "top" | "right" | "bottom" | "left";
  }
>(({ className, children, side = "top", ...props }, ref) => {
  const context = React.useContext(TooltipContext);
  
  if (!context?.isOpen) {
    return null;
  }

  const sideClasses = {
    top: "bottom-full left-1/2 transform -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 transform -translate-x-1/2 mt-2",
    left: "right-full top-1/2 transform -translate-y-1/2 mr-2",
    right: "left-full top-1/2 transform -translate-y-1/2 ml-2"
  };

  return (
    <div
      ref={ref}
      className={cn(
        "absolute z-50 rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95",
        sideClasses[side],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});
TooltipContent.displayName = "TooltipContent";

export { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent };
