
import React from "react"
import { Button, ButtonProps, buttonVariants } from "./ui/button"
import { cn } from "@/lib/utils"
import { ReloadIcon } from "@radix-ui/react-icons"
import { useFormStatus } from "react-dom"

const FormSubmitButton = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, ...props }, ref) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { pending, data, method, action } = useFormStatus()
    return (
        <Button
            className={cn(buttonVariants({ variant, size, className }))}
            ref={ref}
            {...props}
            type="submit"
        >
            { pending ? 
                <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                : "Create Short URL"
            }
        </Button>
    )}
)

FormSubmitButton.displayName = "Button"

export { FormSubmitButton }