
import * as React from "react"
import { cn } from "@/lib/utils"

// Safe React hook wrapper that checks for React availability
const useSafeState = (initialValue: any) => {
  if (!React || typeof React.useState !== 'function') {
    console.warn('React hooks not available, returning fallback state');
    return [initialValue, () => {}];
  }
  return React.useState(initialValue);
};

const useSafeEffect = (effect: () => void | (() => void), deps?: React.DependencyList) => {
  if (!React || typeof React.useEffect !== 'function') {
    console.warn('React useEffect not available, skipping effect');
    return;
  }
  return React.useEffect(effect, deps);
};

// Context for tooltip state management
const TooltipContext = React.createContext<{
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
} | null>(null);

const TooltipProvider = ({ children, ...props }: { 
  children: React.ReactNode; 
  delayDuration?: number;
  skipDelayDuration?: number;
  disableHoverableContent?: boolean;
  [key: string]: any;
}) => {
  // Just render children without any state management to avoid hook issues
  return <div {...props}>{children}</div>;
};

const Tooltip = ({ children, ...props }: { 
  children: React.ReactNode; 
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  [key: string]: any;
}) => {
  const [isOpen, setIsOpen] = useSafeState(props.defaultOpen || false);
  
  const contextValue = {
    isOpen: props.open !== undefined ? props.open : isOpen,
    setIsOpen: (open: boolean) => {
      setIsOpen(open);
      props.onOpenChange?.(open);
    }
  };

  return (
    <TooltipContext.Provider value={contextValue}>
      <div {...props}>{children}</div>
    </TooltipContext.Provider>
  );
};

const TooltipTrigger = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { asChild?: boolean }
>(({ children, asChild, className, onMouseEnter, onMouseLeave, onClick, ...props }, ref) => {
  const context = React.useContext ? React.useContext(TooltipContext) : null;
  
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
      onClick={onClick}
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
>(({ className, children, side = "top", ...props }, ref) => {
  const context = React.useContext ? React.useContext(TooltipContext) : null;
  
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
        "absolute z-50 rounded-md border bg-white dark:bg-gray-800 px-3 py-1.5 text-sm shadow-md animate-in fade-in-0 zoom-in-95",
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
