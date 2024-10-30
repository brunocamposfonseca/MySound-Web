"use client"

import { ToggleTheme } from "@/components/ui/ToggleTheme";
import ArrowButton from "./ArrowButton";
import { DropUser } from "./DropUser";

export default function Navbar() {
    return(
        <nav className="flex grid-in-navbar justify-between items-center relative px-8 py-4 max-sm:justify-center">
            <div className="flex w-auto flex-row max-sm:hidden">
                <ArrowButton typeArrow />
                <ArrowButton />
            </div>
            <div className="flex gap-2 max-sm:justify-between max-sm:w-full">
                <DropUser />
                <ToggleTheme/>
            </div>
        </nav>
    )
}