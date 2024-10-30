import Link from "next/link"
import { ElementType } from "react"
import Tooltipx from "./Tooltipx"
import { usePathname } from "next/navigation"

interface LinkSidebarProps {
    resizable: boolean
    name: string
    url: string
    icon: ElementType
    tooltip: string
}

export default function LinkSidebar(props: LinkSidebarProps) {
    const pathname = usePathname()
    if (props.resizable == false) {
        return (
            <Link href={props.url} className={`flex flex-row gap-4 items-center py-3 ${pathname == props.url ? "text-black dark:text-white" : "text-zinc-500"} transition-all hover:text-black dark:hover:text-white `}>
                <props.icon className="h-5 w-5" />
                <span className="font-medium text-sm select-none">
                    {props.name}
                </span>
            </Link>
        )
    } else {
        return (
            <Tooltipx tooltip={props.tooltip}>
                <Link href={props.url} className={`relative transitio flex items-center justify-center py-3 ${pathname == props.url ? "text-black dark:text-white" : "text-zinc-500"} transition-all hover:text-black dark:hover:text-white`}>
                    <props.icon className="h-5 w-5" />
                </Link>
            </Tooltipx>
        )
    }
}