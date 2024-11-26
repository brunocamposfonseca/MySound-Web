"use client";

import { GoSidebarExpand, GoSidebarCollapse } from "react-icons/go";
import HeadingSidebar from "./HeadingSidebar";
import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import GroupLinksSidebar from "./GroupLinksSidebar";


export default function Sidebar() {
    const resizableStorage = useMemo(() => {
        if (typeof window !== "undefined" && typeof localStorage !== "undefined") {
          return localStorage.getItem("resizable") === "true";
        }
        return true;
      }, []);
      
      const [resizable, setResizable] = useState(resizableStorage);
      
      useEffect(() => {
        const resizableTimeout = setTimeout(() => {
          if (typeof localStorage !== "undefined") {
            localStorage.setItem("resizable", String(resizable));
          }
        }, 500);
      
        return () => clearTimeout(resizableTimeout);
      }, [resizable]);

    function handleResizable() {
        setResizable(!resizable);
    }

    return (
        <aside className={`${!resizable ? "w-64" : "w-24"} flex grid-in-sidebar min-h-0 h-full flex-col px-8 py-6 transition-all border-r relative bg-zinc-50 dark:bg-zinc-950`}>
            {resizable ? (
                <div className="flex absolute -right-10 top-12 z-10">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger>
                                <Button onClick={handleResizable} className="flex transition-all relative bg-transparent border text-lg p-0 text-black dark:text-white rounded-t-none rounded-l-none rounded-r rounded-b h-10 w-10 hover:backdrop-blur-sm hover:bg-white/30 dark:bg-black/30">
                                    <GoSidebarCollapse />
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
                                    <GoSidebarExpand />
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
