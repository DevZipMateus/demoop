
import * as React from "react"
import { cn } from "@/lib/utils"

// Simple fallback tooltip implementation
const FallbackTooltipProvider = ({ 
  children, 
  delayDuration,
  ...props 
}: { 
  children: React.ReactNode;
  delayDuration?: number;
  [key: string]: any;
}) => {
  return <>{children}</>;
};

const FallbackTooltip = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

const FallbackTooltipTrigger = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { asChild?: boolean }
>(({ children, asChild, ...props }, ref) => (
  <div ref={ref} {...props}>
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
    hidden?: boolean;
  }
>(({ className, children, sideOffset, side, align, hidden, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md",
      hidden && "hidden",
      className
    )}
    {...props}
  >
    {children}
  </div>
));
FallbackTooltipContent.displayName = "FallbackTooltipContent";

// Check if we can safely use Radix UI
const canUseRadixUI = () => {
  try {
    // Check if React is available and working
    if (!React || typeof React.useState !== 'function') {
      return false;
    }
    
    // Check if we can access Radix UI without errors
    const RadixTooltip = require("@radix-ui/react-tooltip");
    return RadixTooltip && RadixTooltip.Provider && RadixTooltip.Root;
  } catch (error) {
    console.log("Cannot use Radix UI tooltip, using fallbacks:", error);
    return false;
  }
};

// Initialize components based on availability
let TooltipProvider: React.ComponentType<any>;
let Tooltip: React.ComponentType<any>;
let TooltipTrigger: React.ComponentType<any>;
let TooltipContent: React.ComponentType<any>;

if (canUseRadixUI()) {
  try {
    const RadixTooltip = require("@radix-ui/react-tooltip");
    
    const RadixTooltipProvider = ({ children, ...props }: React.ComponentProps<typeof RadixTooltip.Provider>) => {
      try {
        return (
          <RadixTooltip.Provider {...props}>
            {children}
          </RadixTooltip.Provider>
        );
      } catch (error) {
        console.error("Error in RadixTooltipProvider:", error);
        return <>{children}</>;
      }
    };

    const RadixTooltipContent = React.forwardRef<
      React.ElementRef<typeof RadixTooltip.Content>,
      React.ComponentPropsWithoutRef<typeof RadixTooltip.Content>
    >(({ className, sideOffset = 4, ...props }, ref) => (
      <RadixTooltip.Content
        ref={ref}
        sideOffset={sideOffset}
        className={cn(
          "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          className
        )}
        {...props}
      />
    ));
    RadixTooltipContent.displayName = RadixTooltip.Content.displayName;

    console.log("Using Radix UI tooltip components");
    TooltipProvider = RadixTooltipProvider;
    Tooltip = RadixTooltip.Root;
    TooltipTrigger = RadixTooltip.Trigger;
    TooltipContent = RadixTooltipContent;
  } catch (error) {
    console.error("Failed to initialize Radix UI components:", error);
    TooltipProvider = FallbackTooltipProvider;
    Tooltip = FallbackTooltip;
    TooltipTrigger = FallbackTooltipTrigger;
    TooltipContent = FallbackTooltipContent;
  }
} else {
  console.log("Using fallback tooltip components");
  TooltipProvider = FallbackTooltipProvider;
  Tooltip = FallbackTooltip;
  TooltipTrigger = FallbackTooltipTrigger;
  TooltipContent = FallbackTooltipContent;
}

export { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent };
