
import * as React from "react"
import { cn } from "@/lib/utils"

// Simple fallback tooltip implementation
const FallbackTooltipProvider = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

const FallbackTooltip = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

const FallbackTooltipTrigger = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>(({ children, ...props }, ref) => (
  <div ref={ref as any} {...props}>
    {children}
  </div>
));
FallbackTooltipTrigger.displayName = "FallbackTooltipTrigger";

const FallbackTooltipContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { sideOffset?: number }
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md",
      className
    )}
    {...props}
  >
    {children}
  </div>
));
FallbackTooltipContent.displayName = "FallbackTooltipContent";

// Safe component loader that handles React availability
const SafeTooltipComponents = () => {
  // Check if React is fully available
  const isReactAvailable = React && 
    React.useState && 
    React.useEffect && 
    React.createElement &&
    typeof React.useState === 'function';

  console.log("SafeTooltipComponents - React available:", isReactAvailable);

  if (!isReactAvailable) {
    console.log("Using fallback tooltip components");
    return {
      TooltipProvider: FallbackTooltipProvider,
      Tooltip: FallbackTooltip,
      TooltipTrigger: FallbackTooltipTrigger,
      TooltipContent: FallbackTooltipContent
    };
  }

  try {
    // Dynamically import Radix UI components only when React is available
    const TooltipPrimitive = require("@radix-ui/react-tooltip");
    
    const RadixTooltipProvider = ({ children, ...props }: React.ComponentProps<typeof TooltipPrimitive.Provider>) => {
      try {
        return (
          <TooltipPrimitive.Provider {...props}>
            {children}
          </TooltipPrimitive.Provider>
        );
      } catch (error) {
        console.error("Error in RadixTooltipProvider:", error);
        return <>{children}</>;
      }
    };

    const RadixTooltipContent = React.forwardRef<
      React.ElementRef<typeof TooltipPrimitive.Content>,
      React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
    >(({ className, sideOffset = 4, ...props }, ref) => (
      <TooltipPrimitive.Content
        ref={ref}
        sideOffset={sideOffset}
        className={cn(
          "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          className
        )}
        {...props}
      />
    ));
    RadixTooltipContent.displayName = TooltipPrimitive.Content.displayName;

    console.log("Using Radix UI tooltip components");
    return {
      TooltipProvider: RadixTooltipProvider,
      Tooltip: TooltipPrimitive.Root,
      TooltipTrigger: TooltipPrimitive.Trigger,
      TooltipContent: RadixTooltipContent
    };
  } catch (error) {
    console.error("Failed to load Radix UI components, using fallbacks:", error);
    return {
      TooltipProvider: FallbackTooltipProvider,
      Tooltip: FallbackTooltip,
      TooltipTrigger: FallbackTooltipTrigger,
      TooltipContent: FallbackTooltipContent
    };
  }
};

// Initialize components
const components = SafeTooltipComponents();

export const TooltipProvider = components.TooltipProvider;
export const Tooltip = components.Tooltip;
export const TooltipTrigger = components.TooltipTrigger;
export const TooltipContent = components.TooltipContent;
