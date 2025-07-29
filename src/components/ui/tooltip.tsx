
import * as React from "react"
import { cn } from "@/lib/utils"

interface TooltipContextType {
  open: boolean
  setOpen: (open: boolean) => void
  delayDuration: number
}

const TooltipContext = React.createContext<TooltipContextType | null>(null)

const TooltipProvider = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    delayDuration?: number
  }
>(({ children, delayDuration = 700, ...props }, ref) => {
  return (
    <div ref={ref} {...props}>
      {children}
    </div>
  )
})
TooltipProvider.displayName = "TooltipProvider"

const Tooltip = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    open?: boolean
    onOpenChange?: (open: boolean) => void
    delayDuration?: number
  }
>(({ children, open: controlledOpen, onOpenChange, delayDuration = 700, ...props }, ref) => {
  const [internalOpen, setInternalOpen] = React.useState(false)
  const open = controlledOpen ?? internalOpen
  const setOpen = onOpenChange ?? setInternalOpen
  
  const contextValue: TooltipContextType = {
    open,
    setOpen,
    delayDuration
  }

  return (
    <TooltipContext.Provider value={contextValue}>
      <div ref={ref} className="relative inline-block" {...props}>
        {children}
      </div>
    </TooltipContext.Provider>
  )
})
Tooltip.displayName = "Tooltip"

const TooltipTrigger = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ children, onMouseEnter, onMouseLeave, onFocus, onBlur, ...props }, ref) => {
  const context = React.useContext(TooltipContext)
  
  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    context?.setOpen(true)
    onMouseEnter?.(e)
  }
  
  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    context?.setOpen(false)
    onMouseLeave?.(e)
  }
  
  const handleFocus = (e: React.FocusEvent<HTMLDivElement>) => {
    context?.setOpen(true)
    onFocus?.(e)
  }
  
  const handleBlur = (e: React.FocusEvent<HTMLDivElement>) => {
    context?.setOpen(false)
    onBlur?.(e)
  }

  return (
    <div
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
      {...props}
    >
      {children}
    </div>
  )
})
TooltipTrigger.displayName = "TooltipTrigger"

const TooltipContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    side?: "top" | "right" | "bottom" | "left"
    align?: "start" | "center" | "end"
    sideOffset?: number
    hidden?: boolean
  }
>(({ 
  className, 
  side = "top", 
  align = "center", 
  sideOffset = 4, 
  hidden = false,
  children, 
  ...props 
}, ref) => {
  const context = React.useContext(TooltipContext)
  
  if (!context?.open || hidden) {
    return null
  }

  const sideClasses = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2", 
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2"
  }
  
  const alignClasses = {
    start: side === "top" || side === "bottom" ? "left-0 translate-x-0" : "top-0 translate-y-0",
    center: side === "top" || side === "bottom" ? "left-1/2 -translate-x-1/2" : "top-1/2 -translate-y-1/2", 
    end: side === "top" || side === "bottom" ? "right-0 translate-x-0" : "bottom-0 translate-y-0"
  }

  return (
    <div
      ref={ref}
      className={cn(
        "absolute z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95",
        sideClasses[side],
        align !== "center" && alignClasses[align],
        className
      )}
      style={{ marginTop: side === "bottom" ? sideOffset : undefined, marginBottom: side === "top" ? sideOffset : undefined, marginLeft: side === "right" ? sideOffset : undefined, marginRight: side === "left" ? sideOffset : undefined }}
      {...props}
    >
      {children}
    </div>
  )
})
TooltipContent.displayName = "TooltipContent"

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
