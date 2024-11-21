"use client"

import Image from "next/image";
import { useState } from "react"
import { BsHeart, BsPlayFill, BsThreeDots } from "react-icons/bs";
import cover from "@/public/covers/cover1.jpeg"
import Link from "next/link";
import Tooltipx from "./Tooltipx";
import DropdownPlayerOptions from "./DropdownPlayerOptions";
import { Button } from "@/components/ui/button";

export default function ThinCardBasic() {
    const [hover, setHover] = useState(false);

    function handleHoverOut() {
        setHover(false)
    }

    function handleHoverOver() {
        setHover(true)
    }

    return (
        <div
            onMouseOut={handleHoverOut}
            onMouseOver={handleHoverOver}
            className={`flex w-full gap-2 items-center p-2 transition-all ${hover ? "bg-zinc-900/5 dark:bg-zinc-100/10 shadow-sm" : "bg-transparent"} rounded-lg cursor-pointer`}
        >
            <div className="flex items-center justify-center w-10 font-medium text-base text-zinc-400">
                {hover ? <BsPlayFill className="text-2xl text-purple-700" /> : "1"}
            </div>
            <div className="flex justify-between w-full mr-4">
                <div className="flex gap-2">
                    <Image
                        src={cover}
                        alt={""}
                        width={45}
                        height={45}
                        className="rounded-md"
                    />
                    <div className="flex flex-col gap-0">
                        <Link
                            href={"currentTrack.id"}
                            className={`flex hover:underline whitespace-nowrap max-w-64 overflow-hidden text-base font-medium`}
                        >
                            Musica
                        </Link>
                        <Link href={`/artist/`} className="hover:underline text-xs text-zinc-600 dark:text-zinc-400 dark:hover:text-white hover:text-black">
                            Artista
                        </Link>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                <Tooltipx tooltip="More info">
                        <DropdownPlayerOptions song={"currentTrack.id"}>
                            <Button
                                variant="ghost"
                                className={`transition-all ${hover ? "visible" : "invisible"} hover:bg-transparent transition-all text-black dark:text-zinc-400 hover:text-zinc-600 dark:hover:text-white p-0 text-lg `}
                            >
                                <BsHeart />
                            </Button>
                        </DropdownPlayerOptions>
                    </Tooltipx>
                    <span className="hover:bg-transparent text-zinc-400 text-xs select-none">00:00</span>
                    <Tooltipx tooltip="More info">
                        <DropdownPlayerOptions song={"currentTrack.id"}>
                            <Button
                                variant="ghost"
                                className={`transition-all ${hover ? "visible" : "invisible"} hover:bg-transparent transition-all text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white p-0 text-lg `}
                            >
                                <BsThreeDots />
                            </Button>
                        </DropdownPlayerOptions>
                    </Tooltipx>
                </div>
            </div>

        </div>
    )
}