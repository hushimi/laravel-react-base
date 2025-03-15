import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
    return (
        <input
            type={type}
            className={cn(
                // layout and sizing
                "flex h-9 w-full px-3 py-1",
                // Typography
                "md:text-sm text-base placeholder:text-muted-foreground",
                // Appearance
                "rounded-md border border-input bg-transparent shadow-sm transition-colors",
                // Focus styles
                "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
                // Disabled State
                "disabled:cursor-not-allowed disabled:opacity-50",
                // File Input Specific
                "file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground",
                className
            )}
            ref={ref}
            {...props} />
    );
})
Input.displayName = "Input"

export { Input }
