"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useState } from "react";

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { TooltipTrigger } from "@radix-ui/react-tooltip";
import { Tooltip, TooltipContent, TooltipProvider } from "./tooltip";

export function ToggleTheme() {
  const { setTheme } = useTheme()

  const [newTheme, setNewTheme] = useState(false)

  function handleToggleTheme() {
    setNewTheme(!newTheme)

    if (newTheme == false) {
      setTheme("light")
    } else {
      setTheme("dark")
    }
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="link"
                size="icon"
                onClick={handleToggleTheme}
              >
                <Sun className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <Moon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
          </DropdownMenu>
        </TooltipTrigger>
        <TooltipContent>
          change theme
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
