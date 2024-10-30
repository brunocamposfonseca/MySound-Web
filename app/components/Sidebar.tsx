"use client";

import { BiSolidChevronLeft, BiSolidChevronRight } from "react-icons/bi";
import HeadingSidebar from "./HeadingSidebar";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import GroupLinksSidebar from "./GroupLinksSidebar";

export default function Sidebar() {
    const [resizable, setResizable] = useState(false);

    function handleResizable() {
        setResizable(!resizable);
    }

    return (
        <aside className={`${resizable ? "w-24" : "w-64"} flex grid-in-sidebar min-h-0 h-full flex-col px-8 py-6 transition-all border-r relative bg-zinc-50 dark:bg-zinc-950`}>
            {resizable ? (
                <div className="flex absolute -right-10 top-12 z-10">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger>
                                <Button onClick={handleResizable} className="flex transition-all relative bg-transparent border text-lg p-0 text-black dark:text-white rounded-t-none rounded-l-none rounded-r rounded-b h-10 w-10 hover:backdrop-blur-sm hover:bg-white/30 dark:bg-black/30">
                                    <BiSolidChevronRight />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent className="flex absolute left-7 top-2" align="center">Increase</TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>

            ) : (
                <div className="flex absolute -right-10 top-12 z-10">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger>
                                <Button onClick={handleResizable} className="flex relative bg-transparent border text-lg p-0 text-black dark:text-white rounded-t-none rounded-l-none rounded-r rounded-b h-10 w-10 hover:backdrop-blur-sm hover:bg-white/30 dark:bg-black/30">
                                    <BiSolidChevronLeft />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent className="flex absolute left-7 top-2" align="center">Decrease</TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
            )}
            <div>
                <HeadingSidebar resizable={resizable} />
            </div>
            <section className="h-full">
                <GroupLinksSidebar resizable={resizable} />
            </section>
        </aside>
    );
}
