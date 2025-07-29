
import * as React from "react"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

// Safe React hook wrapper that checks for React availability
const useSafeState = (initialValue: any) => {
  if (!React || typeof React.useState !== 'function') {
    console.warn('React hooks not available, returning fallback state');
    return [initialValue, () => {}];
  }
  return React.useState(initialValue);
};

// Context for dialog state management
const DialogContext = React.createContext<{
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
} | null>(null);

// Custom dialog implementation without Radix UI dependency
const Dialog = ({ children, open, onOpenChange, ...props }: { 
  children: React.ReactNode; 
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  [key: string]: any;
}) => {
  // Add safety check for React hooks availability
  if (!React || typeof React.useState !== 'function') {
    console.warn('React hooks not available in Dialog, returning children only');
    return <>{children}</>;
  }
  
  const [isOpen, setIsOpen] = useSafeState(open || false);
  
  const contextValue = {
    isOpen: open !== undefined ? open : isOpen,
    setIsOpen: (openState: boolean) => {
      setIsOpen(openState);
      onOpenChange?.(openState);
    }
  };
  
  return (
    <DialogContext.Provider value={contextValue}>
      <div {...props}>{children}</div>
    </DialogContext.Provider>
  );
};

const DialogTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ children, className, asChild, ...props }, ref) => {
  const context = React.useContext ? React.useContext(DialogContext) : null;
  
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    context?.setIsOpen(true);
    props.onClick?.(e);
  };

  return (
    <button ref={ref} className={className} onClick={handleClick} {...props}>
      {children}
    </button>
  );
});
DialogTrigger.displayName = "DialogTrigger";

const DialogPortal = ({ children }: { children: React.ReactNode }) => {
  // Add safety check for React hooks availability
  if (!React || typeof React.useState !== 'function') {
    console.warn('React hooks not available in DialogPortal, returning children only');
    return <>{children}</>;
  }
  
  return <>{children}</>;
};

const DialogClose = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ children, className, ...props }, ref) => {
  const context = React.useContext ? React.useContext(DialogContext) : null;
  
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    context?.setIsOpen(false);
    props.onClick?.(e);
  };

  return (
    <button ref={ref} className={className} onClick={handleClick} {...props}>
      {children}
    </button>
  );
});
DialogClose.displayName = "DialogClose";

const DialogOverlay = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
  />
));
DialogOverlay.displayName = "DialogOverlay";

const DialogContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  const context = React.useContext ? React.useContext(DialogContext) : null;
  
  if (!context?.isOpen) {
    return null;
  }

  return (
    <div>
      <DialogOverlay />
      <div
        ref={ref}
        className={cn(
          "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
          className
        )}
        {...props}
      >
        {children}
        <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </DialogClose>
      </div>
    </div>
  );
});
DialogContent.displayName = "DialogContent";

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    )}
    {...props}
  />
);
DialogHeader.displayName = "DialogHeader";

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
);
DialogFooter.displayName = "DialogFooter";

const DialogTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
));
DialogTitle.displayName = "DialogTitle";

const DialogDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
DialogDescription.displayName = "DialogDescription";

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};
