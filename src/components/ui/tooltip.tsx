
import * as React from "react"
import { cn } from "@/lib/utils"

// Completely standalone tooltip implementation
interface TooltipContextValue {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const TooltipContext = React.createContext<TooltipContextValue | null>(null);

const TooltipProvider = ({ children }: { children: React.ReactNode }) => {
  // Simple provider that just renders children without any state management
  return <>{children}</>;
};

const Tooltip = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  
  const contextValue: TooltipContextValue = {
    isOpen,
    setIsOpen
  };

  return (
    <TooltipContext.Provider value={contextValue}>
      <div className="relative inline-block">
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
        "absolute z-50 rounded-md border bg-white px-3 py-1.5 text-sm shadow-md",
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
