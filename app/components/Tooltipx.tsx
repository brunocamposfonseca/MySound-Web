import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { ReactNode } from "react"

interface TooltipProps {
    tooltip: string
    children: ReactNode
}

export default function Tooltipx({ tooltip, children }: TooltipProps) {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>
                    {children}
                </TooltipTrigger>
                <TooltipContent>
                    {tooltip}
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}
